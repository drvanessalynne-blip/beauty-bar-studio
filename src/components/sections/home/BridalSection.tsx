import { CheckCircle2, Heart } from "lucide-react";
import { Container, Heading, Section, Text } from "@/components/ui";
import { BookingButton } from "@/components/layout";

const bridalFeatures = ["Bridal trial sessions", "Wedding-day hair & makeup", "Full bridal party bookings"];

export function BridalSection() {
  return (
    <Section background="champagne">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col gap-4 rounded-2xl bg-white p-8 lg:order-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-rose-gold">
            <Heart size={22} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <ul className="flex flex-col gap-3">
            {bridalFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-rose-gold"
                  aria-hidden="true"
                />
                <Text size="sm" color="muted">
                  {feature}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Bridal Beauty
          </Text>
          <Heading level={2} className="mt-2">
            Your Most Beautiful Day, Perfected
          </Heading>
          <Text color="muted" className="mt-4">
            From engagement photos to the walk down the aisle, our Dallas bridal beauty
            specialists craft a look that feels unmistakably you — coordinated trials, wedding-day
            hair and makeup, and full bridal party bookings from one studio.
          </Text>
          <div className="mt-6">
            <BookingButton label="Book Your Bridal Consultation" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
