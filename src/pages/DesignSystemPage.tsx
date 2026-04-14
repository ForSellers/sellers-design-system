import React, { useEffect, useRef, useState } from "react";

// ─── helpers ──────────────────────────────────────────────────────────────────

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5">
      <div className="border-b border-slate-200 dark:border-slate-700 pb-3">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{title}</h2>
        {description && <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">{title}</h3>
      {children}
    </div>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 rounded-md px-2 py-1">
      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{label}</span>
      <span className="text-[11px] font-mono text-slate-700 dark:text-slate-300">{value}</span>
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
  // Decide se o texto sobreposto na cor deve ser claro ou escuro
  const isDark = !border; // cores sem borda tendem a ser escuras
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="group relative w-full p-0 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer transition-transform hover:scale-[1.02]"
      title={`Copiar ${hex}`}
    >
      {/* Color block with hex overlay */}
      <div className="relative h-14 border-b border-slate-100 dark:border-slate-700" style={{ backgroundColor: hex }}>
        <span
          className="absolute bottom-1.5 right-2 text-[9px] font-mono opacity-70 leading-none"
          style={{ color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.55)" }}
        >
          {hex}
        </span>
      </div>
      <div className="px-3 py-2 bg-white dark:bg-slate-800 text-left">
        <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 leading-tight">{name}</p>
        {token && <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5 truncate">{token}</p>}
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
    <div className="flex items-start gap-2 min-w-0">
      <div className={`w-5 h-5 rounded-md flex-shrink-0 mt-0.5 ${border ? "border border-slate-200 dark:border-slate-600" : ""}`} style={{ backgroundColor: hex }} />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-600 dark:text-slate-300 truncate leading-tight">{label}</p>
        <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{hex}</p>
      </div>
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
    <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
      <div className="px-5 py-3.5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MSIcon name="receipt_long" className="text-[18px] text-slate-400 dark:text-slate-500" />
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Despesas</span>
          <span className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full font-medium">{rows.length} registros</span>
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
            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">ID</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Fornecedor</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Categoria</th>
              <th className="text-right px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Valor</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-700/50">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-700/30 transition-colors">
                <td className="px-5 py-3 font-mono text-xs text-slate-400 dark:text-slate-500">{row.id}</td>
                <td className="px-5 py-3 text-sm font-medium text-slate-800 dark:text-slate-100">{row.fornecedor}</td>
                <td className="px-5 py-3 text-sm text-slate-500 dark:text-slate-400">{row.categoria}</td>
                <td className="px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 text-right tabular-nums">{row.valor}</td>
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
    <div className="flex rounded-xl overflow-x-auto overflow-y-hidden shadow-lg border border-slate-200" style={{ backgroundColor: "#0a1628", height: 340 }}>
      <div className="flex min-w-[360px] w-full">
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
    </div>
  );
}

// ─── PAGINATION PREVIEW ──────────────────────────────────────────────────────

function PaginationPreview() {
  const [page, setPage] = useState(3);
  const totalPages = 8;
  const btnBase = "inline-flex items-center justify-center min-w-[32px] h-8 px-1.5 rounded-lg border text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed";
  const btnDefault = `${btnBase} border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700`;
  const btnActive  = `${btnBase} border-blue-600 bg-blue-600 text-white`;

  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 4)              return [1,2,3,4,5,"...",totalPages];
    if (page >= totalPages - 3) return [1,"...",totalPages-4,totalPages-3,totalPages-2,totalPages-1,totalPages];
    return [1,"...",page-1,page,page+1,"...",totalPages];
  };

  return (
    <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
      <div className="flex items-center gap-3">
        <button className="h-9 min-w-[130px] flex items-center justify-between gap-2 border border-slate-200 dark:border-slate-600 rounded-lg px-3 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">
          <span className="inline-flex items-center gap-1.5">
            <MSIcon name="format_list_numbered" className="text-[16px] text-slate-400 dark:text-slate-500" />
            10 por página
          </span>
          <MSIcon name="expand_more" className="text-[18px] text-slate-400 dark:text-slate-500" />
        </button>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">21–30 de 78 registros</span>
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
  const lbl = "block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className={lbl}>Default</label>
        <input className={`${base} border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 bg-white dark:bg-slate-800`} placeholder="ex.: NF-e 000456" />
      </div>
      <div className="space-y-1">
        <label className={lbl}>Preenchido</label>
        <input className={`${base} border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800`} defaultValue="Shopee Brasil LTDA" readOnly />
      </div>
      <div className="space-y-1">
        <label className={lbl}>Foco</label>
        <input className={`${base} border-blue-400 ring-2 ring-blue-100 dark:ring-blue-900 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100`} defaultValue="editando campo..." readOnly />
      </div>
      <div className="space-y-1">
        <label className={lbl}>Erro</label>
        <input className={`${base} border-red-300 ring-2 ring-red-100 dark:ring-red-900/40 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100`} defaultValue="valor inválido" readOnly />
        <p className="text-xs text-red-500 flex items-center gap-1"><MSIcon name="error" className="text-[13px]" />Campo obrigatório</p>
      </div>
      <div className="space-y-1">
        <label className={lbl}>Disabled</label>
        <input className={`${base} border-slate-100 dark:border-slate-700 text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-800/40 cursor-not-allowed`} defaultValue="somente leitura" disabled />
      </div>
      <div className="space-y-1">
        <label className={lbl}>Textarea</label>
        <textarea className={`${base} border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 bg-white dark:bg-slate-800 resize-none`} rows={3} placeholder="Observações sobre a despesa..." />
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
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <MSIcon name="filter_list" className="text-[16px]" /> Filtros
        </button>
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <MSIcon name="download" className="text-[16px]" /> Exportar
        </button>
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors">
          <MSIcon name="delete" className="text-[16px]" /> Excluir
        </button>
        <button className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
          <MSIcon name="more_vert" className="text-[18px]" />
        </button>
        <button disabled className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white opacity-40 cursor-not-allowed" style={{ backgroundColor: "#E8533A" }}>
          <MSIcon name="send" className="text-[16px]" /> Enviar
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-center font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
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
  const WEIGHTS = [
    { w: "400", cls: "font-normal",   label: "Regular",  sample: "Despesa de marketplace — NF-e 000456" },
    { w: "500", cls: "font-medium",   label: "Medium",   sample: "Shopee Brasil Ltda · CNPJ 45.678/0001" },
    { w: "600", cls: "font-semibold", label: "Semibold", sample: "Aprovação pendente do CFO" },
    { w: "700", cls: "font-bold",     label: "Bold",     sample: "R$ 48.750,00" },
  ];

  const SCALE = [
    { tag: "text-2xl · 700", sample: "R$ 48.750,00",                               cls: "text-2xl font-bold text-slate-800 dark:text-slate-100" },
    { tag: "text-xl · 600",  sample: "Contas a Pagar",                             cls: "text-xl font-semibold text-slate-800 dark:text-slate-100" },
    { tag: "text-lg · 600",  sample: "Despesa NF-e 000456",                        cls: "text-lg font-semibold text-slate-800 dark:text-slate-100" },
    { tag: "text-base · 500",sample: "Shopee Brasil Ltda",                         cls: "text-base font-medium text-slate-800 dark:text-slate-100" },
    { tag: "text-sm · 400",  sample: "Descrição da despesa com detalhes da NF.",   cls: "text-sm text-slate-600 dark:text-slate-300" },
    { tag: "text-xs · 500",  sample: "Atualizado há 3 horas · financeiro@sellers", cls: "text-xs font-medium text-slate-500 dark:text-slate-400" },
    { tag: "text-[11px] caps",sample: "Pendente Aprovação",                        cls: "text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500" },
    { tag: "font-mono · 400",sample: "DES-2024-001 · 45.678.123/0001-99",         cls: "font-mono text-sm text-slate-600 dark:text-slate-300" },
    { tag: "tabular-nums",   sample: "1.234 · 56.789 · R$ 99.999,00",             cls: "text-sm tabular-nums text-slate-700 dark:text-slate-200" },
  ];

  return (
    <div className="space-y-6">

      {/* Pesos Inter */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Pesos — Inter 400 a 700</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {WEIGHTS.map((w) => (
            <div
              key={w.w}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50"
            >
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 w-8 flex-shrink-0">{w.w}</span>
              <span className={`text-sm text-slate-800 dark:text-slate-100 leading-snug truncate ${w.cls}`}>{w.sample}</span>
              <span className="ml-auto text-[10px] font-medium text-slate-400 dark:text-slate-500 flex-shrink-0">{w.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Escala de tamanhos */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Escala de tamanhos</h3>
        <div className="space-y-2.5">
          {SCALE.map((r) => (
            <div key={r.tag} className="flex items-baseline gap-4">
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 w-24 sm:w-36 flex-shrink-0 truncate">{r.tag}</span>
              <span className={r.cls}>{r.sample}</span>
            </div>
          ))}
        </div>
      </div>

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
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Drawer slide-in</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">animate-drawer-in · 0.25s · cubic-bezier(0.16,1,0.3,1)</p>
          </div>
          <button
            onClick={openDrawer}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
            style={{ backgroundColor: "#E8533A" }}
          >
            <MSIcon name="add" className="text-[13px]" /> Abrir
          </button>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 h-32 relative overflow-hidden shadow-sm">
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
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Toast notification</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">animate-toast-in · 0.22s · translateX + opacity</p>
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

interface SellersLoaderProps {
  size?: number;
  label?: string;
}

function OculosDraw({ size = 64, label, className = "" }: SellersLoaderProps & { className?: string }) {
  const dur = "1.6s";
  const ease = "cubic-bezier(0.4, 0, 0.2, 1)";
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="12" r="4.5" stroke="#E8533A" strokeWidth="1.5"
          strokeDasharray="29" strokeDashoffset="29"
          style={{ animation: `sellers-draw ${dur} ${ease} infinite` }} />
        <circle cx="18" cy="12" r="4.5" stroke="#E8533A" strokeWidth="1.5"
          strokeDasharray="29" strokeDashoffset="29"
          style={{ animation: `sellers-draw ${dur} ${ease} 0.18s infinite` }} />
        <line x1="10.5" y1="12" x2="13.5" y2="12" stroke="#E8533A" strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray="4" strokeDashoffset="4"
          style={{ animation: `sellers-draw-bridge ${dur} ${ease} 0.32s infinite` }} />
      </svg>
      {label && <span className="text-xs text-slate-500">{label}</span>}
    </div>
  );
}

function TailwindAnimsGrid() {
  return (
    <div className="space-y-3">

      {/* ── Row 1 — Originais ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

        {/* 1 — Spin */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="flex items-center justify-center w-20 h-20">
            <div className="animate-oculos-orbit" style={{ animationDuration: "2.2s" }}>
              <OculosIcon size={24} style={{ color: "#E8533A" }} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Spin</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">animate-spin</p>
          </div>
        </div>

        {/* 2 — Pulse */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 gap-2">
            <OculosIcon size={28} className="animate-pulse" style={{ color: "#2563EB" }} />
            <div className="w-12 h-1.5 rounded-full bg-blue-100 overflow-hidden">
              <div className="h-full w-2/3 bg-blue-400 animate-pulse rounded-full" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Pulse</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">animate-pulse</p>
          </div>
        </div>

        {/* 3 — Ping */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="relative flex items-center justify-center w-20 h-20">
            <span
              className="absolute inline-flex w-14 h-14 rounded-full animate-ping"
              style={{ backgroundColor: "rgba(232,83,58,0.18)" }}
            />
            <OculosIcon size={28} style={{ color: "#E8533A" }} />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Ping</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">animate-ping</p>
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
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
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
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Wave</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">staggered delay</p>
          </div>
        </div>
      </div>

      {/* ── Row 2 — Óculos Showcase ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

        {/* 6 · Float */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="flex items-center justify-center w-20 h-20">
            <OculosIcon size={32} className="animate-oculos-float" style={{ color: "#E8533A" }} />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Float</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">translateY · rotate</p>
          </div>
        </div>

        {/* 7 · Morph */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="flex items-center justify-center w-20 h-20">
            <OculosIcon size={32} className="animate-oculos-morph" style={{ color: "#2563EB" }} />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Morph</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">scale · rotate · spring</p>
          </div>
        </div>

        {/* 8 · Draw */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="flex items-center justify-center w-20 h-20">
            <OculosDraw size={36} />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Draw</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">stroke-dashoffset</p>
          </div>
        </div>

        {/* 9 · Glitch */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="flex items-center justify-center w-20 h-20 relative">
            <OculosIcon size={32} className="absolute animate-oculos-glitch" style={{ color: "#38bdf8", opacity: 0.5 }} />
            <OculosIcon size={32} className="absolute animate-oculos-glitch" style={{ color: "#E8533A", opacity: 0.5, animationDelay: "0.05s" }} />
            <OculosIcon size={32} className="animate-oculos-glitch" style={{ color: "#001960" }} />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Glitch</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">hue-rotate · translate</p>
          </div>
        </div>

        {/* 10 · Reveal */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
          <div className="flex items-center justify-center w-20 h-20">
            <OculosIcon size={36} className="animate-oculos-typewriter" style={{ color: "#001960" }} />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Reveal</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">clip-path · inset</p>
          </div>
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
        <p className="text-xs text-blue-600 font-mono break-all">
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
        className="w-full max-w-xs border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 bg-white dark:bg-slate-800"
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
                ? "border-blue-300 bg-blue-50 dark:bg-blue-900/30 shadow-sm"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
            }`}
          >
            <MSIcon name={name} className="text-[22px] text-slate-600 dark:text-slate-300" />
            <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 max-w-[72px] text-center leading-tight">{name}</span>
          </button>
        ))}
        {filtered.length === 0 && <p className="text-sm text-slate-400">Nenhum ícone encontrado.</p>}
      </div>
      {active && (
        <p className="text-xs text-blue-600 font-mono break-all">"{active}" copiado para o clipboard</p>
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
          <div key={c.hex} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60">
            <div className="w-4 h-4 rounded-md" style={{ backgroundColor: c.hex }} />
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{c.label}</span>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{c.hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── USER MENU PREVIEW ──────────────────────────────────────────────────────

function UserMenuPreview() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
      {/* Demo */}
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full pl-1 pr-2.5 py-1 hover:bg-slate-100 transition-colors"
        >
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-white text-[11px] font-bold select-none"
            style={{ backgroundColor: "#E8533A" }}
          >
            IO
          </span>
          <span className="text-xs font-medium text-slate-700">Igor Oliveira</span>
          <MSIcon name={open ? "expand_less" : "expand_more"} className="text-[14px] text-slate-400" />
        </button>

        {open && (
          <div className="absolute right-0 mt-1.5 w-64 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden animate-modal-in">
            <div className="px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold"
                  style={{ backgroundColor: "#E8533A" }}
                >
                  IO
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">Igor Oliveira</p>
                  <p className="text-xs text-slate-400 truncate">igor@sellers.com.br</p>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  CFO / CEO
                </span>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Analista financeiro
                </span>
              </div>
            </div>
            <div className="py-1">
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <MSIcon name="logout" className="text-[18px] text-slate-400" />
                Sair da conta
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Specs */}
      <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 max-w-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: "#E8533A" }} />
          <span>Avatar com iniciais em coral</span>
        </div>
        <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">Click-outside fecha o dropdown · ESC fecha · z-index: 50</p>
        <div className="flex gap-2">
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">CFO / CEO</span>
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Analista</span>
        </div>
      </div>
    </div>
  );
}

// ─── RETRY LOADER PREVIEW ───────────────────────────────────────────────────

function RetryLoaderPreview() {
  const [state, setState] = useState<"loading" | "error" | "retry">("loading");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Loading */}
      <div
        className={`rounded-2xl border p-5 cursor-pointer transition-all ${state === "loading" ? "border-blue-300 bg-blue-50/30 dark:bg-blue-900/20" : "border-slate-200 dark:border-slate-700"}`}
        onClick={() => setState("loading")}
      >
        <div className="flex flex-col items-center justify-center py-6 gap-3">
          <div className="animate-oculos-orbit" style={{ animationDuration: "2.2s" }}>
            <OculosIcon size={40} style={{ color: "#E8533A" }} />
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">Carregando...</span>
        </div>
        <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 text-center mt-1">loading state</p>
      </div>

      {/* Loading with retry counter */}
      <div
        className={`rounded-2xl border p-5 cursor-pointer transition-all ${state === "retry" ? "border-blue-300 bg-blue-50/30 dark:bg-blue-900/20" : "border-slate-200 dark:border-slate-700"}`}
        onClick={() => setState("retry")}
      >
        <div className="flex flex-col items-center justify-center py-6 gap-3">
          <OculosDraw size={40} />
          <span className="text-sm text-slate-500 dark:text-slate-400">Carregando...</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">Tentativa 2 de 3...</span>
        </div>
        <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 text-center mt-1">retry attempt</p>
      </div>

      {/* Error */}
      <div
        className={`rounded-2xl border p-5 cursor-pointer transition-all ${state === "error" ? "border-red-300 bg-red-50/30 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700"}`}
        onClick={() => setState("error")}
      >
        <div className="flex flex-col items-center justify-center py-6 gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center">
            <OculosIcon size={28} style={{ color: "#f87171" }} />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Nao foi possivel carregar</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Timeout ao conectar com o servidor.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
            <MSIcon name="refresh" className="text-base" />
            Tentar novamente
          </button>
        </div>
        <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 text-center mt-1">error state</p>
      </div>
    </div>
  );
}

// ─── COUNTUP PREVIEW ────────────────────────────────────────────────────────

function CountUpPreview() {
  const [key, setKey] = useState(0);

  const FORMATTERS = {
    brl: (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v),
    number: (v: number) => String(v),
  };

  function CountUpDemo({ to, type = "number", className = "" }: { to: number; type?: "brl" | "number"; className?: string }) {
    const format = FORMATTERS[type];
    const [display, setDisplay] = useState(format(0));
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = performance.now();

      function tick(timestamp: number) {
        const elapsed = timestamp - startRef.current!;
        const progress = Math.min(elapsed / 400, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(format(Math.round(to * eased)));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(format(to));
        }
      }

      rafRef.current = requestAnimationFrame(tick);
      return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [to, format, key]);

    return <span className={className}>{display}</span>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <p className="text-xs text-slate-500 dark:text-slate-400">Contador animado com <span className="font-mono">requestAnimationFrame</span> — 400ms cubic ease-out. Clique em Replay.</p>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="self-start sm:self-auto inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex-shrink-0"
        >
          <MSIcon name="refresh" className="text-[13px]" /> Replay
        </button>
      </div>
      <div key={key} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="rounded-xl border border-slate-200 shadow-sm px-4 py-3 border-l-4 border-l-blue-500 bg-blue-50">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">Pagas / mes</p>
          <CountUpDemo to={31} type="number" className="text-2xl font-bold tabular-nums text-blue-900" />
        </div>
        <div className="rounded-xl border border-slate-200 shadow-sm px-4 py-3 border-l-4 border-l-amber-500 bg-amber-50">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">Pendentes</p>
          <CountUpDemo to={14} type="number" className="text-2xl font-bold tabular-nums text-amber-900" />
        </div>
        <div className="rounded-xl border border-slate-200 shadow-sm px-4 py-3 border-l-4 border-l-violet-500 bg-violet-50">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-600">Total mensal</p>
          <CountUpDemo to={48750} type="brl" className="text-2xl font-bold tabular-nums text-violet-900" />
        </div>
        <div className="rounded-xl border border-slate-200 shadow-sm px-4 py-3 border-l-4 border-l-red-500 bg-red-50">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600">Rejeitadas</p>
          <CountUpDemo to={3} type="number" className="text-2xl font-bold tabular-nums text-red-900" />
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl px-5 py-4 font-mono text-xs text-slate-300 leading-loose overflow-x-auto">
        <span className="text-slate-500 text-[10px] block mb-2 uppercase tracking-widest">Uso</span>
        <span className="text-blue-400">import</span>{" "}
        <span className="text-white">{"{ CountUp }"}</span>{" "}
        <span className="text-blue-400">from</span>{" "}
        <span className="text-emerald-400">"@/components/charts/CountUp"</span>
        <br /><br />
        <span className="text-pink-400">{"<CountUp"}</span>{" "}
        <span className="text-yellow-300">to</span><span className="text-white">={"{48750}"}</span>{" "}
        <span className="text-yellow-300">type</span><span className="text-white">="brl"</span>{" "}
        <span className="text-yellow-300">duration</span><span className="text-white">={"{400}"}</span>{" "}
        <span className="text-pink-400">{"/>"}</span>
      </div>
    </div>
  );
}

// ─── MODAL PREVIEW ──────────────────────────────────────────────────────────

function ModalPreview() {
  const [activeModal, setActiveModal] = useState<"none" | "criar" | "excluir">("none");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveModal("criar")}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <MSIcon name="add" className="text-[16px]" /> Abrir modal Criar
        </button>
        <button
          onClick={() => setActiveModal("excluir")}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
        >
          <MSIcon name="delete" className="text-[16px]" /> Abrir modal Excluir
        </button>
      </div>

      {/* Inline modal demo — Criar */}
      {activeModal === "criar" && (
        <div className="relative rounded-2xl border border-slate-200 overflow-hidden" style={{ minHeight: 340 }}>
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={() => setActiveModal("none")} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md animate-modal-in">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <MSIcon name="store" className="text-2xl text-blue-600" />
                  <h2 className="text-base font-semibold text-slate-800">Novo Fornecedor</h2>
                </div>
                <button onClick={() => setActiveModal("none")} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100">
                  <MSIcon name="close" className="text-xl" />
                </button>
              </div>
              <div className="px-6 py-5 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">Razao Social <span className="text-red-500">*</span></label>
                  <input className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Nome completo da empresa" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">CNPJ <span className="text-red-500">*</span></label>
                  <input className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono" placeholder="00.000.000/0000-00" />
                </div>
                <div className="flex gap-3 pt-1">
                  <button onClick={() => setActiveModal("none")} className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancelar</button>
                  <button className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                    <MSIcon name="add" className="text-base" /> Cadastrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline modal demo — Excluir */}
      {activeModal === "excluir" && (
        <div className="relative rounded-2xl border border-slate-200 overflow-hidden" style={{ minHeight: 280 }}>
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={() => setActiveModal("none")} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md animate-modal-in">
              <div className="flex items-start gap-4 px-6 pt-6 pb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 shrink-0">
                  <MSIcon name="delete" className="text-xl text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-slate-800">Excluir fornecedor</h2>
                  <p className="text-sm text-slate-500 mt-0.5">Shopee Brasil LTDA</p>
                  <p className="text-xs text-slate-400 font-mono">45.678.123/0001-99</p>
                </div>
                <button onClick={() => setActiveModal("none")} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 shrink-0">
                  <MSIcon name="close" className="text-xl" />
                </button>
              </div>
              <div className="px-6 pb-4">
                <p className="text-sm text-slate-600">Esta acao e irreversivel. O fornecedor sera removido do OMIE e do sistema.</p>
              </div>
              <div className="flex gap-3 px-6 py-4 border-t border-slate-200">
                <button onClick={() => setActiveModal("none")} className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancelar</button>
                <button className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 flex items-center justify-center gap-2">
                  <MSIcon name="delete" className="text-base" /> Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === "none" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-700 dark:text-slate-200">Modal Criar / Editar</p>
            <p>Header com icone + titulo, formulario com campos, footer com Cancelar + acao primaria azul.</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">ESC fecha · backdrop black/40 · animate-modal-in · z-50</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-700 dark:text-slate-200">Modal Excluir (Destructive)</p>
            <p>Icone vermelho em circulo, nome do item, mensagem de confirmacao. Footer com Cancelar + acao destrutiva vermelha.</p>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">rounded-2xl · shadow-xl · max-w-md</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CONFIDENCE BADGE PREVIEW ───────────────────────────────────────────────

function ConfidenceBadgePreview() {
  function ConfidenceBadge({ value }: { value: number }) {
    const pct = Math.round(value * 100);
    const cls =
      value >= 0.85
        ? "text-green-700 bg-green-50 border-green-200"
        : value >= 0.70
        ? "text-amber-700 bg-amber-50 border-amber-200"
        : "text-red-700 bg-red-50 border-red-200";
    return (
      <span className={`tabular-nums text-sm font-semibold px-2.5 py-1 rounded-full border ${cls}`}>
        {pct}%
      </span>
    );
  }

  const levels = [
    { value: 0.97, label: "Alta", desc: "Verde — acima de 85%. Pode aprovar direto.", icon: "check_circle", iconColor: "text-green-600" },
    { value: 0.78, label: "Media", desc: "Amber — entre 70% e 85%. Requer atencao.", icon: "warning", iconColor: "text-amber-600" },
    { value: 0.52, label: "Baixa", desc: "Vermelho — abaixo de 70%. Revisao manual obrigatoria.", icon: "error", iconColor: "text-red-600" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-6">
        {levels.map((l) => (
          <div key={l.value} className="flex items-center gap-3">
            <ConfidenceBadge value={l.value} />
            <div>
              <div className="flex items-center gap-1.5">
                <MSIcon name={l.icon} className={`text-[16px] ${l.iconColor}`} style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'OPSZ' 20" }} />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{l.label}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-900 rounded-xl px-5 py-4 font-mono text-xs text-slate-300 leading-loose overflow-x-auto">
        <span className="text-slate-500 text-[10px] block mb-2 uppercase tracking-widest">Uso em DespesaDetail.tsx</span>
        <span className="text-pink-400">{"<ConfiancaBadge"}</span>{" "}
        <span className="text-yellow-300">value</span><span className="text-white">={"{despesa.confianca}"}</span>{" "}
        <span className="text-pink-400">{"/>"}</span>
        <br />
        <span className="text-slate-500">{"// value: 0.0 – 1.0 (float)"}</span>
      </div>
    </div>
  );
}

// ─── FILE UPLOAD / DRAG & DROP ──────────────────────────────────────────────

function FileUploadPreview() {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Empty state */}
        <div className="flex flex-col">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Vazio</p>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); setFile("NF-e_000456.pdf"); }}
            className={`flex-1 flex flex-col justify-center rounded-xl border-2 border-dashed transition-colors cursor-pointer ${
              dragOver ? "border-blue-400 bg-blue-50" : "border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-500"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-1.5 py-8 text-center">
              <MSIcon name="upload_file" className="text-slate-400 dark:text-slate-500" style={{ fontSize: 24 }} />
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Anexar NF ou boleto</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">PDF ou XML · a IA preenche os campos</p>
            </div>
          </div>
        </div>

        {/* With file */}
        <div className="flex flex-col">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Com arquivo</p>
          <div className="flex-1 flex flex-col justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-700/50">
            <div className="flex items-center gap-3 px-4 py-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                <MSIcon name="picture_as_pdf" className="text-[20px] text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">{file || "NF-e_000456.pdf"}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">128 KB · PDF</p>
              </div>
              <button onClick={() => setFile(null)} className="p-1 text-slate-400 hover:text-red-500 transition-colors">
                <MSIcon name="close" className="text-[16px]" />
              </button>
            </div>
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  <MSIcon name="auto_awesome" style={{ fontSize: 10 }} />
                  IA
                </span>
                <span className="text-slate-500 dark:text-slate-400">Extraindo dados do documento...</span>
                <MSIcon name="progress_activity" className="text-[14px] animate-spin text-blue-500" style={{ animationDuration: "1.1s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drag-over state */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Drag-over (hover)</p>
        <div className="rounded-xl border-2 border-dashed border-blue-400 bg-blue-50">
          <div className="flex flex-col items-center justify-center gap-1.5 py-6 text-center">
            <MSIcon name="file_download" className="text-blue-500" style={{ fontSize: 28 }} />
            <p className="text-xs font-semibold text-blue-600">Solte o arquivo aqui</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TOGGLE / SWITCH ────────────────────────────────────────────────────────

function TogglePreview() {
  const [toggles, setToggles] = useState({ recorrente: true, valorFixo: true, ativo: false, agendamento: true });

  const Toggle = ({ checked, onChange, label, sublabel }: { checked: boolean; onChange: () => void; label: string; sublabel?: string }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</p>
        {sublabel && <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{sublabel}</p>}
      </div>
      <button
        onClick={onChange}
        className="relative w-9 h-5 rounded-full transition-colors flex-shrink-0"
        style={{ backgroundColor: checked ? "#3b82f6" : "#cbd5e1" }}
      >
        <span
          className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform"
          style={{ left: checked ? "18px" : "2px" }}
        />
      </button>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="space-y-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Contexto: Despesa recorrente</p>
        <Toggle checked={toggles.recorrente} onChange={() => setToggles(t => ({ ...t, recorrente: !t.recorrente }))} label="Despesa recorrente" sublabel="Gerar lancamentos automaticamente" />
        {toggles.recorrente && (
          <>
            <Toggle checked={toggles.valorFixo} onChange={() => setToggles(t => ({ ...t, valorFixo: !t.valorFixo }))} label="Valor fixo" sublabel="Manter o mesmo valor em todos os lancamentos" />
            <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <MSIcon name="repeat" className="text-[14px] text-blue-500" />
                Frequencia: <span className="font-semibold text-slate-700 dark:text-slate-200">Mensal</span>
              </p>
            </div>
          </>
        )}
      </div>
      <div className="space-y-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Contexto: Agendamento & fornecedor</p>
        <Toggle checked={toggles.agendamento} onChange={() => setToggles(t => ({ ...t, agendamento: !t.agendamento }))} label="Envio automatico" sublabel="Relatorio enviado toda segunda as 20:00" />
        <Toggle checked={toggles.ativo} onChange={() => setToggles(t => ({ ...t, ativo: !t.ativo }))} label="Fornecedor ativo" sublabel="Desativar remove da lista de selecao" />
      </div>
    </div>
  );
}

// ─── AGENDAMENTO PREVIEW ────────────────────────────────────────────────────

function AgendamentoPreview() {
  const DIAS_SEMANA = [
    { value: 0, label: "Domingo" },
    { value: 1, label: "Segunda" },
    { value: 2, label: "Terca" },
    { value: 3, label: "Quarta" },
    { value: 4, label: "Quinta" },
    { value: 5, label: "Sexta" },
    { value: 6, label: "Sabado" },
  ];

  const HORAS = Array.from({ length: 24 }, (_, i) => ({
    value: i,
    label: `${String(i).padStart(2, "0")}:00`,
  }));

  const [ativo, setAtivo] = useState(true);
  const [dia, setDia] = useState(0);
  const [hora, setHora] = useState(20);
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      {/* Left: interactive component */}
      <div className="space-y-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-1.5 text-sm border px-3 py-2 rounded-xl font-medium transition-colors"
            style={
              ativo
                ? { backgroundColor: "#eff6ff", borderColor: "#bfdbfe", color: "#1d4ed8" }
                : { backgroundColor: "#f1f5f9", borderColor: "#cbd5e1", color: "#64748b" }
            }
          >
            <MSIcon name={ativo ? "event_repeat" : "event_busy"} className="text-[13px]" />
            {ativo ? `${DIAS_SEMANA.find(d => d.value === dia)?.label} as ${String(hora).padStart(2, "0")}:00` : "desativado"}
            <MSIcon name={open ? "expand_less" : "expand_more"} className="text-[12px] ml-0.5" />
          </button>
          <p className="text-xs text-slate-500">Trigger button</p>
        </div>

        {open && (
          <div className="w-full max-w-[288px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden">
          {/* Toggle */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <MSIcon name="schedule_send" className="text-[18px] text-slate-500" />
              <span className="text-sm font-semibold text-slate-800">Envio automatico</span>
            </div>
            <button
              onClick={() => setAtivo(!ativo)}
              className="relative w-9 h-5 rounded-full transition-colors"
              style={{ backgroundColor: ativo ? "#3b82f6" : "#cbd5e1" }}
            >
              <span className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform" style={{ left: ativo ? "18px" : "2px" }} />
            </button>
          </div>

          {ativo && (
            <div className="px-4 py-3 space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Dia da semana</label>
                <div className="mt-1.5 grid grid-cols-4 gap-1">
                  {DIAS_SEMANA.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDia(d.value)}
                      className="text-xs py-1.5 px-1 rounded-lg font-medium transition-colors text-center"
                      style={dia === d.value ? { backgroundColor: "#dbeafe", color: "#1d4ed8" } : { backgroundColor: "#f8fafc", color: "#64748b" }}
                    >
                      {d.label.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Horario</label>
                <div className="mt-1.5 grid grid-cols-6 gap-1 max-h-28 overflow-y-auto">
                  {HORAS.map((h) => (
                    <button
                      key={h.value}
                      onClick={() => setHora(h.value)}
                      className="text-xs py-1.5 rounded-lg font-medium tabular-nums transition-colors"
                      style={hora === h.value ? { backgroundColor: "#dbeafe", color: "#1d4ed8" } : { backgroundColor: "#f8fafc", color: "#64748b" }}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Relatorio enviado toda{" "}
                  <span className="font-semibold text-slate-700">{DIAS_SEMANA.find(d => d.value === dia)?.label.toLowerCase()}</span>{" "}
                  as <span className="font-semibold text-slate-700">{String(hora).padStart(2, "0")}:00</span> para o CFO.
                </p>
              </div>
            </div>
          )}

          {!ativo && (
            <div className="px-4 py-4 text-center">
              <p className="text-xs text-slate-400">Envio automatico desativado</p>
            </div>
          )}

          <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60">
            <button className="flex-1 h-8 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">Cancelar</button>
            <button className="flex-1 h-8 text-xs font-semibold text-white rounded-lg flex items-center justify-center gap-1 bg-blue-600">
              <MSIcon name="check" style={{ fontSize: 13 }} /> Salvar
            </button>
          </div>
        </div>
        )}
      </div>

      {/* Right: specs */}
      <div className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Especificacoes</p>
        <div className="space-y-2.5">
          <div className="flex items-start gap-2">
            <MSIcon name="schedule" className="text-[14px] text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Agendamento semanal</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Selecao de dia da semana + horario de envio do relatorio</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MSIcon name="toggle_on" className="text-[14px] text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Toggle de ativacao</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Habilitar ou desabilitar sem perder a configuracao salva</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MSIcon name="mail" className="text-[14px] text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Destinatario fixo</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Relatorio enviado automaticamente para o CFO</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MSIcon name="expand_more" className="text-[14px] text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Dropdown inline</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Abre abaixo do trigger sem modal ou overlay</p>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Largura: <span className="font-mono text-slate-600 dark:text-slate-300">288px</span> · Estado salvo via <span className="font-mono text-slate-600 dark:text-slate-300">localStorage</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── EXPORT PDF BUTTON PREVIEW ──────────────────────────────────────────────

function ExportPdfPreview() {
  const [estado, setEstado] = useState<"idle" | "loading" | "erro">("idle");

  const cycle = () => {
    if (estado === "idle") {
      setEstado("loading");
      setTimeout(() => setEstado("erro"), 2000);
      setTimeout(() => setEstado("idle"), 5000);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-500">Botao com 3 estados: idle, loading (com spinner) e erro (auto-reverte em 3s). Clique para ver o ciclo.</p>
      <div className="flex flex-wrap gap-4">
        {/* Idle */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={cycle}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-sm text-white hover:opacity-90 transition-colors"
            style={{ backgroundColor: "#E8533A" }}
          >
            <MSIcon name="picture_as_pdf" className="text-base" />
            Exportar PDF
          </button>
          <span className="text-[10px] font-mono text-slate-400">idle</span>
        </div>

        {/* Loading */}
        <div className="flex flex-col items-center gap-2">
          <button
            disabled
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-sm text-white opacity-60 cursor-not-allowed"
            style={{ backgroundColor: "#E8533A" }}
          >
            <MSIcon name="progress_activity" className="text-base animate-spin" />
            Gerando PDF...
          </button>
          <span className="text-[10px] font-mono text-slate-400">loading</span>
        </div>

        {/* Error */}
        <div className="flex flex-col items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-sm bg-red-600 text-white hover:bg-red-700 transition-colors">
            <MSIcon name="error" className="text-base" />
            Erro ao gerar
          </button>
          <span className="text-[10px] font-mono text-slate-400">erro (3s)</span>
        </div>
      </div>

      {/* Live demo */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Live demo</span>
          <button
            onClick={cycle}
            disabled={estado !== "idle"}
            className={[
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm",
              estado === "erro"
                ? "bg-red-600 text-white hover:bg-red-700"
                : "text-white disabled:opacity-60 disabled:cursor-not-allowed",
            ].join(" ")}
            style={estado !== "erro" ? { backgroundColor: "#E8533A" } : undefined}
          >
            {estado === "loading" ? (
              <><MSIcon name="progress_activity" className="text-base animate-spin" /> Gerando PDF...</>
            ) : estado === "erro" ? (
              <><MSIcon name="error" className="text-base" /> Erro ao gerar</>
            ) : (
              <><MSIcon name="picture_as_pdf" className="text-base" /> Exportar PDF</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── EXTRA ANIMATIONS ───────────────────────────────────────────────────────

function ExtraAnimationsGrid() {
  const [countKey, setCountKey] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

      {/* 1 — Modal scale-in */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
        <div className="relative flex items-center justify-center w-20 h-20">
          {modalVisible ? (
            <div key={countKey} className="animate-modal-in bg-white rounded-xl shadow-lg border border-slate-200 w-16 h-14 flex items-center justify-center">
              <MSIcon name="store" className="text-[20px] text-blue-600" />
            </div>
          ) : (
            <div className="bg-black/20 rounded-xl w-16 h-14" />
          )}
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Modal in</p>
          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">animate-modal-in</p>
          <button onClick={() => { setModalVisible(true); setCountKey(k => k + 1); setTimeout(() => setModalVisible(false), 1500); }} className="text-[10px] text-blue-600 font-medium mt-1">replay</button>
        </div>
      </div>

      {/* 2 — Fade-in backdrop */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
        <div className="relative flex items-center justify-center w-20 h-20">
          <div key={countKey} className="animate-fade-in bg-black/30 rounded-xl w-16 h-14 flex items-center justify-center">
            <MSIcon name="visibility" className="text-[20px] text-white" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Fade in</p>
          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">animate-fade-in</p>
        </div>
      </div>

      {/* 3 — Staggered bounce dots (AI loading) */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
        <div className="flex items-end justify-center gap-1.5 w-20 h-20">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.6s" }}
            />
          ))}
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">AI Loading</p>
          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">staggered dots</p>
        </div>
      </div>

      {/* 4 — CountUp bar fill */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 py-7 px-4">
        <div className="flex flex-col items-center justify-center gap-3 w-20 h-20">
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div key={countKey} className="h-full bg-blue-600 rounded-full animate-countup-bar" style={{ "--bar-width": "75%" } as React.CSSProperties} />
          </div>
          <span className="text-xs font-mono text-slate-500">75%</span>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Bar Fill</p>
          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">countup-bar</p>
        </div>
      </div>
    </div>
  );
}

// ─── CALENDAR PREVIEW ────────────────────────────────────────────────────────

function CalendarPreview() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());

  const MONTH_NAMES = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
  ];
  const DAY_NAMES = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

  const SAMPLE_EVENTS: Record<number, { label: string; color: string; time: string }[]> = {
    3:  [{ label: "Revisão de contratos",  color: "#10b981", time: "13:00" }],
    7:  [{ label: "Reunião financeira",    color: "#2563EB", time: "09:00" }],
    12: [{ label: "Pagamento fornecedor",  color: "#10b981", time: "11:00" },
         { label: "Aprovação CFO",         color: "#7c3aed", time: "16:00" }],
    17: [{ label: "Relatório semanal",     color: "#f59e0b", time: "08:00" }],
    21: [{ label: "Reunião diretoria",     color: "#E8533A", time: "15:00" },
         { label: "Auditoria interna",     color: "#2563EB", time: "10:00" }],
    26: [{ label: "Fechamento mensal",     color: "#E8533A", time: "14:30" }],
  };

  // Also add events to today's day in the current month
  const todayDay = today.getDate();
  const year  = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const isCurrentMonthYear =
    month === today.getMonth() && year === today.getFullYear();

  const effectiveEvents: typeof SAMPLE_EVENTS = { ...SAMPLE_EVENTS };
  if (isCurrentMonthYear && !effectiveEvents[todayDay]) {
    effectiveEvents[todayDay] = [
      { label: "Reunião de alinhamento", color: "#E8533A", time: "10:00" },
    ];
  }

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth    = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToToday = () => {
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDay(today.getDate());
  };

  const isToday = (day: number) =>
    isCurrentMonthYear && day === today.getDate();

  // Build 42-cell grid (6 rows × 7 cols)
  const cells: { day: number; isCurrentMonth: boolean }[] = [];
  for (let i = firstDayOfWeek - 1; i >= 0; i--)
    cells.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, isCurrentMonth: true });
  while (cells.length < 42)
    cells.push({ day: cells.length - daysInMonth - firstDayOfWeek + 1, isCurrentMonth: false });

  const selectedEvents = selectedDay ? (effectiveEvents[selectedDay] || []) : [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">

        {/* ── Calendar grid ── */}
        <div className="flex-1 min-w-0 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800/50">
          {/* Month navigation */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <button
              onClick={prevMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <MSIcon name="chevron_left" className="text-slate-600 dark:text-slate-400" style={{ fontSize: 18 }} />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                {MONTH_NAMES[month]} {year}
              </span>
              {!isCurrentMonthYear && (
                <button
                  onClick={goToToday}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white leading-none"
                  style={{ backgroundColor: "#E8533A" }}
                >
                  Hoje
                </button>
              )}
            </div>
            <button
              onClick={nextMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <MSIcon name="chevron_right" className="text-slate-600 dark:text-slate-400" style={{ fontSize: 18 }} />
            </button>
          </div>

          {/* Day-of-week headers */}
          <div className="grid grid-cols-7 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            {DAY_NAMES.map((d) => (
              <div
                key={d}
                className="py-2 text-center text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7">
            {cells.map((cell, i) => {
              const isSelected = cell.isCurrentMonth && cell.day === selectedDay;
              const isTodayCell = cell.isCurrentMonth && isToday(cell.day);
              const cellEvents = cell.isCurrentMonth
                ? (effectiveEvents[cell.day] || [])
                : [];
              const borderLeft  = i % 7 !== 0 ? "border-l border-slate-100 dark:border-slate-700/60" : "";
              const borderTop   = i >= 7      ? "border-t border-slate-100 dark:border-slate-700/60" : "";

              return (
                <button
                  key={i}
                  onClick={() => cell.isCurrentMonth && setSelectedDay(cell.day)}
                  disabled={!cell.isCurrentMonth}
                  className={`relative flex flex-col items-center justify-start py-2 gap-0.5 min-h-[44px] transition-colors ${borderLeft} ${borderTop} ${
                    !cell.isCurrentMonth
                      ? "cursor-default bg-slate-50/50 dark:bg-slate-800/30"
                      : isSelected
                      ? "bg-orange-50 dark:bg-orange-900/20"
                      : "hover:bg-slate-50 dark:hover:bg-slate-700/40 cursor-pointer"
                  }`}
                >
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-xs transition-all ${
                      isSelected
                        ? "font-bold text-white"
                        : isTodayCell
                        ? "font-bold"
                        : !cell.isCurrentMonth
                        ? "font-medium text-slate-300 dark:text-slate-600"
                        : "font-medium text-slate-700 dark:text-slate-300"
                    }`}
                    style={
                      isSelected
                        ? { backgroundColor: "#E8533A" }
                        : isTodayCell
                        ? { color: "#2563EB", outline: "2px solid #2563EB", outlineOffset: "1px" }
                        : undefined
                    }
                  >
                    {cell.day}
                  </span>

                  {/* Event dots */}
                  {cellEvents.length > 0 && (
                    <div className="flex gap-0.5 mt-0.5">
                      {cellEvents.slice(0, 3).map((ev, j) => (
                        <span
                          key={j}
                          className="w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: isSelected ? "rgba(232,83,58,0.5)" : ev.color,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Event panel ── */}
        <div className="w-full sm:w-56 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden flex flex-col bg-white dark:bg-slate-800/50 self-stretch">
          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {selectedDay
                ? `${selectedDay} de ${MONTH_NAMES[month]}`
                : "Selecione um dia"}
            </p>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {selectedEvents.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[80px] gap-1.5">
                <MSIcon name="event_busy" className="text-slate-300 dark:text-slate-600" style={{ fontSize: 28 }} />
                <p className="text-xs text-slate-400 dark:text-slate-500">Sem eventos</p>
              </div>
            ) : (
              selectedEvents.map((ev, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-0.5 flex-shrink-0"
                    style={{ backgroundColor: ev.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-200 leading-snug">{ev.label}</p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">{ev.time}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="px-3 py-2.5 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <button
              className="w-full h-7 text-xs font-semibold text-white rounded-lg flex items-center justify-center gap-1 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#E8533A" }}
            >
              <MSIcon name="add" style={{ fontSize: 14 }} />
              Novo evento
            </button>
          </div>
        </div>
      </div>

      {/* ── States legend ── */}
      <SubSection title="Estados dos dias">
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold"
              style={{ color: "#2563EB", outline: "2px solid #2563EB", outlineOffset: "1px" }}>14</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Hoje</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: "#E8533A" }}>7</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Selecionado</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">22</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Normal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium text-slate-300 dark:text-slate-600">30</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Outro mês</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-0.5">
              <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">18</span>
              <div className="flex gap-0.5">
                <span className="w-1 h-1 rounded-full bg-blue-600" />
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#E8533A" }} />
              </div>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">Com eventos</span>
          </div>
        </div>
      </SubSection>
    </div>
  );
}

// ─── NAV INDEX ────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "marca",        label: "Marca",         icon: "verified" },
  { id: "cores",        label: "Cores",         icon: "palette" },
  { id: "tipografia",   label: "Tipografia",    icon: "text_fields" },
  { id: "botoes",       label: "Botões",        icon: "smart_button" },
  { id: "badges",       label: "Badges",        icon: "label" },
  { id: "kpi",          label: "KPI Cards",     icon: "dashboard" },
  { id: "toasts",       label: "Toasts",        icon: "notifications" },
  { id: "inputs",       label: "Inputs",        icon: "input" },
  { id: "tabela",       label: "Tabela",        icon: "table_chart" },
  { id: "paginacao",    label: "Paginação",     icon: "pages" },
  { id: "sidebar",      label: "Sidebar",       icon: "menu_open" },
  { id: "usermenu",     label: "User Menu",     icon: "person" },
  { id: "modais",       label: "Modais",        icon: "open_in_new" },
  { id: "retryloader",  label: "Retry Loader",  icon: "cloud_off" },
  { id: "countup",      label: "CountUp",       icon: "speed" },
  { id: "confidence",   label: "Confiança IA",  icon: "auto_awesome" },
  { id: "fileupload",   label: "File Upload",   icon: "upload_file" },
  { id: "toggle",       label: "Toggle",        icon: "toggle_on" },
  { id: "agendamento",  label: "Agendamento",   icon: "schedule_send" },
  { id: "calendario",   label: "Calendário",    icon: "calendar_month" },
  { id: "exportpdf",    label: "Exportar PDF",  icon: "picture_as_pdf" },
  { id: "animacoes",    label: "Animações",     icon: "motion_photos_on" },
  { id: "icons",        label: "Ícones",        icon: "interests" },
  { id: "graficos",     label: "Gráficos",      icon: "bar_chart" },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState("marca");
  const [dark, setDark] = useState(() => localStorage.getItem("ds-theme") === "dark");
  const isScrolling = useRef(false);

  useEffect(() => {
    localStorage.setItem("ds-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    isScrolling.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { isScrolling.current = false; }, 800);
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200${dark ? " dark" : ""}`}>

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(232, 83, 58, 0.08)" }}>
              <SellersIcon size={22} />
            </div>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-none">Sellers</span>
            <span className="hidden sm:block w-px h-4 bg-slate-200 dark:bg-slate-700" />
            <span className="hidden sm:block text-sm font-medium text-slate-500 dark:text-slate-400 leading-none">Design System</span>
            <span className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full leading-none" style={{ backgroundColor: "#E8533A" }}>v0.2</span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide" ref={(el) => {
            if (!el) return;
            const active = el.querySelector("[data-active='true']") as HTMLElement | null;
            if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }}>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                data-active={activeSection === s.id}
                onClick={() => scrollTo(s.id)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeSection === s.id
                    ? "text-white"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                style={activeSection === s.id ? { backgroundColor: "#E8533A" } : undefined}
              >
                {s.label}
              </button>
            ))}
          </div>
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            title={dark ? "Modo claro" : "Modo escuro"}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <MSIcon name={dark ? "light_mode" : "dark_mode"} style={{ fontSize: 18 }} />
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-2">

        {/* ── Hero ── */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-6 sm:py-8 mb-6">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Sellers Design System</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                Referência visual completa do sistema financeiro. Tokens de cor, tipografia, componentes e padrões de interface — tudo que você precisa para construir ou revisar a UI.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Chip label="font" value="Inter" />
                <Chip label="icons" value="Material Symbols Outlined" />
                <Chip label="css" value="Tailwind CSS 3.3" />
                <Chip label="ui" value="Radix Primitives" />
                <Chip label="charts" value="Recharts 2.15" />

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
        <div id="marca" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
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
                <div className="bg-slate-900 rounded-xl px-5 py-4 font-mono text-xs text-slate-300 leading-loose overflow-x-auto">
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
                <div className="bg-slate-900 rounded-xl px-5 py-4 font-mono text-xs text-slate-300 leading-loose overflow-x-auto">
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
        <div id="cores" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Cores" description="Paleta completa: brand tokens, semânticos, status e sidebar.">
            <SubSection title="Brand — Sellers">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
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
        <div id="tipografia" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Tipografia" description="Fonte Inter (400–700). Todos os tamanhos e pesos utilizados na interface.">
            <TypographyShowcase />
          </Section>
        </div>

        {/* ── 3. BOTÕES ── */}
        <div id="botoes" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Botões" description="Primary coral, action blue, secondary, ghost, destructive e icon-only.">
            <ButtonShowcase />
          </Section>
        </div>

        {/* ── 4. BADGES ── */}
        <div id="badges" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
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
        <div id="kpi" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="KPI Cards" description="Métricas do dashboard com accent lateral. 5 variantes de cor.">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              <KPICard label="Pendente aprv." value="14"  sublabel="aguardando financeiro"  icon="schedule"  color="amber"  />
              <KPICard label="Aguard. CFO"    value="3"   sublabel="alçada acima de R$5k"  icon="gpp_maybe" color="orange" />
              <KPICard label="Revisão manual" value="7"   sublabel="confiança IA < 85%"    icon="warning"   color="red"    />
              <KPICard label="Fornec. pend."  value="2"   sublabel="CNPJ não cadastrado"   icon="store"     color="violet" />
              <div className="col-span-2 lg:col-span-1">
                <KPICard label="Pagas / mês" value="31" sublabel="total processado" icon="paid" color="blue" />
              </div>
            </div>
          </Section>
        </div>

        {/* ── 6. TOASTS ── */}
        <div id="toasts" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Notificações (Toast)" description="4 níveis de severidade — success, info, warning, error. Com barra de progresso e auto-dismiss.">
            <div className="flex flex-wrap gap-5">
              {(["success","info","warning","error"] as const).map((lvl) => (
                <ToastPreview key={lvl} level={lvl} />
              ))}
            </div>
          </Section>
        </div>

        {/* ── 7. INPUTS ── */}
        <div id="inputs" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Inputs & Formulários" description="Default, preenchido, foco (ring blue), erro (ring red), disabled e textarea.">
            <InputPreview />
          </Section>
        </div>

        {/* ── 8. TABELA ── */}
        <div id="tabela" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Tabela de Dados" description="Header com rótulos uppercase, linhas com hover sutil e badges de status inline.">
            <TablePreview />
          </Section>
        </div>

        {/* ── 9. PAGINAÇÃO ── */}
        <div id="paginacao" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Paginação" description="Seletor de tamanho de página + navegação interativa. Clique nos números.">
            <PaginationPreview />
          </Section>
        </div>

        {/* ── 10. SIDEBAR ── */}
        <div id="sidebar" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Sidebar" description="Dark theme #0a1628. Modo compacto (ícones) e expandido. Clique para trocar item ativo.">
            <SidebarPreview />
          </Section>
        </div>

        {/* ── 11. USER MENU ── */}
        <div id="usermenu" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="User Menu" description="Menu dropdown do avatar com info do usuário, role badge (CFO vs Analista) e logout. Click-outside fecha.">
            <UserMenuPreview />
          </Section>
        </div>

        {/* ── 12. MODAIS ── */}
        <div id="modais" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Modais" description="Padrão de modal com backdrop, animação scale-in e duas variantes: Criar/Editar (azul) e Excluir (destructive vermelho).">
            <ModalPreview />
          </Section>
        </div>

        {/* ── 13. RETRY LOADER ── */}
        <div id="retryloader" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Retry Loader" description="Componente de loading com spinner, contador de tentativas e estado de erro com botão de retry.">
            <RetryLoaderPreview />
          </Section>
        </div>

        {/* ── 14. COUNTUP ── */}
        <div id="countup" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="CountUp" description="Contador animado com requestAnimationFrame. Suporta formatação BRL e numérica. Usado nos KPI Cards do dashboard.">
            <CountUpPreview />
          </Section>
        </div>

        {/* ── 15. CONFIDENCE BADGE ── */}
        <div id="confidence" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Confiança IA (Badge)" description="Badge de confiança da extração de IA. 3 níveis de cor: verde (≥85%), amber (70–85%) e vermelho (<70%).">
            <ConfidenceBadgePreview />
          </Section>
        </div>

        {/* ── 16. FILE UPLOAD ── */}
        <div id="fileupload" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="File Upload / Drag & Drop" description="Área de upload com drag-and-drop. 3 estados: vazio, com arquivo (+ extração IA) e drag-over.">
            <FileUploadPreview />
          </Section>
        </div>

        {/* ── 17. TOGGLE / SWITCH ── */}
        <div id="toggle" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Toggle / Switch" description="Toggle switch para ativar/desativar funcionalidades. Usado em despesa recorrente, agendamento e fornecedor.">
            <TogglePreview />
          </Section>
        </div>

        {/* ── 18. AGENDAMENTO ── */}
        <div id="agendamento" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Agendamento de Relatório" description="Dropdown interativo para agendar envio automático de relatório. Seletor de dia e hora com toggle de ativação.">
            <AgendamentoPreview />
          </Section>
        </div>

        {/* ── 19. CALENDÁRIO ── */}
        <div id="calendario" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Calendário" description="Visão mensal com navegação, indicador de hoje, dia selecionado e eventos coloridos por categoria. Inclui painel lateral de detalhes do dia.">
            <CalendarPreview />
          </Section>
        </div>

        {/* ── 20. EXPORT PDF ── */}
        <div id="exportpdf" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Botão Exportar PDF" description="Botão com 3 estados visuais: idle (coral), loading (spinner + disabled) e erro (vermelho, auto-reverte em 3s).">
            <ExportPdfPreview />
          </Section>
        </div>

        {/* ── 20. ANIMAÇÕES ── */}
        <div id="animacoes" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Animações" description="Animações de produção e showcase premium com o ícone Óculos Sellers. Dark stage, glow, spring physics, parallax e stroke draw.">
            <SubSection title="Produção — drawer-in & toast-in">
              <DrawerToastDemo />
            </SubSection>
            <SubSection title="Produção — modal-in, fade-in, countup-bar & AI dots">
              <ExtraAnimationsGrid />
            </SubSection>
            <SubSection title="Óculos Showcase">
              <TailwindAnimsGrid />
            </SubSection>
          </Section>
        </div>

        {/* ── 12. ÍCONES ── */}
        <div id="icons" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
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
        <div id="graficos" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm px-4 sm:px-8 py-5 sm:py-7">
          <Section title="Paleta de Gráficos" description="Sequência de cores usada em Recharts bar/line/pie charts.">
            <ChartPalettePreview />
          </Section>
        </div>

        {/* Footer */}
        <div className="text-center py-6 border-t border-slate-200 dark:border-slate-700/50 mt-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">Sellers Sistema Financeiro · Design System v0.2 · 2026</p>
          <p className="text-[10px] text-slate-300 dark:text-slate-600 mt-1">Inter · Material Symbols Outlined · Tailwind CSS 3.3 · Radix UI</p>
        </div>
      </div>
    </div>
  );
}
