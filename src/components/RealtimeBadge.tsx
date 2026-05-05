import { useEffect, useState } from "react";
import { formatRelativeTime } from "../lib/format";

export type RealtimeMode = "stream" | "poll" | "snapshot";

export interface RealtimeBadgeProps {
  mode: RealtimeMode;
  /** Apenas para `mode="poll"`: intervalo nominal entre refetches em ms. */
  intervalMs?: number;
  /** Última vez que os dados foram atualizados (Date | timestamp ms | ISO string). */
  lastUpdateAt?: Date | number | string;
  /** Para `mode="stream"` ou `mode="poll"`: indica que o usuário pausou. */
  paused?: boolean;
  /** Erro/disconnect — força tom amber e label "off". */
  offline?: boolean;
  className?: string;
}

/**
 * Sellers DS · sinalizador unificado de real-time.
 * Use no cabeçalho de toda seção que faz polling, stream ou snapshot histórico.
 *
 * - stream:   ponto pulsante verde + "ao vivo".
 * - poll:     mini-clock + "atualiza a cada Xs · há Y" (relógio relativo do `lastUpdateAt`).
 * - snapshot: ícone history + "snapshot · sem atualização automática".
 *
 * Quando `paused` ou `offline`, vira amber.
 */
export function RealtimeBadge({
  mode,
  intervalMs,
  lastUpdateAt,
  paused = false,
  offline = false,
  className,
}: RealtimeBadgeProps) {
  // Re-render a cada 5s para o "há X" continuar fresco.
  const [, force] = useState(0);
  useEffect(() => {
    if (mode === "snapshot" || !lastUpdateAt) return;
    const id = setInterval(() => force((n) => n + 1), 5_000);
    return () => clearInterval(id);
  }, [mode, lastUpdateAt]);

  const tone = offline ? "off" : paused ? "paused" : mode;

  const palette = {
    stream: "bg-emerald-50 text-emerald-700 border-emerald-200",
    poll: "bg-blue-50 text-blue-700 border-blue-200",
    snapshot: "bg-slate-100 text-slate-700 border-slate-200",
    paused: "bg-amber-50 text-amber-700 border-amber-200",
    off: "bg-red-50 text-red-700 border-red-200",
  }[tone];

  const dotColor = {
    stream: "bg-emerald-500",
    poll: "bg-blue-500",
    snapshot: "bg-slate-400",
    paused: "bg-amber-500",
    off: "bg-red-500",
  }[tone];

  let label: string;
  if (offline) label = "fonte indisponível";
  else if (paused) label = "pausado";
  else if (mode === "stream") label = "ao vivo";
  else if (mode === "poll") {
    const interval = intervalMs ? formatInterval(intervalMs) : null;
    const since = lastUpdateAt ? formatRelativeTime(lastUpdateAt) : null;
    label = [interval && `atualiza ${interval}`, since && `· ${since}`].filter(Boolean).join(" ");
    if (!label) label = "polling";
  } else {
    const since = lastUpdateAt ? ` · ${formatRelativeTime(lastUpdateAt)}` : "";
    label = `snapshot${since}`;
  }

  return (
    <span
      role="status"
      aria-label={label}
      className={[
        "inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em]",
        "px-2.5 py-1 rounded-full border",
        palette,
        className ?? "",
      ].join(" ")}
    >
      <span className="relative inline-flex h-1.5 w-1.5">
        <span
          className={[
            "absolute inset-0 rounded-full",
            dotColor,
            tone === "stream" ? "animate-ping opacity-60" : "",
          ].join(" ")}
        />
        <span className={["relative inline-flex h-1.5 w-1.5 rounded-full", dotColor].join(" ")} />
      </span>
      {label}
    </span>
  );
}

function formatInterval(ms: number): string {
  if (ms < 1_000) return `${ms}ms`;
  if (ms < 60_000) return `a cada ${Math.round(ms / 1_000)}s`;
  return `a cada ${Math.round(ms / 60_000)}min`;
}
