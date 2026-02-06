import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const variants = {
      default:
        "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
      glass:
        "backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50",
      gradient:
        "bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 shadow-lg",
          variants[variant],
          hover &&
            "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
