"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseValue(value: string): { number: number; prefix: string; suffix: string } {
  const match = value.match(/^([<>]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { number: 0, prefix: "", suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

export function CountUp({ value, className = "", duration = 2000 }: CountUpProps) {
  const { prefix, number: target, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [viewRef, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5 });

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    setHasAnimated(true);

    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, hasAnimated, target, duration]);

  return (
    <span ref={viewRef as React.Ref<HTMLSpanElement>} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
