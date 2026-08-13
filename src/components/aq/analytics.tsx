import { Section, SectionHead } from "./primitives";

const BARS = [38, 52, 44, 61, 55, 72, 68, 84, 76, 91, 88, 100];

export function Analytics() {
  return (
    <Section id="analytics">
      <SectionHead
        eyebrow="Analytics"
        title="Know what happens after the scan."
        highlight="after the scan."
        body="Track activity across your QR codes and understand which experiences are getting attention — without needing a business-intelligence degree."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="panel p-6 md:p-7">
          <p className="eyebrow">Total scans · last 30 days</p>
          <div className="mt-2 flex flex-wrap items-end gap-3">
            <span className="font-display text-4xl font-semibold text-gold md:text-5xl">12,842</span>
            <span className="pb-1.5 text-sm text-success">+18.2% this month</span>
          </div>

          <div className="mt-8 flex h-40 items-end gap-1.5">
            {BARS.map((h, i) => (
              <div key={i} className="group relative flex-1">
                <div
                  className="w-full rounded-t-sm bg-gradient-to-t from-gold-deep/40 to-gold transition-all duration-200 group-hover:from-gold-deep group-hover:to-gold"
                  style={{ height: `${h * 1.6}px` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="panel p-5">
            <p className="eyebrow">Top QR</p>
            <p className="mt-2 font-display text-lg font-semibold">Restaurant Menu</p>
            <p className="text-sm text-muted-foreground">4,821 scans · 3,908 unique</p>
          </div>
          <div className="panel grid grid-cols-2 gap-4 p-5">
            {[
              { k: "Unique scans", v: "9,617" },
              { k: "Mobile", v: "92%" },
              { k: "Top city", v: "Barcelona" },
              { k: "Peak hour", v: "20:00" },
            ].map((m) => (
              <div key={m.k}>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{m.k}</p>
                <p className="mt-1 font-display text-base font-semibold">{m.v}</p>
              </div>
            ))}
          </div>
          <div className="panel p-5">
            <p className="eyebrow mb-3">Link engagement</p>
            <ul className="space-y-2 text-sm">
              {[
                ["Menu clicks", "3,810", 100],
                ["Instagram", "842", 24],
                ["Leave a review", "410", 12],
                ["Reserve a table", "381", 11],
              ].map(([label, value, w]) => (
                <li key={label as string}>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-secondary">
                    <div className="h-1 rounded-full bg-gold" style={{ width: `${w as number}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
