/**
 * Centralized contact and booking links for the application.
 * Update these values to change the links across the entire site.
 */
export const CONTACT_LINKS = {
  // Replace with your actual Calendly link
  calendly: "https://calendly.com/mudita-ecliqs/30min",
  
  // Replace with your actual WhatsApp link/number
  whatsapp: "https://wa.me/yourwhatsappnumber",
  
  // Replace with your actual phone number
  phone: "tel:+1234567890",
};

export const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/your-form-id";

export const AREAS_OF_INTEREST = [
  "Clinical genomics consultation",
  "Rare disease diagnostics",
  "Hereditary cancer testing",
  "Pharmacogenomics",
  "Carrier screening",
  "Research collaboration",
  "Other",
] as const;

export const CONSULT_BENEFITS = [
  "A 30-minute discussion with a genomics specialist",
  "Guidance on suitable test options and sample requirements",
  "A clear next-step plan for your clinical or research case",
  "No-cost initial review before you commit",
] as const;
