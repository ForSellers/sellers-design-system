import React, { useState } from "react";

// ─── helpers ──────────────────────────────────────────────────────────────────

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        {description && <p className="text-sm text-slate-500 mt-0.5">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">{title}</h3>
      {children}
    </div>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-slate-100 rounded-md px-2 py-1">
      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
      <span className="text-[11px] font-mono text-slate-700">{value}</span>
    </div>
  );
}

function MSIcon({
  name,
  className = "",
  filled = false,
  style,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`material-symbols-outlined flex-shrink-0 ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'OPSZ' 22", ...style } : style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

// ─── COLOR SWATCHES ──────────────────────────────────────────────────────────

function ColorSwatch({ hex, name, token, border = false }: { hex: string; name: string; token?: string; border?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className={`group relative w-full rounded-xl overflow-hidden shadow-sm cursor-pointer transition-transform hover:scale-[1.02] ${border ? "border border-slate-200" : ""}`}
      title={`Copiar ${hex}`}
    >
      <div className="h-20" style={{ backgroundColor: hex }} />
      <div className="px-3 py-2 bg-white border-t border-slate-100 text-left">
        <p className="text-xs font-semibold text-slate-800">{name}</p>
        {token && <p className="text-[10px] font-mono text-slate-400 mt-0.5">{token}</p>}
        <p className="text-[10px] font-mono text-slate-500">{hex}</p>
      </div>
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
          <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1 rounded-full">Copiado!</span>
        </div>
      )}
    </button>
  );
}

function ColorDot({ hex, label, border = false }: { hex: string; label: string; border?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-5 h-5 rounded-md flex-shrink-0 ${border ? "border border-slate-200" : ""}`} style={{ backgroundColor: hex }} />
      <span className="text-xs text-slate-600">{label}</span>
      <span className="text-[10px] font-mono text-slate-400 ml-auto">{hex}</span>
    </div>
  );
}

