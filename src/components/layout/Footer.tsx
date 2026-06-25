import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { org, nav, socials, locations, hours } from "@/lib/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { Container } from "@/components/ui/Container";
import { socialIconMap } from "@/components/ui/SocialIcons";

export function Footer() {
  const linkColumns = nav.filter((n) => n.children).slice(0, 3);

  return (
    <footer className="bg-brand-950 text-white/75">
      {/* Newsletter strip */}
      <Container>
        <div className="-mb-12 translate-y-[-50%] rounded-3xl bg-gradient-to-r from-brand-600 to-sky-600 px-6 py-8 shadow-soft sm:px-10 sm:py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-md">
              <h3 className="text-2xl !text-white sm:text-3xl">Stay connected</h3>
              <p className="mt-2 text-white/80">
                Get stories, events, and ways to help — straight to your inbox.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2" action="#">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border-0 bg-white/95 px-5 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold-300"
              />
              <button
                type="submit"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-300 text-brand-900 transition-colors hover:bg-gold-400"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </Container>

      <Container className="pt-28 pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 text-white">
              <BrandMark className="h-10 w-10" />
              <span className="font-display text-lg font-semibold leading-tight">
                New American Association
                <span className="block text-sm font-normal text-white/60">
                  of Massachusetts
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {org.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => {
                const SocialIcon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-gold-300 hover:text-brand-900"
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.label}>
              <h4 className="text-sm font-semibold uppercase tracking-wider !text-white">
                {col.label}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.children!.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="text-white/70 transition-colors hover:text-gold-300"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Visit */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider !text-white">
              Visit Us
            </h4>
            <ul className="mt-4 space-y-4 text-sm">
              {locations.map((loc) => (
                <li key={loc.name} className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span className="text-white/70">
                    <span className="font-medium text-white">{loc.name}</span>
                    <br />
                    {loc.address}, {loc.city}
                  </span>
                </li>
              ))}
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href={org.phoneHref} className="text-white/70 hover:text-gold-300">
                  {org.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="text-white/70">
                  {hours[0].days}: {hours[0].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {2026} {org.name}. All rights reserved.</p>
          <p>
            A 501(c)(3) nonprofit · Lynn · Lowell · Newburyport, Massachusetts
          </p>
        </div>
      </Container>
    </footer>
  );
}
