import { Container, Heading, Section, Text } from "@/components/ui";
import { ContactCard, MapPlaceholder } from "@/components/sections";

export function ContactSection() {
  return (
    <Section id="contact" background="ivory" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Visit Us
          </Text>
          <Heading level={2} align="center" className="mt-2">
            Visit Beauty Bar Studio
          </Heading>
          <Text color="muted" align="center" className="mt-4">
            Located in the heart of Dallas at Mountain Glow — walk-ins welcome, though we
            recommend booking ahead.
          </Text>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ContactCard />
          <MapPlaceholder />
        </div>
      </Container>
    </Section>
  );
}
