import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

export function StatsBand() {
  return (
    <section className="relative z-10 -mt-px bg-white py-14 sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="text-center lg:border-r lg:border-brand-100 lg:last:border-r-0"
            >
              <dt className="font-display text-4xl font-semibold text-brand-600 sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="mx-auto mt-2 max-w-[12rem] text-sm font-medium text-ink-soft">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
