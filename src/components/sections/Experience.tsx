"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer, staggerItem, easings } from "@/lib/animations";
import { MapPin, ChevronDown } from "lucide-react";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <motion.h2
          className="text-fluid-section font-display font-bold mb-16 md:mb-28"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Timeline line */}
            <motion.div
              className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: easings.smooth }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="relative pl-8 md:pl-24 pb-16 last:pb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, ease: easings.smooth }}
                />

                {/* Year - large */}
                <motion.div
                  className="font-mono text-6xl md:text-8xl font-bold text-foreground/[0.06] absolute -top-4 md:-top-6 left-8 md:left-24 select-none pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {exp.startDate.split("-")[0]}
                </motion.div>

                {/* Card */}
                <motion.div
                  className="relative glass-card rounded-2xl p-6 md:p-8 cursor-pointer group"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-foreground-muted" />
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted font-mono mb-4">
                    <span>{exp.duration}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: easings.smooth },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 mb-6 pt-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 text-foreground/70 text-sm md:text-base"
                            >
                              <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono rounded-full border border-accent/20 text-accent bg-accent/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
