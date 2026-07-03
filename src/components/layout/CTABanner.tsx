import { Container, Heading, Section, Text } from "@/components/ui";
import { BookingButton } from "@/components/layout/BookingButton";
import { cn } from "@/lib/cn";

type CTABannerBackground = "rose-gold" | "champagne" | "charcoal";

interface CTABannerProps {
  heading: string;
  description?: string;
  ctaLabel?: string;
  background?: CTABannerBackground;
  className?: string;
}

const backgroundClasses: Record<CTABannerBackground, string> = {
  "rose-gold": "bg-rose-gold text-white",
  champagne: "bg-champagne text-charcoal",
  charcoal: "bg-charcoal text-white",
};

const contentColorForBackground: Record<CTABannerBackground, "white" | "charcoal"> = {
  "rose-gold": "white",
  champagne: "charcoal",
  charcoal: "white",
};

const ctaVariantForBackground: Record<CTABannerBackground, "primary" | "secondary"> = {
  "rose-gold": "secondary",
  champagne: "primary",
  charcoal: "primary",
};

export function CTABanner({
  heading,
  description,
  ctaLabel = "Book Now",
  background = "rose-gold",
  className,
}: CTABannerProps) {
  const contentColor = contentColorForBackground[background];

  return (
    <Section className={cn(backgroundClasses[background], className)}>
      <Container className="flex flex-col items-center gap-6 text-center">
        <Heading level={2} size="h2" color={contentColor} align="center">
          {heading}
        </Heading>
        {description && (
          <Text size="lg" color={contentColor} align="center" className="max-w-2xl opacity-90">
            {description}
          </Text>
        )}
        <BookingButton label={ctaLabel} variant={ctaVariantForBackground[background]} />
      </Container>
    </Section>
  );
}
