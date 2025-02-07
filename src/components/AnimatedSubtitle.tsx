'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface AnimatedSubtitleProps {
  subtitle: string;
}

const AnimatedSubtitle = ({ subtitle }: AnimatedSubtitleProps) => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [subtitle],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      backDelay: 1000,
      startDelay: 500,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, [subtitle]);

  return (
    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-neutral-700 ">
      <span ref={el} />
    </div>
  );
};

export default AnimatedSubtitle;
