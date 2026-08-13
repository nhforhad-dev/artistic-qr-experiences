import { cn } from "@/lib/utils";

/** Deterministic pseudo-random module pattern so SSR and client match. */
function modules(seed: number, size: number) {
  const cells: boolean[] = [];
  let s = seed * 9301 + 49297;
  for (let i = 0; i < size * size; i++) {
    s = (s * 9301 + 49297) % 233280;
    cells.push(s / 233280 > 0.47);
  }
  return cells;
}

const SIZE = 21;

type Props = {
  seed?: number;
  className?: string;
  /** 0 = plain modules, 1 = fully rounded artistic modules */
  artistic?: number;
  tone?: "gold" | "violet" | "mono";
  logo?: string;
};

export function QRMark({ seed = 3, className, artistic = 1, tone = "gold", logo = "AQ" }: Props) {
  const cells = modules(seed, SIZE);
  const unit = 100 / SIZE;
  const r = (unit / 2) * artistic;

  const fill =
    tone === "gold"
      ? "url(#aq-gold)"
      : tone === "violet"
        ? "url(#aq-violet)"
        : "var(--color-foreground)";

  const isFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x > SIZE - 8 && y < 7) || (x < 7 && y > SIZE - 8);
  const isCenter = (x: number, y: number) => x > 7 && x < 13 && y > 7 && y < 13;

  const finder = (x: number, y: number) => (
    <g key={`f-${x}-${y}`}>
      <rect
        x={x * unit}
        y={y * unit}
        width={unit * 7}
        height={unit * 7}
        rx={artistic ? unit * 2.4 : 0}
        fill="none"
        stroke={fill}
        strokeWidth={unit}
      />
      <rect
        x={(x + 2) * unit}
        y={(y + 2) * unit}
        width={unit * 3}
        height={unit * 3}
        rx={artistic ? unit * 1.1 : 0}
        fill={fill}
      />
    </g>
  );

  return (
    <svg viewBox="0 0 100 100" className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <linearGradient id="aq-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.11 88)" />
          <stop offset="55%" stopColor="oklch(0.775 0.148 70)" />
          <stop offset="100%" stopColor="oklch(0.6 0.14 55)" />
        </linearGradient>
        <linearGradient id="aq-violet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.14 300)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 270)" />
        </linearGradient>
      </defs>

      {cells.map((on, i) => {
        const x = i % SIZE;
        const y = Math.floor(i / SIZE);
        if (!on || isFinder(x, y) || isCenter(x, y)) return null;
        return (
          <rect
            key={i}
            x={x * unit + unit * 0.08}
            y={y * unit + unit * 0.08}
            width={unit * 0.84}
            height={unit * 0.84}
            rx={r}
            fill={fill}
            opacity={0.55 + ((x * y) % 5) * 0.09}
          />
        );
      })}

      {finder(0, 0)}
      {finder(SIZE - 7, 0)}
      {finder(0, SIZE - 7)}

      <rect
        x={unit * 8}
        y={unit * 8}
        width={unit * 5}
        height={unit * 5}
        rx={unit * 1.6}
        fill="var(--color-background)"
        stroke={fill}
        strokeWidth={unit * 0.35}
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={unit * 2.4}
        fontFamily="Sora, sans-serif"
        fontWeight="700"
        fill={fill}
      >
        {logo}
      </text>
    </svg>
  );
}
