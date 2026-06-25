import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { involveCards } from "@/lib/site";

export function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-800 px-6 py-14 sm:px-12 sm:py-16">
          {/* Background image */}
          <div className="absolute inset-0 -z-0 opacity-25">
            <Image
              src="/images/cta-band.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800/90 to-brand-800/60" />
          </div>

          <div className="relative">
            <SectionHeading
              align="center"
              light
              eyebrow="Get involved"
              title="Be the welcome someone has been waiting for"
              description="It takes a whole community to help a family start over. Here are three meaningful ways to be part of it."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {involveCards.map((card, i) => {
                const external = card.href.startsWith("http");
                return (
                  <Reveal key={card.title} delay={i * 0.08}>
                    <a
                      href={card.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex h-full flex-col rounded-3xl bg-white/95 p-7 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-white"
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-gold-600 transition-colors group-hover:bg-gold-300 group-hover:text-brand-900">
                        <Icon name={card.icon} className="h-7 w-7" />
                      </span>
                      <h3 className="mt-5 text-xl text-ink">{card.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                        {card.blurb}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                        {card.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
