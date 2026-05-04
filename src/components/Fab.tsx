import type { ButtonHTMLAttributes, ReactNode } from "react";

export type FabVariant = "primary" | "subtle";

export interface FabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Ícone (Material Symbols ou qualquer ReactNode). */
  icon: ReactNode;
  /** Aria-label obrigatório — FAB não tem texto visível. */
  label: string;
  variant?: FabVariant;
  /** Ativa estilo "pressed" (toggle on). */
  pressed?: boolean;
  /** Posição do FAB. Default: bottom-right. */
  position?: "bottom-right" | "bottom-left" | "static";
}

/**
 * Sellers DS · Floating Action Button.
 * 56×56, sombra forte, fixed por padrão. Usar para uma única ação primária
 * sempre acessível (ex: tapar dados sensíveis).
 */
export function Fab({
  icon,
  label,
  variant = "primary",
  pressed = false,
  position = "bottom-right",
  className,
  ...rest
}: FabProps) {
  const positionCls = {
    "bottom-right": "fixed bottom-6 right-6",
    "bottom-left": "fixed bottom-6 left-6",
    static: "",
  }[position];

  const toneCls = pressed
    ? "bg-slate-900 text-white hover:bg-slate-800"
    : variant === "primary"
      ? "bg-brand-coral text-white hover:brightness-105"
      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50";

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      className={[
        "z-40 inline-flex items-center justify-center w-14 h-14 rounded-full",
        "shadow-lg hover:shadow-xl transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-coral",
        toneCls,
        positionCls,
        className ?? "",
      ].join(" ")}
      {...rest}
    >
      <span className="text-[24px] leading-none flex items-center justify-center">{icon}</span>
    </button>
  );
}
