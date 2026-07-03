import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionBackground = "ivory" | "white" | "champagne" | "charcoal";

interface SectionProps {
  as?: ElementType;
  id?: string;
  background?: SectionBackground;
  className?: string;
  children: ReactNode;
}

const backgroundClasses: Record<SectionBackground, string> = {
  ivory: "bg-ivory text-charcoal",
  white: "bg-white text-charcoal",
  champagne: "bg-champagne text-charcoal",
  charcoal: "bg-charcoal text-white",
};

export function Section({
  as: Component = "section",
  id,
  background,
  className,
  children,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        background && backgroundClasses[background],
        className,
      )}
    >
      {children}
    </Component>
  );
}
