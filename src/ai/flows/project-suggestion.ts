'use server';
/**
 * @fileOverview An AI agent that suggests a project from the portfolio based on user interests.
 *
 * - suggestProject - A function that handles the project suggestion process.
 * - SuggestProjectInput - The input type for the suggestProject function.
 * - SuggestProjectOutput - The return type for the suggestProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProjectInputSchema = z.object({
  userInterest: z
    .string()
    .describe('A short text prompt describing the user\'s interests.'),
  projectTitles: z.array(z.string()).describe('The titles of the projects in the portfolio.'),
});
export type SuggestProjectInput = z.infer<typeof SuggestProjectInputSchema>;

const SuggestProjectOutputSchema = z.object({
  suggestedProject: z
    .string()
    .describe('The title of the project that is most relevant to the user\'s interests.'),
  reason: z.string().describe('The reason why this project was suggested.'),
});
export type SuggestProjectOutput = z.infer<typeof SuggestProjectOutputSchema>;

export async function suggestProject(input: SuggestProjectInput): Promise<SuggestProjectOutput> {
  return suggestProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProjectPrompt',
  input: {schema: SuggestProjectInputSchema},
  output: {schema: SuggestProjectOutputSchema},
  prompt: `You are an expert portfolio assistant. You will suggest a project from the portfolio that is most relevant to the user's interests.

User Interest: {{{userInterest}}}

Available Projects: {{#each projectTitles}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Based on the user's interest, suggest a project from the available projects and explain why it is relevant to the user's interest.`,
});

const suggestProjectFlow = ai.defineFlow(
  {
    name: 'suggestProjectFlow',
    inputSchema: SuggestProjectInputSchema,
    outputSchema: SuggestProjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
