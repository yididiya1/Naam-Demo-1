import { ArrowRight, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { haitianStatement } from "@/lib/site";

export function HaitianStatement() {
  const { title, body, ctaLabel, ctaHref } = haitianStatement;

  return (
    <section className="bg-sky-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border-l-4 border-orange-400 bg-white p-8 shadow-card sm:p-10">
            <span className="eyebrow inline-flex items-center gap-2 text-brand-600">
              <Users className="h-4 w-4" strokeWidth={2.4} />
              A message from NAAM
            </span>

            <h2 className="mt-4 text-2xl leading-tight text-ink sm:text-3xl">
              {title}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{body}</p>

            <div className="mt-8">
              {ctaHref ? (
                <Button href={ctaHref} variant="primary" size="lg">
                  {ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              ) : (
                /* No statement URL supplied yet — show the button, don't ship a dead link. */
                <span
                  aria-disabled="true"
                  title="Full statement link pending from client"
                  className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-brand-600/40 px-7 py-3.5 text-base font-semibold text-white"
                >
                  {ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </span>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
