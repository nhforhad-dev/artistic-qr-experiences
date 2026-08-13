import { useState } from "react";
import { Sparkles, X } from "lucide-react";

export function Gloop() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="panel mb-3 w-[290px] p-4 shadow-[var(--shadow-panel)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-display text-sm font-semibold">Ask Gloop</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Not sure which option fits? Tell me what your QR is for.
              </p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close Gloop">
              <X className="size-4 text-muted-foreground" />
            </button>
          </div>
          <div className="mt-3 space-y-1.5">
            {["Which plan should I choose?", "What is a dynamic QR?", "I need a QR for one event"].map(
              (s) => (
                <button
                  key={s}
                  className="w-full rounded-lg border border-border bg-elevated/60 px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground"
                >
                  {s}
                </button>
              ),
            )}
          </div>
          <div className="mt-3 rounded-lg border border-input px-3 py-2 text-xs text-muted-foreground">
            Ask anything…
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setOpen((v) => !v)}
        className="ml-auto flex items-center gap-2 rounded-full border border-gold/40 bg-elevated px-4 py-2.5 text-xs font-medium text-gold shadow-[var(--shadow-gold)] transition-transform duration-200 hover:scale-[1.03]"
      >
        <Sparkles className="size-4" /> Ask Gloop
      </button>
    </div>
  );
}
