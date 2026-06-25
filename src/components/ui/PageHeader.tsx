import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-900/70" />
        </div>
      )}
      {!image && (
        <>
          <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold-300/15 blur-3xl" />
        </>
      )}

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
          <Link href="/" className="hover:text-gold-300">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.href ? (
                <Link href={c.href} className="hover:text-gold-300">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <span className="eyebrow mt-6 inline-block text-gold-300">{eyebrow}</span>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p>
        )}
      </Container>
    </section>
  );
}
