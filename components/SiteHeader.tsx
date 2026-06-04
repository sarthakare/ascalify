"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_HASH } from "@/lib/contact";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/audience", label: "Audience" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-30 bg-white/70 px-3 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-full border border-white/70 bg-white/90 px-4 py-3 shadow-xl shadow-brand/10 ring-1 ring-border/70">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full pr-2 text-sm font-black text-foreground"
        >
          <Image
            src="/icon_trans_bg.png"
            alt="Ascalify logo"
            width={36}
            height={36}
            className="h-10 w-10 rounded-full bg-brand-tint object-contain p-1"
            priority
          />
          <span>
            Ascalify
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              Scale Beyond Limits
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 rounded-full bg-surface-alt/80 p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-semibold transition",
                isActive(item.href)
                  ? "bg-white text-brand shadow-sm"
                  : "text-muted hover:bg-white/80 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="flex items-center gap-2">
          <Link
            href={CONTACT_HASH}
            className={buttonVariants({
              size: "sm",
              className: "py-2 shadow-brand/25",
            })}
          >
            1 Click Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
