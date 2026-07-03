import { cn } from "@/lib/cn";

type DividerOrientation = "horizontal" | "vertical";

interface DividerProps {
  orientation?: DividerOrientation;
  className?: string;
}

export function Divider({ orientation = "horizontal", className }: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px self-stretch bg-charcoal/10", className)}
      />
    );
  }

  return <hr className={cn("w-full border-t border-charcoal/10", className)} />;
}
