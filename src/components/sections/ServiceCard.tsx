import type { LucideIcon } from "lucide-react";
import { Badge, Card, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  imageUrl,
  imageAlt = "",
  badge,
  className,
}: ServiceCardProps) {
  return (
    <Card as="article" padding="md" className={cn("flex flex-col gap-4", className)}>
      {imageUrl && (
        <div className="-mx-8 -mt-8 mb-2 aspect-[3/2] overflow-hidden rounded-t-2xl">
          <img src={imageUrl} alt={imageAlt} loading="lazy" className="h-full w-full object-cover" />
        </div>
      )}

      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-rose-gold">
          <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
        </div>
      )}

      {badge && (
        <Badge variant="rose-gold" className="w-fit">
          {badge}
        </Badge>
      )}

      <Heading level={3}>{title}</Heading>

      {description && (
        <Text color="muted" size="sm">
          {description}
        </Text>
      )}
    </Card>
  );
}
