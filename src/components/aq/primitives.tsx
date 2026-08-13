import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative border-t border-border/70 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
  highlight,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  highlight?: string;
}) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-[1.1] md:text-[2.6rem]">
        {parts[0]}
        {highlight ? <span className="text-gold-gradient">{highlight}</span> : null}
        {parts[1]}
      </h2>
      {body ? <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{body}</p> : null}
    </div>
  );
}

export function Pill({ children, active }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        active
          ? "border-gold/50 bg-gold/10 text-gold"
          : "border-border bg-elevated/60 text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}

export function StatusDot({ tone = "gold" }: { tone?: "gold" | "success" | "muted" }) {
  return (
    <span
      className={cn(
        "inline-block size-1.5 rounded-full",
        tone === "gold" && "bg-gold animate-pulse-soft",
        tone === "success" && "bg-success",
        tone === "muted" && "bg-muted-foreground/60",
      )}
    />
  );
}

export function AmbientTrail({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="ambient absolute inset-0 animate-drift" />
      <div className="absolute left-0 top-1/3 h-px w-1/3 animate-trail bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div
        className="absolute left-0 top-2/3 h-px w-1/4 animate-trail bg-gradient-to-r from-transparent via-signal/60 to-transparent"
        style={{ animationDelay: "3.5s" }}
      />
    </div>
  );
}
