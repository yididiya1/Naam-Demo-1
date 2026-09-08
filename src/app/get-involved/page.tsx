import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";
import { involveCards, org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, donate goods, give, intern, or join our team. There are many meaningful ways to welcome new Americans.",
};

const ways = [
  { title: "Volunteer", text: "Mentor, tutor, drive, or share a skill.", href: "/get-involved/volunteer", icon: "hand-heart" },
  { title: "Internships & Service Learning", text: "Gain experience while making an impact.", href: "/get-involved/internships", icon: "graduation-cap" },
  { title: "Donate Goods", text: "Diapers, laptops, gift cards, and more.", href: "/get-involved/donate-goods", icon: "gift" },
  { title: "Careers", text: "Build a career with purpose at NAAM.", href: "/get-involved/careers", icon: "briefcase" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Be the welcome someone has been waiting for"
        lead="It takes a whole community to help a family start over. Find the way to help that fits you best."
        crumbs={[{ label: "Get Involved" }]}
        image="/images/cta-band.jpg"
      />

      {/* Three headline actions */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {involveCards.map((card, i) => {
              const external = card.href.startsWith("http");
              return (
                <Reveal key={card.title} delay={i * 0.08}>
                  <a
                    href={card.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-gold-600 transition-colors group-hover:bg-gold-300 group-hover:text-brand-900">
                      <Icon name={card.icon} className="h-7 w-7" />
                    </span>
                    <h2 className="mt-5 text-xl text-ink">{card.title}</h2>
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
        </Container>
      </section>

      {/* All ways to help */}
      <section className="bg-cloud py-16 sm:py-20">
        <Container>
          <h2 className="mb-8 text-2xl text-ink sm:text-3xl">More ways to help</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {ways.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className="group flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{w.title}</h3>
                  <p className="text-sm text-ink-soft">{w.text}</p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-brand-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        tone="gold"
        title="Prefer to give?"
        text="Every dollar funds language classes, legal help, and our food pantry, and stays close to home."
        actions={[{ label: "Make a donation", href: org.donateUrl, variant: "primary" }]}
      />
    </>
  );
}
