import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { org, heroV2 } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Members of the NAAM community gathered together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Client asked that the photo NOT be darkened. This is a light scrim —
            it brightens the left side for legibility instead of dimming the image. */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl font-semibold leading-[1.12] text-brand-900 sm:text-4xl lg:text-5xl">
            {heroV2.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {heroV2.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/programs" variant="primary" size="lg">
              Explore our programs
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href={org.donateUrl} variant="gold" size="lg">
              Donate now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
