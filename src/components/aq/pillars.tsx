import { BarChart3, LayoutGrid, Link2, Sparkles } from "lucide-react";
import { Section, SectionHead } from "./primitives";

const PILLARS = [
  {
    n: "01",
    title: "Create",
    icon: Sparkles,
    body: "Turn your logo, image or idea into a distinctive artistic QR.",
  },
  {
    n: "02",
    title: "Connect",
    icon: Link2,
    body: "Send each scan to one link or a complete digital experience.",
  },
  {
    n: "03",
    title: "Manage",
    icon: LayoutGrid,
    body: "Update destinations, organize QR codes and keep everything under control.",
  },
  {
    n: "04",
    title: "Measure",
    icon: BarChart3,
    body: "Understand how, when and where your QR codes are being used.",
  },
];

export function Pillars() {
  return (
    <Section id="product">
      <SectionHead
        eyebrow="The platform"
        title="More than a QR code."
        highlight="QR code."
        body="Artistic QR is one connected system: the design, the destination behind it, the workspace that manages it and the data that proves it worked."
      />

      <div className="relative mt-12">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-border md:block">
          <span className="absolute -top-px h-px w-1/4 animate-trail bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="group panel relative p-5 transition-colors duration-200 hover:border-gold/40"
            >
              <span className="grid size-9 place-items-center rounded-lg border border-border bg-elevated text-muted-foreground transition-colors group-hover:border-gold/40 group-hover:text-gold">
                <p.icon className="size-4" />
              </span>
              <p className="eyebrow mt-5">{p.n}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