// ─── STATUS BADGES ───────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<string, { label: string; icon: string; className: string }> = {
  pendente_aprovacao:  { label: "Pend. aprovação",  icon: "schedule",   className: "bg-blue-50 text-blue-700 border-blue-200" },
  aguardando_cfo:      { label: "Aguard. CFO",      icon: "gpp_maybe",  className: "bg-amber-50 text-amber-700 border-amber-200" },
  aprovado:            { label: "Aprovado",          icon: "check_circle", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pago:                { label: "Pago",              icon: "paid",       className: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  revisao_manual:      { label: "Revisão manual",   icon: "warning",    className: "bg-orange-50 text-orange-700 border-orange-200" },
  rejeitado:           { label: "Rejeitado",         icon: "cancel",     className: "bg-red-50 text-red-700 border-red-200" },
  fornecedor_pendente: { label: "Fornec. pendente", icon: "store",      className: "bg-violet-50 text-violet-700 border-violet-200" },
  processando:         { label: "Processando",       icon: "autorenew",  className: "bg-sky-50 text-sky-700 border-sky-200" },
  cancelado:           { label: "Cancelado",         icon: "block",      className: "bg-slate-100 text-slate-500 border-slate-200" },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status];
  if (!cfg) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium border ${cfg.className}`}>
      <MSIcon name={cfg.icon} className="text-[14px]" />
      {cfg.label}
    </span>
  );
}

// ─── KPI CARDS ───────────────────────────────────────────────────────────────

type CardColor = "blue" | "amber" | "orange" | "red" | "violet";

const CARD_COLORS: Record<CardColor, { border: string; bg: string; iconBg: string; label: string; value: string; sublabel: string; icon: string }> = {
  blue:   { border: "border-l-blue-500",   bg: "bg-blue-50",   iconBg: "bg-blue-100",   label: "text-blue-600",   value: "text-blue-900",   sublabel: "text-blue-500",   icon: "text-blue-700" },
  amber:  { border: "border-l-amber-500",  bg: "bg-amber-50",  iconBg: "bg-amber-100",  label: "text-amber-600",  value: "text-amber-900",  sublabel: "text-amber-500",  icon: "text-amber-700" },
  orange: { border: "border-l-orange-500", bg: "bg-orange-50", iconBg: "bg-orange-100", label: "text-orange-600", value: "text-orange-900", sublabel: "text-orange-500", icon: "text-orange-700" },
  red:    { border: "border-l-red-500",    bg: "bg-red-50",    iconBg: "bg-red-100",    label: "text-red-600",    value: "text-red-900",    sublabel: "text-red-500",    icon: "text-red-700" },
  violet: { border: "border-l-violet-500", bg: "bg-violet-50", iconBg: "bg-violet-100", label: "text-violet-600", value: "text-violet-900", sublabel: "text-violet-500", icon: "text-violet-700" },
};

function KPICard({ label, value, sublabel, icon, color }: { label: string; value: string; sublabel: string; icon: string; color: CardColor }) {
  const c = CARD_COLORS[color];
  return (
    <div className={`rounded-xl border border-slate-200 shadow-sm px-4 py-3 border-l-4 ${c.border} ${c.bg}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className={`text-[11px] font-semibold uppercase tracking-wider truncate ${c.label}`}>{label}</p>
          <p className={`text-2xl font-bold tabular-nums leading-tight mt-0.5 ${c.value}`}>{value}</p>
          <p className={`text-[11px] mt-0.5 truncate ${c.sublabel}`}>{sublabel}</p>
        </div>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.iconBg}`}>
          <MSIcon name={icon} className={`text-[20px] ${c.icon}`} />
        </div>
      </div>
    </div>
  );
}

// ─── TOAST PREVIEW ───────────────────────────────────────────────────────────

const TOAST_CONFIG = {
  error:   { icon: "cloud_off",    iconBg: "bg-red-100",     iconColor: "text-red-600",    border: "border-red-200",    bar: "bg-red-400",    label: "Erro",       title: "Falha ao conectar ao OMIE",  body: "Não foi possível sincronizar. Tentativas em andamento." },
  warning: { icon: "warning",      iconBg: "bg-amber-100",   iconColor: "text-amber-600",  border: "border-amber-200",  bar: "bg-amber-400",  label: "Atenção",    title: "Confiança IA abaixo de 85%", body: "Despesa requer revisão manual antes de prosseguir." },
  info:    { icon: "info",         iconBg: "bg-blue-100",    iconColor: "text-blue-600",   border: "border-blue-200",   bar: "bg-blue-400",   label: "Informação", title: "Email recebido",             body: "Nova despesa detectada e enfileirada para processamento." },
  success: { icon: "check_circle", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", border: "border-emerald-200", bar: "bg-emerald-400", label: "Sucesso",   title: "Despesa aprovada",           body: "A despesa foi enviada ao OMIE com sucesso." },
};

function ToastPreview({ level }: { level: keyof typeof TOAST_CONFIG }) {
  const cfg = TOAST_CONFIG[level];
  return (
    <div className="flex flex-col gap-1.5">
      <div className={`bg-white border ${cfg.border} rounded-xl shadow-lg overflow-hidden w-72`}>
        <div className="flex gap-3 px-4 py-3.5">
          <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${cfg.iconBg} flex items-center justify-center`}>
            <MSIcon name={cfg.icon} className={`text-[18px] ${cfg.iconColor}`} style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'OPSZ' 20" }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 leading-tight">{cfg.title}</p>
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{cfg.body}</p>
          </div>
          <button className="flex-shrink-0 self-start text-slate-300 hover:text-slate-500">
            <MSIcon name="close" className="text-[16px]" />
          </button>
        </div>
        <div className="h-0.5 bg-slate-100">
          <div className={`h-full ${cfg.bar}`} style={{ width: "60%" }} />
        </div>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center">{cfg.label}</span>
    </div>
  );
}

// ─── TABLE PREVIEW ───────────────────────────────────────────────────────────

