import type { ReactNode } from "react";

export interface ErrorStateProps {
  title: string;
  description?: string;
  /** Para debug — mostrado em mono dentro de um `<details>`. Não exibir em produção sem cuidado. */
  error?: Error | string;
  /** Callback do botão "Tentar novamente". Se ausente, o botão não aparece. */
  retry?: () => void;
  /** Override do label do botão de retry. */
  retryLabel?: string;
  /** Slot adicional ao lado do retry. */
  action?: ReactNode;
  className?: string;
}

/**
 * Sellers DS · estado de erro padrão.
 * Use para falhas em queries, perda de conexão com BFF, etc.
 * Tom rose-200 sutil — não é destrutivo, é informativo.
 */
export function ErrorState({
  title,
  description,
  error,
  retry,
  retryLabel = "Tentar novamente",
  action,
  className,
}: ErrorStateProps) {
  const errorText = error instanceof Error ? `${error.name}: ${error.message}` : error;

  return (
    <div
      role="alert"
      className={[
        "flex flex-col items-center justify-center gap-3 px-6 py-10 text-center animate-fade-in",
        "bg-rose-50/40 border border-rose-200 rounded-xl",
        className ?? "",
      ].join(" ")}
    >
      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-[26px] text-rose-700 leading-none">
          error
        </span>
      </div>
      <div className="space-y-1 max-w-md">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        {description && <p className="text-xs text-slate-600 leading-relaxed">{description}</p>}
      </div>
      {(retry || action) && (
        <div className="flex items-center gap-2 mt-1">
          {retry && (
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">refresh</span>
              {retryLabel}
            </button>
          )}
          {action}
        </div>
      )}
      {errorText && (
        <details className="mt-2 max-w-md text-left w-full">
          <summary className="text-[10px] font-mono uppercase tracking-wider text-slate-400 cursor-pointer hover:text-slate-600">
            detalhes técnicos
          </summary>
          <pre className="mt-2 text-[10px] font-mono text-slate-500 bg-white border border-slate-200 rounded p-2 overflow-x-auto">
            {errorText}
          </pre>
        </details>
      )}
    </div>
  );
}
