import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "rose-gold" | "champagne" | "outline";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  "rose-gold": "bg-rose-gold-deep text-white",
  champagne: "bg-champagne text-charcoal",
  outline: "bg-transparent border border-charcoal/30 text-charcoal",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
};

export function Badge({ variant = "rose-gold", size = "sm", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium uppercase tracking-wide",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