function TablePreview() {
  const rows = [
    { id: "DES-001", fornecedor: "Shopee Brasil LTDA",  categoria: "Marketplace",    valor: "R$ 12.450,00", status: "pendente_aprovacao" },
    { id: "DES-002", fornecedor: "Meta Platforms Inc.", categoria: "Marketing",      valor: "R$ 8.300,00",  status: "aguardando_cfo" },
    { id: "DES-003", fornecedor: "AWS Amazon",          categoria: "Infraestrutura", valor: "R$ 3.210,50",  status: "aprovado" },
    { id: "DES-004", fornecedor: "Sebrae SP",           categoria: "Capacitação",    valor: "R$ 990,00",    status: "revisao_manual" },
    { id: "DES-005", fornecedor: "Correios",            categoria: "Logística",      valor: "R$ 540,00",    status: "pago" },
  ];
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MSIcon name="receipt_long" className="text-[18px] text-slate-400" />
          <span className="text-sm font-semibold text-slate-700">Despesas</span>
          <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full font-medium">{rows.length} registros</span>
        </div>
        <button
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white rounded-lg px-3 py-2"
          style={{ backgroundColor: "#E8533A" }}
        >
          <MSIcon name="add" className="text-[15px]" />
          Nova despesa
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">ID</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Fornecedor</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Categoria</th>
              <th className="text-right px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Valor</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-5 py-3 font-mono text-xs text-slate-400">{row.id}</td>
                <td className="px-5 py-3 text-sm font-medium text-slate-800">{row.fornecedor}</td>
                <td className="px-5 py-3 text-sm text-slate-500">{row.categoria}</td>
                <td className="px-5 py-3 text-sm font-semibold text-slate-800 text-right tabular-nums">{row.valor}</td>
                <td className="px-5 py-3"><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── SIDEBAR PREVIEW ─────────────────────────────────────────────────────────

function SidebarPreview() {
  const [activeItem, setActiveItem] = useState("Contas a Pagar");

  const S = {
    inactive: "#94a3b8",
    active: "#f1f5f9",
    activeIcon: "#E8533A",
    activeBg: "rgba(241,245,249,0.07)",
    divider: "rgba(255,255,255,0.08)",
    sectionLabel: "#475569",
  };

  const items = [
    { icon: "payments",     label: "Contas a Pagar" },
    { icon: "bar_chart",    label: "Relatórios" },
    { icon: "store",        label: "Fornecedores" },
    { icon: "settings",     label: "Configurações" },
    { icon: "account_tree", label: "Integrações", badge: "em breve" },
    { icon: "palette",      label: "Design System" },
  ];

  return (
    <div className="flex rounded-xl overflow-hidden shadow-lg border border-slate-200" style={{ backgroundColor: "#0a1628", height: 340 }}>
      {/* Compacto */}
      <div className="w-16 flex flex-col items-center py-4 gap-1" style={{ borderRight: `1px solid ${S.divider}` }}>
        <div className="w-10 h-10 rounded-xl overflow-hidden mb-3 flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          <MSIcon name="storefront" className="text-[22px]" style={{ color: S.inactive }} />
        </div>
        {items.map((it) => {
          const isActive = it.label === activeItem;
          return (
            <button
              key={it.label}
              onClick={() => setActiveItem(it.label)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={isActive ? { backgroundColor: S.activeBg } : undefined}
              title={it.label}
            >
              <MSIcon name={it.icon} className="text-[22px]" style={{ color: isActive ? S.activeIcon : S.inactive }} />
            </button>
          );
        })}
      </div>
      {/* Expandido */}
      <div className="flex-1 flex flex-col py-4 px-2 min-w-0">
        <div className="flex items-center gap-3 px-2 pb-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            <MSIcon name="storefront" className="text-[18px]" style={{ color: S.inactive }} />
          </div>
          <div>
            <p className="font-bold text-sm leading-tight" style={{ color: S.active }}>Sellers</p>
            <p className="text-[11px]" style={{ color: S.inactive }}>Sistema Financeiro</p>
          </div>
        </div>
        <div className="border-t mx-2 mb-3" style={{ borderColor: S.divider }} />
        <p className="text-[10px] font-semibold uppercase tracking-widest px-3 pb-2" style={{ color: S.sectionLabel }}>Módulos</p>
        {items.map((it) => {
          const isActive = it.label === activeItem;
          return (
            <button
              key={it.label}
              onClick={() => setActiveItem(it.label)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-left transition-colors"
              style={isActive ? { backgroundColor: S.activeBg } : undefined}
            >
              <MSIcon name={it.icon} className="text-[20px]" style={{ color: isActive ? S.activeIcon : S.inactive }} />
              <span className="text-sm font-medium truncate" style={{ color: isActive ? S.active : S.inactive }}>{it.label}</span>
              {it.badge && (
                <span className="ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded-md flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#64748b" }}>
                  {it.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── PAGINATION PREVIEW ──────────────────────────────────────────────────────

function PaginationPreview() {
  const [page, setPage] = useState(3);
  const totalPages = 8;
  const btnBase = "inline-flex items-center justify-center min-w-[32px] h-8 px-1.5 rounded-lg border text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed";
  const btnDefault = `${btnBase} border-slate-200 text-slate-600 bg-white hover:bg-slate-50`;
  const btnActive  = `${btnBase} border-blue-600 bg-blue-600 text-white`;

  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 4)              return [1,2,3,4,5,"...",totalPages];
    if (page >= totalPages - 3) return [1,"...",totalPages-4,totalPages-3,totalPages-2,totalPages-1,totalPages];
    return [1,"...",page-1,page,page+1,"...",totalPages];
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3">
        <button className="h-9 min-w-[130px] flex items-center justify-between gap-2 border border-slate-200 rounded-lg px-3 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
          <span className="inline-flex items-center gap-1.5">
            <MSIcon name="format_list_numbered" className="text-[16px] text-slate-400" />
            10 por página
          </span>
          <MSIcon name="expand_more" className="text-[18px] text-slate-400" />
        </button>
        <span className="text-xs font-medium text-slate-500 tabular-nums">21–30 de 78 registros</span>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={() => setPage(1)} disabled={page <= 1} className={btnDefault}><MSIcon name="first_page" className="text-[18px]" /></button>
        <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page <= 1} className={btnDefault}><MSIcon name="chevron_left" className="text-[18px]" /></button>
        {getPages().map((p, i) =>
          p === "..." ? (
            <span key={`e${i}`} className="inline-flex items-center justify-center min-w-[32px] h-8 text-sm text-slate-400">…</span>
          ) : (
            <button key={p} onClick={() => setPage(p as number)} className={p === page ? btnActive : btnDefault}>{p}</button>
          )
        )}
        <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page >= totalPages} className={btnDefault}><MSIcon name="chevron_right" className="text-[18px]" /></button>
        <button onClick={() => setPage(totalPages)} disabled={page >= totalPages} className={btnDefault}><MSIcon name="last_page" className="text-[18px]" /></button>
      </div>
    </div>
  );
}

// ─── INPUTS PREVIEW ──────────────────────────────────────────────────────────

function InputPreview() {
  const base = "w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition-colors";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Default</label>
        <input className={`${base} border-slate-200 text-slate-800 placeholder:text-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white`} placeholder="ex.: NF-e 000456" />
      </div>
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Preenchido</label>
        <input className={`${base} border-slate-200 text-slate-800 bg-white`} defaultValue="Shopee Brasil LTDA" readOnly />
      </div>
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Foco</label>
        <input className={`${base} border-blue-400 ring-2 ring-blue-100 bg-white text-slate-800`} defaultValue="editando campo..." readOnly />
      </div>
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Erro</label>
        <input className={`${base} border-red-300 ring-2 ring-red-100 bg-white text-slate-800`} defaultValue="valor inválido" readOnly />
        <p className="text-xs text-red-500 flex items-center gap-1"><MSIcon name="error" className="text-[13px]" />Campo obrigatório</p>
      </div>
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Disabled</label>
        <input className={`${base} border-slate-100 text-slate-300 bg-slate-50 cursor-not-allowed`} defaultValue="somente leitura" disabled />
      </div>
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Textarea</label>
        <textarea className={`${base} border-slate-200 text-slate-800 placeholder:text-slate-300 bg-white resize-none`} rows={3} placeholder="Observações sobre a despesa..." />
      </div>
    </div>
  );
}

// ─── BUTTONS ─────────────────────────────────────────────────────────────────

function ButtonShowcase() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 items-center">
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#E8533A" }}>
          <MSIcon name="add" className="text-[16px]" /> Nova despesa
        </button>
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          <MSIcon name="check" className="text-[16px]" /> Aprovar
        </button>
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
          <MSIcon name="filter_list" className="text-[16px]" /> Filtros
        </button>
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
          <MSIcon name="download" className="text-[16px]" /> Exportar
        </button>
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors">
          <MSIcon name="delete" className="text-[16px]" /> Excluir
        </button>
        <button className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-700 transition-colors">
          <MSIcon name="more_vert" className="text-[18px]" />
        </button>
        <button disabled className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white opacity-40 cursor-not-allowed" style={{ backgroundColor: "#E8533A" }}>
          <MSIcon name="send" className="text-[16px]" /> Enviar
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-center font-semibold uppercase tracking-widest text-slate-400">
        <span>Primary · coral</span>
        <span>Action · blue</span>
        <span>Secondary · outline</span>
        <span>Ghost</span>
      </div>
    </div>
  );
}

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────────────

function TypographyShowcase() {
  const rows = [
    { tag: "text-2xl bold",           sample: "R$ 48.750,00",                               cls: "text-2xl font-bold text-slate-800" },
    { tag: "text-xl semibold",        sample: "Contas a Pagar",                             cls: "text-xl font-semibold text-slate-800" },
    { tag: "text-lg semibold",        sample: "Despesa NF-e 000456",                        cls: "text-lg font-semibold text-slate-800" },
    { tag: "text-base medium",        sample: "Shopee Brasil Ltda",                         cls: "text-base font-medium text-slate-800" },
    { tag: "text-sm regular",         sample: "Descrição da despesa com detalhes da NF.",   cls: "text-sm text-slate-600" },
    { tag: "text-xs medium",          sample: "Atualizado há 3 horas · financeiro@sellers", cls: "text-xs font-medium text-slate-500" },
    { tag: "text-[11px] caps",        sample: "Pendente Aprovação",                         cls: "text-[11px] font-semibold uppercase tracking-wider text-slate-400" },
    { tag: "font-mono",               sample: "DES-2024-001 · 45.678.123/0001-99",         cls: "font-mono text-sm text-slate-600" },
    { tag: "tabular-nums",            sample: "1.234 · 56.789 · R$ 99.999,00",             cls: "text-sm tabular-nums text-slate-700" },
  ];
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.tag} className="flex items-baseline gap-4">
          <span className="text-[10px] font-mono text-slate-400 w-32 flex-shrink-0">{r.tag}</span>
          <span className={r.cls}>{r.sample}</span>
        </div>
      ))}
    </div>
  );
}

