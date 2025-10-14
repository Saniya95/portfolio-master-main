// src/components/sections/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  CalendarDays,
  Target,
  MapPin,
  DownloadCloud,
} from "lucide-react";
import type { ExperienceItem } from "@/types";
import Link from "next/link";

const experiences: ExperienceItem[] = [
  {
    id: "expAIIntegratorz",
    role: "MERN & Next.js Developer Intern",
    company: "AI Integratorz @ Indore",
    dates: "July 2025 – Present",
    location: "Indore",
    descriptionPoints: [
      "Building and refining full‑stack product features using the MERN stack with a focus on performance and clean architecture.",
      "Integrated secure authentication workflows (JWT + session handling) and optimized protected API routes in Express/Next.js.",
      "Implemented modular REST APIs and improved database query efficiency with indexed MongoDB collections.",
      "Collaborated on UI/UX iterations in Next.js, leveraging dynamic routing, server components, and incremental static regeneration (ISR).",
      "Set up and maintained deployment pipelines and environment configuration across development and production stages.",
      "Actively participated in code reviews, improving code quality and consistency via linting and reusable component patterns.",
    ],
    tags: [
      "MERN",
      "MongoDB",
      "Express.js",
      "React.js",
      "Next.js",
      "Node.js",
      "API Design",
      "Auth",
      "Performance"
    ],
    certificateLink: "/_Saniya%20Ahmed%20Letter.pdf", // Updated to new uploaded certificate file
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text">
          Key Experiences
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto space-y-4 sm:space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={exp.id}
                className="bg-card/70 backdrop-blur-sm rounded-xl shadow-xl border border-border/50 hover:border-primary transition-colors duration-300 overflow-hidden"
              >
                <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-xl group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                    <div className="flex-grow mb-2 sm:mb-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {exp.companyLink ? (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded px-0.5 py-px"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center shrink-0 mt-1 sm:mt-0 sm:mr-4">
                      <CalendarDays className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                      {exp.dates}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 border-t border-border/30">
                  {exp.location && (
                    <p className="text-xs text-muted-foreground mb-3 flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1.5 opacity-70" />{" "}
                      {exp.location}
                    </p>
                  )}
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 text-sm sm:text-base">
                    {exp.descriptionPoints.map((point, i) => (
                      <li key={i} className="flex">
                        <Target className="h-4 w-4 mr-2 mt-1 text-primary/70 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {exp.certificateLink && (
                    <div className="mt-5">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary text-primary hover:bg-primary/10 hover:text-primary group"
                      >
                        <Link
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <DownloadCloud className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                          Download Certificate
                        </Link>
                      </Button>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        {experiences.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-8 text-lg"
          >
            More experiences coming soon!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
