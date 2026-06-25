import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "Founded in 1990, rebranded as NAAM in 2018",
  "90% of those we serve are refugees, 10% immigrants",
  "Wraparound support, all under one roof",
];

export function MissionIntro() {
  return (
    <section className="bg-cloud-warm py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft sm:aspect-[5/4]">
              <Image
                src="/images/community.jpg"
                alt="NAAM staff and community members together"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-2 w-44 rounded-2xl bg-brand-600 p-5 text-white shadow-soft sm:-right-6">
              <p className="font-display text-3xl font-semibold text-gold-300">35+</p>
              <p className="mt-1 text-sm leading-snug text-white/85">
                years welcoming new Americans
              </p>
            </div>
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-full bg-gold-300/30 blur-2xl sm:block" />
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A welcome that lasts well beyond arrival"
              description="NAAM helps newly arriving refugees and immigrants integrate into American society — promoting economic stability, building bridges with the wider community, and honoring the cultural identities people carry with them."
            />
            <ul className="mt-8 space-y-3">
              {points.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 0.08} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-ink-soft">{point}</span>
                </Reveal>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/about" variant="primary" size="lg">
                More about us
              </Button>
              <Button href="/about/who-we-serve" variant="outline" size="lg">
                Who we serve
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
