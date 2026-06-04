import { Card } from "@/components/ui/card";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <Card key={faq.question} className="overflow-hidden">
          <details className="group p-5">
            <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-brand transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
          </details>
        </Card>
      ))}
    </div>
  );
}
