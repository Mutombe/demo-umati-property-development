import React, { useEffect, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 h-12 w-12 bg-umati-500 text-white flex items-center justify-center shadow-[0_10px_40px_rgba(232,119,34,0.35)] hover:bg-umati-600 transition-colors duration-300"
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  );
}
