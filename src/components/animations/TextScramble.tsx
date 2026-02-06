"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: "mount" | "hover";
  speed?: number;
}

export function TextScramble({
  text,
  className = "",
  trigger = "hover",
  speed = 40,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resolvedRef = useRef(0);

  const scramble = useCallback(() => {
    resolvedRef.current = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const chars = Array.from(text);
      const result = chars.map((char, i) => {
        if (char === " ") return " ";
        if (i < resolvedRef.current) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplayText(result.join(""));
      resolvedRef.current += 0.5;

      if (resolvedRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    if (trigger === "mount") {
      scramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [trigger, scramble]);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      scramble();
    }
  };

  return (
    <span
      className={`font-mono ${className}`}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
    >
      {displayText}
    </span>
  );
}
