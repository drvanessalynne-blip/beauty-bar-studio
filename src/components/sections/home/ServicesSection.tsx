import { Droplet, Eye, Flower2, Gem, Heart, Scissors, Activity, type LucideIcon } from "lucide-react";
import { Container, Heading, Section, Text } from "@/components/ui";
import { ServiceCard } from "@/components/sections";
import { business } from "@/config/business";

const serviceDetails: Record<string, { icon: LucideIcon; description: string }> = {
  "Premium Day Spa": {
    icon: Flower2,
    description: "Facials, massage, and body treatments designed for total restoration.",
  },
  "Hair Salon": {
    icon: Scissors,
    description: "Editorial cuts, color, and styling in a calm, elevated setting.",
  },
  "Brow Microblading": {
    icon: Eye,
    description: "Precision, semi-permanent brow artistry for a natural, lasting look.",
  },
  "Nail Bar": {
    icon: Gem,
    description: "Manicures and pedicures finished with meticulous, luxury detail.",
  },
  Waxing: {
    icon: Droplet,
    description: "Gentle, thorough waxing services in a private, comfortable space.",
  },
  "Mini Pilates Studio": {
    icon: Activity,
    description: "Small-group reformer and mat sessions to strengthen and restore.",
  },
  "Bridal Packages": {
    icon: Heart,
    description: "Full-service beauty preparation for your engagement and wedding day.",
  },
};

export function ServicesSection() {
  return (
    <Section id="services" background="white" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Services
          </Text>
          <Heading level={2} align="center" className="mt-2">
            A Full Suite of Beauty &amp; Wellness
          </Heading>
          <Text color="muted" align="center" className="mt-4">
            From hair and skin to brows, nails, and Pilates — every service at our Dallas studio
            is delivered with the same quiet precision.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service) => {
            const detail = serviceDetails[service];
            return (
              <ServiceCard
                key={service}
                title={service}
                description={detail?.description}
                icon={detail?.icon}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
