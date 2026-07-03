import { Container, Heading, Section, Text } from "@/components/ui";
import { PackageCard } from "@/components/sections";
import { business } from "@/config/business";

const packages = [
  {
    name: "The Essentials",
    description: "A perfect introduction to Beauty Bar Studio.",
    features: ["Signature facial or blowout", "Express manicure", "Studio consultation"],
  },
  {
    name: "The Signature Ritual",
    description: "Our most-loved full-day experience.",
    features: [
      "Full day spa treatment",
      "Hair styling session",
      "Brow shaping",
      "Mini Pilates session",
    ],
    featured: true,
  },
  {
    name: "The Bridal Edit",
    description: "Curated beauty preparation for your big day.",
    features: [
      "Trial + wedding-day hair and makeup",
      "Bridal party add-ons available",
      "Dedicated bridal concierge",
    ],
  },
];

export function PackagesSection() {
  return (
    <Section background="white">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Signature Packages
          </Text>
          <Heading level={2} align="center" className="mt-2">
            Curated Experiences, Tailored to You
          </Heading>
          <Text color="muted" align="center" className="mt-4">
            Pricing is tailored to each guest — reach out for a personalized quote after your
            consultation.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} href={business.bookingUrl} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
