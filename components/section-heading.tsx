type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto mb-12 max-w-2xl text-center md:mb-16" : "mb-12 max-w-2xl md:mb-16"}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="muted mt-5 text-base leading-7">{description}</p>}
    </div>
  );
}
