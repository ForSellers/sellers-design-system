/**
 * Sellers DS · formatadores canônicos (locale pt-BR).
 * Single source of truth — produtos derivados (bank-ops-ui, etc.) devem importar daqui.
 */

const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const BRL_NO_DECIMALS = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Formato: R$ 1.234,56. Aceita number (em reais) ou string que `Number()` consiga parsear.
 * Para valores em centavos, divida antes (`formatBRL(cents / 100)`).
 */
export function formatBRL(value: number | string, opts?: { decimals?: 0 | 2 }): string {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n)) return "R$ —";
  return opts?.decimals === 0 ? BRL_NO_DECIMALS.format(n) : BRL.format(n);
}

/**
 * Formato compacto: R$ 1,2k · R$ 3,4M · R$ 5,6B. Útil em eixos de gráfico e KPIs densos.
 */
export function formatBRLCompact(value: number): string {
  if (!Number.isFinite(value)) return "R$ —";
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_000_000_000) return `${sign}R$ ${(abs / 1_000_000_000).toFixed(1).replace(".", ",")}B`;
  if (abs >= 1_000_000) return `${sign}R$ ${(abs / 1_000_000).toFixed(1).replace(".", ",")}M`;
  if (abs >= 1_000) return `${sign}R$ ${(abs / 1_000).toFixed(1).replace(".", ",")}k`;
  return formatBRL(value, { decimals: 0 });
}

const DATE_SHORT = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
const DATE_LONG = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
const TIME_HM = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" });
const TIME_HMS = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
const DATETIME = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export type DateFormat = "short" | "long" | "time" | "timeWithSeconds" | "dateTime";

export function formatDate(input: Date | number | string, fmt: DateFormat = "short"): string {
  const d = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(d.getTime())) return "—";
  switch (fmt) {
    case "long":
      return DATE_LONG.format(d);
    case "time":
      return TIME_HM.format(d);
    case "timeWithSeconds":
      return TIME_HMS.format(d);
    case "dateTime":
      return DATETIME.format(d);
    case "short":
    default:
      return DATE_SHORT.format(d);
  }
}

const RELATIVE_THRESHOLDS: Array<[number, Intl.RelativeTimeFormatUnit]> = [
  [60, "second"],
  [60, "minute"],
  [24, "hour"],
  [7, "day"],
  [4.345, "week"],
  [12, "month"],
];

const RTF = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });

/**
 * "há 5 minutos", "em 2 horas", "agora". Robusto a strings ISO e timestamps.
 */
export function formatRelativeTime(input: Date | number | string, now: Date = new Date()): string {
  const target = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(target.getTime())) return "—";
  let diff = (target.getTime() - now.getTime()) / 1000;
  for (const [step, unit] of RELATIVE_THRESHOLDS) {
    if (Math.abs(diff) < step) return RTF.format(Math.round(diff), unit);
    diff /= step;
  }
  return RTF.format(Math.round(diff), "year");
}
