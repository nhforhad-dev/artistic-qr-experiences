import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientTrail } from "./primitives";
import { QRMark } from "./qr-mark";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <AmbientTrail />
      <div className="relative mx-auto w-full max-w-3xl px-5 text-center md:px-8">
        <div className="mx-auto w-24">
          <QRMark seed={31} />
        </div>
        <h2 className="mt-8 font-display text-3xl font-semibold leading-tight md:text-5xl">
          Make your next scan <span className="text-gold-gradient">mean more</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Create an Artistic QR that looks like your brand, connects people to the right experience and
          stays under your control.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#creator">
              Create my QR <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="subtle" size="lg">
            <a href="#pricing">Explore plans</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
