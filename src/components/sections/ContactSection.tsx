// src/components/sections/ContactSection.tsx
"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [state, handleSubmit] = useForm("myzjvpvd");

  return (
    <section
      id="contact"
      className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
            Get In Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Feel
            free to reach out!
          </p>
        </div>

        <Card className="max-w-full sm:max-w-2xl mx-auto bg-card/80 backdrop-blur-sm shadow-xl border border-border/50">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.succeeded ? (
              <p className="text-green-600 text-center">
                Thanks for your message! I'll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-foreground/90">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="mt-1 focus:ring-primary focus:border-primary"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground/90">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="mt-1 focus:ring-primary focus:border-primary"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-primary text-gray-900 font-semibold horizontal-center px-6 py-2 rounded-md hover:bg-primary/90 transition"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
