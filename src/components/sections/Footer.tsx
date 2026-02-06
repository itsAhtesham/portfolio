"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-sm text-foreground-muted">
          &copy; {currentYear} Ahtesham Siddiqui
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || Mail;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-foreground-muted hover:text-accent transition-colors duration-300"
                aria-label={link.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
