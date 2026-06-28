"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

/**
 * Decorative background video with a layered, belt-and-suspenders strategy
 * to guarantee playback starts:
 * 1. Immediate muted autoplay attempt on mount.
 * 2. Retried on `canplay`/`loadeddata` (covers slow-buffering connections).
 * 3. Retried on the very first interaction anywhere on the page — click,
 *    tap, scroll or keypress (covers browsers that only unlock autoplay
 *    after a user gesture).
 * 4. If none of that has produced actual playback within ~1.8s, a plain
 *    tap-to-play button appears. Tapping it is a direct user gesture, so
 *    the browser is guaranteed to allow play() at that point — no edge
 *    case left where the video simply never starts.
 */
export function VideoPlayer({ src, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => undefined);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    attemptPlay();

    function handlePlaying() {
      setIsPlaying(true);
      setShowFallback(false);
    }
    function handlePause() {
      setIsPlaying(false);
    }
    function retry() {
      attemptPlay();
    }

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("canplay", retry);
    video.addEventListener("loadeddata", retry);

    const fallbackTimer = window.setTimeout(() => {
      if (video.paused) setShowFallback(true);
    }, 1800);

    window.addEventListener("click", retry, { once: true });
    window.addEventListener("touchstart", retry, { once: true, passive: true });
    window.addEventListener("scroll", retry, { once: true, passive: true });
    window.addEventListener("keydown", retry, { once: true });

    return () => {
      window.clearTimeout(fallbackTimer);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("canplay", retry);
      video.removeEventListener("loadeddata", retry);
      window.removeEventListener("click", retry);
      window.removeEventListener("touchstart", retry);
      window.removeEventListener("scroll", retry);
      window.removeEventListener("keydown", retry);
    };
  }, [attemptPlay]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-ink", className)}>
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

      {showFallback && !isPlaying ? (
        <button
          type="button"
          onClick={attemptPlay}
          aria-label="Video abspielen"
          data-cursor="pointer"
          className="absolute inset-0 z-10 flex items-center justify-center bg-ink/30"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 text-ink shadow-lg transition-transform duration-300 hover:scale-105">
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </span>
        </button>
      ) : null}
    </div>
  );
}
