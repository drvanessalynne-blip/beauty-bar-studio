import { motion, useReducedMotion } from "framer-motion";
import { Badge, Container, Heading, Section, Text } from "@/components/ui";
import { BookingButton } from "@/components/layout";
import { business } from "@/config/business";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  return (
    <Section id="top" background="ivory" className="pt-28 lg:pt-36">
      <Container className="flex flex-col items-center gap-6 text-center">
        <motion.div {...fadeUp(0)}>
          <Badge variant="champagne">{business.positioning.join(" · ")}</Badge>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Heading level={1} size="hero" align="center" className="max-w-3xl">
            Where Timeless Beauty Meets Modern Calm
          </Heading>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <Text size="lg" color="muted" align="center" className="max-w-2xl">
            {business.name} is Dallas&rsquo;s destination for luxury hair, skin, and wellness — a
            premium day spa and mini Pilates studio tucked into {business.address.city},{" "}
            {business.address.state}, offering quiet indulgence for the modern woman.
          </Text>
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-2 flex flex-wrap items-center justify-center gap-4"
        >
          <BookingButton size="lg" />
          <a
            href="#services"
            className="rounded text-base font-medium text-charcoal underline-offset-4 transition-colors duration-150 ease-out hover:text-rose-gold-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
          >
            Explore Services
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
