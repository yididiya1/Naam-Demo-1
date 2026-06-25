import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";
import { programs, org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs & Services",
  description:
    "Eight connected programs supporting refugees and immigrants — employment, English, case management, wellness, youth, legal services, food, and financial literacy.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs & services"
        title="Everything a new American needs, in one place"
        lead="Our programs connect so people can move from their first English class to their first job, citizenship, and beyond — supported every step of the way."
        crumbs={[{ label: "Programs" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <Reveal key={program.slug} delay={(i % 3) * 0.07}>
                <Link
                  href={`/programs/${program.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={program.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 text-xl text-ink">{program.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {program.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Not sure where to start?"
        text="Reach out and our team will help you find the right program for your situation."
        actions={[
          { label: "Contact us", href: "/contact" },
          { label: "Donate now", href: org.donateUrl, variant: "white" },
        ]}
      />
    </>
  );
}
