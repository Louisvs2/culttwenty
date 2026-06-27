import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "bg-transparent text-ink border border-ink/20 hover:border-ink",
  ghost: "bg-transparent text-ink hover:text-ink/70",
  "outline-light":
    "bg-transparent text-paper border border-paper/30 hover:border-paper",
};

interface BaseButtonProps {
  variant?: Variant;
  withIcon?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 ease-out-quart";

export function Button(props: ButtonProps) {
  const { variant = "primary", withIcon = false, className, children } = props;

  const content = (
    <>
      <span>{children}</span>
      {withIcon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-out-quart group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, variant: _v, withIcon: _w, className: _c, children: _ch, ...rest } =
      props;
    return (
      <Link
        href={href}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  const {
    variant: _v2,
    withIcon: _w2,
    className: _c2,
    children: _ch2,
    href: _h2,
    ...rest
  } = props as ButtonAsButton;

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...rest}
    >
      {content}
    </button>
  );
}
