import { cn } from "@/lib/cn";
import { business } from "@/config/business";
import { FacebookIcon, InstagramIcon } from "@/components/layout/icons/BrandIcons";

type SocialColor = "charcoal" | "white";

interface SocialIconsProps {
  color?: SocialColor;
  className?: string;
}

const colorClasses: Record<SocialColor, string> = {
  charcoal: "text-charcoal/70 hover:text-rose-gold focus-visible:ring-offset-ivory",
  white: "text-white/70 hover:text-rose-gold focus-visible:ring-offset-charcoal",
};

export function SocialIcons({ color = "charcoal", className }: SocialIconsProps) {
  const links = [
    { label: "Instagram", href: business.social.instagram, Icon: InstagramIcon },
    { label: "Facebook", href: business.social.facebook, Icon: FacebookIcon },
  ];

  return (
    <nav aria-label="Social media" className={cn("flex items-center gap-4", className)}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "rounded-full p-2 transition-colors duration-150 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2",
            colorClasses[color],
          )}

        >
          <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
