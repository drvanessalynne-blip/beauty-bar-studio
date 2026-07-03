import { Quote, Star } from "lucide-react";
import { Card, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  avatarUrl?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating,
  avatarUrl,
  className,
}: TestimonialCardProps) {
  return (
    <Card as="figure" padding="lg" className={cn("flex flex-col gap-6", className)}>
      <Quote size={28} strokeWidth={1.5} className="text-rose-gold/40" aria-hidden="true" />

      {typeof rating === "number" && (
        <div role="img" aria-label={`Rated ${rating} out of 5 stars`} className="flex gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={16}
              strokeWidth={1.5}
              className={index < rating ? "fill-rose-gold text-rose-gold" : "text-charcoal/20"}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      <Text as="blockquote" size="lg" className="font-heading italic">
        “{quote}”
      </Text>

      <figcaption className="flex items-center gap-3">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
        )}
        <div>
          <Text weight="semibold" size="sm">
            {author}
          </Text>
          {role && (
            <Text color="muted" size="caption">
              {role}
            </Text>
          )}
        </div>
      </figcaption>
    </Card>
  );
}
