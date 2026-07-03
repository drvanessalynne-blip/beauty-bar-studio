import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

// Framer Motion redefines these event handlers with its own signatures,
// so the native DOM versions must be excluded to avoid type conflicts.
type MotionConflictKeys =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd";

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps | MotionConflictKeys> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | MotionConflictKeys> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-rose-gold-deep text-white shadow-soft-sm hover:brightness-95 focus-visible:ring-rose-gold",
  secondary:
    "bg-white text-rose-gold-ink border border-rose-gold hover:bg-champagne focus-visible:ring-rose-gold",
  ghost:
    "bg-transparent text-charcoal hover:underline underline-offset-4 focus-visible:ring-charcoal",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.15 },
      };

  if (props.href !== undefined) {
    const { href, target, rel, ...anchorProps } = props as ButtonAsAnchor;
    const resolvedRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel;

    return (
      <motion.a
        href={href}
        target={target}
        rel={resolvedRel}
        className={sharedClassName}
        {...motionProps}
        {...anchorProps}
      >
        {children}
      </motion.a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <motion.button type={type} className={sharedClassName} {...motionProps} {...buttonProps}>
      {children}
    </motion.button>
  );
}
