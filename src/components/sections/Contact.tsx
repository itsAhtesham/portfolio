"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Toaster, toast } from "sonner";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { socialLinks } from "@/data/social";
import { LeetCodeIcon } from "@/components/icons";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
  Leetcode: LeetCodeIcon,
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <Toaster position="top-right" richColors />

      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Massive CTA */}
        <motion.h2
          className="text-fluid-section font-display font-bold text-center mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let&apos;s Work
          <br />
          Together
        </motion.h2>

        <motion.p
          className="text-foreground-muted text-center max-w-lg mx-auto mb-16 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Have a project in mind? I&apos;m always open to discussing new ideas
          and opportunities.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto space-y-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Name */}
          <motion.div variants={staggerItem} className="relative">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent text-lg md:text-xl pb-4 outline-none transition-colors duration-300 placeholder:text-foreground-muted/50"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-2 font-mono">
                {errors.name.message}
              </p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div variants={staggerItem} className="relative">
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent text-lg md:text-xl pb-4 outline-none transition-colors duration-300 placeholder:text-foreground-muted/50"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-2 font-mono">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={staggerItem} className="relative">
            <textarea
              id="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent text-lg md:text-xl pb-4 outline-none transition-colors duration-300 resize-none placeholder:text-foreground-muted/50"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-2 font-mono">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          {/* Submit */}
          <motion.div variants={staggerItem}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-accent text-accent-foreground rounded-full text-lg font-medium glow-on-hover magnetic-area disabled:opacity-50 transition-opacity flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <span className="font-mono">Sending...</span>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-border hover:border-accent hover:text-accent magnetic-area transition-all duration-300 group"
                aria-label={link.name}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
}
