"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { easings } from "@/lib/animations";

export function Quote() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);
  const quoteOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const quoteY = useTransform(scrollYProgress, [0.15, 0.35], [30, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Top line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-14 md:mb-20 mx-auto"
          style={{ width: lineWidth }}
        />

        {/* Quote block */}
        <motion.blockquote
          className="relative max-w-3xl mx-auto text-center"
          style={{ opacity: quoteOpacity, y: quoteY }}
        >
          {/* Decorative oversized quotation mark */}
          <span
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8rem] md:text-[10rem] leading-none font-display text-accent/[0.06] select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p className="text-fluid-medium font-display font-medium text-foreground/90 tracking-tight">
            Talk is cheap. Show me the code.
          </p>

          {/* Attribution */}
          <motion.footer
            className="mt-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: easings.smooth }}
          >
            <span className="h-px w-8 bg-accent/40" />
            <cite className="font-mono text-sm text-foreground-muted not-italic tracking-wider uppercase">
              Linus Torvalds
            </cite>
            <span className="h-px w-8 bg-accent/40" />
          </motion.footer>
        </motion.blockquote>

        {/* Bottom line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mt-14 md:mt-20 mx-auto"
          style={{ width: lineWidth }}
        />
      </div>
    </section>
  );
}
