import { Button } from "@/components/ui";
import { business } from "@/config/business";

type BookingButtonVariant = "primary" | "secondary" | "ghost";
type BookingButtonSize = "sm" | "md" | "lg";

interface BookingButtonProps {
  label?: string;
  variant?: BookingButtonVariant;
  size?: BookingButtonSize;
  className?: string;
}

export function BookingButton({
  label = "Book Now",
  variant = "primary",
  size = "md",
  className,
}: BookingButtonProps) {
  return (
    <Button
      href={business.bookingUrl}
      target="_blank"
      variant={variant}
      size={size}
      className={className}
    >
      {label}
    </Button>
  );
}
