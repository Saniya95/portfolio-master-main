// src/components/SkillBubble.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SkillBubbleProps {
  name: string;
  Icon?: LucideIcon; // Optional: if you want to add icons later
  level?: string; // e.g., "Expert", "Advanced"
  className?: string;
}

export function SkillBubble({ name, Icon, level, className }: SkillBubbleProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px hsl(var(--primary))" }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-colors duration-300 cursor-pointer min-w-[120px] text-center shadow-lg">
        <CardHeader className="p-4">
          {Icon && <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />}
          <CardTitle className="text-base sm:text-lg font-medium text-card-foreground">{name}</CardTitle>
        </CardHeader>
        {level && (
          <CardContent className="p-2 pt-0">
            <p className="text-xs text-muted-foreground">{level}</p>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}
