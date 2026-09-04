import { ArrowRight, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { haitianStatement } from "@/lib/site";

export function HaitianStatement() {
  const {
    title,
    kicker,
    date,
    paragraphs,
    signatory,
    ctaLabel,
    ctaHref,
    languagesNote,
  } = haitianStatement;

  return (
    <section className="bg-sky-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border-l-4 border-orange-400 bg-white p-8 shadow-card sm:p-10">
            <span className="eyebrow inline-flex items-center gap-2 text-brand-600">
              <Users className="h-4 w-4" strokeWidth={2.4} />
              {kicker}
            </span>

            <h2 className="mt-4 text-2xl leading-tight text-ink sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm font-medium text-ink-soft">{date}</p>

            <div className="mt-6 space-y-4">
              {paragraphs.map((para) => (
                <p key={para.slice(0, 40)} className="text-lg leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
            </div>

            <p className="mt-6 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{signatory.name}</span>
              {" · "}
              {signatory.role}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaLabel}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <span className="text-sm text-ink-soft">{languagesNote}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
