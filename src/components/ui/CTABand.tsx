import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "gold" | "white" | "outline";
};

export function CTABand({
  title,
  text,
  actions,
  tone = "blue",
}: {
  title: string;
  text?: string;
  actions: Action[];
  tone?: "blue" | "gold";
}) {
  const isGold = tone === "gold";
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal
          className={
            "relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-center sm:px-12 sm:py-16 " +
            (isGold
              ? "bg-gradient-to-br from-gold-300 to-gold-400"
              : "bg-gradient-to-br from-brand-700 to-brand-900")
          }
        >
          <div
            className={
              "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl " +
              (isGold ? "bg-white/30" : "bg-sky-500/25")
            }
          />
          <h2
            className={
              "relative mx-auto max-w-2xl text-3xl sm:text-4xl " +
              (isGold ? "!text-brand-900" : "!text-white")
            }
          >
            {title}
          </h2>
          {text && (
            <p
              className={
                "relative mx-auto mt-4 max-w-xl text-lg " +
                (isGold ? "text-brand-900/80" : "text-white/80")
              }
            >
              {text}
            </p>
          )}
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((a) => (
              <Button
                key={a.label}
                href={a.href}
                size="lg"
                variant={a.variant ?? (isGold ? "primary" : "gold")}
              >
                {a.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
