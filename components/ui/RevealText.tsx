"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "p" | "span" | "div";
}

export function RevealText({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealTextProps) {
  const Tag = motion[as];

  return (
    <div className="reveal-mask">
      <Tag
        className={cn(className)}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </Tag>
    </div>
  );
}
