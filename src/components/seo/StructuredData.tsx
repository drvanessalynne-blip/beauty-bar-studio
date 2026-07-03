import { business } from "@/config/business";
import { faqItems } from "@/config/faq";

/**
 * All JSON-LD structured data for the homepage, as a single @graph so
 * every node can cross-reference the others by @id. Covers:
 * Organization, WebSite, BeautySalon + LocalBusiness, and FAQPage.
 *
 * All values are sourced from src/config/business.ts and src/config/faq.ts —
 * update the data there, not here.
 */
export function StructuredData() {
  const siteUrl = business.siteUrl;
  const sameAs = [business.social.instagram, business.social.facebook].filter(
    (url) => url && url !== "#",
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: business.name,
        url: siteUrl,
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: business.name,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": ["BeautySalon", "LocalBusiness"],
        "@id": `${siteUrl}/#business`,
        name: business.name,
        url: siteUrl,
        telephone: business.phone,
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.line1,
          addressLocality: business.address.city,
          addressRegion: business.address.state,
          postalCode: business.address.zip,
          addressCountry: "US",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
