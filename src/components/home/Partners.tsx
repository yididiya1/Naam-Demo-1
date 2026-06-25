import { Container } from "@/components/ui/Container";
import { partners } from "@/lib/site";

export function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="border-y border-brand-100 bg-white py-14">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Proudly supported by our partners &amp; sponsors
        </p>
      </Container>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-4">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex h-16 shrink-0 items-center rounded-2xl border border-brand-100 bg-cloud px-7 font-display text-base font-medium text-brand-800/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
