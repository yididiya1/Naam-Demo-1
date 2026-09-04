import type { Metadata } from "next";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { news, org, type NewsItem } from "@/lib/site";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Awards, media coverage, and community gatherings from across NAAM's offices in Lynn, Lowell, and Newburyport.",
};

function NewsCard({ item, delay = 0 }: { item: NewsItem; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white transition-all hover:-translate-y-1 hover:shadow-card">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
            {item.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-1.5 text-xs text-ink-soft">
            <Calendar className="h-3.5 w-3.5 text-brand-500" /> {item.date}
          </p>
          <h3 className="mt-2 text-lg leading-snug text-ink">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
            {item.excerpt}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function NewsPage() {
  // Client structure: the three most recent items across the top, older items below.
  const latest = news.slice(0, 3);
  const older = news.slice(3);

  return (
    <>
      <PageHeader
        eyebrow="News & events"
        title="Stories from the New American Center"
        lead="Awards, media coverage, and community gatherings that celebrate the people and partners who make our work possible."
        crumbs={[{ label: "News & Events" }]}
      />

      {/* Most recent — three frames */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="mb-10 text-2xl text-ink sm:text-3xl">Latest news</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((item, i) => (
              <NewsCard key={item.title} item={item} delay={i * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      {/* Older items, below the latest three */}
      {older.length > 0 && (
        <section className="bg-cloud-warm py-16 sm:py-20">
          <Container>
            <h2 className="mb-10 text-2xl text-ink sm:text-3xl">Previous news</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {older.map((item, i) => (
                <NewsCard key={item.title} item={item} delay={i * 0.08} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand
        tone="gold"
        title="Be part of the next story"
        text="Your support and time help write the next chapter for a new American family."
        actions={[
          { label: "Get involved", href: "/get-involved", variant: "primary" },
          { label: "Donate", href: org.donateUrl, variant: "outline" },
        ]}
      />
    </>
  );
}
