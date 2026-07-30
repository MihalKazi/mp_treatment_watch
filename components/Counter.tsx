"use client";

import { useEffect, useRef, useState } from "react";

import { formatBDT, formatUSD } from "@/lib/format";

export default function Counter({
  value,
  format,
  durationMs = 1200,
}: {
  value: number;
  format?: "bdt" | "usd";
  durationMs?: number;
}) {
  const formatters = { bdt: formatBDT, usd: formatUSD };
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(value * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className="tabular">
      {format ? formatters[format](display) : display.toLocaleString("en-US")}
    </span>
  );
}
