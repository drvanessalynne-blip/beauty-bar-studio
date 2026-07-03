import { Container, Heading, Section, Text } from "@/components/ui";
import { TestimonialCard } from "@/components/sections";

const testimonials = [
  {
    quote:
      "The most relaxing hour of my week, every time. I always leave feeling like myself again.",
    author: "Jasmine R.",
    role: "Client since 2023",
    rating: 5,
  },
  {
    quote:
      "Our bridal party's hair and makeup were flawless — completely stress-free from trial to ceremony.",
    author: "Elena M.",
    role: "Bride",
    rating: 5,
  },
  {
    quote:
      "Dallas needed a studio like this. My monthly facial and Pilates session are non-negotiable now.",
    author: "Courtney D.",
    role: "Client since 2023",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section background="ivory">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Testimonials
          </Text>
          <Heading level={2} align="center" className="mt-2">
            Loved by Dallas, One Visit at a Time
          </Heading>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
