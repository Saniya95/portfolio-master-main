// src/components/sections/AiSuggestionSection.tsx
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, AlertCircle } from 'lucide-react';
import { getAiProjectSuggestion } from '@/app/actions';
import type { SuggestProjectOutput } from '@/ai/flows/project-suggestion';
import { projectTitles } from './ProjectsSection'; // Import project titles
import { motion } from 'framer-motion';
import Link from 'next/link';

export function AiSuggestionSection() {
  const [userInterest, setUserInterest] = useState('');
  const [suggestion, setSuggestion] = useState<SuggestProjectOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInterest.trim()) {
      setError("Please describe your interest.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestion(null);

    const result = await getAiProjectSuggestion({ userInterest, projectTitles });
    
    if ('error' in result) {
      setError(result.error);
    } else {
      setSuggestion(result);
    }
    setIsLoading(false);
  };

  return (
    <section id="ai-suggestion" className="container mx-auto px-4 sm:px-6 lg:px-8 bg-background/30 py-16 md:py-24 rounded-xl my-12 shadow-xl border border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12 md:mb-16">
          <Wand2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Need a Project Idea?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell me your interests, and I'll suggest a relevant project from my portfolio!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm shadow-lg">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Get a Project Suggestion</CardTitle>
              <CardDescription>
                Enter a few keywords about what you're looking for (e.g., "interactive UIs", "data visualization", "real-time apps").
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="e.g., frontend development with cool animations"
                value={userInterest}
                onChange={(e) => setUserInterest(e.target.value)}
                rows={3}
                className="focus:ring-primary focus:border-primary"
                aria-label="Your interest"
              />
              {error && (
                <p className="text-sm text-destructive flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1.5" /> {error}
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Suggesting...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Suggest Project
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {suggestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8"
          >
            <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm shadow-lg border-primary">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Suggestion for You!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{suggestion.suggestedProject}</h3>
                <p className="text-muted-foreground">{suggestion.reason}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary p-0">
                  <Link href="#projects">View in Projects Gallery &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
