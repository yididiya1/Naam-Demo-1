// Stylized re-creation of the NAAM logo mark (sun + figures + bridge),
// usable on any background via currentColor + an explicit sun color.
export function BrandMark({
  className,
  sun = "#F9C05A",
}: {
  className?: string;
  sun?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="12" r="6" fill={sun} />
      <path
        d="M10 38c0-9 5-16 8-20 2 4 3 8 3 12"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M38 38c0-9-5-16-8-20-2 4-3 8-3 12"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M6 40c6-3.5 12-5.2 18-5.2S36 36.5 42 40"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
