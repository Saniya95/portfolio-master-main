// src/components/sections/AboutSection.tsx
"use client";

import Image from "next/image"; // still used elsewhere if needed later
import { ProfileImage } from "@/components/ProfileImage";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Resume Thumbnail & Download */}
          <motion.div
            className="md:col-span-1 flex flex-col items-center"
            variants={itemVariants}
          >
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 group"
            >
              <ProfileImage
                src="/Saniya.jpg"
                alt="Saniya Ahmed's Thumbnail"
                size={200}
                className="group-hover:scale-105"
              />
            </Link>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary group"
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div
            className="md:col-span-2 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-foreground/90"
            variants={textItemVariants}
          >
            <p>
              I’m Saniya Ahmed, a final-year B.Tech student and a self-driven
              full-stack developer passionate about turning practical ideas into
              powerful digital products. I specialize in the MERN stack and have
              built and deployed complete web platforms from scratch—managing
              everything from UI/UX to backend logic and cloud deployment.
            </p>
            <p>
              My key project, <strong>Scratch</strong> – a full‑stack e‑commerce
              platform built with <strong>MongoDB, Express.js, Next.js (React), and Node.js</strong>.
              It features secure authentication (including Firebase OTP verification),
              dynamic product & inventory management, image uploads via Cloudinary,
              a responsive cart and checkout flow, and seamless payments through Razorpay.
              The stack is deployed on Vercel (frontend) and Render (backend/services).
              Every layer—from database schema and API design to authentication,
              payments, and deployment automation—has been architected and maintained solely by me.
            </p>
            <p>
              I enjoy solving real-world problems through code—whether it’s
              creating intuitive user flows, designing scalable APIs, or
              optimizing database performance. I thrive when I get to build
              full-stack systems that are useful, efficient, and ready for real
              users.
            </p>
            <p>
              Currently, I’m diving deeper into DevOps, CI/CD pipelines, and
              cloud services like Firebase and Render to enhance my deployment
              and scalability skills. I believe in clean, maintainable code and
              continuous learning through hands-on projects.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