// ─── ICONS ───────────────────────────────────────────────────────────────────

const ICONS_USED = [
  "payments", "bar_chart", "store", "settings", "account_tree", "palette",
  "add", "check", "close", "delete", "edit", "download", "upload",
  "filter_list", "search", "more_vert", "more_horiz",
  "schedule", "gpp_maybe", "warning", "check_circle", "cancel",
  "paid", "block", "autorenew", "refresh",
  "receipt_long", "description", "attach_file", "picture_as_pdf",
  "person", "logout", "menu", "chevron_left", "chevron_right",
  "first_page", "last_page", "expand_more", "expand_less",
  "info", "cloud_off", "send", "format_list_numbered",
  "currency_exchange", "storefront", "account_balance", "local_shipping",
  "error", "mail", "calendar_today", "timer", "lock", "visibility",
];

function IconsShowcase() {
  const [active, setActive] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const filtered = ICONS_USED.filter((n) => n.includes(search.toLowerCase()));
  return (
    <div className="space-y-3">
      <input
        className="w-full max-w-xs border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white"
        placeholder="Buscar ícone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap gap-1.5">
        {filtered.map((name) => (
          <button
            key={name}
            onClick={() => { setActive(active === name ? null : name); navigator.clipboard.writeText(name); }}
            title={name}
            className={`inline-flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${
              active === name
                ? "border-blue-300 bg-blue-50 shadow-sm"
                : "border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300"
            }`}
          >
            <MSIcon name={name} className="text-[22px] text-slate-600" />
            <span className="text-[9px] font-mono text-slate-400 max-w-[72px] text-center leading-tight">{name}</span>
          </button>
        ))}
        {filtered.length === 0 && <p className="text-sm text-slate-400">Nenhum ícone encontrado.</p>}
      </div>
      {active && (
        <p className="text-xs text-blue-600 font-mono">"{active}" copiado para o clipboard</p>
      )}
    </div>
  );
}

