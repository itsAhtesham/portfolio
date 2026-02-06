"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FullScreenMenu } from "@/components/navigation/FullScreenMenu";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { MagneticCursor } from "@/components/effects/MagneticCursor";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MagneticCursor />
      <ScrollProgress />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className={cn(
            "flex items-center gap-4 md:gap-6 px-5 md:px-7 py-3 rounded-full transition-all duration-500",
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-sm font-bold tracking-wider hover:text-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            AMS
          </a>

          <div className="w-px h-4 bg-border" />

          <ThemeToggle />

          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full border border-border hover:border-accent transition-colors group"
            aria-label="Open menu"
          >
            <span className="w-4 h-[1.5px] bg-foreground group-hover:bg-accent transition-colors" />
            <span className="w-4 h-[1.5px] bg-foreground group-hover:bg-accent transition-colors" />
          </button>
        </nav>
      </motion.header>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
