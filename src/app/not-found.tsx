import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export default function NotFound() {
  return (
    <section className="bg-cloud-warm py-28">
      <Container className="text-center">
        <BrandMark className="mx-auto h-14 w-14 text-brand-600" />
        <p className="eyebrow mt-6 text-brand-600">Coming soon</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">This page is on its way</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
          We&apos;re rolling out the redesigned NAAM site one section at a time.
          The homepage is ready — explore it while we finish the rest.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}
