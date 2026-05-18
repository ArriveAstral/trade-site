type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-gray-500">{description}</p>
      ) : null}
    </div>
  );
}
