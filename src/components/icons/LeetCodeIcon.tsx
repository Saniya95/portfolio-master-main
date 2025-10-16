// src/components/icons/LeetCodeIcon.tsx
import React from 'react';

export const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"                   // match the original artboard
    preserveAspectRatio="xMidYMid meet"   // uniform scaling
    fill="currentColor"                   // inherit Tailwind text color
    {...props}                            // allow className & other props
  >
    <title>LeetCode</title>
    <path d="M2.25 0a.75.75 0 0 0 0 1.5h19.5a.75.75 0 0 0 0-1.5H2.25zm15.064 9.21a.75.75 0 0 0-.768.615l-1.248 8.811a.75.75 0 0 0 .636.849l.13.017h1.98a.75.75 0 0 0 .748-.657l1.248-8.81a.75.75 0 0 0-.616-.85l-.13-.017h-1.24zM9.732 5.28a.75.75 0 0 0-1.06 0L5.22 8.734a.75.75 0 0 0 0 1.06l7.776 7.777a.75.75 0 1 0 1.06-1.061L9.732 5.28zm.71 11.121a.75.75 0 0 0 0 1.061l2.446 2.446a.75.75 0 1 0 1.06-1.06l-2.445-2.447a.75.75 0 0 0-1.061 0z"/>
  </svg>
);
