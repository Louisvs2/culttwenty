import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  direction?: "normal" | "reverse";
  variant?: "dark" | "light";
}

export function Marquee({
  items,
  className,
  direction = "normal",
  variant = "dark",
}: MarqueeProps) {
  const renderItems = (keyPrefix: string) => (
    <>
      {items.map((item, index) => (
        <span
          key={`${keyPrefix}-${index}`}
          className={cn(
            "mx-10 flex items-center font-display text-display-3 font-medium uppercase tracking-wide",
            variant === "dark" ? "text-paper" : "text-ink",
          )}
        >
          {item}
        </span>
      ))}
    </>
  );

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className="marquee-track" data-direction={direction}>
        {renderItems("a")}
        {renderItems("b")}
      </div>
    </div>
  );
}
