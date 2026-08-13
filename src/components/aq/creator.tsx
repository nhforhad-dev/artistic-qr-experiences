import { useState } from "react";
import { Check, ImageUp, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHead } from "./primitives";
import { QRMark } from "./qr-mark";
import { cn } from "@/lib/utils";

const STYLES = [
  { key: "Elegant", tone: "gold" as const, artistic: 1 },
  { key: "Minimal", tone: "mono" as const, artistic: 0.2 },
  { key: "Organic", tone: "gold" as const, artistic: 0.75 },
  { key: "Futuristic", tone: "violet" as const, artistic: 0.5 },
];

export function Creator() {
  const [logo, setLogo] = useState(false);
  const [style, setStyle] = useState(0);
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const run = () => {
    setState("loading");
    window.setTimeout(() => setState("done"), 1100);
  };

  const active = STYLES[style]!;

  return (
    <Section id="creator">
      <SectionHead
        eyebrow="Try it"
        title="Create your first Artistic QR."
        highlight="Artistic QR."
        body="Upload a logo or start from an idea. Artistic QR helps turn it into a visual, scannable experience — no design expertise required."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="panel p-6 md:p-7">
          <Step n={1} title="Upload your logo" />
          <button
            type="button"
            onClick={() => setLogo(true)}
            className={cn(
              "mt-3 flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-4 py-8 transition-colors",
              logo ? "border-gold/50 bg-gold/8 text-gold" : "border-input text-muted-foreground hover:border-gold/40",
            )}
          >
            {logo ? <Check className="size-5" /> : <ImageUp className="size-5" />}
            <span className="text-sm font-medium">
              {logo ? "logo-aurea.png added" : "Drop your logo here"}
            </span>
            <span className="text-xs text-muted-foreground">PNG, JPG, WebP</span>
          </button>

          <Step n={2} title="Choose a style" className="mt-7" />
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {STYLES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => {
                  setStyle(i);
                  if (state === "done") setState("done");
                }}
                className={cn(
                  "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                  i === style
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-border bg-elevated/60 text-muted-foreground hover:text-foreground",
                )}
              >
                {s.key}
              </button>
            ))}
          </div>

          <Step n={3} title="Generate" className="mt-7" />
          <Button variant="hero" className="mt-3 w-full" onClick={run} disabled={state === "loading"}>
            {state === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Generating…
              </>
            ) : (
              <>
                <Sparkles className="size-4" /> Generate Artistic QR
              </>
            )}
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Free preview. Your demo QR points to an Artistic QR sample destination.
          </p>
        </div>

        <div className="panel relative p-6 md:p-7">
          <p className="eyebrow">Results</p>
          {state !== "done" ? (
            <div className="mt-4 grid h-[280px] place-items-center rounded-xl border border-dashed border-input text-sm text-muted-foreground">
              {state === "loading" ? "Composing four variants…" : "Your four variants will appear here"}
            </div>
          ) : (
            <>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {[3, 9, 14, 21].map((seed, idx) => (
                  <div
                    key={seed}
                    className="animate-rise rounded-xl border border-border bg-elevated p-3 transition-colors hover:border-gold/40"
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    <QRMark seed={seed} tone={active.tone} artistic={active.artistic} />
                    <p className="mt-2 text-center text-[11px] text-muted-foreground">
                      {active.key} 0{idx + 1}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button variant="hero" size="sm">
                  Use this style
                </Button>
                <Button variant="subtle" size="sm" onClick={run}>
                  Generate similar
                </Button>
                <Button variant="outlineGold" size="sm">
                  Continue in the creator
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}

function Step({ n, title, className }: { n: number; title: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="grid size-6 place-items-center rounded-md border border-gold/35 text-[11px] font-semibold text-gold">
        {n}
      </span>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
