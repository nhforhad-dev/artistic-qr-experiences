import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHead } from "./primitives";
import { QRMark } from "./qr-mark";

const DESTINATIONS = [
  { name: "Summer Menu", url: "restaurant.com/summer-menu", date: "July 02" },
  { name: "Autumn Menu", url: "restaurant.com/autumn-menu", date: "August 12" },
  { name: "Winter Tasting", url: "restaurant.com/winter-tasting", date: "November 04" },
];

export function DynamicDemo() {
  const [i, setI] = useState(0);
  const current = DESTINATIONS[i]!;

  return (
    <Section id="dynamic">
      <SectionHead
        eyebrow="The aha moment"
        title="Print once. Update anytime."
        highlight="Update anytime."
        body="With a dynamic Artistic QR, the code stays exactly the same while the experience behind it can change whenever your business does. No reprinting. No new stickers. No lost campaigns."
      />

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <div className="panel relative overflow-hidden p-6">
          <p className="eyebrow">Printed once — 5,000 table cards</p>
          <div className="mt-5 flex items-center gap-5">
            <div className="w-32 shrink-0 rounded-xl border border-border bg-elevated p-3">
              <QRMark seed={7} />
            </div>
            <div className="text-sm">
              <p className="font-display font-medium">Table card · Ristorante Aurea</p>
              <p className="mt-1 text-muted-foreground">Unchanged since March 2025</p>
              <p className="mt-3 text-xs text-muted-foreground">
                The physical code never changes.
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden h-px w-24 bg-gradient-to-r from-gold/10 via-gold to-gold/10 lg:block">
          <span className="absolute -top-1 left-0 h-2 w-8 animate-trail rounded-full bg-gold/80 blur-[2px]" />
        </div>

        <div className="panel p-6">
          <p className="eyebrow">Current destination</p>
          <div key={current.url} className="mt-4 animate-rise">
            <p className="font-display text-lg font-semibold">{current.name}</p>
            <p className="mt-1 text-sm text-gold">{current.url}</p>
          </div>
          <Button
            variant="outlineGold"
            className="mt-5 w-full"
            onClick={() => setI((v) => (v + 1) % DESTINATIONS.length)}
          >
            <RefreshCw className="size-4" /> Change destination
          </Button>

          <div className="mt-6 border-t border-border pt-4">
            <p className="eyebrow mb-3">History</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {DESTINATIONS.map((d) => (
                <li key={d.url} className="flex items-center justify-between gap-4">
                  <span className="truncate">{d.url}</span>
                  <span className="shrink-0">{d.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
