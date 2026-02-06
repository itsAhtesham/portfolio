"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

export function SocialLinks({
  className,
  iconSize = "md",
  showLabels = false,
}: SocialLinksProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const buttonSizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
              buttonSizes[iconSize],
              showLabels && "flex items-center gap-2 px-4"
            )}
            aria-label={link.name}
          >
            {Icon && <Icon className={sizes[iconSize]} />}
            {showLabels && (
              <span className="text-sm font-medium">{link.name}</span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
