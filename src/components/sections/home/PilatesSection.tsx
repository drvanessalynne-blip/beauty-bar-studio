import { Activity, CheckCircle2 } from "lucide-react";
import { Container, Heading, Section, Text } from "@/components/ui";
import { BookingButton } from "@/components/layout";

const pilatesFeatures = [
  "Small-group reformer classes",
  "Private one-on-one sessions",
  "Mat-based strength & mobility work",
];

export function PilatesSection() {
  return (
    <Section background="ivory">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Mini Pilates Studio
          </Text>
          <Heading level={2} className="mt-2">
            Strength, Stillness, and Grace
          </Heading>
          <Text color="muted" className="mt-4">
            Beauty extends beyond the treatment room. Our mini Pilates studio in Dallas offers
            small-group and private sessions designed to build strength and calm in equal measure
            — the perfect complement to your beauty routine, all under one roof.
          </Text>
          <div className="mt-6">
            <BookingButton label="Reserve Your Spot" />
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-champagne p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-gold">
            <Activity size={22} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <ul className="flex flex-col gap-3">
            {pilatesFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-rose-gold"
                  aria-hidden="true"
                />
                <Text size="sm">{feature}</Text>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
