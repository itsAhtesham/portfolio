"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SplitText } from "@/components/animations/SplitText";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { fadeInUp, easings } from "@/lib/animations";
import { ArrowDown } from "lucide-react";
import { socialIconMap } from "@/components/icons";

const Scene = dynamic(() => import("@/components/3d/Scene").then((mod) => mod.Scene), {
  ssr: false,
});

export function Hero() {
  const firstName = profile.name.split(" ")[0];
  const restWords = profile.name.split(" ").slice(1);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Small tag */}
        <motion.p
          className="font-mono text-sm md:text-base text-foreground-muted mb-6 md:mb-8 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easings.smooth }}
        >
          {profile.title}
        </motion.p>

        {/* Massive name */}
        <h1 className="text-fluid-hero font-display font-bold text-foreground mb-6 md:mb-8">
          <SplitText text={firstName} delay={0.3} />
          <br />
          <span className="text-foreground-muted font-light">
            {restWords.map((word, i) => (
              <span key={i} className="inline-block whitespace-nowrap">
                <SplitText text={word} delay={0.6} />
                {i < restWords.length - 1 && "\u00A0"}
              </span>
            ))}
          </span>
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-foreground-muted max-w-2xl mx-auto mb-10 md:mb-14 font-light"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: easings.smooth }}
        >
          <a
            href="#projects"
            className="magnetic-area px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium text-base hover:opacity-90 transition-opacity glow-on-hover"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="magnetic-area px-8 py-4 border border-border rounded-full font-medium text-base hover:border-accent hover:text-accent transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            if (!Icon) return null;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border/50 text-foreground-muted hover:text-accent hover:border-accent transition-all duration-300"
                aria-label={link.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-foreground-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
