import { Container, Heading, Section, Text } from "@/components/ui";
import { FAQAccordion } from "@/components/sections";
import { faqItems } from "@/config/faq";

export function FAQSection() {
  return (
    <Section background="white">
      <Container className="mx-auto max-w-3xl">
        <div className="text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            FAQ
          </Text>
          <Heading level={2} align="center" className="mt-2">
            Frequently Asked Questions
          </Heading>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqItems} />
        </div>
      </Container>
    </Section>
  );
}
