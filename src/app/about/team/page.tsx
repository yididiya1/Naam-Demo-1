import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind NAAM — many of whom are immigrants and refugees themselves, bringing lived experience and deep cultural competence.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="The people who make the welcome real"
        lead="With deep cultural competence and a shared commitment to economic stability, education, and community integration — many of our staff have walked this journey themselves."
        crumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
      />

      {team.map((group, gi) => (
        <section
          key={group.department}
          className={gi % 2 === 0 ? "bg-white py-16 sm:py-20" : "bg-cloud py-16 sm:py-20"}
        >
          <Container>
            <h2 className="mb-10 text-2xl text-ink sm:text-3xl">{group.department}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((m, i) => (
                <Reveal key={m.name} delay={(i % 3) * 0.07}>
                  <figure className="group h-full overflow-hidden rounded-3xl border border-brand-100 bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="p-6">
                      <h3 className="text-lg text-ink">{m.name}</h3>
                      <p className="text-sm font-semibold text-brand-600">{m.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CTABand
        tone="gold"
        title="Want to join our mission?"
        text="We're always looking for staff and volunteers who share our commitment to welcoming new Americans."
        actions={[
          { label: "View careers", href: "/get-involved/careers", variant: "primary" },
          { label: "Volunteer", href: "/get-involved/volunteer", variant: "outline" },
        ]}
      />
    </>
  );
}
