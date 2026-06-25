import Image from "next/image";
import { ArrowRight, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { org, programs, stories } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Children from refugee and immigrant families smiling together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/92 via-brand-950/70 to-brand-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-gold-300 backdrop-blur">
            <Heart className="h-4 w-4" strokeWidth={2.4} />
            Welcome to NAAM
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Empowering every refugee &amp; immigrant to{" "}
            <span className="italic text-gold-300">thrive</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            From English classes and job training to legal help, wellness, and a
            culturally welcoming food pantry — we walk alongside newcomers as they
            build new lives across Massachusetts.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/programs" variant="gold" size="lg">
              Explore our programs
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href={org.donateUrl}
              size="lg"
              className="border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-brand-700"
            >
              Donate now
            </Button>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {stories.map((s) => (
                <span
                  key={s.name}
                  className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/90"
                >
                  <Image src={s.image} alt={s.name} fill className="object-cover" sizes="44px" />
                </span>
              ))}
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-300 text-sm font-bold text-brand-900 ring-2 ring-white/90">
                3k+
              </span>
            </div>
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">3,000+ neighbors</span>{" "}
              supported every year
            </p>
          </div>
        </div>
      </Container>

      {/* Floating program pills */}
      <Container className="relative pb-10 lg:pb-14">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
            <Users className="h-4 w-4 text-gold-300" /> We help with:
          </span>
          {programs.slice(0, 6).map((p) => (
            <a
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition-colors hover:border-gold-300 hover:bg-white/20"
            >
              {p.title}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
