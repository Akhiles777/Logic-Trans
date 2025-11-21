"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  duration?: number; // ms
  suffix?: string;
  className?: string;
};

export default function Counter({ target, duration = 1400, suffix = "", className = "" }: Props) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = Math.floor(target * eased);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return (
    <div className={className}>
      {value}
      {suffix}
    </div>
  );
}
