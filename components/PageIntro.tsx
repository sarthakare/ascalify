type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="text-3xl font-black text-foreground md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
        {description}
      </p>
    </div>
  );
}
