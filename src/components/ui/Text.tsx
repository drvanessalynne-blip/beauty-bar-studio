import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextSize = "lg" | "base" | "sm" | "caption";
type TextColor = "charcoal" | "muted" | "ivory" | "white" | "rose-gold";
type TextWeight = "normal" | "medium" | "semibold";
type TextAlign = "left" | "center" | "right";

interface TextProps {
  as?: ElementType;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  align?: TextAlign;
  className?: string;
  children: ReactNode;
}

const sizeClasses: Record<TextSize, string> = {
  lg: "text-xl leading-[1.7]",
  base: "text-lg leading-[1.7]",
  sm: "text-base leading-[1.7]",
  caption: "text-sm leading-[1.7]",
};

const colorClasses: Record<TextColor, string> = {
  charcoal: "text-charcoal",
  muted: "text-charcoal/70",
  ivory: "text-ivory",
  white: "text-white",
  "rose-gold": "text-rose-gold-ink",
};

const weightClasses: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const alignClasses: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Text({
  as: Component = "p",
  size = "base",
  color = "charcoal",
  weight = "normal",
  align = "left",
  className,
  children,
}: TextProps) {
  return (
    <Component
      className={cn(
        "font-sans",
        sizeClasses[size],
        colorClasses[color],
        weightClasses[weight],
        alignClasses[align],
        className,
      )}
    >
      {children}
    </Component>
  );
}
