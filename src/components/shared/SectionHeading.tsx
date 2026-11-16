interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
  description?: string;
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  description,
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${tone} ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
