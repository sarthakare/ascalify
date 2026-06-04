export const WHATSAPP_URL = "https://wa.me/919970366428";
export const EMAIL = "sathakare12@gmail.com";
export const PHONE = "+91 99703 66428";
export const PHONE_TEL = "tel:+919970366428";
export const INSTAGRAM_URL = "https://www.instagram.com/ascalify/";
export const X_URL = "https://x.com/Sarthakare";
export const CONTACT_HASH = "/contact#connect";

export const contactPlatformIcons = {
  WhatsApp: "/ascalify-icon-whatsapp.png",
  Instagram: "/ascalify-icon-instagram.png",
  Email: "/ascalify-icon-gmail.png",
  X: "/ascalify-icon-x.png",
  Phone: "/ascalify-icon-phone.png",
} as const;

export type ContactPlatformName = keyof typeof contactPlatformIcons;

export const contactPlatforms: {
  name: ContactPlatformName;
  href: string;
  icon: string;
  description: string;
}[] = [
  {
    name: "WhatsApp",
    href: WHATSAPP_URL,
    icon: contactPlatformIcons.WhatsApp,
    description: "Fast project guidance and package recommendations.",
  },
  {
    name: "Instagram",
    href: INSTAGRAM_URL,
    icon: contactPlatformIcons.Instagram,
    description: "Follow updates, launches, and quick design previews.",
  },
  {
    name: "Email",
    href: `mailto:${EMAIL}`,
    icon: contactPlatformIcons.Email,
    description: "Share your requirements, references, and project scope.",
  },
  {
    name: "X",
    href: X_URL,
    icon: contactPlatformIcons.X,
    description: "Connect with Ascalify for product and launch updates.",
  },
  {
    name: "Phone",
    href: PHONE_TEL,
    icon: contactPlatformIcons.Phone,
    description: "Call directly if you prefer a quick conversation.",
  },
];

export function whatsappPackageLink(packageName: string) {
  const text = encodeURIComponent(
    `Hi Ascalify, I am interested in the ${packageName} website package.`,
  );
  return `${WHATSAPP_URL}?text=${text}`;
}
