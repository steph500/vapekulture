type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.34em] text-teal">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}
