// src/components/sections/BlogSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Assuming blog posts might link out or to internal pages

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Placeholder data for blog posts
const placeholderPosts = [
  {
    id: 1,
    title: "The Future of IoT: Trends to Watch",
    date: "October 26, 2024",
    excerpt: "Exploring the evolving landscape of Internet of Things, from edge computing to AI integration...",
    link: "#", // Placeholder link
    image: "https://placehold.co/600x400.png",
    dataAiHint: "technology abstract"
  },
  {
    id: 2,
    title: "Building Scalable Web Apps with Next.js and Firebase",
    date: "November 10, 2024",
    excerpt: "A deep dive into leveraging Next.js for frontend performance and Firebase for backend scalability...",
    link: "#", // Placeholder link
    image: "https://placehold.co/600x400.png",
    dataAiHint: "code screen"
  },
];


export function BlogSection() {
  return (
    <section id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          Latest Insights
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {placeholderPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              variants={itemVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-border/50 hover:border-primary transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl"
            >
              {/* Placeholder for Image if desired */}
              {/* <img src={post.image} alt={post.title} className="rounded-lg mb-4 w-full h-48 object-cover" /> */}
              <h3 className="text-2xl font-semibold text-primary mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
              <p className="text-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
              <Button variant="link" asChild className="text-primary p-0 hover:text-primary/80">
                <Link href={post.link}>Read More &rarr;</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {placeholderPosts.length === 0 && (
          <div className="text-center text-muted-foreground mt-8">
            <p>Blog posts coming soon! Stay tuned for insights on tech, development, and more.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
