import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#experiences" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative grid size-8 place-items-center rounded-lg border border-gold/40 bg-elevated font-display text-sm font-bold">
            <span>A</span>
            <span className="absolute -bottom-0.5 -right-0.5 grid size-4 place-items-center rounded-md bg-gold text-[10px] font-bold text-primary-foreground">
              Q
            </span>
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">Artistic QR</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Sign in
          </a>
          <Button asChild variant="hero" size="sm">
            <a href="#creator">Create QR</a>
          </Button>
        </div>

        <button
          className="grid size-9 place-items-center rounded-md border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-elevated hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="hero" className="mt-3 w-full">
            <a href="#creator" onClick={() => setOpen(false)}>
              Create QR
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
