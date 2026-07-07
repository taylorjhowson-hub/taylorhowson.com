type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-[800px] ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="eyebrow mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-slate-950 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
