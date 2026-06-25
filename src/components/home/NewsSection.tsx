import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { news } from "@/lib/site";

export function NewsSection() {
  return (
    <section className="bg-cloud-warm py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="News & events"
            title="The latest from NAAM"
            description="Awards, media coverage, and community gatherings from across our offices."
          />
          <Button href="/news" variant="ghost" size="md" className="shrink-0">
            All news & events
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link
                href="/news"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-ink-soft">
                    <Calendar className="h-3.5 w-3.5 text-brand-500" /> {item.date}
                  </p>
                  <h3 className="mt-2 text-lg leading-snug text-ink transition-colors group-hover:text-brand-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Read more
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
