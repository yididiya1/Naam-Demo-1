"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { nav, org, socials } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { socialIconMap } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav */}
      <div
        className={cn(
          "border-b border-transparent bg-white/95 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_8px_30px_-12px_rgba(20,35,61,0.18)]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center" aria-label={org.name}>
            <Image
              src="/images/naam-logo.png"
              alt={org.name}
              width={300}
              height={83}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {item.children && openGroup === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-64 overflow-hidden rounded-2xl border border-brand-100 bg-white p-2 shadow-soft">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Social links live in the main nav (top banner removed) */}
            <div className="hidden items-center gap-1 lg:flex">
              {socials.map((s) => {
                const SocialIcon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-9 w-9 place-items-center rounded-full text-brand-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <span className="hidden sm:block">
              <Button href={org.donateUrl} variant="gold" size="md">
                Donate Now
              </Button>
            </span>
            <div className="lg:hidden">
              <button
                onClick={() => setMobileOpen(true)}
                className="grid h-11 w-11 place-items-center rounded-full border border-brand-100 text-brand-700"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-soft">
            <div className="flex items-center justify-between border-b border-brand-100 px-5 py-4">
              <Image src="/images/naam-logo.png" alt={org.name} width={300} height={83} className="h-9 w-auto" />
              <button
                onClick={() => setMobileOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-brand-100 text-brand-700"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 px-3 py-4">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-brand-50 py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 rounded-xl px-3 py-3 font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() =>
                          setOpenGroup(openGroup === item.label ? null : item.label)
                        }
                        className="grid h-9 w-9 place-items-center text-brand-600"
                        aria-label={`Toggle ${item.label}`}
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            openGroup === item.label && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && openGroup === item.label && (
                    <div className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:text-brand-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="border-t border-brand-100 p-5">
              <Button href={org.donateUrl} variant="gold" size="lg" className="w-full">
                Donate Now
              </Button>
              <div className="mt-4 space-y-1 text-sm text-ink-soft">
                <a href={org.phoneHref} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-600" /> {org.phone}
                </a>
                <a href={`mailto:${org.email}`} className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-600" /> {org.email}
                </a>
              </div>
              <div className="mt-4 flex gap-2">
                {socials.map((s) => {
                  const SocialIcon = socialIconMap[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid h-10 w-10 place-items-center rounded-full border border-brand-100 text-brand-700"
                    >
                      <SocialIcon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
