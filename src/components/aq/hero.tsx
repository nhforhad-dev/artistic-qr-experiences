import { useState } from "react";
import { ArrowRight, BarChart3, Link2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QRMark } from "./qr-mark";
import { AmbientTrail, StatusDot } from "./primitives";
import { cn } from "@/lib/utils";

type Facet = "design" | "destination" | "analytics";

const FACETS: Record<Facet, { seed: number; tone: "gold" | "violet" | "mono"; artistic: number }> = {
  design: { seed: 7, tone: "gold", artistic: 1 },
  destination: { seed: 7, tone: "gold", artistic: 1 },
  analytics: { seed: 7, tone: "gold", artistic: 1 },
};

export function Hero() {
  const [facet, setFacet] = useState<Facet>("design");
  const [styleIndex, setStyleIndex] = useState(0);
  const [destIndex, setDestIndex] = useState(0);

  const styles = [
    { label: "Elegant gold", seed: 7, tone: "gold" as const, artistic: 1 },
    { label: "Signal violet", seed: 11, tone: "violet" as const, artistic: 0.8 },
    { label: "Minimal mono", seed: 4, tone: "mono" as const, artistic: 0.2 },
  ];
  const destinations = [
    { label: "Website", value: "artisticqr.com" },
    { label: "Digital menu", value: "restaurant.com/menu-august" },
    { label: "Reviews", value: "g.page/review" },
  ];

  const s = styles[styleIndex];

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <AmbientTrail />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/8 px-3 py-1 text-xs text-gold">
            <StatusDot /> More than a QR
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] md:text-6xl">
            Turn every scan into a{" "}
            <span className="text-gold-gradient">branded digital experience</span>.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Create artistic QR codes from your logo, image or idea. Connect them to dynamic
            destinations, update what happens after the scan, and measure performance from one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#creator">
                Create my QR <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="subtle" size="lg">
              <a href="#product">See how it works</a>
            </Button>
          </div>
          <p className="eyebrow mt-6">Design · Preview · Validate · Publish</p>
        </div>

        <div className="relative">
          <div className="panel relative mx-auto max-w-md p-6 shadow-[var(--shadow-panel)] md:p-8">
            <div className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
            <div className="mx-auto w-48 md:w-56">
              <QRMark seed={s.seed} tone={s.tone} artistic={s.artistic} />
            </div>
            <div className="mt-5 text-center">
              <p className="text-xs text-muted-foreground">Currently pointing to</p>
              <p className="mt-1 truncate font-display text-sm font-medium text-foreground">
                {destinations[destIndex].value}
              </p>
            </div>

            <div className="mt-6 grid gap-2">
              <HeroCard
                icon={<Palette className="size-4" />}
                title="Design"
                value={s.label}
                active={facet === "design"}
                onActivate={() => {
                  setFacet("design");
                  setStyleIndex((i) => (i + 1) % styles.length);
                }}
              />
              <HeroCard
                icon={<Link2 className="size-4" />}
                title="Destination"
                value={destinations[destIndex].label}
                active={facet === "destination"}
                onActivate={() => {
                  setFacet("destination");
                  setDestIndex((i) => (i + 1) % destinations.length);
                }}
              />
              <HeroCard
                icon={<BarChart3 className="size-4" />}
                title="Analytics"
                value="8,755 scans ↑ 18%"
                active={facet === "analytics"}
                onActivate={() => setFacet("analytics")}
              />
            </div>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              Hover or tap a card — the QR stays the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({
  icon,
  title,
  value,
  active,
  onActivate,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200",
        active
          ? "border-gold/45 bg-gold/8"
          : "border-border bg-elevated/50 hover:border-border hover:bg-elevated",
      )}
    >
      <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg", active ? "bg-gold/15 text-gold" : "bg-secondary text-muted-foreground")}>
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">{title}</span>
        <span className="block truncate text-sm font-medium">{value}</span>
      </span>
    </button>
  );
}

export { FACETS };
