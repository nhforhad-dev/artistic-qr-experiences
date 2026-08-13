import { BarChart3, FolderOpen, LayoutGrid, Palette, QrCode, Search } from "lucide-react";
import { Section, SectionHead, StatusDot } from "./primitives";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Overview", icon: LayoutGrid, active: false },
  { label: "QR Codes", icon: QrCode, active: true },
  { label: "Projects", icon: FolderOpen, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Brand Kit", icon: Palette, active: false },
];

const ROWS = [
  { name: "Restaurant Menu", dest: "restaurant.com/menu-august", status: "Active", scans: "4,821" },
  { name: "Google Reviews", dest: "g.page/aurea/review", status: "Active", scans: "1,204" },
  { name: "Summer Campaign", dest: "aurea.com/summer", status: "Active", scans: "912" },
  { name: "Wedding Video", dest: "Not published yet", status: "Draft", scans: "—" },
];

export function Dashboard() {
  return (
    <Section id="dashboard">
      <SectionHead
        eyebrow="Workspace"
        title="Every QR, under your control."
        highlight="under your control."
        body="Create, organize, update and download your QR codes from one workspace — with status, destination and performance always visible."
      />

      <div className="panel mt-12 overflow-hidden p-0 shadow-[var(--shadow-panel)]">
        <div className="grid md:grid-cols-[210px_1fr]">
          <aside className="hidden border-r border-border bg-background/40 p-4 md:block">
            <div className="mb-5 flex items-center gap-2 px-1">
              <span className="grid size-6 place-items-center rounded-md bg-gold text-[10px] font-bold text-primary-foreground">
                AQ
              </span>
              <span className="font-display text-xs font-semibold">Artistic QR</span>
            </div>
            <nav className="space-y-1">
              {NAV.map((n) => (
                <div
                  key={n.label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs",
                    n.active ? "bg-gold/10 text-gold" : "text-muted-foreground",
                  )}
                >
                  <n.icon className="size-3.5" />
                  {n.label}
                </div>
              ))}
            </nav>
            <div className="mt-6 rounded-lg bg-gold px-3 py-2 text-center text-xs font-semibold text-primary-foreground">
              + Create QR
            </div>
          </aside>

          <div className="p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold">My QR Codes</h3>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-elevated px-3 py-1.5 text-xs text-muted-foreground">
                <Search className="size-3.5" /> Search QR codes…
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {ROWS.map((r) => (
                <div
                  key={r.name}
                  className="group flex flex-wrap items-center gap-3 rounded-xl border border-border bg-elevated/60 px-4 py-3 transition-colors hover:border-gold/40"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{r.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{r.dest}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <StatusDot tone={r.status === "Active" ? "success" : "muted"} />
                    {r.status}
                  </span>
                  <span className="w-16 text-right font-display text-sm text-gold">{r.scans}</span>
                  <div className="hidden gap-1.5 text-[11px] text-muted-foreground group-hover:flex">
                    {["Edit", "Change destination", "Analytics", "Download"].map((a) => (
                      <span key={a} className="rounded-md border border-border px-2 py-1">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
