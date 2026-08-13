const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "How it works", "QR Gallery", "Pricing"],
  },
  {
    title: "Solutions",
    links: ["Business", "Restaurants", "Events", "Creators"],
  },
  {
    title: "Resources",
    links: ["Help Center", "FAQ", "Contact"],
  },
  {
    title: "Company",
    links: ["About"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Legal Notice"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative grid size-8 place-items-center rounded-lg border border-gold/40 bg-elevated font-display text-sm font-bold">
                A
                <span className="absolute -bottom-0.5 -right-0.5 grid size-4 place-items-center rounded-md bg-gold text-[10px] font-bold text-primary-foreground">
                  Q
                </span>
              </span>
              <span className="font-display text-sm font-semibold">Artistic QR</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              More than a QR. A complete experience behind every scan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <p className="eyebrow mb-3">{c.title}</p>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Artistic QR. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="rounded-md border border-border px-2 py-1">English (EN)</span>
            <a href="#top" className="hover:text-foreground">
              Instagram
            </a>
            <a href="#top" className="hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
