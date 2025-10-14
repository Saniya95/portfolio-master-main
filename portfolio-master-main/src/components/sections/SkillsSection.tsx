// src/components/sections/SkillsSection.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Tailwind CSS",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Postman",
      "Figma / Canva",
      "Firebase",
      "Render",
      "Netlify",
      "Vercel",
    ],
  },
  {
    title: "Coursework & Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems (SQL, PostgreSQL)",
      "Computer Networks",
      "Software Engineering Principles",
      "REST API Design",
      "Authentication (JWT, OAuth)",
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="min-h-[240px] flex flex-col" // Increased min-height
            >
              <Card className="h-full bg-card/70 backdrop-blur-sm shadow-xl border border-border/50 hover:border-primary transition-colors duration-300 flex flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-4 sm:p-6 flex flex-wrap gap-2 content-start">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-sm px-3 py-1" // Increased font size and padding
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
