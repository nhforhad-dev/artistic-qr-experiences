import { LifeBuoy, ShieldCheck, Star } from "lucide-react";
import { Section, SectionHead } from "./primitives";

const REVIEWS = [
  {
    quote:
      "We changed our menu four times this season and never reprinted a single table card. That alone paid for the plan.",
    name: "Marta Ferrer",
    role: "Owner · Ristorante Aurea, Barcelona",
  },
  {
    quote:
      "The QR looks like part of our packaging instead of a sticker someone forgot to remove — and it still scans first try.",
    name: "Jonas Weber",
    role: "Brand lead · Nord Roastery",
  },
  {
    quote:
      "I set up a video QR for our wedding in an evening. Guests scanned it from the invitations for months.",
    name: "Claire Dupont",
    role: "One-time Video Experience",
  },
];

export function Trust() {
  return (
    <Section id="trust">
      <SectionHead
        eyebrow="Trust"
        title="Built for every scan that matters."
        highlight="every scan"
        align="center"
        body="Verified customer feedback, clear reliability commitments and support you can actually reach."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="panel flex flex-col p-6">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="panel p-6">
          <span className="grid size-9 place-items-center rounded-lg border border-gold/35 text-gold">
            <ShieldCheck className="size-4" />
          </span>
          <h3 className="mt-4 font-display text-base font-semibold">Reliability</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Dynamic destination control with full change history</li>
            <li>Secure account management and session control</li>
            <li>QR validation before every publish</li>
          </ul>
        </div>
        <div className="panel p-6">
          <span className="grid size-9 place-items-center rounded-lg border border-gold/35 text-gold">
            <LifeBuoy className="size-4" />
          </span>
          <h3 className="mt-4 font-display text-base font-semibold">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Essential — email support and Help Center</li>
            <li>Premium — priority email plus Gloop in-product guidance</li>
            <li>Ultra — priority support with a named contact</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
