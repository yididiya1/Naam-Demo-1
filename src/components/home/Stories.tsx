import Image from "next/image";
import { Quote, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { stories } from "@/lib/site";

export function Stories() {
  return (
    <section className="bg-cloud py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real impact"
          title="Making a difference, one story at a time"
          description="Behind every statistic is a person rebuilding a life. Here are a few of the neighbors we're proud to know."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((story, i) => (
            <Reveal key={story.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                    <MapPin className="h-3 w-3" /> {story.origin}
                  </span>
                </div>
                <figcaption className="flex flex-1 flex-col p-6">
                  <Quote className="h-8 w-8 text-gold-300" />
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

        <div className="mt-12 text-center">
          <Button href="/about/who-we-serve" variant="outline" size="lg">
            Hear more stories
          </Button>
        </div>
      </Container>
    </section>
  );
}
