import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SplitFeature, IconCards } from "@/components/ui/blocks";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Internships & Service Learning",
  description:
    "Students and emerging professionals gain hands-on experience while supporting refugees and immigrants at NAAM.",
};

const tracks = [
  { icon: "languages", title: "ESOL & education", text: "Support classrooms, tutor learners, and develop curriculum materials." },
  { icon: "briefcase", title: "Employment services", text: "Help with résumés, job coaching, and employer outreach." },
  { icon: "compass", title: "Case management", text: "Shadow case managers and assist with client navigation and intake." },
  { icon: "heart-pulse", title: "Wellness & youth", text: "Support group facilitation, youth programming, and family services." },
  { icon: "scale", title: "Immigration legal", text: "Assist with citizenship preparation and legal services administration." },
  { icon: "hand-heart", title: "Community outreach", text: "Help with events, communications, and partner relationships." },
];

export default function InternshipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Internships & service learning"
        title="Learn by serving your community"
        lead="We partner with students and emerging professionals who want real, meaningful experience while making a tangible difference for new Americans."
        crumbs={[
          { label: "Get Involved", href: "/get-involved" },
          { label: "Internships & Service Learning" },
        ]}
        image="/images/casework.jpg"
      />

      <SplitFeature
        eyebrow="Why intern with NAAM"
        title="Mentorship, impact, and growth"
        body={[
          "Interns and service-learning students work side by side with experienced staff, gaining a front-row view of nonprofit work and direct service to refugees and immigrants.",
          "We tailor placements to your field of study and career goals, and we'll gladly coordinate with your school or program on requirements and hours.",
        ]}
        bullets={[
          "Placements across all program areas",
          "Flexible terms to fit academic calendars",
          "Supervision, mentorship, and references",
        ]}
        image="/images/employment.jpg"
        imageSide="right"
      />

      <IconCards
        tone="cloud"
        eyebrow="Placement areas"
        title="Where you might serve"
        items={tracks}
        columns={3}
      />

      <CTABand
        tone="gold"
        title="Interested in an internship?"
        text="Tell us about your interests and availability, and we'll help find the right placement."
        actions={[{ label: "Get in touch", href: "/contact", variant: "primary" }]}
      />
    </>
  );
}
