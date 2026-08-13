import { Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHead } from "./primitives";
import { QRMark } from "./qr-mark";

const CHECKS = ["QR structure", "Destination", "Contrast", "Preview"];

export function Validation() {
  return (
    <Section id="gallery">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionHead
            eyebrow="Art + validation"
            title="Designed to stand out. Built to scan."
            highlight="Built to scan."
            body="Creativity means nothing if the QR does not work. Artistic QR combines visual customization with scan validation so you can preview and test on a real phone before publishing."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { seed: 3, tone: "gold" as const, artistic: 1, name: "Elegant" },
              { seed: 12, tone: "mono" as const, artistic: 0.2, name: "Minimal" },
              { seed: 18, tone: "gold" as const, artistic: 0.7, name: "Organic" },
              { seed: 25, tone: "violet" as const, artistic: 0.5, name: "Futuristic" },
            ].map((v) => (
              <div
                key={v.seed}
                className="rounded-xl border border-border bg-elevated p-3 transition-colors hover:border-gold/40"
              >
                <QRMark seed={v.seed} tone={v.tone} artistic={v.artistic} />
                <p className="mt-2 text-center text-[11px] text-muted-foreground">{v.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6 md:p-7">
          <p className="eyebrow">Scan check</p>
          <ul className="mt-4 space-y-3">
            {CHECKS.map((c, i) => (
              <li
                key={c}
                className="flex animate-rise items-center justify-between rounded-lg border border-border bg-elevated/60 px-4 py-3 text-sm"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span>{c}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success">
                  <Check className="size-3.5" /> Passed
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl border border-gold/35 bg-gold/8 px-4 py-4">
            <p className="font-display text-sm font-semibold text-gold">Ready to test</p>
            <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <Smartphone className="size-3.5" /> Scan with your phone before publishing.
            </p>
          </div>
          <Button variant="subtle" className="mt-5 w-full">
            Explore design tools
          </Button>
        </div>
      </div>
    </Section>
  );
}
