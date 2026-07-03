import { Container, Heading, Section, Text } from "@/components/ui";

const journeySteps = [
  {
    step: "01",
    title: "Arrive & Unwind",
    description:
      "Settle into champagne-toned interiors designed for quiet, away from the pace of the day.",
  },
  {
    step: "02",
    title: "Restore & Renew",
    description: "Our specialists tailor every treatment to you — nothing rushed, nothing generic.",
  },
  {
    step: "03",
    title: "Reveal Your Glow",
    description: "Leave looking, and feeling, like the most rested version of yourself.",
  },
];

export function BeautyExperienceSection() {
  return (
    <Section background="champagne">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            The Experience
          </Text>
          <Heading level={2} align="center" className="mt-2">
            The Beauty Experience
          </Heading>
          <Text color="muted" align="center" className="mt-4">
            More than a service menu — a considered ritual, from arrival to reveal.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {journeySteps.map(({ step, title, description }) => (
            <div key={step} className="text-center">
              <Text as="span" size="lg" weight="semibold" color="rose-gold" className="font-heading">
                {step}
              </Text>
              <Heading level={3} size="h3" align="center" className="mt-2">
                {title}
              </Heading>
              <Text color="muted" size="sm" align="center" className="mt-2">
                {description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
