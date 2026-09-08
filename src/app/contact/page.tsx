import type { Metadata } from "next";
import { MapPin, Phone, Mail, Printer, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { org, locations, hours } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Locations",
  description:
    "Get in touch with NAAM. Visit our offices in Lynn and Lowell, call, email, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="We'd love to hear from you"
        lead="Whether you need services, want to volunteer, or have a question, reach out. Interpretation is available in many languages."
        crumbs={[{ label: "Contact" }]}
      />

      {/* Quick contact tiles */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: Phone, label: "Call us", value: org.phone, href: org.phoneHref },
              { icon: Mail, label: "Email us", value: org.email, href: `mailto:${org.email}` },
              { icon: Printer, label: "Fax", value: org.fax },
            ].map((t, i) => (
              <Reveal
                key={t.label}
                delay={i * 0.07}
                className="rounded-3xl border border-brand-100 bg-cloud p-6 text-center"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white">
                  <t.icon className="h-6 w-6" />
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand-600">
                  {t.label}
                </p>
                {t.href ? (
                  <a href={t.href} className="mt-1 block text-lg font-medium text-ink hover:text-brand-700">
                    {t.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-medium text-ink">{t.value}</p>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + locations */}
      <section className="bg-cloud py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Send a message" title="How can we help?" />
              <div className="mt-8 rounded-3xl border border-brand-100 bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Visit us" title="Our offices" />
              <div className="mt-8 space-y-5">
                {locations.map((loc) => (
                  <div key={loc.name} className="rounded-3xl border border-brand-100 bg-white p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg text-ink">{loc.name}</h3>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                        {loc.label}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                      <li className="flex gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span>
                          {loc.address}
                          <br />
                          {loc.city}
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <a href={loc.phoneHref} className="hover:text-brand-700">
                          {loc.phone}
                        </a>
                      </li>
                    </ul>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `${loc.address}, ${loc.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-brand-600 hover:underline"
                    >
                      Get directions →
                    </a>
                  </div>
                ))}

                <div className="rounded-3xl border border-brand-100 bg-white p-6">
                  <h3 className="flex items-center gap-2 text-lg text-ink">
                    <Clock className="h-5 w-5 text-brand-500" /> Hours
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                    {hours.map((h) => (
                      <li key={h.days} className="flex justify-between">
                        <span>{h.days}</span>
                        <span className="font-medium text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
