// src/components/SkillMarquee.tsx
"use client";

import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillMarqueeProps {
  skills: string[];
  className?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline" | null | undefined;
  badgeClassName?: string;
  animationDuration?: string; // e.g., "30s", "60s"
}

export function SkillMarquee({ 
  skills, 
  className, 
  badgeVariant = "secondary", 
  badgeClassName,
  animationDuration = "40s" // Default duration
}: SkillMarqueeProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  // Duplicate skills for seamless looping
  const displayedSkills = [...skills, ...skills];

  const marqueeContentStyle = {
    animationDuration: animationDuration,
  };

  return (
    <div className={`marquee-container ${className || ''}`}>
      <div 
        className="marquee-content marquee-content-paused"
        style={marqueeContentStyle}
      >
        {displayedSkills.map((skill, index) => (
          <Badge
            key={`${skill}-${index}`} // Ensure unique keys for duplicated items
            variant={badgeVariant}
            className={`mx-2 my-1 whitespace-nowrap ${badgeClassName || 'bg-primary/10 text-primary border-primary/20 text-sm px-3 py-1'}`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
