import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

/* Two-column image + text, alternating side */
export function SplitFeature({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageSide = "left",
  tone = "white",
}: {
  eyebrow?: string;
  title: string;
  body?: string | string[];
  bullets?: string[];
  image: string;
  imageSide?: "left" | "right";
  tone?: "white" | "cloud" | "warm";
}) {
  const bg =
    tone === "cloud" ? "bg-cloud" : tone === "warm" ? "bg-cloud-warm" : "bg-white";
  const paras = Array.isArray(body) ? body : body ? [body] : [];
  return (
    <section className={cn(bg, "py-16 sm:py-20")}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal
            className={cn(
              "relative",
              imageSide === "right" && "lg:order-2"
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image src={image} alt={title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} />
            {paras.map((p, i) => (
              <p key={i} className="mt-4 text-ink-soft leading-relaxed">
                {p}
              </p>
            ))}
            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b, i) => (
                  <Reveal as="li" key={b} delay={i * 0.06} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-ink-soft">{b}</span>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Grid of icon cards */
export type IconCardItem = { icon?: string; title: string; text: string };

export function IconCards({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  tone = "white",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: IconCardItem[];
  columns?: 2 | 3 | 4;
  tone?: "white" | "cloud" | "warm";
}) {
  const bg =
    tone === "cloud" ? "bg-cloud" : tone === "warm" ? "bg-cloud-warm" : "bg-white";
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section className={cn(bg, "py-16 sm:py-20")}>
      <Container>
        {(title || eyebrow) && (
          <SectionHeading
            align="center"
            className="mb-12"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        )}
        <div className={cn("grid gap-5", cols)}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % columns) * 0.07}>
              <div className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-6">
                {item.icon && (
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                )}
                <h3 className="text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* Simple prose block with optional checklist */
export function ProseBlock({
  eyebrow,
  title,
  paragraphs,
  bullets,
  tone = "white",
}: {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  tone?: "white" | "cloud" | "warm";
}) {
  const bg =
    tone === "cloud" ? "bg-cloud" : tone === "warm" ? "bg-cloud-warm" : "bg-white";
  return (
    <section className={cn(bg, "py-16 sm:py-20")}>
      <Container className="max-w-3xl">
        {(title || eyebrow) && (
          <SectionHeading eyebrow={eyebrow} title={title} />
        )}
        <div className="mt-5 space-y-4">
          {paragraphs?.map((p, i) => (
            <p key={i} className="text-ink-soft leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-ink-soft">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