// ─── CHART PALETTE ───────────────────────────────────────────────────────────

const CHART_COLORS = [
  { hex: "#2563eb", label: "blue-600" },
  { hex: "#7c3aed", label: "violet-700" },
  { hex: "#0891b2", label: "cyan-600" },
  { hex: "#059669", label: "emerald-600" },
  { hex: "#d97706", label: "amber-600" },
  { hex: "#dc2626", label: "red-600" },
  { hex: "#db2777", label: "pink-600" },
  { hex: "#0d9488", label: "teal-600" },
  { hex: "#ea580c", label: "orange-600" },
  { hex: "#4f46e5", label: "indigo-600" },
];

function ChartPalettePreview() {
  return (
    <div className="space-y-3">
      <div className="flex gap-0 rounded-xl overflow-hidden h-10 shadow-sm border border-slate-200">
        {CHART_COLORS.map((c) => (
          <div key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} title={c.label} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {CHART_COLORS.map((c) => (
          <div key={c.hex} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-100 bg-slate-50">
            <div className="w-4 h-4 rounded-md" style={{ backgroundColor: c.hex }} />
            <span className="text-[10px] font-mono text-slate-500">{c.label}</span>
            <span className="text-[10px] font-mono text-slate-400">{c.hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NAV INDEX ────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "cores",      label: "Cores",       icon: "palette" },
  { id: "tipografia", label: "Tipografia",  icon: "text_fields" },
  { id: "botoes",     label: "Botões",      icon: "smart_button" },
  { id: "badges",     label: "Badges",      icon: "label" },
  { id: "kpi",        label: "KPI Cards",   icon: "dashboard" },
  { id: "toasts",     label: "Toasts",      icon: "notifications" },
  { id: "inputs",     label: "Inputs",      icon: "input" },
  { id: "tabela",     label: "Tabela",      icon: "table_chart" },
  { id: "paginacao",  label: "Paginação",   icon: "pages" },
  { id: "sidebar",    label: "Sidebar",     icon: "menu_open" },
  { id: "icons",      label: "Ícones",      icon: "interests" },
  { id: "graficos",   label: "Gráficos",    icon: "bar_chart" },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState("cores");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(232, 83, 58, 0.1)" }}>
              <MSIcon name="palette" className="text-[18px]" style={{ color: "#E8533A" }} />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-800">Design System</span>
              <span className="text-slate-300 mx-2">·</span>
              <span className="text-sm text-slate-500">Sellers</span>
            </div>
            <span className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: "#E8533A" }}>v0.1</span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeSection === s.id
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
                style={activeSection === s.id ? { backgroundColor: "#E8533A" } : undefined}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-2">

        {/* ── Hero ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-8 mb-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">Sellers Design System</h1>
              <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
                Referência visual completa do sistema financeiro. Tokens de cor, tipografia, componentes e padrões de interface — tudo que você precisa para construir ou revisar a UI.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Chip label="font" value="Inter" />
                <Chip label="icons" value="Material Symbols Outlined" />
                <Chip label="css" value="Tailwind CSS 3.3" />
                <Chip label="ui" value="Radix Primitives" />
                <Chip label="charts" value="Recharts 2.15" />
                <Chip label="auth" value="Keycloak SSO" />
              </div>
            </div>
            {/* Color preview dots */}
            <div className="hidden sm:flex flex-col gap-2">
              <div className="flex gap-2">
                {["#E8533A","#2563EB","#0a1628","#f1f5f9"].map((c) => (
                  <div key={c} className="w-10 h-10 rounded-xl shadow-sm border border-white/20" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="flex gap-2">
                {["#10b981","#f59e0b","#ef4444","#7c3aed"].map((c) => (
                  <div key={c} className="w-10 h-10 rounded-xl shadow-sm" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 1. CORES ── */}
        <div id="cores" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Cores" description="Paleta completa: brand tokens, semânticos, status e sidebar.">
            <SubSection title="Brand — Sellers">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                <ColorSwatch hex="#E8533A" name="Coral"        token="--brand-coral" />
                <ColorSwatch hex="#FDF1EE" name="Coral Light"  token="--brand-coral-light" border />
                <ColorSwatch hex="#F5C4B8" name="Coral Border" token="--brand-coral-border" border />
                <ColorSwatch hex="#2563EB" name="Blue"         token="--brand-blue" />
                <ColorSwatch hex="#EFF6FF" name="Blue Light"   token="--brand-blue-light" border />
                <ColorSwatch hex="#BFDBFE" name="Blue Border"  token="--brand-blue-border" border />
              </div>
            </SubSection>

            <SubSection title="Semânticos (CSS vars HSL)">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <ColorDot hex="#ffffff"  label="--background"   border />
                <ColorDot hex="#0d1117"  label="--foreground" />
                <ColorDot hex="#e2e8f0"  label="--border"       border />
                <ColorDot hex="#3b82f6"  label="--primary" />
                <ColorDot hex="#f1f5f9"  label="--secondary"    border />
                <ColorDot hex="#f1f5f9"  label="--muted"        border />
                <ColorDot hex="#ef4444"  label="--destructive" />
                <ColorDot hex="#f1f5f9"  label="--accent"       border />
              </div>
            </SubSection>

            <SubSection title="Status das despesas">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <ColorDot hex="#eff6ff" label="blue-50 · pendente aprovação"  border />
                <ColorDot hex="#fffbeb" label="amber-50 · aguardando CFO"     border />
                <ColorDot hex="#fff7ed" label="orange-50 · revisão manual"    border />
                <ColorDot hex="#ecfdf5" label="emerald-50 · aprovado"         border />
                <ColorDot hex="#d1fae5" label="emerald-100 · pago"            border />
                <ColorDot hex="#fef2f2" label="red-50 · rejeitado"            border />
                <ColorDot hex="#f5f3ff" label="violet-50 · fornec. pendente"  border />
                <ColorDot hex="#f0f9ff" label="sky-50 · processando"          border />
                <ColorDot hex="#f8fafc" label="slate-100 · cancelado"         border />
              </div>
            </SubSection>

            <SubSection title="Sidebar dark — #0a1628">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <ColorDot hex="#0a1628" label="Fundo sidebar" />
                <ColorDot hex="#94a3b8" label="slate-400 · inativo · 5.9:1 WCAG" />
                <ColorDot hex="#f1f5f9" label="slate-100 · ativo · 12:1 WCAG" />
                <ColorDot hex="#E8533A" label="coral · ícone ativo · 3.1:1" />
                <ColorDot hex="#cbd5e1" label="slate-300 · nome usuário · 8.1:1" />
                <ColorDot hex="#475569" label="slate-600 · label seção" />
              </div>
            </SubSection>
          </Section>
        </div>

        {/* ── 2. TIPOGRAFIA ── */}
        <div id="tipografia" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Tipografia" description="Fonte Inter (400–700). Todos os tamanhos e pesos utilizados na interface.">
            <TypographyShowcase />
          </Section>
        </div>

        {/* ── 3. BOTÕES ── */}
        <div id="botoes" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Botões" description="Primary coral, action blue, secondary, ghost, destructive e icon-only.">
            <ButtonShowcase />
          </Section>
        </div>

        {/* ── 4. BADGES ── */}
        <div id="badges" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Status Badges" description="Todos os 9 estados possíveis de uma despesa no workflow.">
            <div className="flex flex-wrap gap-4">
              {Object.keys(STATUS_CONFIG).map((status) => (
                <div key={status} className="flex flex-col items-start gap-1.5">
                  <StatusBadge status={status} />
                  <span className="text-[9px] font-mono text-slate-400 pl-0.5">{status}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ── 5. KPI CARDS ── */}
        <div id="kpi" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="KPI Cards" description="Métricas do dashboard com accent lateral. 5 variantes de cor.">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              <KPICard label="Pendente aprv." value="14"  sublabel="aguardando financeiro"       icon="schedule"  color="amber"  />
              <KPICard label="Aguard. CFO"    value="3"   sublabel="alçada acima de R$5k"       icon="gpp_maybe" color="orange" />
              <KPICard label="Revisão manual" value="7"   sublabel="confiança IA < 85%"         icon="warning"   color="red"    />
              <KPICard label="Fornec. pend."  value="2"   sublabel="CNPJ não cadastrado"        icon="store"     color="violet" />
              <KPICard label="Pagas / mês"    value="31"  sublabel="total processado"           icon="paid"      color="blue"   />
            </div>
          </Section>
        </div>

        {/* ── 6. TOASTS ── */}
        <div id="toasts" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Notificações (Toast)" description="4 níveis de severidade — success, info, warning, error. Com barra de progresso e auto-dismiss.">
            <div className="flex flex-wrap gap-5">
              {(["success","info","warning","error"] as const).map((lvl) => (
                <ToastPreview key={lvl} level={lvl} />
              ))}
            </div>
          </Section>
        </div>

        {/* ── 7. INPUTS ── */}
        <div id="inputs" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Inputs & Formulários" description="Default, preenchido, foco (ring blue), erro (ring red), disabled e textarea.">
            <InputPreview />
          </Section>
        </div>

        {/* ── 8. TABELA ── */}
        <div id="tabela" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Tabela de Dados" description="Header com rótulos uppercase, linhas com hover sutil e badges de status inline.">
            <TablePreview />
          </Section>
        </div>

        {/* ── 9. PAGINAÇÃO ── */}
        <div id="paginacao" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Paginação" description="Seletor de tamanho de página + navegação interativa. Clique nos números.">
            <PaginationPreview />
          </Section>
        </div>

        {/* ── 10. SIDEBAR ── */}
        <div id="sidebar" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Sidebar" description="Dark theme #0a1628. Modo compacto (ícones) e expandido. Clique para trocar item ativo.">
            <SidebarPreview />
          </Section>
        </div>

        {/* ── 11. ÍCONES ── */}
        <div id="icons" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Ícones (Material Symbols)" description="Todos os ícones usados. Clique para copiar o nome. Use busca para filtrar.">
            <IconsShowcase />
          </Section>
        </div>

        {/* ── 12. GRÁFICOS ── */}
        <div id="graficos" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Paleta de Gráficos" description="Sequência de cores usada em Recharts bar/line/pie charts.">
            <ChartPalettePreview />
          </Section>
        </div>

        {/* Footer */}
        <div className="text-center py-6 border-t border-slate-200 mt-4">
          <p className="text-xs text-slate-400">Sellers Sistema Financeiro · Design System v0.1 · 2026</p>
          <p className="text-[10px] text-slate-300 mt-1">Inter · Material Symbols Outlined · Tailwind CSS 3.3 · Radix UI</p>
        </div>
      </div>
    </div>
  );
}
