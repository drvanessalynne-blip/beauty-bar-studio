/**
 * Single source of truth for all Beauty Bar Studio business facts.
 * Every component pulls from here — update values in this file only.
 *
 * BEFORE LAUNCH, replace the placeholders marked "TODO" below:
 *   - siteUrl     → if a custom domain is attached later, update this (and index.html,
 *                   robots.txt, sitemap.xml, which are static and duplicate this value)
 *   - bookingUrl  → the real Square Appointments booking link
 *   - social      → real Instagram/Facebook profile URLs
 */
export const business = {
  name: "Beauty Bar Studio",

  // Currently the live Vercel deployment. Update here (and in index.html, robots.txt,
  // sitemap.xml) if a custom domain is attached later. No trailing slash.
  siteUrl: "https://beauty-bar-studio.vercel.app",

  address: {
    line1: "1200 Mountain Glow", // TODO: confirm/update street address
    city: "Dallas",
    state: "TX",
    zip: "75024",
  },

  phone: "(222) 576-8329", // TODO: confirm/update business phone number

  hours: {
    days: "Daily", // TODO: update if hours vary by day
    open: "9:00 AM",
    close: "6:00 PM",
  },

  // TODO: replace with the real Square Appointments booking link once the account is live
  bookingUrl: "https://squareup.com/appointments",

  // TODO: replace "#" with real profile URLs once accounts are live
  social: {
    instagram: "#",
    facebook: "#",
  },

  positioning: [
    "Luxury Beauty Salon",
    "Premium Day Spa",
    "Mini Pilates Studio",
  ],

  targetClient: "Women ages 25-45 seeking premium beauty and wellness services.",

  // TODO: update if the service menu changes — this list drives the Services section and schema.org data
  services: [
    "Premium Day Spa",
    "Hair Salon",
    "Brow Microblading",
    "Nail Bar",
    "Waxing",
    "Mini Pilates Studio",
    "Bridal Packages",
  ],
} as const;
