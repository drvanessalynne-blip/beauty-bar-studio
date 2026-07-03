import { Clock, MapPin, Phone } from "lucide-react";
import { Card, Heading, Text } from "@/components/ui";
import { business } from "@/config/business";
import { cn } from "@/lib/cn";

interface ContactCardProps {
  className?: string;
}

export function ContactCard({ className }: ContactCardProps) {
  const rows = [
    {
      icon: MapPin,
      label: "Address",
      content: (
        <Text color="muted" size="sm">
          {business.address.line1}
          <br />
          {business.address.city}, {business.address.state} {business.address.zip}
        </Text>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      content: (
        <a
          href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
          className="text-sm text-charcoal/70 underline-offset-4 hover:text-rose-gold-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
        >
          {business.phone}
        </a>
      ),
    },
    {
      icon: Clock,
      label: "Hours",
      content: (
        <Text color="muted" size="sm">
          {business.hours.days}, {business.hours.open} – {business.hours.close}
        </Text>
      ),
    },
  ];

  return (
    <Card as="section" aria-label="Contact information" className={cn("flex flex-col gap-6", className)}>
      <Heading level={3}>Visit Us</Heading>
      <div className="flex flex-col gap-5">
        {rows.map(({ icon: Icon, label, content }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne text-rose-gold">
              <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <Text size="caption" weight="medium" color="muted" className="uppercase tracking-wide">
                {label}
              </Text>
              {content}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
