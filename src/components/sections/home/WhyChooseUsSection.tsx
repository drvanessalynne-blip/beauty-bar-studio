import { Award, Clock3, Sparkles, Users, type LucideIcon } from "lucide-react";
import { Container, Heading, Section, Text } from "@/components/ui";

interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: Clock3,
    title: "Unhurried by Design",
    description:
      "Appointments are paced for calm, never rushed — because true luxury takes time.",
  },
  {
    icon: Sparkles,
    title: "One Studio, Every Service",
    description: "Spa, salon, brows, nails, and Pilates, all under one roof in Dallas.",
  },
  {
    icon: Award,
    title: "Considered to the Last Detail",
    description:
      "From product selection to ambiance, every choice reflects our standard of care.",
  },
  {
    icon: Users,
    title: "A Space for You",
    description: "A calm, private setting for women who want to feel as good as they look.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section id="about" background="ivory" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Why Choose Us
          </Text>
          <Heading level={2} align="center" className="mt-2">
            The Beauty Bar Studio Standard
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-rose-gold">
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <Heading level={3} size="h3" align="center">
                {title}
              </Heading>
              <Text color="muted" size="sm" align="center">
                {description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
