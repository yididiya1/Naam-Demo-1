import type { Metadata } from "next";
import Image from "next/image";
import { Globe, MapPin, Quote } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { populations, regions, stories, org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "NAAM serves refugees, asylees, SIV holders, parolees, trafficking survivors, and immigrants from every corner of the world.",
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we serve"
        title="Empowering immigrants and refugees across Massachusetts"
        lead="No matter where someone began their journey, our wraparound services meet them with dignity, respect, and a genuine welcome."
        crumbs={[{ label: "About", href: "/about" }, { label: "Who We Serve" }]}
        image="/images/english-class.jpg"
      />

      {/* Commitment */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Our commitment to inclusivity"
            title="A welcome for everyone"
          />
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            We are dedicated to comprehensive support and cultural diversity. Our
            wraparound services include language training, employment assistance,
            legal aid, wellness, and more, designed to meet the real needs of the
            people we serve.
          </p>
        </Container>
      </section>

      {/* Populations + regions */}
      <section className="relative overflow-hidden bg-brand-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-300">
                The people we walk alongside
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {populations.map((p, i) => (
                  <span
                    key={p}
                    className={
                      "rounded-full border px-4 py-2 text-sm font-medium " +
                      (i % 3 === 0
                        ? "border-gold-300/40 bg-gold-300/10 text-gold-200"
                        : "border-white/20 bg-white/5 text-white/90")
                    }
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-300">
                <Globe className="h-4 w-4" /> Communities from
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stories */}
      <section className="bg-cloud py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            className="mb-12"
            eyebrow="In their words"
            title="Lives rebuilt, futures reclaimed"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story, i) => (
              <Reveal key={story.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
                      <MapPin className="h-3 w-3" /> {story.origin}
                    </span>
                  </div>
                  <figcaption className="flex flex-1 flex-col p-6">
                    <Quote className="h-7 w-7 text-gold-300" />
                    <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                      “{story.quote}”
                    </blockquote>
                    <p className="mt-5 font-display text-lg font-semibold text-ink">
                      {story.name}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Questions about eligibility?"
        text="Call us. Interpretation is available in many languages, and we're glad to help you understand your options."
        actions={[
          { label: `Call ${org.phone}`, href: org.phoneHref },
          { label: "Contact us", href: "/contact", variant: "white" },
        ]}
      />
    </>
  );
}
