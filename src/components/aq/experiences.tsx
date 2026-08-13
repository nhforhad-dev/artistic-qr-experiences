import { useState } from "react";
import { FileText, Globe, Instagram, LayoutList, Play, Star } from "lucide-react";
import { Section, SectionHead } from "./primitives";
import { cn } from "@/lib/utils";

const TYPES = [
  {
    key: "Website",
    icon: Globe,
    body: "Send people directly to any URL.",
    phone: { title: "artisticqr.com", rows: ["Home", "Products", "Contact"] },
  },
  {
    key: "Multi-link",
    icon: LayoutList,
    body: "Give visitors several actions from one branded page.",
    phone: { title: "Ristorante Aurea", rows: ["Menu", "Reserve a table", "Instagram", "Leave a review"] },
  },
  {
    key: "Reviews",
    icon: Star,
    body: "Make it easier for customers to leave feedback.",
    phone: { title: "How was your visit?", rows: ["★ ★ ★ ★ ★", "Write a review", "Google · Tripadvisor"] },
  },
  {
    key: "Menu & documents",
    icon: FileText,
    body: "Share menus, PDFs and useful files.",
    phone: { title: "Autumn Menu", rows: ["Antipasti", "Primi", "Secondi", "Dolci"] },
  },
  {
    key: "Social",
    icon: Instagram,
    body: "Connect Instagram, WhatsApp and your other channels.",
    phone: { title: "@aurea.roma", rows: ["Follow", "Message on WhatsApp", "TikTok"] },
  },
  {
    key: "Audio & video",
    icon: Play,
    body: "Turn a physical moment into a digital story.",
    phone: { title: "Our story · 1:42", rows: ["▶ Play", "──────●───────", "Share"] },
  },
];

export function Experiences() {
  const [active, setActive] = useState(1);
  const current = TYPES[active]!;

  return (
    <Section id="experiences">
      <SectionHead
        eyebrow="Experience types"
        title="One QR. Almost any experience."
        highlight="any experience."
        body="Customers don't think in QR architectures — they think about menus, reviews and reservations. Pick the outcome, and Artistic QR builds the rest."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {TYPES.map((t, i) => (
            <button
              key={t.key}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                "panel group text-left p-5 transition-all duration-200",
                i === active ? "border-gold/45 bg-gold/6" : "hover:border-border/80",
              )}
            >
              <span
                className={cn(
                  "grid size-9 place-items-center rounded-lg border transition-colors",
                  i === active
                    ? "border-gold/40 bg-gold/12 text-gold"
                    : "border-border bg-elevated text-muted-foreground",
                )}
              >
                <t.icon className="size-4" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{t.key}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.body}</p>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <Phone title={current.phone.title} rows={current.phone.rows} label={current.key} />
        </div>
      </div>
    </Section>
  );
}

export function Phone({
  title,
  rows,
  label,
}: {
  title: string;
  rows: string[];
  label?: string;
}) {
  return (
    <div className="w-[248px] shrink-0 rounded-[2rem] border border-border bg-elevated p-2.5 shadow-[var(--shadow-panel)]">
      <div className="rounded-[1.6rem] border border-border/70 bg-background p-5">
        <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-border" />
        {label ? <p className="eyebrow">{label}</p> : null}
        <p className="mt-1 font-display text-base font-semibold">{title}</p>
        <div key={title} className="mt-4 space-y-2 animate-rise">
          {rows.map((r) => (
            <div
              key={r}
              className="rounded-lg border border-border bg-elevated/70 px-3 py-2.5 text-xs text-muted-foreground"
            >
              {r}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg bg-gold py-2 text-center text-xs font-semibold text-primary-foreground">
          Powered by Artistic QR
        </div>
      </div>
    </div>
  );
}
