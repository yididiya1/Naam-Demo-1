import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { programs, homepageProgramSlugs } from "@/lib/site";

/* The client asked for a 3x2 grid of six programs on the homepage.
   All eight program pages still exist and remain reachable from /programs. */
const featured = homepageProgramSlugs
  .map((slug) => programs.find((p) => p.slug === slug))
  .filter((p): p is (typeof programs)[number] => Boolean(p));

export function Programs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Programs & services"
            title="Everything a new American needs, in one place"
            description="Connected programs meet people wherever they are on the journey — from their first English class to their first job, citizenship, and beyond."
          />
          <Button href="/programs" variant="ghost" size="md" className="shrink-0">
            View all programs
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((program, i) => (
            <Reveal key={program.slug} delay={(i % 3) * 0.07}>
              <Link
                href={`/programs/${program.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={program.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl text-ink">{program.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {program.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
