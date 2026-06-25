import type { Metadata } from "next";
import { MapPin, Briefcase, Mail } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCards } from "@/components/ui/blocks";
import { CTABand } from "@/components/ui/CTABand";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career with purpose at NAAM. Explore open roles supporting refugees and immigrants across Massachusetts.",
};

const perks = [
  { icon: "heart-handshake", title: "Mission-driven work", text: "Every role directly improves the lives of new Americans." },
  { icon: "languages", title: "A multicultural team", text: "Work alongside colleagues from around the world who speak many languages." },
  { icon: "compass", title: "Room to grow", text: "Professional development and pathways to advance within the organization." },
];

const openings = [
  { title: "Employment Specialist", location: "Lynn, MA", type: "Full-time" },
  { title: "ESOL Instructor", location: "Lynn / Lowell, MA", type: "Part-time" },
  { title: "Case Manager", location: "Lowell, MA", type: "Full-time" },
  { title: "Youth Program Coordinator", location: "Newburyport, MA", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build a career with purpose"
        lead="Join a team that turns up every day to welcome new Americans. Many of our staff bring their own immigrant and refugee experience to the work."
        crumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Careers" }]}
        image="/images/casework.jpg"
      />

      <IconCards
        eyebrow="Why work here"
        title="More than a job"
        items={perks}
        columns={3}
      />

      <section className="bg-cloud py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Open positions" title="Current openings" />
          <div className="mt-8 space-y-3">
            {openings.map((job, i) => (
              <Reveal
                key={job.title}
                delay={i * 0.05}
                className="flex flex-col gap-3 rounded-2xl border border-brand-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{job.title}</h3>
                    <p className="flex items-center gap-1.5 text-sm text-ink-soft">
                      <MapPin className="h-3.5 w-3.5" /> {job.location} · {job.type}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${org.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Mail className="h-4 w-4" /> Apply
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Don&apos;t see the right fit? Send your résumé to{" "}
            <a href={`mailto:${org.email}`} className="font-medium text-brand-600 hover:underline">
              {org.email}
            </a>{" "}
            and we&apos;ll keep you in mind.
          </p>
        </Container>
      </section>

      <CTABand
        tone="gold"
        title="Not ready to apply, but want to help?"
        text="Volunteering is a wonderful way to get to know our work and our community."
        actions={[{ label: "Explore volunteering", href: "/get-involved/volunteer", variant: "primary" }]}
      />
    </>
  );
}
