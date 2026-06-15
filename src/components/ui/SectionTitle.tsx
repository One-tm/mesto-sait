type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-mint-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
