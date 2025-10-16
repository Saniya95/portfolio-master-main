// src/components/sections/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const USER_PROJECTS: Project[] = [
  // 1. E-commerce first
  {
    id: "proj-scratch",
    title: "Scratch – Full-Stack E-Commerce Platform",
    description:
      "Full-featured e‑commerce with secure auth, product management, dynamic cart, and Razorpay payments for a smooth end‑to‑end shopping experience.",
    image: "/scratch.png",
    dataAiHint:
      "full-stack e-commerce platform with payments and cloud image uploads",
    tags: [
      "MERN",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Tailwind CSS",
      "Razorpay",
      "Cloudinary",
    ],
    category: ["Full-Stack", "Web"],
  liveLink: "https://e-commerce-frontend-omega-seven.vercel.app/",
  repoLink: "https://github.com/Saniya95/e-commerce-frontend/tree/integrate-main",
  },
  // 2. RentX second
  {
    id: "proj-rentx",
    title: "RentX",
    description:
      "A modern full-stack rental platform to rent anything—from bikes and electronics to accessories—featuring Firebase OTP verification, Razorpay integration, Cloudinary uploads, and a dynamic MERN + Next.js architecture.",
    image: "/rentx.png",
    dataAiHint: "multi-category rental platform for products and accessories",
    tags: [
      "MERN",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Firebase OTP",
      "Cloudinary",
      "Razorpay",
      "Render",
    ],
    category: ["Full-Stack", "Web"],
    liveLink:
      "https://rentx-git-master-nikhil-sahus-projects-0bc03434.vercel.app?_vercel_share=2F8wTeRZ42rFIqFyVCkH21jlUt4dSu2w",
  repoLink: "https://github.com/Saniya95/rentx-master",
  },
  // 3. JBM Mart Backend (replacing former tripbozo slot)
  {
    id: "proj-jbmmart",
    title: "JBM Mart – Multi-Role Commerce Backend",
    description:
      "Backend-first platform enabling multi-role (admin, supplier, retailer, logistics) workflows: secure mobile + password auth (OTP signup/login), rotating refresh/access tokens, cart + stock clamping, checkout with atomic stock decrement & order persistence, address management, session listing/revocation, and extensible roadmap for payments, metrics & delivery operations.",
    image: "/jbmm.png", // TODO: replace with a dedicated jbmmart image when available
    dataAiHint: "multi-role commerce backend platform with auth, cart, orders, sessions",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OTP Auth",
      "Cart Service",
      "Order System",
      "Role-Based",
      "REST API",
      "Backend"
    ],
    category: ["Full-Stack", "Web"],
    // liveLink intentionally omitted for now per user request
    repoLink: "https://github.com/Saniya95/jbmmart",
  },
];

const filterCategories = ["All", "Web", "Full-Stack", "Mobile"];

// Export just the titles for reuse (e.g., AI suggestion prompt)
export const projectTitles = USER_PROJECTS.map((p) => p.title);

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? USER_PROJECTS
      : USER_PROJECTS.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          My Work
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-sm sm:text-base transition-all duration-300 ${activeFilter === category ? "bg-primary text-primary-foreground shadow-lg" : "border-primary text-primary hover:bg-primary/10"}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-8 text-lg"
          >
            No projects found for this category. More coming soon!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
