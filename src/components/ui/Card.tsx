import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardPadding = "sm" | "md" | "lg";

interface CardProps {
  as?: ElementType;
  padding?: CardPadding;
  hoverEffect?: boolean;
  className?: string;
  children: ReactNode;
}

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-6",
  md: "p-8",
  lg: "p-12",
};

export function Card({
  as: Component = "div",
  padding = "md",
  hoverEffect = true,
  className,
  children,
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl bg-white shadow-soft-md",
        paddingClasses[padding],
        hoverEffect &&
          "motion-safe:transition-[transform,box-shadow] motion-safe:duration-[250ms] motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-soft-lg",
        className,
      )}
    >
      {children}
    </Component>
  );
}
