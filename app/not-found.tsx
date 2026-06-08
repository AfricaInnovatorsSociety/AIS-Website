import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page py-24 md:py-32 text-center max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-balance">
        That page seems to have shipped without us.
      </h1>
      <p className="mt-4 text-charcoal-600 text-lg">
        The link you followed might be broken, or the page may have moved. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/" size="lg" withArrow>
          Back home
        </Button>
        <Button href="/events" variant="outline" size="lg">
          See upcoming events
        </Button>
      </div>
    </section>
  );
}
