import React, { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, suffix = '', label, duration = 1600, delay = 0 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const target = parseInt(value, 10) || 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const elapsed = t - t0 - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, delay]);

  return (
    <div ref={ref} className="text-left">
      <p className="display-mega text-5xl sm:text-6xl lg:text-7xl text-onyx-900 leading-none">
        <span>{count}</span>
        <span className="text-umati-500">{suffix}</span>
      </p>
      <p className="mt-3 text-[13px] tracking-[0.12em] uppercase font-semibold text-onyx-500">{label}</p>
    </div>
  );
}
