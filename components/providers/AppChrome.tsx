"use client";

import { Cursor } from "@/components/ui/Cursor";
import { Loader } from "@/components/ui/Loader";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export function AppChrome() {
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <NoiseOverlay />
    </>
  );
}
