import { Check } from "lucide-react";
import { Badge, Button, Card, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

interface PackageCardProps {
  name: string;
  price?: string;
  description?: string;
  features: string[];
  featured?: boolean;
  ctaLabel?: string;
  href?: string;
  onSelect?: () => void;
  className?: string;
}

export function PackageCard({
  name,
  price,
  description,
  features,
  featured = false,
  ctaLabel = "Book Now",
  href,
  onSelect,
  className,
}: PackageCardProps) {
  return (
    <Card
      as="article"
      padding="lg"
      className={cn(
        "flex flex-col gap-6",
        featured && "ring-2 ring-rose-gold",
        className,
      )}
    >
      {featured && (
        <Badge variant="rose-gold" className="w-fit">
          Most Popular
        </Badge>
      )}

      <div>
        <Heading level={3}>{name}</Heading>
        {price && (
          <Text weight="semibold" color="rose-gold" size="lg" className="mt-1">
            {price}
          </Text>
        )}
        {description && (
          <Text color="muted" size="sm" className="mt-2">
            {description}
          </Text>
        )}
      </div>

      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-rose-gold" aria-hidden="true" />
            <Text size="sm" color="muted">
              {feature}
            </Text>
          </li>
        ))}
      </ul>

      {href ? (
        <Button href={href} target="_blank" variant={featured ? "primary" : "secondary"} fullWidth>
          {ctaLabel}
        </Button>
      ) : (
        <Button variant={featured ? "primary" : "secondary"} onClick={onSelect} fullWidth>
          {ctaLabel}
        </Button>
      )}
    </Card>
  );
}
