import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { PricingCard } from "@/components/PricingCard";
import { getPackagesByStage, getStage } from "@/lib/packages";

export default function Stage1Page() {
  const stage = getStage("stage-1");
  const stagePackages = getPackagesByStage("stage-1");

  if (!stage) return null;

  return (
    <main>
      <PageIntro
        title={`Stage 1: ${stage.title}`}
        description={stage.subtitle}
      />
      <section className="bg-surface-alt pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-sm text-muted">
            <strong className="text-foreground">Ideal for:</strong> {stage.audience}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {stagePackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner showSalesMessage={false} />
    </main>
  );
}
