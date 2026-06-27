"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // useSpring smooths the value via Framer's own RAF loop — still zero React re-renders.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 40,
    mass: 0.3,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-nav h-[2px] w-full bg-transparent"
    >
      <motion.div
        className="h-full origin-left bg-signal will-change-transform"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
}
