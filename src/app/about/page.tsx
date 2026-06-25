import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { IconCards } from "@/components/ui/blocks";
import { CTABand } from "@/components/ui/CTABand";
import { CountUp } from "@/components/ui/CountUp";
import { aboutContent } from "@/lib/content";
import { stats, org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Since 1990, NAAM has welcomed refugees and immigrants to Massachusetts — promoting stability, building bridges, and honoring cultural identity.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="A welcome that lasts well beyond arrival"
        lead="The New American Association of Massachusetts has spent more than three decades helping newcomers build new lives — with dignity, opportunity, and community."
        crumbs={[{ label: "About" }]}
        image="/images/community.jpg"
      />

      {/* Mission */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <span className="eyebrow text-brand-600">Our mission</span>
          <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
            “{aboutContent.mission}”
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-brand-900 py-14 text-white">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <dt className="font-display text-4xl font-semibold text-gold-300 sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mx-auto mt-2 max-w-[12rem] text-sm text-white/75">
                  {stat.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-cloud-warm py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            className="mb-14"
            eyebrow="Our story"
            title="From a community association to a statewide welcome"
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-brand-100 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {aboutContent.timeline.map((item, i) => (
                <Reveal
                  key={item.year}
                  delay={i * 0.05}
                  className={`relative flex gap-6 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white sm:left-auto ${
                      i % 2 === 0 ? "sm:-right-5" : "sm:-left-5"
                    }`}
                  >
                    {item.year.slice(2)}
                  </span>
                  <div className="ml-16 sm:ml-0">
                    <p className="font-display text-sm font-semibold text-brand-600">
                      {item.year}
                    </p>
                    <h3 className="mt-1 text-lg text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <IconCards
        eyebrow="What we believe"
        title="The values behind our work"
        items={aboutContent.values}
        columns={4}
      />

      <CTABand
        title="Meet the people behind NAAM"
        text="Many of our team members are themselves immigrants and refugees who understand the journey firsthand."
        actions={[
          { label: "Our team", href: "/about/team" },
          { label: "Who we serve", href: "/about/who-we-serve", variant: "white" },
        ]}
      />
    </>
  );
}
