import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = "hero" | "h1" | "h2" | "h3";
type HeadingColor = "charcoal" | "ivory" | "white" | "rose-gold";
type HeadingAlign = "left" | "center" | "right";

interface HeadingProps {
  level?: HeadingLevel;
  size?: HeadingSize;
  color?: HeadingColor;
  align?: HeadingAlign;
  className?: string;
  children: ReactNode;
}

const sizeClasses: Record<HeadingSize, string> = {
  hero: "text-[clamp(2.5rem,1rem_+_6vw,4rem)] leading-[1.15]",
  h1: "text-[clamp(2rem,1rem_+_4vw,3rem)] leading-[1.15]",
  h2: "text-[clamp(1.5rem,0.75rem_+_3vw,2.25rem)] leading-[1.15]",
  h3: "text-[clamp(1.25rem,0.75rem_+_2vw,1.75rem)] leading-[1.15]",
};

const colorClasses: Record<HeadingColor, string> = {
  charcoal: "text-charcoal",
  ivory: "text-ivory",
  white: "text-white",
  "rose-gold": "text-rose-gold-ink",
};

const alignClasses: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const defaultSizeForLevel: Record<HeadingLevel, HeadingSize> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h3",
  5: "h3",
  6: "h3",
};

export function Heading({
  level = 2,
  size,
  color = "charcoal",
  align = "left",
  className,
  children,
}: HeadingProps) {
  const Component = `h${level}` as ElementType;
  const resolvedSize = size ?? defaultSizeForLevel[level];

  return (
    <Component
      className={cn(
        "font-heading font-medium tracking-tight",
        sizeClasses[resolvedSize],
        colorClasses[color],
        alignClasses[align],
        className,
      )}
    >
      {children}
    </Component>
  );
}
