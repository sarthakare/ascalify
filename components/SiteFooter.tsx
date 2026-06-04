import Image from "next/image";
import Link from "next/link";
import { EMAIL, PHONE, WHATSAPP_URL } from "@/lib/contact";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/audience", label: "Audience" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-bold">
              <Image
                src="/icon_trans_bg.png"
                alt="Ascalify logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              Ascalify
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Website packages for every stage of growth. Start at $99 and scale
              beyond limits.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-brand">
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href="tel:+919970366428" className="hover:text-brand">
                    {PHONE}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} Ascalify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
