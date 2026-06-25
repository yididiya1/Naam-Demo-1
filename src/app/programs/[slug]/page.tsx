import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SplitFeature, IconCards, ProseBlock } from "@/components/ui/blocks";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { programDetails } from "@/lib/content";
import { programs, org } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(programDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = programDetails[slug];
  if (!p) return {};
  return { title: p.overview.eyebrow, description: p.lead };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programDetails[slug];
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow={program.overview.eyebrow}
        title={program.title}
        lead={program.lead}
        image={program.heroImage}
        crumbs={[{ label: "Programs", href: "/programs" }, { label: program.overview.eyebrow }]}
      />

      <SplitFeature
        eyebrow={program.overview.eyebrow}
        title={program.overview.title}
        body={program.overview.paragraphs}
        bullets={program.overview.bullets}
        image={program.overview.image}
        imageSide="right"
      />

      {program.services && (
        <IconCards
          tone="cloud"
          eyebrow={program.services.eyebrow}
          title={program.services.title}
          description={program.services.description}
          items={program.services.items}
          columns={program.services.items.length === 4 ? 4 : 3}
        />
      )}

      {program.extra && (
        <ProseBlock
          eyebrow={program.extra.eyebrow}
          title={program.extra.title}
          paragraphs={program.extra.paragraphs}
          bullets={program.extra.bullets}
        />
      )}

      {/* Explore more programs */}
      <section className="bg-cloud-warm py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl text-ink sm:text-3xl">Explore more programs</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{p.title}</span>
                <ArrowRight className="ml-auto h-4 w-4 text-brand-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        tone="gold"
        title="Ready to take the next step?"
        text="Whether you need this service or want to support it, we'd love to hear from you."
        actions={[
          { label: "Get in touch", href: "/contact", variant: "primary" },
          { label: "Donate", href: org.donateUrl, variant: "outline" },
        ]}
      />
    </>
  );
}
