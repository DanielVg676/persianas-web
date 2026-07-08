import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-brand-hover",
  secondary:
    "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-white",
  accent: "bg-accent text-accent-foreground hover:bg-stone",
  ghost: "text-foreground hover:bg-stone",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
