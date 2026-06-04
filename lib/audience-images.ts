import type { StageId } from "@/lib/packages";

export const audienceStageImages: Record<
  StageId,
  { src: string; alt: string }
> = {
  "stage-1": {
    src: "/ascalify-audience-stage-1.png",
    alt: "Freelancers and small local businesses collaborating on a new website",
  },
  "stage-2": {
    src: "/ascalify-audience-stage-2.png",
    alt: "Growing business team reviewing analytics and website performance",
  },
  "stage-3": {
    src: "/ascalify-audience-stage-3.png",
    alt: "Enterprise professionals working with advanced platform dashboards",
  },
};
