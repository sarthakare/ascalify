import { AudienceColumn } from "@/components/AudienceColumn";
import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { audienceSegments } from "@/lib/packages";

export default function AudiencePage() {
  return (
    <main>
      <PageIntro
        title="Target Audience"
        description="Ascalify packages are designed for businesses at every stage — from solo professionals to enterprise teams."
      />

      <section className="bg-surface-alt pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {audienceSegments.map((segment) => (
              <AudienceColumn
                key={segment.priceBand}
                priceBand={segment.priceBand}
                personas={segment.personas}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
