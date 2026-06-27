import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 2 | 3 | 4 | 6 | 12;
}

export function Grid({ children, className, cols = 12 }: GridProps) {
  const colsClass: Record<typeof cols, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-6",
    12: "grid-cols-2 md:grid-cols-12",
  };

  return (
    <div className={cn("grid gap-x-gutter gap-y-8", colsClass[cols], className)}>
      {children}
    </div>
  );
}
