import { MapPin } from "lucide-react";
import { Button, Text } from "@/components/ui";
import { business } from "@/config/business";
import { cn } from "@/lib/cn";

interface MapPlaceholderProps {
  aspectRatio?: "video" | "square";
  className?: string;
}

const aspectClasses: Record<NonNullable<MapPlaceholderProps["aspectRatio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
};

export function MapPlaceholder({ aspectRatio = "video", className }: MapPlaceholderProps) {
  const fullAddress = `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div
      role="img"
      aria-label={`Map showing the location of ${business.name} at ${fullAddress}`}
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-charcoal/15 bg-champagne/40 p-8 text-center",
        aspectClasses[aspectRatio],
        className,
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-gold text-white">
        <MapPin size={26} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <Text weight="semibold">{business.name}</Text>
      <Text color="muted" size="sm">
        {fullAddress}
      </Text>
      <Button href={directionsUrl} target="_blank" variant="secondary" size="sm">
        Get Directions
      </Button>
    </div>
  );
}
