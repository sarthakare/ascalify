import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascalify | Website Packages — Scale Beyond Limits",
  description:
    "Website packages from $99 to enterprise. Start online, grow your business, and scale beyond limits with Ascalify.",
  icons: {
    icon: "/icon_trans_bg.png",
    shortcut: "/icon_trans_bg.png",
    apple: "/icon_trans_bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <MotionProvider>
          <SiteHeader />
          <div className="flex-1 min-w-0">{children}</div>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
