import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { programs } from "@/lib/site";

export function Programs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Programs & services"
            title="Everything a new American needs, in one place"
            description="Eight connected programs meet people wherever they are on the journey — from their first English class to their first job, citizenship, and beyond."
          />
          <Button href="/programs" variant="ghost" size="md" className="shrink-0">
            View all programs
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <Reveal key={program.slug} delay={(i % 4) * 0.07}>
              <Link
                href={`/programs/${program.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={program.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl text-ink">{program.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {program.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
