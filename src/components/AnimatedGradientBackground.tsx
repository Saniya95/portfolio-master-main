// src/components/AnimatedGradientBackground.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AnimatedGradientBackground({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "100% 100%", "0% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `linear-gradient(270deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)), hsl(var(--gradient-start)))`,
          backgroundSize: "400% 400%",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
