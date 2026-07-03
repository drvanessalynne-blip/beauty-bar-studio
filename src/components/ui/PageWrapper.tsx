import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
}

export function PageWrapper({ className, children }: PageWrapperProps) {
  return (
    <div className={cn("flex min-h-svh flex-col overflow-x-hidden", className)}>{children}</div>
  );
}
