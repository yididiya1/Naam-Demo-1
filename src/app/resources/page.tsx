import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";
import { resourceGroups } from "@/lib/content";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Resources",
  description:
    "A curated directory of healthcare, food, childcare, crisis support, behavioral health, and housing resources across the North Shore.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community resources"
        title="Trusted help, all in one place"
        lead="Beyond our own programs, here are vetted local resources for healthcare, food, childcare, safety, mental health, and housing across the North Shore."
        crumbs={[{ label: "Community Resources" }]}
      />

      {/* Quick jump nav */}
      <section className="border-b border-brand-100 bg-white py-6">
        <Container>
          <div className="flex flex-wrap gap-2">
            {resourceGroups.map((g) => (
              <a
                key={g.title}
                href={`#${slug(g.title)}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-cloud px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <Icon name={g.icon} className="h-4 w-4" />
                {g.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cloud-warm py-16 sm:py-20">
        <Container>
          <div className="space-y-12">
            {resourceGroups.map((group) => (
              <Reveal key={group.title} id={slug(group.title)} className="scroll-mt-28">
                <div className="rounded-3xl border border-brand-100 bg-white p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon name={group.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-2xl text-ink">{group.title}</h2>
                      <p className="mt-1 text-ink-soft">{group.blurb}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-brand-100 bg-cloud p-4"
                      >
                        <h3 className="font-semibold text-ink">{item.name}</h3>
                        <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Can't find what you need?"
        text="Our case managers can help connect you to the right resource. Reach out any time."
        actions={[
          { label: "Contact us", href: "/contact" },
          { label: `Call ${org.phone}`, href: org.phoneHref, variant: "white" },
        ]}
      />
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
