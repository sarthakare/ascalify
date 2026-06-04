export const WHATSAPP_URL = "https://wa.me/919970366428";
export const EMAIL = "sathakare12@gmail.com";
export const PHONE = "+91 99703 66428";
export const PHONE_TEL = "tel:+919970366428";
export const INSTAGRAM_URL = "https://www.instagram.com/ascalify";
export const X_URL = "https://x.com/ascalify";
export const CONTACT_HASH = "/contact#connect";

export const contactPlatforms = [
  {
    name: "WhatsApp",
    href: WHATSAPP_URL,
    description: "Fast project guidance and package recommendations.",
  },
  {
    name: "Instagram",
    href: INSTAGRAM_URL,
    description: "Follow updates, launches, and quick design previews.",
  },
  {
    name: "Email",
    href: `mailto:${EMAIL}`,
    description: "Share your requirements, references, and project scope.",
  },
  {
    name: "X",
    href: X_URL,
    description: "Connect with Ascalify for product and launch updates.",
  },
  {
    name: "Phone",
    href: PHONE_TEL,
    description: "Call directly if you prefer a quick conversation.",
  },
];

export function whatsappPackageLink(packageName: string) {
  const text = encodeURIComponent(
    `Hi Ascalify, I am interested in the ${packageName} website package.`,
  );
  return `${WHATSAPP_URL}?text=${text}`;
}
