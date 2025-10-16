import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
// import {nextPlugin} from '@genkit-ai/next/plugin'; // Import the nextPlugin from the correct subpath // Temporarily commented out due to "Module not found"

export const ai = genkit({
  plugins: [
    googleAI(),
    // nextPlugin() // Add the nextPlugin instance // Temporarily commented out
  ],
  model: 'googleai/gemini-2.0-flash',
});
