"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        className
      )}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

type BentoSize = "sm" | "md" | "lg" | "wide";

interface BentoCardProps {
  children: React.ReactNode;
  size?: BentoSize;
  className?: string;
}

const sizeClasses: Record<BentoSize, string> = {
  sm: "col-span-1 row-span-1",
  md: "col-span-1 md:col-span-2 row-span-1",
  lg: "col-span-1 md:col-span-2 row-span-1 lg:row-span-2",
  wide: "col-span-1 md:col-span-2 lg:col-span-4 row-span-1",
};

export function BentoCard({ children, size = "sm", className }: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-6 lg:p-8 group relative overflow-hidden",
        "hover:border-accent/20 transition-colors duration-500",
        sizeClasses[size],
        className
      )}
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
    >
      {children}
    </motion.div>
  );
}
