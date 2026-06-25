import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow mb-3 inline-flex items-center gap-2",
            light ? "text-gold-300" : "text-brand-600"
          )}
        >
          <span
            className={cn(
              "h-px w-7",
              light ? "bg-gold-300/70" : "bg-brand-400/60"
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          light ? "!text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/80" : "text-ink-soft"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
