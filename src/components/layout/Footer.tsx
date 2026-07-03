import { Container, Divider, Heading, Text } from "@/components/ui";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { business } from "@/config/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
        <div>
          <Heading level={2} size="h3" color="white">
            {business.name}
          </Heading>
          <Text color="white" size="sm" className="mt-3 opacity-80">
            {business.positioning.join(" · ")}
          </Text>
          <SocialIcons color="white" className="mt-6" />
        </div>

        <div>
          <Text size="sm" weight="semibold" className="text-rose-gold-light uppercase tracking-wide">
            Visit
          </Text>
          <Text color="white" size="sm" className="mt-3 opacity-80">
            {business.address.line1}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </Text>
        </div>

        <div>
          <Text size="sm" weight="semibold" className="text-rose-gold-light uppercase tracking-wide">
            Contact
          </Text>
          <Text color="white" size="sm" className="mt-3 opacity-80">
            <a
              href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
              className="hover:text-rose-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              {business.phone}
            </a>
          </Text>
        </div>

        <div>
          <Text size="sm" weight="semibold" className="text-rose-gold-light uppercase tracking-wide">
            Hours
          </Text>
          <Text color="white" size="sm" className="mt-3 opacity-80">
            {business.hours.days}
            <br />
            {business.hours.open} – {business.hours.close}
          </Text>
        </div>
      </Container>

      <Divider className="border-white/10" />

      <Container className="py-6">
        <Text color="white" size="caption" className="opacity-60">
          © {year} {business.name}. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
