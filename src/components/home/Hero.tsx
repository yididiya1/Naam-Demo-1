import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { org, heroV2 } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      {/* The photo runs full strength. The client asked that it not be darkened, so the
          message sits on its own panel rather than behind a wash over the whole image. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Members of the NAAM community gathered together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-xl rounded-3xl bg-white/95 p-8 shadow-soft sm:p-10">
          <h1 className="font-display text-3xl font-bold leading-[1.14] text-brand-800 sm:text-4xl lg:text-[2.6rem]">
            {heroV2.headline}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {heroV2.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
