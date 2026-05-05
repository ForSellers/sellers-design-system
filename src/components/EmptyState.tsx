import type { ReactNode } from "react";

export interface EmptyStateProps {
  /** Material Symbols name ou ReactNode. */
  icon: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Sellers DS · estado vazio genérico para listas, tabelas e seções.
 * Use quando uma query retornou sem resultados (não é erro).
 */
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      role="status"
      className={[
        "flex flex-col items-center justify-center gap-3 px-6 py-12 text-center animate-fade-in",
        className ?? "",
      ].join(" ")}
    >
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
        <span className="text-[28px] text-slate-400 leading-none flex items-center justify-center">
          {icon}
        </span>
      </div>
      <div className="space-y-1 max-w-sm">
        <p className="text-sm font-semibold text-slate-700">{title}</p>
        {description && <p className="text-xs text-slate-500 leading-relaxed">{description}</p>}
      </div>
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
