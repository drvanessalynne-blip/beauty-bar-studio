import { business } from "@/config/business";

/**
 * Single source of truth for FAQ content — used by both the on-page
 * FAQ accordion (src/components/sections/home/FAQSection.tsx) and the
 * FAQPage JSON-LD schema (src/components/seo/StructuredData.tsx), so
 * the two never drift out of sync.
 */
export const faqItems = [
  {
    question: "How do I book an appointment?",
    answer: `Book online anytime through our Square Appointments portal, or call us at ${business.phone} during business hours.`,
  },
  {
    question: "What are your studio hours?",
    answer: `We're open ${business.hours.days.toLowerCase()} from ${business.hours.open} to ${business.hours.close}.`,
  },
  {
    question: "Do you accommodate bridal parties?",
    answer:
      "Yes — our Bridal Beauty team coordinates full bridal party bookings, including trial sessions ahead of your wedding day.",
  },
  {
    question: "Can I try a Pilates class as a walk-in?",
    answer:
      "We recommend booking in advance, as our mini Pilates studio keeps class sizes small by design.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We kindly ask for at least 24 hours' notice for any cancellation or rescheduling.",
  },
  {
    question: "Where are you located?",
    answer: `We're located at ${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}.`,
  },
];
