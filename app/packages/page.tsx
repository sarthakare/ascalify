import { CtaBanner } from "@/components/CtaBanner";
import { PackagesStageBlock } from "@/components/PackagesStageBlock";
import { getPackagesByStage, stages } from "@/lib/packages";

export default function PackagesPage() {
  return (
    <main className="overflow-x-hidden">
      {stages.map((stage, index) => (
        <PackagesStageBlock
          key={stage.id}
          stage={stage}
          stagePackages={getPackagesByStage(stage.id)}
          index={index}
          pageTitle={index === 0 ? "Website Plans & Pricing" : undefined}
        />
      ))}

      <CtaBanner showSalesMessage={false} />
    </main>
  );
}
