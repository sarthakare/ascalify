"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-30 bg-white/70 px-3 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 rounded-3xl border border-white/70 bg-white/90 px-3 py-3 shadow-xl shadow-brand/10 ring-1 ring-border/70 md:rounded-full md:px-4">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="inline-flex shrink-0 items-center gap-3 rounded-full pr-2 text-sm font-black text-foreground"
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
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="order-2 ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:bg-surface-alt md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="order-2 mx-2 hidden items-center gap-1 rounded-full bg-surface-alt/80 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "min-w-max rounded-full px-3 py-2 text-xs font-semibold transition",
                isActive(item.href)
                  ? "bg-white text-brand shadow-sm"
                  : "text-muted hover:bg-white/80 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="order-3 ml-auto hidden items-center gap-2 md:flex">
          <Link
            href={CONTACT_HASH}
            className={buttonVariants({
              size: "sm",
              className: "whitespace-nowrap py-2 shadow-brand/25",
            })}
          >
            1 Click Connect
          </Link>
        </nav>

        {mobileOpen ? (
          <nav className="order-4 mt-1 flex basis-full flex-col gap-2 rounded-2xl border border-border bg-white p-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold transition",
                  isActive(item.href)
                    ? "bg-brand text-white"
                    : "text-foreground hover:bg-surface-alt",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={CONTACT_HASH}
              onClick={() => setMobileOpen(false)}
              className={buttonVariants({
                size: "default",
                className: "mt-1 w-full",
              })}
            >
              1 Click Connect
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
