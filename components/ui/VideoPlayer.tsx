"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

/**
 * Pure decorative background video: autoplays immediately, muted, looping,
 * with zero user-facing controls and no placeholder/poster image. Nothing
 * about it is interactive — pointer-events are disabled on the element
 * itself so no native browser overlay (e.g. Picture-in-Picture hover button)
 * can be triggered either.
 */
export function VideoPlayer({ src, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile browsers (especially iOS Safari) check the *property*, not just
    // the JSX/HTML attribute, before allowing autoplay — setting it here
    // explicitly, before calling play(), is what makes autoplay reliably
    // fire on first load.
    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Extremely rare autoplay refusal (e.g. aggressive data-saver mode).
        // There's no poster/fallback UI by design — the dark hero overlay
        // covers this gracefully either way.
      });
    }
  }, []);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <video
        ref={videoRef}
        className="pointer-events-none h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
