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

// ─── SELLERS ICON ────────────────────────────────────────────────────────────

function SellersIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  const h = Math.round(size * 64 / 70);
  return (
    <svg width={size} height={h} viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="si_g0" x1="59.0083" y1="29.8418" x2="28.5315" y2="63.3001" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF644C"/><stop offset="0.32" stopColor="#FF604E"/>
          <stop offset="0.64" stopColor="#FD5454"/><stop offset="0.95" stopColor="#FB415F"/>
          <stop offset="1" stopColor="#FB3D61"/>
        </linearGradient>
        <linearGradient id="si_g1" x1="-6.2688" y1="60.0729" x2="41.0843" y2="-14.5025" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC65E"/><stop offset="0.19" stopColor="#FEB762"/>
          <stop offset="0.54" stopColor="#FD906E"/><stop offset="1" stopColor="#FB557F"/>
        </linearGradient>
        <linearGradient id="si_g2" x1="-6.91541" y1="9.51869" x2="28.3465" y2="20.5058" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF644C"/><stop offset="0.32" stopColor="#FF604E"/>
          <stop offset="0.64" stopColor="#FD5454"/><stop offset="0.95" stopColor="#FB415F"/>
          <stop offset="1" stopColor="#FB3D61"/>
        </linearGradient>
      </defs>
      <path d="M20.7874 46.5682L28.4389 60.079C29.1157 61.2712 30.089 62.2612 31.2611 62.9495C32.4332 63.6378 33.7627 64.0001 35.1161 64.0001C36.4694 64.0001 37.799 63.6378 38.971 62.9495C40.1431 62.2612 41.1165 61.2712 41.7932 60.079L58.4435 30.7074L20.7874 46.5682Z" fill="url(#si_g0)"/>
      <path d="M69.1901 11.7689C69.8675 10.5768 70.2245 9.22428 70.2251 7.84732C70.2258 6.47036 69.8701 5.11749 69.1938 3.92471C68.5175 2.73193 67.5444 1.74128 66.3724 1.05234C65.2004 0.363404 63.8708 0.000461403 62.5172 0C61.166 0.00305884 59.8285 0.275076 58.5801 0.800715L7.11133 22.4692L20.7874 46.5682L58.4413 30.7073L69.1901 11.7689Z" fill="url(#si_g1)"/>
      <path d="M35.1127 10.6808L11.6729 0.800754C10.4242 0.275023 9.08644 0.00300395 7.73504 3.95518e-05C6.37913 -0.00434009 5.04607 0.355077 3.87029 1.04204C2.69452 1.729 1.71761 2.71922 1.03811 3.91281C0.358603 5.10641 0.000529 6.46118 5.85689e-07 7.84047C-0.000527828 9.21977 0.356508 10.5748 1.0351 11.769L7.11159 22.4497L36.5895 10.0336L35.1127 10.6808Z" fill="url(#si_g2)"/>
      <path d="M39.8968 29.5196H29.7778C29.2157 29.5196 28.6766 29.2925 28.2792 28.8881C27.8817 28.4838 27.6584 27.9354 27.6584 27.3636C27.6584 26.7918 27.8817 26.2434 28.2792 25.8391C28.6766 25.4348 29.2157 25.2076 29.7778 25.2076H39.8968C40.4589 25.2076 40.998 25.4348 41.3955 25.8391C41.7929 26.2434 42.0162 26.7918 42.0162 27.3636C42.0162 27.9354 41.7929 28.4838 41.3955 28.8881C40.998 29.2925 40.4589 29.5196 39.8968 29.5196Z" fill="#001960"/>
      <path d="M52.5417 38.9313C58.8225 38.9313 63.914 33.7519 63.914 27.3629C63.914 20.9739 58.8225 15.7945 52.5417 15.7945C46.261 15.7945 41.1695 20.9739 41.1695 27.3629C41.1695 33.7519 46.261 38.9313 52.5417 38.9313Z" fill="#B6F0FF"/>
      <path d="M56.2464 16.4713C54.7831 15.263 53.1491 15.7771 51.8339 18.0264V36.7947C53.1462 39.0246 54.7931 39.5386 56.2571 38.3303L56.2464 16.4713Z" fill="white"/>
      <path d="M57.2544 16.8818V37.9162C58.0909 37.5277 58.8777 37.0369 59.5973 36.4545V18.3435C58.8777 17.7611 58.0909 17.2703 57.2544 16.8818Z" fill="white"/>
      <path d="M52.5437 41.0806C49.8743 41.0819 47.2646 40.2776 45.0447 38.7697C42.8249 37.2617 41.0946 35.1177 40.0729 32.6091C39.0513 30.1005 38.7841 27.34 39.3052 24.6769C39.8263 22.0137 41.1123 19.5677 43.0005 17.6483C44.8887 15.7289 47.2941 14.4224 49.9124 13.8941C52.5308 13.3658 55.2443 13.6395 57.7097 14.6805C60.1751 15.7215 62.2815 17.4831 63.7624 19.7423C65.2433 22.0015 66.0321 24.6568 66.029 27.3721C66.0248 31.0082 64.6024 34.4939 62.0741 37.0641C59.5457 39.6343 56.1181 41.0789 52.5437 41.0806ZM52.5437 17.9503C50.7139 17.9491 48.9249 18.4997 47.4028 19.5326C45.8807 20.5656 44.6938 22.0344 43.9923 23.7535C43.2907 25.4725 43.106 27.3646 43.4615 29.1904C43.8169 31.0162 44.6966 32.6939 45.9893 34.0112C47.282 35.3285 48.9296 36.2263 50.7238 36.5911C52.5181 36.9559 54.3784 36.7714 56.0695 36.0608C57.7607 35.3502 59.2067 34.1454 60.2248 32.5989C61.243 31.0523 61.7874 29.2334 61.7894 27.3721C61.7907 26.1359 61.5526 24.9115 61.0886 23.7688C60.6246 22.6262 59.9439 21.5878 59.0853 20.7128C58.2267 19.8379 57.2071 19.1436 56.0847 18.6696C54.9622 18.1956 53.759 17.9512 52.5437 17.9503Z" fill="#001960"/>
      <path d="M17.6901 38.9313C23.9708 38.9313 29.0623 33.7519 29.0623 27.3629C29.0623 20.9739 23.9708 15.7945 17.6901 15.7945C11.4093 15.7945 6.31781 20.9739 6.31781 27.3629C6.31781 33.7519 11.4093 38.9313 17.6901 38.9313Z" fill="#B6F0FF"/>
      <path d="M21.1948 16.4709C20.0333 15.2626 18.721 15.8034 17.6904 18.0064V36.795C18.721 39.0248 20.0333 39.5388 21.1948 38.3305V16.4709Z" fill="white"/>
      <path d="M22.199 16.8818V37.9162C23.0362 37.529 23.8231 37.0381 24.5419 36.4545V18.3435C23.8231 17.7599 23.0362 17.269 22.199 16.8818Z" fill="white"/>
      <path d="M17.7089 41.0806C15.0387 41.0857 12.4271 40.2848 10.2047 38.7792C7.98232 37.2735 6.24908 35.1309 5.22445 32.6227C4.19983 30.1144 3.92991 27.3533 4.44886 24.6888C4.96781 22.0244 6.2523 19.5766 8.13969 17.6552C10.0271 15.7338 12.4325 14.4254 15.0514 13.8955C17.6702 13.3656 20.3848 13.6382 22.8513 14.6786C25.3178 15.7191 27.4253 17.4806 28.907 19.7402C30.3888 21.9998 31.1781 24.6559 31.175 27.3721C31.1708 31.0048 29.7511 34.4876 27.2269 37.0572C24.7027 39.6268 21.28 41.0737 17.7089 41.0806ZM17.7089 17.9503C15.8784 17.9452 14.0874 18.4925 12.5628 19.5231C11.0381 20.5537 9.84829 22.0212 9.1438 23.7399C8.4393 25.4586 8.25184 27.3512 8.60513 29.1783C8.95842 31.0055 9.83658 32.6849 11.1285 34.0042C12.4204 35.3234 14.068 36.2232 15.8627 36.5896C17.6575 36.956 19.5188 36.7726 21.2111 36.0626C22.9033 35.3526 24.3505 34.1478 25.3695 32.6009C26.3885 31.0539 26.9334 29.2342 26.9354 27.3721C26.9373 24.8792 25.9669 22.4874 24.2371 20.7216C22.5073 18.9557 20.1595 17.9601 17.7089 17.9532V17.9503Z" fill="#001960"/>
      <path d="M35.1118 44.3655C33.958 44.3682 32.8151 44.1391 31.7486 43.6912C30.6821 43.2433 29.7131 42.5855 28.8972 41.7556C28.548 41.3434 28.3648 40.812 28.3846 40.2682C28.4044 39.7244 28.6257 39.2083 29.004 38.8235C29.3822 38.4386 29.8896 38.2136 30.4242 38.1935C30.9588 38.1733 31.4812 38.3596 31.8864 38.7149C32.7456 39.5753 33.9029 40.0575 35.1086 40.0575C36.3143 40.0575 37.4716 39.5753 38.3308 38.7149C38.7331 38.3407 39.2617 38.1386 39.8066 38.1505C40.3516 38.1624 40.8711 38.3875 41.2572 38.7789C41.6433 39.1704 41.8663 39.6981 41.8799 40.2525C41.8934 40.8068 41.6964 41.3451 41.3299 41.7556C40.5128 42.5847 39.543 43.242 38.4761 43.6898C37.4092 44.1376 36.266 44.3672 35.1118 44.3655Z" fill="#001960"/>
    </svg>
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

// Espelho exato de STATUS_CONFIG em DespesaTable.tsx
const STATUS_CONFIG: Record<string, { label: string; icon: string; className: string; descricao: string }> = {
  recebida:            { label: "Recebida",       icon: "move_to_inbox", className: "bg-slate-100 text-slate-600 border-slate-300",    descricao: "Email recebido. Aguardando processamento pelo agente de IA." },
  extraida:            { label: "Extraída",        icon: "description",   className: "bg-blue-100 text-blue-700 border-blue-200",       descricao: "Dados extraídos com sucesso. Aguardando fila de aprovação." },
  fornecedor_pendente: { label: "Forn. pendente", icon: "store",         className: "bg-violet-100 text-violet-700 border-violet-200", descricao: "CNPJ não cadastrado. Acesse o detalhe para cadastrar o fornecedor." },
  processando_anexo:   { label: "Processando",    icon: "hourglass_top", className: "bg-sky-100 text-sky-700 border-sky-200",          descricao: "Agente de IA está extraindo os dados do documento." },
  pendente_aprovacao:  { label: "Pendente",        icon: "schedule",      className: "bg-amber-100 text-amber-700 border-amber-200",    descricao: "Aguardando aprovação do financeiro." },
  aguardando_cfo:      { label: "Ag. CFO",         icon: "pending",       className: "bg-orange-100 text-orange-700 border-orange-200", descricao: "Valor acima de R$ 5.000. Aguardando aprovação do CFO." },
  revisao_manual:      { label: "Revisão",         icon: "warning",       className: "bg-red-100 text-red-700 border-red-200",          descricao: "Confiança da IA abaixo de 85%. Analista deve revisar os dados." },
  aprovada:            { label: "Aprovada",         icon: "check_circle",  className: "bg-green-100 text-green-700 border-green-200",    descricao: "Aprovada. Será lançada automaticamente no OMIE." },
  rejeitada:           { label: "Rejeitada",        icon: "cancel",        className: "bg-slate-200 text-slate-600 border-slate-300",    descricao: "Despesa rejeitada. Nenhuma ação necessária." },
  lancada:             { label: "Lançada",          icon: "task_alt",      className: "bg-emerald-100 text-emerald-700 border-emerald-200", descricao: "Lançada com sucesso no OMIE. Processo concluído." },
  erro_lancamento:     { label: "Erro OMIE",        icon: "error",         className: "bg-red-200 text-red-800 border-red-300",          descricao: "Falha no lançamento no OMIE. Será reprocessada automaticamente." },
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
    { id: "DES-003", fornecedor: "AWS Amazon",          categoria: "Infraestrutura", valor: "R$ 3.210,50",  status: "aprovada" },
    { id: "DES-004", fornecedor: "Sebrae SP",           categoria: "Capacitação",    valor: "R$ 990,00",    status: "revisao_manual" },
    { id: "DES-005", fornecedor: "Correios",            categoria: "Logística",      valor: "R$ 540,00",    status: "lancada" },
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
          <SellersIcon size={26} />
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
            <SellersIcon size={26} />
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

// ─── ANIMAÇÕES ────────────────────────────────────────────────────────────────

function DrawerToastDemo() {
  const [drawerKey, setDrawerKey] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toastKey, setToastKey] = useState(0);

  const openDrawer = () => {
    setDrawerKey((k) => k + 1);
    setDrawerOpen(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {/* drawer-in */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-700">Drawer slide-in</p>
            <p className="text-[10px] font-mono text-slate-400 mt-0.5">animate-drawer-in · 0.25s · cubic-bezier(0.16,1,0.3,1)</p>
          </div>
          <button
            onClick={openDrawer}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
            style={{ backgroundColor: "#E8533A" }}
          >
            <MSIcon name="add" className="text-[13px]" /> Abrir
          </button>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 h-32 relative overflow-hidden shadow-sm">
          {!drawerOpen && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xs text-slate-300">← clique em Abrir</p>
            </div>
          )}
          {drawerOpen && (
            <div
              key={drawerKey}
              className="animate-drawer-in absolute top-0 right-0 bottom-0 w-48 bg-white border-l border-slate-200 shadow-xl flex flex-col p-4 gap-2.5"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-700">Nova Despesa</p>
                <button onClick={() => setDrawerOpen(false)} className="text-slate-300 hover:text-slate-500">
                  <MSIcon name="close" className="text-[15px]" />
                </button>
              </div>
              <div className="h-2.5 bg-slate-100 rounded w-3/4" />
              <div className="h-2.5 bg-slate-100 rounded w-1/2" />
              <div className="h-7 bg-slate-100 rounded w-full" />
              <div className="h-2.5 bg-slate-100 rounded w-2/3" />
            </div>
          )}
        </div>
      </div>

      {/* toast-in */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-700">Toast notification</p>
            <p className="text-[10px] font-mono text-slate-400 mt-0.5">animate-toast-in · 0.22s · translateX + opacity</p>
          </div>
          <button
            onClick={() => setToastKey((k) => k + 1)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <MSIcon name="refresh" className="text-[13px]" /> Replay
          </button>
        </div>
        <div className="flex items-end justify-end h-32 pb-1">
          {toastKey > 0 ? (
            <div key={toastKey} className="animate-toast-in bg-white rounded-xl border border-emerald-200 shadow-lg overflow-hidden w-64">
              <div className="flex gap-2.5 px-3 py-2.5 items-start">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MSIcon name="check_circle" className="text-[15px] text-emerald-600" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'OPSZ' 20" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-800 leading-tight">Despesa aprovada</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Enviada ao OMIE com sucesso.</p>
                </div>
                <button className="flex-shrink-0 self-start text-slate-300">
                  <MSIcon name="close" className="text-[14px]" />
                </button>
              </div>
              <div className="h-0.5 bg-slate-100"><div className="h-full w-1/2 bg-emerald-400" /></div>
            </div>
          ) : (
            <p className="text-xs text-slate-300">← clique em Replay</p>
          )}
        </div>
      </div>
    </div>
  );
}

function TailwindAnimsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

      {/* 1 — Spin (progress_activity — padrão de produção) */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white py-7 px-4">
        <div className="flex items-center justify-center w-20 h-20">
          <MSIcon
            name="progress_activity"
            className="animate-spin text-[38px]"
            style={{ color: "#E8533A", animationDuration: "1.1s" }}
          />
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700">Spin</p>
          <p className="text-[10px] font-mono text-slate-400 mt-0.5">animate-spin</p>
          <p className="text-[9px] font-mono text-slate-300 mt-0.5">progress_activity</p>
        </div>
      </div>

      {/* 2 — Pulse */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white py-7 px-4">
        <div className="flex flex-col items-center justify-center w-20 h-20 gap-2">
          <OculosIcon size={28} className="animate-pulse" style={{ color: "#2563EB" }} />
          <div className="w-12 h-1.5 rounded-full bg-blue-100 overflow-hidden">
            <div className="h-full w-2/3 bg-blue-400 animate-pulse rounded-full" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700">Pulse</p>
          <p className="text-[10px] font-mono text-slate-400 mt-0.5">animate-pulse</p>
        </div>
      </div>

      {/* 3 — Ping */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white py-7 px-4">
        <div className="relative flex items-center justify-center w-20 h-20">
          <span
            className="absolute inline-flex w-14 h-14 rounded-full animate-ping"
            style={{ backgroundColor: "rgba(232,83,58,0.18)" }}
          />
          <OculosIcon size={28} style={{ color: "#E8533A" }} />
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700">Ping</p>
          <p className="text-[10px] font-mono text-slate-400 mt-0.5">animate-ping</p>
        </div>
      </div>

      {/* 4 — Bounce */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-[#0a1628] py-7 px-4">
        <div className="flex items-center justify-center w-20 h-20">
          <OculosIcon size={28} className="animate-bounce" style={{ color: "#ffffff" }} />
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-300">Bounce</p>
          <p className="text-[10px] font-mono text-slate-500 mt-0.5">animate-bounce</p>
        </div>
      </div>

      {/* 5 — Wave (staggered) */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white py-7 px-4">
        <div className="flex items-end justify-center gap-2 w-20 h-20">
          {[
            { delay: "0s",    color: "#E8533A" },
            { delay: "0.18s", color: "#2563EB" },
            { delay: "0.36s", color: "#001960" },
          ].map((item, i) => (
            <div key={i} className="animate-bounce" style={{ animationDelay: item.delay, animationDuration: "0.9s" }}>
              <OculosIcon size={18} style={{ color: item.color }} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700">Wave</p>
          <p className="text-[10px] font-mono text-slate-400 mt-0.5">staggered delay</p>
        </div>
      </div>

    </div>
  );
}

// ─── OCULOS ICON (Material Symbols style) ────────────────────────────────────

function OculosIcon({
  size = 24,
  filled = false,
  className = "",
  style,
}: {
  size?: number;
  filled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const sw = filled ? 2.5 : 1.5;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Lente esquerda — cx=6, simétrico em torno de x=12 */}
      <circle cx="6" cy="12" r="4.5" stroke="currentColor" strokeWidth={sw}/>
      {/* Ponte — centrada em x=12 */}
      <line x1="10.5" y1="12" x2="13.5" y2="12" stroke="currentColor" strokeWidth={sw} strokeLinecap="round"/>
      {/* Lente direita — cx=18, simétrico em torno de x=12 */}
      <circle cx="18" cy="12" r="4.5" stroke="currentColor" strokeWidth={sw}/>
    </svg>
  );
}

const OCULOS_COLORS = [
  { key: "coral",       color: "#E8533A", bg: "#ffffff", label: "coral",       darkLabel: false },
  { key: "navy",        color: "#001960", bg: "#ffffff", label: "navy",        darkLabel: false },
  { key: "blue",        color: "#2563EB", bg: "#ffffff", label: "blue",        darkLabel: false },
  { key: "slate",       color: "#64748b", bg: "#ffffff", label: "slate",       darkLabel: false },
  { key: "white-navy",  color: "#ffffff", bg: "#0a1628", label: "white/navy",  darkLabel: true  },
  { key: "coral-light", color: "#E8533A", bg: "#FDF1EE", label: "coral light", darkLabel: false },
  { key: "cyan",        color: "#B6F0FF", bg: "#001960", label: "cyan/navy",   darkLabel: true  },
  { key: "gradient-a",  color: "#FF644C", bg: "#ffffff", label: "gradient-a",  darkLabel: false },
];

function OculosIconShowcase() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="space-y-4">

      {/* ── Variantes de cor ── */}
      <div className="flex flex-wrap gap-1.5">
        {OCULOS_COLORS.map((v) => (
          <button
            key={v.key}
            onClick={() => {
              navigator.clipboard.writeText(`<OculosIcon style={{ color: "${v.color}" }} />`);
              setActive(active === v.key ? null : v.key);
            }}
            title={v.label}
            className={`inline-flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${
              active === v.key
                ? "ring-2 ring-blue-300 border-blue-300 shadow-sm"
                : "border-slate-200 hover:border-slate-300"
            }`}
            style={{ backgroundColor: v.bg }}
          >
            <OculosIcon size={22} style={{ color: v.color }} />
            <span
              className="text-[9px] font-mono max-w-[72px] text-center leading-tight"
              style={{ color: v.darkLabel ? "#94a3b8" : "#94a3b8" }}
            >
              {v.label}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <p className="text-xs text-blue-600 font-mono">
          Copiado: {`<OculosIcon style={{ color: "${OCULOS_COLORS.find((v) => v.key === active)?.color}" }} />`}
        </p>
      )}
    </div>
  );
}

// ─── ICONS ───────────────────────────────────────────────────────────────────

const ICONS_USED = [
  // Navegação & layout
  "menu", "chevron_left", "chevron_right", "first_page", "last_page",
  "expand_more", "expand_less", "arrow_back", "arrow_forward",
  // Ações principais
  "add", "add_circle", "add_task", "check", "close", "delete", "edit", "edit_note",
  "save", "refresh", "repeat", "filter_list", "tune", "search", "search_off",
  "more_vert", "more_horiz", "download", "upload", "upload_file",
  // Sistema & módulos
  "payments", "bar_chart", "store", "settings", "account_tree", "palette",
  "receipt_long", "description", "attach_file", "picture_as_pdf",
  "currency_exchange", "storefront", "account_balance", "local_shipping",
  // Usuário & sessão
  "person", "logout", "lock", "visibility",
  // Status & workflow
  "schedule", "pending", "gpp_maybe", "warning", "check_circle", "cancel",
  "task_alt", "error", "block", "autorenew",
  "move_to_inbox", "hourglass_top", "hourglass_empty", "hourglass_disabled",
  // Feedback & notificações
  "info", "cloud_off", "send", "schedule_send", "mail",
  "progress_activity", "paid",
  // Calendário & datas
  "calendar_today", "event_available", "history",
  // Misc
  "format_list_numbered", "list", "link", "timer",
  "auto_awesome",
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
  { id: "marca",      label: "Marca",       icon: "verified" },
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
  { id: "animacoes",  label: "Animações",   icon: "motion_photos_on" },
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
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(232, 83, 58, 0.08)" }}>
              <SellersIcon size={22} />
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

        {/* ── 0. MARCA ── */}
        <div id="marca" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Marca" description="Ícone de marca extraído do logo Sellers. Use em favicons, avatares, loading screens e qualquer contexto que precise só do símbolo.">

            <SubSection title="Ícone — tamanhos">
              <div className="flex items-end gap-8 flex-wrap">
                {[16, 24, 32, 48, 64, 96].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <SellersIcon size={s} />
                    <span className="text-[10px] font-mono text-slate-400">{s}px</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Fundos">
              <div className="flex gap-4 flex-wrap">
                {[
                  { bg: "#ffffff", border: true,  label: "Branco" },
                  { bg: "#0a1628", border: false,  label: "Navy (sidebar)" },
                  { bg: "#E8533A", border: false,  label: "Coral" },
                  { bg: "#f1f5f9", border: false,  label: "Slate 100" },
                ].map(({ bg, border, label }) => (
                  <div key={bg} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-20 h-20 rounded-xl flex items-center justify-center ${border ? "border border-slate-200" : ""}`}
                      style={{ backgroundColor: bg }}
                    >
                      <SellersIcon size={48} />
                    </div>
                    <span className="text-[10px] text-slate-400">{label}</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Arquivo SVG e componente React">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900 rounded-xl px-5 py-4 font-mono text-xs text-slate-300 leading-loose">
                  <span className="text-slate-500 text-[10px] block mb-2 uppercase tracking-widest">React component</span>
                  <span className="text-blue-400">import</span>{" "}
                  <span className="text-white">{"{ SellersIcon }"}</span>{" "}
                  <span className="text-blue-400">from</span>{" "}
                  <span className="text-emerald-400">"@/components/SellersIcon"</span>
                  <br/><br/>
                  <span className="text-slate-500">{"// padrão 32px"}</span><br/>
                  <span className="text-pink-400">{"<SellersIcon />"}</span>
                  <br/><br/>
                  <span className="text-slate-500">{"// tamanho customizado"}</span><br/>
                  <span className="text-pink-400">{"<SellersIcon"}</span>{" "}
                  <span className="text-yellow-300">size</span>
                  <span className="text-white">={"{48}"}</span>{" "}
                  <span className="text-pink-400">{"/>"}</span>
                </div>
                <div className="bg-slate-900 rounded-xl px-5 py-4 font-mono text-xs text-slate-300 leading-loose">
                  <span className="text-slate-500 text-[10px] block mb-2 uppercase tracking-widest">HTML / img tag</span>
                  <span className="text-pink-400">{"<img"}</span>
                  <br/>
                  {"  "}<span className="text-yellow-300">src</span>
                  <span className="text-white">{"=\"/sellers-icon.svg\""}</span>
                  <br/>
                  {"  "}<span className="text-yellow-300">alt</span>
                  <span className="text-white">{"=\"Sellers\""}</span>
                  <br/>
                  {"  "}<span className="text-yellow-300">width</span>
                  <span className="text-white">{"=\"32\""}</span>
                  <br/>
                  {"  "}<span className="text-yellow-300">height</span>
                  <span className="text-white">{"=\"29\""}</span>
                  <br/>
                  <span className="text-pink-400">{"/>"}</span>
                </div>
              </div>
            </SubSection>

          </Section>
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
                <ColorDot hex="#020817"  label="--foreground" />
                <ColorDot hex="#e2e8f0"  label="--border"       border />
                <ColorDot hex="#2563EB"  label="--primary" />
                <ColorDot hex="#f1f5f9"  label="--secondary"    border />
                <ColorDot hex="#f1f5f9"  label="--muted"        border />
                <ColorDot hex="#ef4444"  label="--destructive" />
                <ColorDot hex="#f1f5f9"  label="--accent"       border />
              </div>
            </SubSection>

            <SubSection title="Status das despesas">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <ColorDot hex="#f1f5f9" label="slate-100 · recebida"           border />
                <ColorDot hex="#dbeafe" label="blue-100 · extraída"            border />
                <ColorDot hex="#ede9fe" label="violet-100 · fornec. pendente"  border />
                <ColorDot hex="#e0f2fe" label="sky-100 · processando anexo"    border />
                <ColorDot hex="#fef3c7" label="amber-100 · pendente aprovação" border />
                <ColorDot hex="#ffedd5" label="orange-100 · aguardando CFO"    border />
                <ColorDot hex="#fee2e2" label="red-100 · revisão manual"       border />
                <ColorDot hex="#dcfce7" label="green-100 · aprovada"           border />
                <ColorDot hex="#e2e8f0" label="slate-200 · rejeitada"          border />
                <ColorDot hex="#d1fae5" label="emerald-100 · lançada"          border />
                <ColorDot hex="#fecaca" label="red-200 · erro OMIE"            border />
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
          <Section title="Status Badges" description="Os 11 estados do workflow de despesas — espelho exato de DespesaTable.tsx.">
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

        {/* ── 11. ANIMAÇÕES ── */}
        <div id="animacoes" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Animações" description="Animações de produção (drawer-in, toast-in) e utilities Tailwind (spin, pulse, ping, bounce, wave).">
            <SubSection title="Produção — drawer-in & toast-in">
              <DrawerToastDemo />
            </SubSection>
            <SubSection title="Tailwind — animate-*">
              <TailwindAnimsGrid />
            </SubSection>
          </Section>
        </div>

        {/* ── 12. ÍCONES ── */}
        <div id="icons" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
          <Section title="Ícones" description="Ícone custom Sellers (Óculos) e biblioteca Material Symbols Outlined. Clique para copiar.">
            <SubSection title="Custom — Óculos Sellers">
              <OculosIconShowcase />
            </SubSection>
            <SubSection title="Material Symbols Outlined">
              <IconsShowcase />
            </SubSection>
          </Section>
        </div>

        {/* ── 13. GRÁFICOS ── */}
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
