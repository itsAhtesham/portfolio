"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, socialLinks } from "@/data/social";
import { menuOverlay, menuItem } from "@/lib/animations";
import { Github, Linkedin, Mail, X } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
};

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex flex-col justify-center"
          variants={menuOverlay}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-12 w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation links */}
          <nav className="container-custom">
            <ul className="space-y-2 md:space-y-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  custom={i}
                  variants={menuItem}
                  initial="closed"
                  animate="open"
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground hover:text-accent transition-colors duration-300 leading-none py-2"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Social links */}
            <motion.div
              className="flex gap-6 mt-12 md:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
