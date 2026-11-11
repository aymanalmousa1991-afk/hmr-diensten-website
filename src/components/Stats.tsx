"use client";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";

interface Stat {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 220, suffix: "+", label: "Tevreden klanten" },
  { value: 5, suffix: "+", label: "Jaar ervaring" },
  { value: 4.7, decimals: 1, suffix: "", label: "Gemiddelde score" },
  { value: 13, suffix: "", label: "Diensten op maat" },
];

function CountUp({ stat, start }: { stat: Stat; start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(stat.value);
      return;
    }
    const duration = 1400;
    const t0 = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  const formatted = stat.decimals
    ? display.toFixed(stat.decimals).replace(".", ",")
    : Math.round(display).toString();

  return (
    <span className="tabular-nums">
      {formatted}
      {stat.suffix}
    </span>
  );
}

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Kerncijfers" className="relative z-10 bg-white">
      <Container className="!py-0">
        <div
          ref={ref}
          className="relative -mt-16 rounded-3xl bg-white shadow-soft ring-1 ring-slate-100 px-6 py-8 lg:px-12 lg:py-10"
        >
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i > 0
                    ? "lg:border-l lg:border-slate-100"
                    : ""
                }`}
              >
                <dd className="order-first text-3xl lg:text-4xl font-extrabold font-display text-gray-900">
                  <CountUp stat={stat} start={inView} />
                </dd>
                <dt className="mt-1.5 text-sm font-medium text-gray-500">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
};
