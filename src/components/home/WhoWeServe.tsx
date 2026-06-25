import { Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { populations, regions, org } from "@/lib/site";

export function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white sm:py-28">
      {/* soft brand glows */}
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-300/15 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              light
              eyebrow="Who we serve"
              title="Open doors for people from every corner of the world"
              description="No matter where someone began their journey or what brought them here, our wraparound services meet them with dignity and respect."
            />
            <div className="mt-8">
              <Button href="/about/who-we-serve" variant="gold" size="lg">
                Learn who we serve
              </Button>
            </div>

            <div className="mt-10">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-300">
                <Globe className="h-4 w-4" /> Communities from
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-white/85"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Populations pills */}
          <Reveal className="lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              The people we walk alongside
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {populations.map((p, i) => (
                <span
                  key={p}
                  className={
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
                    (i % 3 === 0
                      ? "border-gold-300/40 bg-gold-300/10 text-gold-200"
                      : "border-white/20 bg-white/5 text-white/90 hover:bg-white/10")
                  }
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/60">
              Questions about eligibility? Call us at{" "}
              <a href={org.phoneHref} className="font-medium text-gold-300 hover:underline">
                {org.phone}
              </a>{" "}
              — interpretation is available in many languages.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
