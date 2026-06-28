"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyclingGalleryProps {
  images: string[];
  alt: string;
  cellCount?: number;
  className?: string;
}

/**
 * A grid of cells that cross-fade through a shared image pool, coordinated
 * from a single source of truth so the same image can never appear in two
 * cells at once. One cell at a time gets reassigned to a random image that
 * isn't currently shown anywhere else in the grid.
 */
export function CyclingGallery({
  images,
  alt,
  cellCount = 16,
  className,
}: CyclingGalleryProps) {
  const count = Math.min(cellCount, images.length);

  const [assignments, setAssignments] = useState<number[]>(() =>
    Array.from({ length: count }, (_, i) => i),
  );

  const assignmentsRef = useRef(assignments);
  assignmentsRef.current = assignments;

  useEffect(() => {
    if (images.length <= count) return; // no spare images to rotate in

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let timeoutId: number;

    function scheduleNext() {
      const delay = 900 + Math.random() * 1100;
      timeoutId = window.setTimeout(() => {
        const current = assignmentsRef.current;
        const used = new Set(current);
        const available = images
          .map((_, idx) => idx)
          .filter((idx) => !used.has(idx));

        if (available.length > 0) {
          const cellToUpdate = Math.floor(Math.random() * current.length);
          const newImageIndex =
            available[Math.floor(Math.random() * available.length)] ?? available[0];
          if (newImageIndex !== undefined) {
            const next = [...current];
            next[cellToUpdate] = newImageIndex;
            setAssignments(next);
          }
        }

        scheduleNext();
      }, delay);
    }

    scheduleNext();

    return () => window.clearTimeout(timeoutId);
  }, [images, count]);

  if (images.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        className,
      )}
    >
      {assignments.map((imageIndex, cellId) => (
        <GalleryCell key={cellId} src={images[imageIndex] ?? images[0]} alt={alt} />
      ))}
    </div>
  );
}

function GalleryCell({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-ink/5">
      <AnimatePresence>
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
