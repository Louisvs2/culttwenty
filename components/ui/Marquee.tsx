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
            "mx-6 flex items-center font-display text-display-3 font-medium",
            variant === "dark" ? "text-paper" : "text-ink",
          )}
        >
          {item}
          <span
            aria-hidden="true"
            className={cn(
              "ml-12 inline-block h-3 w-3 rounded-full",
              variant === "dark" ? "bg-signal" : "bg-signal",
            )}
          />
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
