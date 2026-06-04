import { AudienceNotListedSection } from "@/components/AudienceNotListedSection";
import { AudienceStageBlock } from "@/components/AudienceStageBlock";
import { CtaBanner } from "@/components/CtaBanner";
import { audienceSegments, stages } from "@/lib/packages";

export default function AudiencePage() {
  return (
    <main className="overflow-x-hidden">
      {stages.map((stage, index) => (
        <AudienceStageBlock
          key={stage.id}
          stage={stage}
          segment={audienceSegments[index]}
          index={index}
          pageTitle={index === 0 ? "Target Audience" : undefined}
        />
      ))}

      <AudienceNotListedSection />

      <CtaBanner showSalesMessage={false} />
    </main>
  );
}
