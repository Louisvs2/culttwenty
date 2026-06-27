"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster: string;
  className?: string;
  showMuteToggle?: boolean;
}

export function VideoPlayer({
  src,
  poster,
  className,
  showMuteToggle = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label="CultTwenty Showreel"
      >
        <source src={src} type="video/mp4" />
      </video>
      {showMuteToggle ? (
        <button
          type="button"
          onClick={toggleMute}
          data-cursor="pointer"
          aria-label={isMuted ? "Ton aktivieren" : "Ton deaktivieren"}
          className="absolute bottom-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors duration-300 hover:border-paper"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      ) : null}
    </div>
  );
}
