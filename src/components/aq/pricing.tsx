import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHead } from "./primitives";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Essential",
    who: "For individuals and small businesses needing simple dynamic QRs.",
    monthly: 9,
    annual: 7,
    features: ["5 dynamic QR codes", "Artistic design editor", "Change destinations anytime", "Basic scan counts", "Email support"],
  },
  {
    name: "Premium",
    who: "For businesses managing several destinations, reviews and campaigns.",
    monthly: 29,
    annual: 23,
    popular: true,
    features: [
      "25 dynamic QR codes",
      "Multi-link experiences",
      "Menus, audio & video hosting",
      "Full analytics & engagement",
      "Projects & folders",
    ],
  },
  {
    name: "Ultra",
    who: "For brands that want maximum control and insight.",
    monthly: 79,
    annual: 63,
    features: [
      "Unlimited dynamic QR codes",
      "Advanced analytics & exports",
      "Brand Kit & saved styles",
      "Custom domain (branded links)",
      "Priority support",
    ],
  },
];

const ONE_TIME = [
  { name: "Music QR", price: 19, note: "Static link · permanent" },
  { name: "Digital Menu", price: 39, note: "Hosted 12 months" },
  { name: "Audio Experience", price: 29, note: "Hosted 12 months" },
  { name: "Video Experience", price: 49, note: "Hosted 12 months" },
  { name: "Event QR", price: 35, note: "Hosted 12 months" },
];

export function Pricing() {
  const [tab, setTab] = useState<"business" | "onetime">("business");
  const [annual, setAnnual] = useState(true);

  return (
    <Section id="pricing">
      <SectionHead
        eyebrow="Pricing"
        title="Choose how you want to use Artistic QR."
        highlight="Artistic QR."
        align="center"
        body="Ongoing management as a subscription, or a single experience you only need once."
      />

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-elevated p-1">
          {(
            [
              ["business", "Business subscriptions"],
              ["onetime", "One-time experiences"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
                tab === key ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === "business" ? (
        <>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm">
            <button
              onClick={() => setAnnual(false)}
              className={cn(!annual ? "text-foreground" : "text-muted-foreground")}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual((v) => !v)}
              className="relative h-6 w-11 rounded-full border border-border bg-elevated"
              aria-label="Toggle billing period"
            >
              <span
                className={cn(
                  "absolute top-0.5 size-4 rounded-full bg-gold transition-all duration-200",
                  annual ? "left-6" : "left-1",
                )}
              />
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(annual ? "text-foreground" : "text-muted-foreground")}
            >
              Annual <span className="text-gold">— Save 20%</span>
            </button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "panel relative flex flex-col p-6",
                  p.popular && "border-gold/45 shadow-[var(--shadow-gold)]",
                )}
              >
                {p.popular ? (
                  <span className="absolute -top-2.5 left-6 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Most popular
                  </span>
                ) : null}
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-1.5 min-h-10 text-sm text-muted-foreground">{p.who}</p>
                <p className="mt-5">
                  <span className="font-display text-4xl font-semibold">
                    €{annual ? p.annual : p.monthly}
                  </span>
                  <span className="text-sm text-muted-foreground"> /month</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {annual ? "billed annually" : "billed monthly"}
                </p>
                <Button variant={p.popular ? "hero" : "subtle"} className="mt-5 w-full">
                  Choose {p.name}
                </Button>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            <a href="#faq" className="underline underline-offset-4 hover:text-foreground">
              Compare all features
            </a>{" "}
            · Other billing options available after plan selection.
          </p>
        </>
      ) : (
        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ONE_TIME.map((o) => (
              <div key={o.name} className="panel flex flex-col p-6 transition-colors hover:border-gold/40">
                <h3 className="font-display text-base font-semibold">{o.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{o.note}</p>
                <p className="mt-5 font-display text-3xl font-semibold">€{o.price}</p>
                <p className="text-xs text-muted-foreground">one-time payment</p>
                <Button variant="outlineGold" className="mt-5 w-full">
                  Create one-time QR
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Simple link products stay permanent. Hosted experiences (menu, audio, video, event) include
            12 months of hosting, renewable afterwards.
          </p>
        </div>
      )}
    </Section>
  );
}
