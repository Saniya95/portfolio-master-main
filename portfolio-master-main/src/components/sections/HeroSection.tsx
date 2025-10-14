// src/components/sections/HeroSection.tsx
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedGradientBackground } from '@/components/AnimatedGradientBackground';
import { ChevronsDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const taglines = [
  "Full-Stack Developer",
  "Full‑Stack to DevOps",
  "Solving Problems", 
  "Building Products"
];

const TYPING_SPEED = 100;
const ERASING_SPEED = 60;
const PAUSE_DURATION = 2000;
const SHORT_PAUSE_DURATION = 500;

export function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedTagline, setDisplayedTagline] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const currentFullTagline = taglines[taglineIndex];

    if (isTyping) {
      if (displayedTagline.length < currentFullTagline.length) {
        timeoutId = setTimeout(() => {
          setDisplayedTagline(currentFullTagline.substring(0, displayedTagline.length + 1));
        }, TYPING_SPEED);
      } else {
        // Finished typing
        timeoutId = setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      // Erasing
      if (displayedTagline.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedTagline(displayedTagline.substring(0, displayedTagline.length - 1));
        }, ERASING_SPEED);
      } else {
        // Finished erasing
        setIsTyping(true);
        setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        timeoutId = setTimeout(() => {}, SHORT_PAUSE_DURATION); 
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedTagline, isTyping, taglineIndex]);

  // Cursor blinking effect
   useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);


  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* full-screen animated gradient */}
      <AnimatedGradientBackground className="absolute inset-0" />

      {/* content wrapper */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* your name with neon glow */}
        <motion.h1
          className="neon-text block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Saniya Ahmed
        </motion.h1>

        {/* tagline */}
        <motion.p
          className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl text-muted-foreground min-h-[3em] md:min-h-[2.2em]" // Added min-height to prevent layout shifts
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {displayedTagline}
           <motion.span
            animate={{ opacity: showCursor ? [0, 1, 0] : 0 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear", times: [0, 0.5, 1] }}
            className="inline-block w-[3px] h-[1em] bg-primary ml-1"
            style={{ verticalAlign: 'text-bottom' }}
          />
        </motion.p>

        {/* primary CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          {/* View Work */}
          <Button
            size="lg"
            asChild
            className="
              bg-primary 
              text-primary-foreground 
              rounded-full 
              px-8 py-6 
              text-lg 
              shadow-lg 
              hover:bg-primary/90 
              transform hover:scale-105 
              transition
            "
          >
            <Link href="#projects">View Work</Link>
          </Button>

          {/* Let's Chat */}
          <Button
            variant="outline"
            size="lg"
            asChild
            className="
              border border-primary 
              text-primary 
              rounded-full 
              px-8 py-6 
              text-lg 
              shadow-lg 
              hover:bg-primary/10 
              transform hover:scale-105 
              transition
            "
          >
            <Link href="#contact">Let's Chat</Link>
          </Button>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      >
        <Link href="#about" aria-label="Scroll to About section">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronsDown className="h-10 w-10" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
