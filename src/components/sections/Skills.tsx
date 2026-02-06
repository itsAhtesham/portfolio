"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextScramble } from "@/components/animations/TextScramble";
import { skills, skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <motion.h2
          className="text-fluid-section font-display font-bold mb-8 md:mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          What I Do
        </motion.h2>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-14 md:mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 border",
              !activeCategory
                ? "bg-accent text-accent-foreground border-accent"
                : "border-border text-foreground-muted hover:border-accent hover:text-accent"
            )}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 border",
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border text-foreground-muted hover:border-accent hover:text-accent"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                className="group relative glass-card rounded-xl p-5 md:p-6 overflow-hidden cursor-default"
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                {/* Background proficiency bar */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-accent/60 transition-all duration-700 group-hover:h-full group-hover:opacity-[0.06]"
                  style={{ width: `${skill.proficiency}%` }}
                />

                <div className="relative z-10">
                  <TextScramble
                    text={skill.name}
                    className={cn(
                      "block text-base md:text-lg font-display font-semibold mb-2",
                      skill.proficiency >= 90 && "text-lg md:text-xl"
                    )}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-foreground-muted">
                      {
                        skillCategories.find((c) => c.id === skill.category)
                          ?.label
                      }
                    </span>
                    <span className="text-xs font-mono text-accent">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
