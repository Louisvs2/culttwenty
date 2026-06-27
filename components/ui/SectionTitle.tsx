import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="mb-5 flex items-center gap-3 font-mono text-eyebrow uppercase text-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-heading-1 font-medium text-ink text-balance">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-body-lg text-ink/70",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
