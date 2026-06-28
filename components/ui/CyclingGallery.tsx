"use client";

import { useEffect, useMemo, useState } from "react";
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
 * A grid of cells that independently cycle through a shared image pool and
 * cross-fade between them — a placeholder "wall" for project imagery before
 * real photos/videos exist. Designed so that later, swapping `images` for one
 * shared, site-wide pool turns this into the single combined gallery.
 */
export function CyclingGallery({
  images,
  alt,
  cellCount = 16,
  className,
}: CyclingGalleryProps) {
  const cells = useMemo(
    () =>
      Array.from({ length: cellCount }, (_, i) => ({
        id: i,
        startIndex: images.length > 0 ? i % images.length : 0,
        // Stagger cadence and phase per cell so the grid swaps organically
        // instead of every tile flipping in lockstep.
        intervalMs: 3200 + (i % 5) * 650,
        delayMs: (i * 420) % 2400,
      })),
    [cellCount, images.length],
  );

  if (images.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        className,
      )}
    >
      {cells.map((cell) => (
        <GalleryCell key={cell.id} images={images} alt={alt} {...cell} />
      ))}
    </div>
  );
}

interface GalleryCellProps {
  images: string[];
  alt: string;
  startIndex: number;
  intervalMs: number;
  delayMs: number;
}

function GalleryCell({ images, alt, startIndex, intervalMs, delayMs }: GalleryCellProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (images.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, intervalMs);
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [images.length, intervalMs, delayMs]);

  const currentSrc = images[index] ?? images[0];

  if (!currentSrc) return null;

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-ink/5">
      <AnimatePresence>
        <motion.div
          key={`${index}-${currentSrc}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={currentSrc}
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
