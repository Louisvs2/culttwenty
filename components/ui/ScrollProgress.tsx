"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-nav h-[2px] w-full bg-transparent"
    >
      <div
        className="h-full bg-signal"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
