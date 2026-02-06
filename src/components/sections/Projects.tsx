"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer, staggerItem, easings } from "@/lib/animations";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="glass-card rounded-2xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden group">
      {/* Gradient accent background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight">
            {project.title}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-8">
          {project.longDescription}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <CountUp
                value={metric.value}
                className="text-2xl md:text-3xl font-display font-bold text-accent"
              />
              <p className="text-xs font-mono text-foreground-muted mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-auto pt-6 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono border border-border/50 rounded-full text-foreground-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = projects.length;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-(totalCards - 1) * 100}%`]
  );

  return (
    <div
      ref={containerRef}
      className="hidden md:block"
      style={{ height: `${totalCards * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex" style={{ x }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-screen flex-shrink-0 px-8 lg:px-16"
            >
              <div className="max-w-5xl mx-auto h-[75vh]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function MobileProjects() {
  return (
    <motion.div
      className="md:hidden space-y-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={staggerItem}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects">
      {/* Section heading */}
      <div className="section-padding pb-12 md:pb-20">
        <div className="container-custom">
          <motion.h2
            className="text-fluid-section font-display font-bold"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Selected Work
          </motion.h2>
          <motion.p
            className="text-foreground-muted font-mono text-sm mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Scroll to explore projects
          </motion.p>
        </div>
      </div>

      {/* Desktop: Horizontal scroll */}
      <DesktopProjects />

      {/* Mobile: Vertical stack */}
      <div className="container-custom">
        <MobileProjects />
      </div>
    </section>
  );
}
