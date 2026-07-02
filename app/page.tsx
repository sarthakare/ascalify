import { ClientShowcase } from "@/components/ClientShowcase";
import { ConnectBanner } from "@/components/ConnectBanner";
import { CtaBanner } from "@/components/CtaBanner";
import { GrowthOverviewSection } from "@/components/GrowthOverviewSection";
import { Hero } from "@/components/Hero";
import { PackageFitSection } from "@/components/PackageFitSection";
import { StagesSection } from "@/components/StagesSection";
import { TrustStrip } from "@/components/TrustStrip";
import { SALES_MESSAGE } from "@/lib/packages";

export default function Home() {
  return (
    <main>
      <Hero
        title="We build"
        rotatingPhrases={[
          "Websites that drive conversions",
          "Automations that save operations time",
          "SaaS products tailored to your business",
          "Digital systems built to scale growth",
        ]}
        description={SALES_MESSAGE}
        primaryHref="/packages"
        primaryLabel="View Packages from $99"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
      <TrustStrip />

      <StagesSection />

      <ClientShowcase />

      <GrowthOverviewSection />

      <PackageFitSection />

      <ConnectBanner />

      <CtaBanner />
    </main>
  );
}
