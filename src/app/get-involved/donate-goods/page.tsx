import type { Metadata } from "next";
import { Check, ShoppingCart, Boxes } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { donateGoods } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate Goods",
  description:
    "Even the smallest donation helps provide a warm welcome for a newly arrived family. See what NAAM accepts and how to give.",
};

export default function DonateGoodsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate goods"
        title="A warm welcome starts with the essentials"
        lead="Even the smallest donation can help provide a warm welcome for a newly arrived family. Here's what we need most."
        crumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Donate Goods" }]}
        image="/images/foodpantry.jpg"
      />

      {/* Accepted items */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we accept"
            title="Items that make an immediate difference"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {donateGoods.accepted.map((item, i) => (
              <Reveal
                key={item}
                delay={(i % 2) * 0.06}
                className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-cloud p-4"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-ink-soft">{item}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Two options */}
      <section className="bg-cloud py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="flex flex-col rounded-3xl bg-white p-8 shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <ShoppingCart className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl text-ink">Shop our Amazon Wishlist</h3>
              <p className="mt-2 flex-1 text-ink-soft">
                Prefer to ship directly? Our wishlist makes it easy to send exactly
                what families need, right to our door.
              </p>
              <div className="mt-5">
                <Button href="https://www.amazon.com" variant="primary">
                  View the wishlist
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col rounded-3xl bg-white p-8 shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-gold-600">
                <Boxes className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl text-ink">Host a donation drive</h3>
              <p className="mt-2 flex-1 text-ink-soft">
                Schools, faith groups, and workplaces can rally their community to
                collect goods. We'll help you plan and promote it.
              </p>
              <div className="mt-5">
                <Button href="/contact" variant="outline">
                  Plan a drive
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        title="Questions about donating goods?"
        text="Reach out and we'll let you know what's most needed right now and how to drop off."
        actions={[{ label: "Contact us", href: "/contact" }]}
      />
    </>
  );
}
