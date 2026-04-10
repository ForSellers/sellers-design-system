import React, { useState, useEffect } from "react";

// ─── primitivos ──────────────────────────────────────────────────────────────

function MSIcon({ name, className = "", filled = false, style }: { name: string; className?: string; filled?: boolean; style?: React.CSSProperties }) {
  return (
    <span
      className={`material-symbols-outlined flex-shrink-0 ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'OPSZ' 22", ...style } : style}
      aria-hidden
    >{name}</span>
  );
}

function Section({ id, title, description, children }: { id?: string; title: string; description?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7 space-y-6">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        {description && <p className="text-sm text-slate-500 mt-0.5">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{title}</h3>
      {children}
    </div>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-slate-100 rounded-md px-2 py-1">
      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
      <span className="text-[11px] font-mono text-slate-700">{value}</span>
    </span>
  );
}

// ─── cor ─────────────────────────────────────────────────────────────────────

function Swatch({ hex, name, token, border }: { hex: string; name: string; token?: string; border?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className={`relative w-full rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer ${border ? "border border-slate-200" : ""}`}>
      <div className="h-16" style={{ backgroundColor: hex }} />
      <div className="px-2.5 py-2 bg-white border-t border-slate-100 text-left">
        <p className="text-xs font-semibold text-slate-800 truncate">{name}</p>
        {token && <p className="text-[10px] font-mono text-slate-400">{token}</p>}
        <p className="text-[10px] font-mono text-slate-500">{hex}</p>
      </div>
      {copied && <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
        <span className="text-white text-xs font-semibold bg-black/60 px-2 py-0.5 rounded-full">Copiado!</span>
      </div>}
    </button>
  );
}

function Dot({ hex, label, ratio, border }: { hex: string; label: string; ratio?: string; border?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-5 h-5 rounded-md flex-shrink-0 ${border ? "border border-slate-200" : ""}`} style={{ backgroundColor: hex }} />
      <span className="text-xs text-slate-600 flex-1">{label}</span>
      {ratio && <span className="text-[10px] font-mono text-slate-400">{ratio}</span>}
    </div>
  );
}

// ─── status badge ────────────────────────────────────────────────────────────

const STATUS: Record<string, { label: string; icon: string; cls: string }> = {
  pendente_aprovacao:  { label: "Pend. aprovação",  icon: "schedule",     cls: "bg-blue-50 text-blue-700 border-blue-200" },
  aguardando_cfo:      { label: "Aguard. CFO",      icon: "gpp_maybe",    cls: "bg-amber-50 text-amber-700 border-amber-200" },
  aprovado:            { label: "Aprovado",          icon: "check_circle", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pago:                { label: "Pago",              icon: "paid",         cls: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  revisao_manual:      { label: "Revisão manual",   icon: "warning",      cls: "bg-orange-50 text-orange-700 border-orange-200" },
  rejeitado:           { label: "Rejeitado",         icon: "cancel",       cls: "bg-red-50 text-red-700 border-red-200" },
  fornecedor_pendente: { label: "Fornec. pendente", icon: "store",        cls: "bg-violet-50 text-violet-700 border-violet-200" },
  processando:         { label: "Processando",       icon: "autorenew",    cls: "bg-sky-50 text-sky-700 border-sky-200" },
  cancelado:           { label: "Cancelado",         icon: "block",        cls: "bg-slate-100 text-slate-500 border-slate-200" },
};

function Badge({ status }: { status: string }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium border ${s.cls}`}>
      <MSIcon name={s.icon} className="text-[14px]" />{s.label}
    </span>
  );
}

// ─── KPI card ─────────────────────────────────────────────────────────────────

type CC = "blue" | "amber" | "orange" | "red" | "violet";
const CC: Record<CC, { border: string; bg: string; ib: string; lbl: string; val: string; sub: string; ic: string }> = {
  blue:   { border: "border-l-blue-500",   bg: "bg-blue-50",   ib: "bg-blue-100",   lbl: "text-blue-600",   val: "text-blue-900",   sub: "text-blue-500",   ic: "text-blue-700" },
  amber:  { border: "border-l-amber-500",  bg: "bg-amber-50",  ib: "bg-amber-100",  lbl: "text-amber-600",  val: "text-amber-900",  sub: "text-amber-500",  ic: "text-amber-700" },
  orange: { border: "border-l-orange-500", bg: "bg-orange-50", ib: "bg-orange-100", lbl: "text-orange-600", val: "text-orange-900", sub: "text-orange-500", ic: "text-orange-700" },
  red:    { border: "border-l-red-500",    bg: "bg-red-50",    ib: "bg-red-100",    lbl: "text-red-600",    val: "text-red-900",    sub: "text-red-500",    ic: "text-red-700" },
  violet: { border: "border-l-violet-500", bg: "bg-violet-50", ib: "bg-violet-100", lbl: "text-violet-600", val: "text-violet-900", sub: "text-violet-500", ic: "text-violet-700" },
};

function KPI({ label, value, sub, icon, color }: { label: string; value: string; sub: string; icon: string; color: CC }) {
  const c = CC[color];
  return (
    <div className={`rounded-xl border border-slate-200 shadow-sm px-4 py-3 border-l-4 ${c.border} ${c.bg}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className={`text-[11px] font-semibold uppercase tracking-wider truncate ${c.lbl}`}>{label}</p>
          <p className={`text-2xl font-bold tabular-nums leading-tight mt-0.5 ${c.val}`}>{value}</p>
          <p className={`text-[11px] mt-0.5 truncate ${c.sub}`}>{sub}</p>
        </div>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.ib}`}>
          <MSIcon name={icon} className={`text-[20px] ${c.ic}`} />
        </div>
      </div>
    </div>
  );
}

// ─── toast ────────────────────────────────────────────────────────────────────

const TOAST_CFG = {
  success: { icon: "check_circle", ib: "bg-emerald-100", ic: "text-emerald-600", border: "border-emerald-200", bar: "bg-emerald-400", label: "Sucesso",    title: "Despesa aprovada",          body: "Enviada ao OMIE com sucesso." },
  info:    { icon: "info",         ib: "bg-blue-100",    ic: "text-blue-600",    border: "border-blue-200",    bar: "bg-blue-400",    label: "Informação", title: "Email recebido",            body: "Nova despesa enfileirada." },
  warning: { icon: "warning",      ib: "bg-amber-100",   ic: "text-amber-600",   border: "border-amber-200",   bar: "bg-amber-400",   label: "Atenção",    title: "Confiança IA < 85%",        body: "Despesa requer revisão manual." },
  error:   { icon: "cloud_off",    ib: "bg-red-100",     ic: "text-red-600",     border: "border-red-200",     bar: "bg-red-400",     label: "Erro",       title: "Falha ao conectar ao OMIE", body: "Tentativas em andamento." },
} as const;

function Toast({ level }: { level: keyof typeof TOAST_CFG }) {
  const c = TOAST_CFG[level];
  return (
    <div className="flex flex-col gap-1.5 items-center">
      <div className={`bg-white border ${c.border} rounded-xl shadow-lg overflow-hidden w-72`}>
        <div className="flex gap-3 px-4 py-3.5">
          <div className={`w-8 h-8 rounded-lg ${c.ib} flex items-center justify-center flex-shrink-0`}>
            <MSIcon name={c.icon} className={`text-[18px] ${c.ic}`} style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'OPSZ' 20" }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 leading-tight">{c.title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{c.body}</p>
          </div>
          <button className="text-slate-300 hover:text-slate-500 self-start"><MSIcon name="close" className="text-[16px]" /></button>
        </div>
        <div className="h-0.5 bg-slate-100"><div className={`h-full ${c.bar}`} style={{ width: "60%" }} /></div>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{c.label}</span>
    </div>
  );
}

// ─── IA confidence badge ───────────────────────────────────────────────────

function ConfiancaBadge({ pct }: { pct: number }) {
  const cls = pct >= 85
    ? "bg-green-50 text-green-700 border-green-200"
    : pct >= 70
    ? "bg-amber-50 text-amber-700 border-amber-200"
    : "bg-red-50 text-red-700 border-red-200";
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold tabular-nums ${cls}`}>
      <MSIcon name="psychology" className="text-[12px]" />{pct}%
    </span>
  );
}

function IaBadge() {
  return (
    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-semibold">
      <MSIcon name="auto_awesome" className="text-[10px]" />IA
    </span>
  );
}

// ─── dropzone ────────────────────────────────────────────────────────────────

function DropzonePreview() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  return (
    <div className="space-y-3">
      <div className="flex gap-2 text-xs">
        {(["idle","loading","done"] as const).map(s => (
          <button key={s} onClick={() => setState(s)}
            className={`px-2 py-1 rounded-md border font-medium transition-colors ${state === s ? "bg-blue-600 text-white border-blue-600" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
            {s}
          </button>
        ))}
      </div>
      <div className={`relative rounded-xl border-2 border-dashed transition-colors p-8 flex flex-col items-center justify-center gap-2 cursor-pointer select-none
        ${state === "loading" ? "border-blue-400 bg-blue-50" : state === "done" ? "border-emerald-300 bg-emerald-50" : "border-slate-200 bg-slate-50 hover:border-slate-300"}`}>
        {state === "idle" && <>
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
            <MSIcon name="upload_file" className="text-[22px] text-slate-400" />
          </div>
          <p className="text-sm font-medium text-slate-600">Anexar NF ou boleto</p>
          <p className="text-xs text-slate-400">PDF ou XML · a IA preenche os campos</p>
        </>}
        {state === "loading" && <>
          <MSIcon name="progress_activity" className="text-[32px] text-blue-500 animate-spin" />
          <p className="text-sm font-medium text-blue-700">Extraindo dados com IA…</p>
        </>}
        {state === "done" && <>
          <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center shadow-sm">
            <MSIcon name="description" className="text-[22px] text-blue-600" filled />
          </div>
          <p className="text-sm font-medium text-slate-700">nota-fiscal-001.pdf</p>
          <p className="text-xs text-emerald-600 font-medium">6 campos preenchidos pela IA</p>
        </>}
      </div>
    </div>
  );
}

// ─── fornecedor lookup ────────────────────────────────────────────────────────

function FornecedorLookup() {
  const [state, setState] = useState<"idle" | "checking" | "found" | "not_found">("idle");
  return (
    <div className="space-y-3 max-w-sm">
      <div className="flex gap-2 flex-wrap text-xs">
        {(["idle","checking","found","not_found"] as const).map(s => (
          <button key={s} onClick={() => setState(s)}
            className={`px-2 py-1 rounded-md border font-medium transition-colors ${state === s ? "bg-blue-600 text-white border-blue-600" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
            {s}
          </button>
        ))}
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-500">CNPJ / CPF <span className="text-red-400">*</span></label>
        <div className="relative">
          <input className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-mono focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white"
            defaultValue="45.678.123/0001-99" readOnly />
          {state === "checking" && <MSIcon name="progress_activity" className="absolute right-2 top-1/2 -translate-y-1/2 text-[14px] text-slate-400 animate-spin" />}
          {state === "found"     && <MSIcon name="check_circle"     className="absolute right-2 top-1/2 -translate-y-1/2 text-[13px] text-green-500" filled />}
          {state === "not_found" && <MSIcon name="warning"          className="absolute right-2 top-1/2 -translate-y-1/2 text-[13px] text-amber-500" />}
        </div>
        {state === "found"     && <p className="text-xs text-green-600 font-medium flex items-center gap-1"><MSIcon name="check_circle" className="text-[12px]" filled />Shopee Brasil LTDA</p>}
        {state === "not_found" && <p className="text-xs text-amber-600 font-medium flex items-center gap-1"><MSIcon name="warning" className="text-[12px]" />Não cadastrado no OMIE</p>}
      </div>
    </div>
  );
}

// ─── confirm modals ────────────────────────────────────────────────────────────

function ConfirmCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Aprovar */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
            <MSIcon name="check_circle" className="text-[16px] text-green-600" filled />
          </div>
          <p className="text-sm font-semibold text-green-800">Confirmar aprovação</p>
        </div>
        <div className="text-xs text-green-700 space-y-0.5">
          <p><span className="font-medium">Fornecedor:</span> Shopee Brasil LTDA</p>
          <p><span className="font-medium">Valor:</span> R$ 12.450,00</p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700">Confirmar</button>
          <button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-white border border-green-200 text-green-700 hover:bg-green-50">Cancelar</button>
        </div>
      </div>
      {/* Rejeitar */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center">
            <MSIcon name="cancel" className="text-[16px] text-red-600" filled />
          </div>
          <p className="text-sm font-semibold text-red-800">Confirmar rejeição</p>
        </div>
        <textarea rows={2} className="w-full text-xs border border-red-200 rounded-lg px-3 py-2 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none" placeholder="Motivo da rejeição…" />
        <div className="flex gap-2">
          <button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700">Confirmar rejeição</button>
          <button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-white border border-red-200 text-red-700 hover:bg-red-50">Cancelar</button>
        </div>
      </div>
    </div>
  );
}

// ─── drawer ────────────────────────────────────────────────────────────────────

function DrawerPreview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white"
        style={{ backgroundColor: "#E8533A" }}>
        <MSIcon name="add" className="text-[16px]" />Abrir Drawer
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col animate-[drawer-in_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            {/* header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(232,83,58,0.1)" }}>
                <MSIcon name="add_circle" className="text-[18px]" style={{ color: "#E8533A" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-800">Nova Despesa</p>
                <p className="text-[11px] text-slate-400">Lançamento manual</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-slate-300 hover:text-slate-600">
                <MSIcon name="close" className="text-[20px]" />
              </button>
            </div>
            {/* body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-500">Fornecedor <span className="text-red-400">*</span></label>
                <input className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="CNPJ ou nome" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-500">Valor <span className="text-red-400">*</span></label>
                <input className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white font-mono focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="R$ 0,00" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-500">Categoria</label>
                <div className="relative">
                  <input className="w-full border border-blue-300 bg-blue-50 rounded-lg px-3 py-2.5 text-sm text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100" defaultValue="Marketplace" readOnly />
                  <IaBadge />
                </div>
              </div>
              <DropzonePreview />
            </div>
            {/* footer */}
            <div className="px-5 py-4 border-t border-slate-100 flex gap-3">
              <button className="flex-1 py-2.5 text-sm font-semibold rounded-xl text-white" style={{ backgroundColor: "#E8533A" }}>Criar despesa</button>
              <button onClick={() => setOpen(false)} className="flex-1 py-2.5 text-sm font-semibold rounded-xl border border-slate-200 text-slate-600 bg-white hover:bg-slate-50">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── processing steps ────────────────────────────────────────────────────────

function ProcessingSteps() {
  const [step, setStep] = useState(2);
  const steps = [
    { label: "Fornecedor cadastrado",                icon: "store" },
    { label: "Lendo e interpretando documento",      icon: "description" },
    { label: "IA identificando valor e categoria",   icon: "auto_awesome" },
    { label: "Finalizando e salvando",               icon: "save" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex gap-1 text-xs mb-2">
        {steps.map((_, i) => (
          <button key={i} onClick={() => setStep(i)}
            className={`px-2 py-1 rounded-md border font-medium transition-colors ${step === i ? "bg-blue-600 text-white border-blue-600" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
            step {i+1}
          </button>
        ))}
      </div>
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 space-y-3">
        {steps.map((s, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${done ? "bg-green-50" : active ? "bg-sky-50" : "bg-slate-100"}`}>
                <MSIcon name={done ? "check" : s.icon}
                  className={`text-[14px] ${done ? "text-green-600" : active ? "text-sky-500" : "text-slate-400"} ${active ? "animate-spin" : ""}`}
                  filled={done} />
              </div>
              <span className={`text-sm font-medium flex-1 ${done ? "text-green-700" : active ? "text-sky-800" : "text-slate-400"}`}>{s.label}</span>
              {active && <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── recorrência toggle ────────────────────────────────────────────────────────

function RecorrenciaToggle() {
  const [on, setOn] = useState(false);
  const [freq, setFreq] = useState("mensal");
  const freqs = ["semanal","quinzenal","mensal","bimestral","trimestral","semestral","anual"];
  return (
    <div className="border border-slate-200 rounded-xl p-4 space-y-4 max-w-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">Despesa recorrente</p>
          <p className="text-xs text-slate-400 mt-0.5">Gera cópias automaticamente</p>
        </div>
        <button onClick={() => setOn(v => !v)}
          className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${on ? "bg-blue-600" : "bg-slate-200"}`}>
          <span className={`inline-block w-4 h-4 rounded-full bg-white shadow-sm my-1 transition-transform ${on ? "translate-x-6" : "translate-x-1"}`} />
        </button>
      </div>
      {on && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Frequência</p>
          <div className="grid grid-cols-3 gap-1.5">
            {freqs.map(f => (
              <button key={f} onClick={() => setFreq(f)}
                className={`h-8 text-xs font-medium rounded-lg border transition-colors ${freq === f ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── timeline auditoria ───────────────────────────────────────────────────────

function AuditTimeline() {
  const events = [
    { icon: "inbox",      label: "Recebida via email",    user: "sistema",    time: "10/04 09:12", bg: "bg-slate-100",    ic: "text-slate-500" },
    { icon: "auto_awesome",label:"Categorizada pela IA",  user: "IA",         time: "10/04 09:13", bg: "bg-blue-50",      ic: "text-blue-600" },
    { icon: "edit",       label: "Categoria alterada",    user: "ana.lima",   time: "10/04 10:45", bg: "bg-blue-50",      ic: "text-blue-600", change: { from: "Outros", to: "Marketing" } },
    { icon: "store",      label: "Fornecedor cadastrado", user: "ana.lima",   time: "10/04 10:46", bg: "bg-violet-50",    ic: "text-violet-600" },
    { icon: "check_circle",label:"Aprovado",              user: "carlos.cfo", time: "10/04 14:30", bg: "bg-green-50",     ic: "text-green-600" },
    { icon: "paid",       label: "Lançado no OMIE",       user: "sistema",    time: "10/04 14:31", bg: "bg-emerald-100",  ic: "text-emerald-700" },
  ];
  return (
    <ol className="relative border-l border-slate-200 space-y-4 ml-2">
      {events.map((e, i) => (
        <li key={i} className="ml-4">
          <div className={`absolute -left-[11px] w-[22px] h-[22px] rounded-full border-2 border-white ${e.bg} flex items-center justify-center`}
            style={{ top: `${i * 64 + 4}px` }}>
            <MSIcon name={e.icon} className={`text-[12px] ${e.ic}`} filled />
          </div>
          <div className="bg-white border border-slate-100 rounded-lg px-3.5 py-3">
            <div className="flex items-center justify-between gap-2 mb-1">
              <p className="text-xs font-semibold text-slate-700">{e.label}</p>
              <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">{e.time}</span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              <MSIcon name="person" className="text-[11px]" />{e.user}
            </p>
            {e.change && (
              <p className="text-[11px] mt-1.5">
                <span className="line-through text-slate-400 mr-2">{e.change.from}</span>
                <span className="font-semibold text-blue-700">{e.change.to}</span>
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

// ─── empty states ────────────────────────────────────────────────────────────

function EmptyStates() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { icon: "search_off",  title: "Nenhuma despesa encontrada", sub: "Tente ajustar os filtros acima" },
        { icon: "store",       title: "Nenhum fornecedor cadastrado", sub: 'Nenhum resultado para "shopee"' },
        { icon: "history",     title: "Nenhuma ação registrada", sub: "O histórico aparecerá aqui" },
      ].map(e => (
        <div key={e.icon} className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col items-center gap-2 text-center">
          <MSIcon name={e.icon} className="text-[36px] text-slate-300" />
          <p className="text-sm font-medium text-slate-500">{e.title}</p>
          <p className="text-xs text-slate-400">{e.sub}</p>
        </div>
      ))}
    </div>
  );
}

// ─── loading / retry ──────────────────────────────────────────────────────────

function LoadingStates() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Loading */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col items-center gap-3">
        <MSIcon name="progress_activity" className="text-[40px] text-slate-300 animate-spin" />
        <p className="text-sm text-slate-400">Carregando despesas…</p>
      </div>
      {/* Retry */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
          <MSIcon name="cloud_off" className="text-[22px] text-red-400" />
        </div>
        <p className="text-sm font-medium text-slate-600 text-center">Falha ao carregar</p>
        <button className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700">
          Tentar novamente
        </button>
      </div>
      {/* OMIE timeout */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <MSIcon name="cloud_off" className="text-[18px] text-red-500" />
          <p className="text-sm font-bold text-red-700">OMIE não respondeu</p>
        </div>
        <p className="text-xs text-red-600">Falhou após 3 tentativas</p>
        <button className="mt-1 px-3 py-2 text-xs font-semibold text-white rounded-lg" style={{ backgroundColor: "#E8533A" }}>
          Corrigir e retentar
        </button>
      </div>
    </div>
  );
}

// ─── alert boxes ──────────────────────────────────────────────────────────────

function AlertBoxes() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
        <MSIcon name="error" className="text-[14px] text-red-500 flex-shrink-0" />
        <p className="text-xs text-red-700 flex-1">CNPJ inválido — verifique os dígitos informados.</p>
        <button className="text-red-300 hover:text-red-500"><MSIcon name="close" className="text-[14px]" /></button>
      </div>
      <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200">
        <MSIcon name="warning" className="text-[14px] text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-700">Fornecedor não encontrado no OMIE. A despesa será criada com status <strong>fornecedor_pendente</strong> e entrará em análise.</p>
      </div>
      <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200">
        <MSIcon name="info" className="text-[14px] text-blue-500 flex-shrink-0" />
        <p className="text-xs text-blue-700">Despesa encaminhada para aprovação do CFO (valor acima de R$5.000).</p>
      </div>
    </div>
  );
}

// ─── filter bar ───────────────────────────────────────────────────────────────

function FilterBar() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <MSIcon name="tune" className="text-[16px] text-slate-400" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Filtros</span>
      </div>
      <div className="flex items-end gap-3 flex-wrap">
        <div className="space-y-1">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Status</label>
          <button className="h-9 flex items-center justify-between gap-2 border border-slate-200 rounded-lg px-3 bg-white text-sm text-slate-500 hover:bg-slate-50 min-w-[160px]">
            <span className="inline-flex items-center gap-1.5"><MSIcon name="filter_list" className="text-[16px] text-slate-400" />Todos os status</span>
            <MSIcon name="expand_more" className="text-[18px] text-slate-400" />
          </button>
        </div>
        <div className="space-y-1">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Período</label>
          <button className="h-9 flex items-center gap-2 border border-blue-300 rounded-lg px-3 bg-blue-50 text-sm text-blue-700 hover:bg-blue-100 min-w-[140px]">
            <MSIcon name="calendar_today" className="text-[15px]" />
            <span className="tabular-nums">01/04 – 10/04</span>
            <MSIcon name="close" className="text-[14px] text-blue-400 ml-auto" />
          </button>
        </div>
        <div className="flex gap-2 ml-auto">
          <button className="h-9 px-4 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Aplicar</button>
          <button className="h-9 px-4 text-sm font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">Limpar</button>
        </div>
      </div>
    </div>
  );
}

// ─── tabela ───────────────────────────────────────────────────────────────────

function TablePreview() {
  const rows = [
    { id: "DES-001", forn: "Shopee Brasil LTDA",  cat: "Marketplace",    valor: "R$ 12.450,00", status: "pendente_aprovacao", conf: 92 },
    { id: "DES-002", forn: "Meta Platforms Inc.", cat: "Marketing",      valor: "R$ 8.300,00",  status: "aguardando_cfo",     conf: 88 },
    { id: "DES-003", forn: "AWS Amazon",          cat: "Infraestrutura", valor: "R$ 3.210,50",  status: "aprovado",           conf: 95 },
    { id: "DES-004", forn: "Sebrae SP",           cat: "Capacitação",    valor: "R$ 990,00",    status: "revisao_manual",     conf: 71 },
    { id: "DES-005", forn: "Correios",            cat: "Logística",      valor: "R$ 540,00",    status: "pago",               conf: 98 },
  ];
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MSIcon name="receipt_long" className="text-[18px] text-slate-400" />
          <span className="text-sm font-semibold text-slate-700">Despesas</span>
          <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full font-medium">5 registros</span>
        </div>
        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-white rounded-lg px-3 py-2" style={{ backgroundColor: "#E8533A" }}>
          <MSIcon name="add" className="text-[15px]" />Nova despesa
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {["ID","Fornecedor","Categoria","Valor","Confiança IA","Status",""].map(h => (
                <th key={h} className={`px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${h === "Valor" ? "text-right" : "text-left"}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {rows.map(r => (
              <tr key={r.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-5 py-3 font-mono text-xs text-slate-400">{r.id}</td>
                <td className="px-5 py-3 text-sm font-medium text-slate-800">{r.forn}</td>
                <td className="px-5 py-3 text-sm text-slate-500">{r.cat}</td>
                <td className="px-5 py-3 text-sm font-semibold text-slate-800 text-right tabular-nums">{r.valor}</td>
                <td className="px-5 py-3"><ConfiancaBadge pct={r.conf} /></td>
                <td className="px-5 py-3"><Badge status={r.status} /></td>
                <td className="px-5 py-3">
                  <button className="w-8 h-8 rounded-full text-slate-400 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition-colors">
                    <MSIcon name="download" className="text-[16px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── paginação ────────────────────────────────────────────────────────────────

function PaginationPreview() {
  const [page, setPage] = useState(3);
  const total = 8;
  const btnB = "inline-flex items-center justify-center min-w-[32px] h-8 px-1.5 rounded-lg border text-sm font-medium transition-colors disabled:opacity-40";
  const btnD = `${btnB} border-slate-200 text-slate-600 bg-white hover:bg-slate-50`;
  const btnA = `${btnB} border-blue-600 bg-blue-600 text-white`;
  const pages = page <= 4 ? [1,2,3,4,5,"...",total] : page >= total-3 ? [1,"...",total-4,total-3,total-2,total-1,total] : [1,"...",page-1,page,page+1,"...",total];
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3">
        <button className="h-9 min-w-[130px] flex items-center justify-between gap-2 border border-slate-200 rounded-lg px-3 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
          <span className="inline-flex items-center gap-1.5"><MSIcon name="format_list_numbered" className="text-[16px] text-slate-400" />10 por página</span>
          <MSIcon name="expand_more" className="text-[18px] text-slate-400" />
        </button>
        <span className="text-xs font-medium text-slate-500 tabular-nums">21–30 de 78 registros</span>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={() => setPage(1)} disabled={page<=1} className={btnD}><MSIcon name="first_page" className="text-[18px]" /></button>
        <button onClick={() => setPage(p=>Math.max(1,p-1))} disabled={page<=1} className={btnD}><MSIcon name="chevron_left" className="text-[18px]" /></button>
        {pages.map((p,i) => p==="..." ? <span key={`e${i}`} className="inline-flex items-center justify-center min-w-[32px] h-8 text-sm text-slate-400">…</span>
          : <button key={p} onClick={() => setPage(p as number)} className={p===page?btnA:btnD}>{p}</button>)}
        <button onClick={() => setPage(p=>Math.min(total,p+1))} disabled={page>=total} className={btnD}><MSIcon name="chevron_right" className="text-[18px]" /></button>
        <button onClick={() => setPage(total)} disabled={page>=total} className={btnD}><MSIcon name="last_page" className="text-[18px]" /></button>
      </div>
    </div>
  );
}

// ─── sidebar ─────────────────────────────────────────────────────────────────

function SidebarPreview() {
  const [active, setActive] = useState("Contas a Pagar");
  const S = { inactive:"#94a3b8", activeText:"#f1f5f9", activeIcon:"#E8533A", activeBg:"rgba(241,245,249,0.07)", divider:"rgba(255,255,255,0.08)", section:"#475569" };
  const items = [
    { icon:"payments",     label:"Contas a Pagar" },
    { icon:"bar_chart",    label:"Relatórios" },
    { icon:"store",        label:"Fornecedores" },
    { icon:"settings",     label:"Configurações" },
    { icon:"account_tree", label:"Integrações", badge:"em breve" },
    { icon:"palette",      label:"Design System" },
  ];
  return (
    <div className="flex rounded-xl overflow-hidden shadow-lg border border-slate-200" style={{ backgroundColor:"#0a1628", height:340 }}>
      {/* compact */}
      <div className="w-16 flex flex-col items-center py-4 gap-1" style={{ borderRight:`1px solid ${S.divider}` }}>
        <div className="w-10 h-10 rounded-xl overflow-hidden mb-3 flex-shrink-0 shadow-lg" style={{ boxShadow:"0 0 0 2px rgba(255,255,255,0.15)" }}>
          <img src="/sellers-design-system/logo.jpeg" alt="Sellers" className="w-full h-full object-cover" />
        </div>
        {items.map(it => {
          const isActive = it.label === active;
          return (
            <button key={it.label} onClick={() => setActive(it.label)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={isActive ? { backgroundColor:S.activeBg } : undefined} title={it.label}>
              <MSIcon name={it.icon} className="text-[22px]" style={{ color: isActive ? S.activeIcon : S.inactive }} filled={isActive} />
            </button>
          );
        })}
      </div>
      {/* expanded */}
      <div className="flex-1 flex flex-col py-4 px-2 min-w-0">
        <div className="flex items-center gap-3 px-2 pb-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 shadow-lg" style={{ boxShadow:"0 0 0 2px rgba(255,255,255,0.15)" }}>
            <img src="/sellers-design-system/logo.jpeg" alt="Sellers" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-sm leading-tight" style={{ color:S.activeText }}>Sellers</p>
            <p className="text-[11px]" style={{ color:S.inactive }}>Sistema Financeiro</p>
          </div>
        </div>
        <div className="border-t mx-2 mb-3" style={{ borderColor:S.divider }} />
        <p className="text-[10px] font-semibold uppercase tracking-widest px-3 pb-2" style={{ color:S.section }}>Módulos</p>
        {items.map(it => {
          const isActive = it.label === active;
          return (
            <button key={it.label} onClick={() => setActive(it.label)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-left transition-colors"
              style={isActive ? { backgroundColor:S.activeBg } : undefined}>
              <MSIcon name={it.icon} className="text-[20px]" style={{ color: isActive ? S.activeIcon : S.inactive }} filled={isActive} />
              <span className="text-sm font-medium truncate" style={{ color: isActive ? S.activeText : S.inactive }}>{it.label}</span>
              {it.badge && <span className="ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded-md flex-shrink-0" style={{ backgroundColor:"rgba(255,255,255,0.06)", color:"#64748b" }}>{it.badge}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── tipografia ───────────────────────────────────────────────────────────────

function TypographyShowcase() {
  return (
    <div className="space-y-3">
      {[
        { tag:"text-2xl bold",           cls:"text-2xl font-bold text-slate-800",                           ex:"R$ 48.750,00" },
        { tag:"text-xl semibold",        cls:"text-xl font-semibold text-slate-800",                        ex:"Contas a Pagar" },
        { tag:"text-lg semibold",        cls:"text-lg font-semibold text-slate-800",                        ex:"Despesa NF-e 000456" },
        { tag:"text-base medium",        cls:"text-base font-medium text-slate-800",                        ex:"Shopee Brasil Ltda" },
        { tag:"text-sm regular",         cls:"text-sm text-slate-600",                                      ex:"Descrição detalhada da despesa com categoria e vencimento." },
        { tag:"text-xs medium",          cls:"text-xs font-medium text-slate-500",                          ex:"Atualizado há 3 horas · financeiro@sellers.com.br" },
        { tag:"text-[11px] caps",        cls:"text-[11px] font-semibold uppercase tracking-wider text-slate-400", ex:"Pendente Aprovação" },
        { tag:"font-mono tabular-nums",  cls:"font-mono text-sm tabular-nums text-slate-700",               ex:"DES-2024-001 · 45.678.123/0001-99 · R$ 99.999,00" },
      ].map(r => (
        <div key={r.tag} className="flex items-baseline gap-4">
          <span className="text-[10px] font-mono text-slate-400 w-36 flex-shrink-0">{r.tag}</span>
          <span className={r.cls}>{r.ex}</span>
        </div>
      ))}
    </div>
  );
}

// ─── ícones ───────────────────────────────────────────────────────────────────

const ICONS = [
  "payments","bar_chart","store","settings","account_tree","palette",
  "add","check","close","delete","edit","download","upload",
  "filter_list","search","more_vert","more_horiz","tune",
  "schedule","gpp_maybe","warning","check_circle","cancel",
  "paid","block","autorenew","refresh","progress_activity",
  "receipt_long","description","attach_file","picture_as_pdf","upload_file",
  "person","logout","menu","chevron_left","chevron_right",
  "first_page","last_page","expand_more","expand_less",
  "info","cloud_off","send","format_list_numbered","error",
  "auto_awesome","psychology","history","inbox","save",
  "calendar_today","mail","storefront","add_circle","timer",
  "currency_exchange","account_balance","local_shipping","search_off",
];

function IconsShowcase() {
  const [active, setActive] = useState<string|null>(null);
  const [search, setSearch] = useState("");
  const filtered = ICONS.filter(n => n.includes(search.toLowerCase()));
  return (
    <div className="space-y-3">
      <input className="w-full max-w-xs border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white"
        placeholder="Buscar ícone…" value={search} onChange={e => setSearch(e.target.value)} />
      <div className="flex flex-wrap gap-1.5">
        {filtered.map(name => (
          <button key={name} onClick={() => { setActive(active===name?null:name); navigator.clipboard.writeText(name); }} title={name}
            className={`inline-flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${active===name ? "border-blue-300 bg-blue-50 shadow-sm" : "border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300"}`}>
            <MSIcon name={name} className="text-[22px] text-slate-600" />
            <span className="text-[9px] font-mono text-slate-400 max-w-[72px] text-center leading-tight">{name}</span>
          </button>
        ))}
      </div>
      {active && <p className="text-xs text-blue-600 font-mono">"{active}" copiado</p>}
    </div>
  );
}

// ─── paleta gráficos ──────────────────────────────────────────────────────────

const CHART = [
  { hex:"#2563eb",label:"blue-600" },{ hex:"#7c3aed",label:"violet-700" },
  { hex:"#0891b2",label:"cyan-600" },{ hex:"#059669",label:"emerald-600" },
  { hex:"#d97706",label:"amber-600" },{ hex:"#dc2626",label:"red-600" },
  { hex:"#db2777",label:"pink-600" },{ hex:"#0d9488",label:"teal-600" },
  { hex:"#ea580c",label:"orange-600" },{ hex:"#4f46e5",label:"indigo-600" },
];

// ─── nav sections ─────────────────────────────────────────────────────────────

const SECTIONS = [
  { id:"cores",       label:"Cores" },
  { id:"tipografia",  label:"Tipografia" },
  { id:"botoes",      label:"Botões" },
  { id:"badges",      label:"Badges" },
  { id:"kpi",         label:"KPI Cards" },
  { id:"toasts",      label:"Toasts" },
  { id:"inputs",      label:"Inputs" },
  { id:"ia",          label:"IA" },
  { id:"upload",      label:"Upload" },
  { id:"fornecedor",  label:"Fornecedor" },
  { id:"recorrencia", label:"Recorrência" },
  { id:"modais",      label:"Modais" },
  { id:"drawer",      label:"Drawer" },
  { id:"processing",  label:"Processing" },
  { id:"tabela",      label:"Tabela" },
  { id:"filtros",     label:"Filtros" },
  { id:"paginacao",   label:"Paginação" },
  { id:"timeline",    label:"Timeline" },
  { id:"alerts",      label:"Alerts" },
  { id:"empty",       label:"Empty" },
  { id:"loading",     label:"Loading" },
  { id:"sidebar",     label:"Sidebar" },
  { id:"icons",       label:"Ícones" },
  { id:"graficos",    label:"Gráficos" },
];

// ─── main ─────────────────────────────────────────────────────────────────────

export function DesignSystemPage() {
  const [active, setActive] = useState("cores");

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => { const vis = entries.find(e => e.isIntersecting); if (vis) setActive(vis.target.id); },
      { threshold: 0.3 }
    );
    SECTIONS.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── top bar ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          {/* logo + título */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src="/sellers-design-system/logo.jpeg" alt="Sellers" className="w-8 h-8 rounded-xl object-cover shadow-sm" style={{ boxShadow:"0 0 0 2px rgba(232,83,58,0.2)" }} />
            <div>
              <span className="text-sm font-bold text-slate-800">Design System</span>
              <span className="text-slate-300 mx-1.5">·</span>
              <span className="text-sm text-slate-500">Sellers</span>
            </div>
            <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor:"#E8533A" }}>v0.1</span>
          </div>
          {/* nav */}
          <nav className="flex items-center gap-0.5 overflow-x-auto flex-1 scrollbar-hide">
            {SECTIONS.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${active===s.id ? "text-white" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"}`}
                style={active===s.id ? { backgroundColor:"#E8533A" } : undefined}>
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-2">

        {/* hero */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-8 mb-6">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src="/sellers-design-system/logo.jpeg" alt="Sellers" className="w-12 h-12 rounded-2xl object-cover shadow-md" style={{ boxShadow:"0 0 0 3px rgba(232,83,58,0.15)" }} />
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">Sellers Design System</h1>
                  <p className="text-sm text-slate-500">Sistema financeiro interno · contas a pagar</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
                Referência visual completa — 24 seções cobrindo todos os componentes, estados e padrões de interação da interface de automação financeira.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Chip label="font" value="Inter" />
                <Chip label="icons" value="Material Symbols Outlined" />
                <Chip label="css" value="Tailwind CSS 3.3" />
                <Chip label="charts" value="Recharts 2.15" />
                <Chip label="auth" value="Keycloak SSO" />
                <Chip label="pdf" value="@react-pdf/renderer" />
              </div>
            </div>
            <div className="hidden sm:grid grid-cols-5 gap-1.5">
              {["#E8533A","#2563EB","#0a1628","#10b981","#f59e0b","#ef4444","#7c3aed","#0891b2","#f1f5f9","#0f172a"].map(c => (
                <div key={c} className="w-9 h-9 rounded-xl shadow-sm border border-white/30" style={{ backgroundColor:c }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── 1. CORES ── */}
        <Section id="cores" title="Cores" description="Todos os tokens de cor da aplicação.">
          <Sub title="Brand — Sellers">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              <Swatch hex="#E8533A" name="Coral"        token="--brand-coral" />
              <Swatch hex="#FDF1EE" name="Coral Light"  token="--brand-coral-light" border />
              <Swatch hex="#F5C4B8" name="Coral Border" token="--brand-coral-border" border />
              <Swatch hex="#2563EB" name="Blue"         token="--brand-blue" />
              <Swatch hex="#EFF6FF" name="Blue Light"   token="--brand-blue-light" border />
              <Swatch hex="#BFDBFE" name="Blue Border"  token="--brand-blue-border" border />
            </div>
          </Sub>
          <Sub title="Semânticos">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Dot hex="#ffffff"  label="background"  border /><Dot hex="#0d1117" label="foreground" />
              <Dot hex="#e2e8f0"  label="border"      border /><Dot hex="#3b82f6" label="primary" />
              <Dot hex="#f1f5f9"  label="secondary"   border /><Dot hex="#f1f5f9" label="muted"   border />
              <Dot hex="#ef4444"  label="destructive"        /><Dot hex="#f1f5f9" label="accent"  border />
            </div>
          </Sub>
          <Sub title="Status das despesas">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Dot hex="#eff6ff" label="blue-50 · pendente aprovação"   border /><Dot hex="#fffbeb" label="amber-50 · aguardando CFO"    border />
              <Dot hex="#fff7ed" label="orange-50 · revisão manual"     border /><Dot hex="#ecfdf5" label="emerald-50 · aprovado"        border />
              <Dot hex="#d1fae5" label="emerald-100 · pago"             border /><Dot hex="#fef2f2" label="red-50 · rejeitado"           border />
              <Dot hex="#f5f3ff" label="violet-50 · fornec. pendente"   border /><Dot hex="#f0f9ff" label="sky-50 · processando"        border />
              <Dot hex="#f8fafc" label="slate-100 · cancelado"          border />
            </div>
          </Sub>
          <Sub title="Sidebar dark theme — #0a1628">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Dot hex="#0a1628" label="fundo sidebar" />
              <Dot hex="#94a3b8" label="inativo" ratio="5.9:1 ✓" /><Dot hex="#f1f5f9" label="ativo" ratio="12:1 ✓" border />
              <Dot hex="#E8533A" label="ícone ativo" ratio="3.1:1 ✓" /><Dot hex="#cbd5e1" label="nome usuário" ratio="8.1:1 ✓" /><Dot hex="#475569" label="label seção" />
            </div>
          </Sub>
        </Section>

        {/* ── 2. TIPOGRAFIA ── */}
        <Section id="tipografia" title="Tipografia" description="Inter 400–700. Todos os tamanhos usados na interface.">
          <TypographyShowcase />
        </Section>

        {/* ── 3. BOTÕES ── */}
        <Section id="botoes" title="Botões" description="Todas as variantes de ação da interface.">
          <div className="flex flex-wrap gap-3 items-center">
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor:"#E8533A" }}>
              <MSIcon name="add" className="text-[16px]" />Nova despesa
            </button>
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              <MSIcon name="check" className="text-[16px]" />Aprovar
            </button>
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <MSIcon name="filter_list" className="text-[16px]" />Filtros
            </button>
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
              <MSIcon name="download" className="text-[16px]" />Exportar
            </button>
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors">
              <MSIcon name="delete" className="text-[16px]" />Excluir
            </button>
            <button className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-700 transition-colors">
              <MSIcon name="more_vert" className="text-[18px]" />
            </button>
            <button disabled className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white opacity-40 cursor-not-allowed" style={{ backgroundColor:"#E8533A" }}>
              <MSIcon name="send" className="text-[16px]" />Enviar
            </button>
          </div>
        </Section>

        {/* ── 4. BADGES ── */}
        <Section id="badges" title="Status Badges" description="9 estados do workflow de aprovação de despesas.">
          <div className="flex flex-wrap gap-4">
            {Object.keys(STATUS).map(s => (
              <div key={s} className="flex flex-col items-start gap-1.5">
                <Badge status={s} />
                <span className="text-[9px] font-mono text-slate-400 pl-0.5">{s}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 5. KPI ── */}
        <Section id="kpi" title="KPI Cards" description="Métricas do dashboard com accent lateral colorido.">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            <KPI label="Pendente aprv." value="14"  sub="aguardando financeiro"  icon="schedule"  color="amber"  />
            <KPI label="Aguard. CFO"    value="3"   sub="alçada acima de R$5k"  icon="gpp_maybe" color="orange" />
            <KPI label="Revisão manual" value="7"   sub="confiança IA < 85%"    icon="warning"   color="red"    />
            <KPI label="Fornec. pend."  value="2"   sub="CNPJ não cadastrado"   icon="store"     color="violet" />
            <KPI label="Pagas / mês"    value="31"  sub="total processado"      icon="paid"      color="blue"   />
          </div>
        </Section>

        {/* ── 6. TOASTS ── */}
        <Section id="toasts" title="Notificações (Toast)" description="4 níveis com barra de progresso e auto-dismiss em 8s.">
          <div className="flex flex-wrap gap-5">
            {(["success","info","warning","error"] as const).map(l => <Toast key={l} level={l} />)}
          </div>
        </Section>

        {/* ── 7. INPUTS ── */}
        <Section id="inputs" title="Inputs & Formulários" description="Default, foco, erro, disabled, textarea e campo com label + asterisco.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label:"Default",   cls:"border-slate-200 bg-white",                    val:"",                    ph:"ex.: NF-e 000456" },
              { label:"Preenchido",cls:"border-slate-200 bg-white",                    val:"Shopee Brasil LTDA",   ph:"" },
              { label:"Foco",      cls:"border-blue-400 ring-2 ring-blue-100 bg-white",val:"editando campo…",      ph:"" },
              { label:"Erro",      cls:"border-red-300 ring-2 ring-red-100 bg-white",  val:"valor inválido",       ph:"" },
            ].map(f => (
              <div key={f.label} className="space-y-1">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">{f.label} {f.label === "Erro" && <span className="text-red-400">*</span>}</label>
                <input readOnly className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none ${f.cls}`} defaultValue={f.val} placeholder={f.ph} />
                {f.label === "Erro" && <p className="text-xs text-red-500 flex items-center gap-1"><MSIcon name="error" className="text-[13px]" />Campo obrigatório</p>}
              </div>
            ))}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Disabled</label>
              <input disabled className="w-full border border-slate-100 rounded-lg px-3 py-2.5 text-sm text-slate-300 bg-slate-50 cursor-not-allowed outline-none" defaultValue="somente leitura" />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Textarea</label>
              <textarea rows={3} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none" placeholder="Observações…" />
            </div>
          </div>
        </Section>

        {/* ── 8. IA ── */}
        <Section id="ia" title="Indicadores de IA" description="Badges de confiança, marcadores de campo preenchido pela IA e input com overlay.">
          <Sub title="Confiança da extração">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex flex-col items-center gap-1">
                <ConfiancaBadge pct={95} />
                <span className="text-[9px] text-slate-400">≥ 85% verde</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ConfiancaBadge pct={78} />
                <span className="text-[9px] text-slate-400">≥ 70% amber</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ConfiancaBadge pct={62} />
                <span className="text-[9px] text-slate-400">&lt; 70% red</span>
              </div>
              <IaBadge />
              <span className="text-xs text-slate-400">← badge inline em campos preenchidos pela IA</span>
            </div>
          </Sub>
          <Sub title="Campo preenchido pela IA">
            <div className="max-w-sm space-y-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-500">Categoria</label>
                <div className="relative flex items-center">
                  <input readOnly className="w-full border border-blue-300 bg-blue-50 rounded-lg px-3 py-2.5 text-sm text-blue-700 focus:outline-none" defaultValue="Marketplace" />
                  <span className="absolute right-2"><IaBadge /></span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-500">Valor</label>
                <div className="relative flex items-center">
                  <input readOnly className="w-full border border-blue-300 bg-blue-50 rounded-lg px-3 py-2.5 text-sm text-blue-700 font-mono focus:outline-none" defaultValue="R$ 12.450,00" />
                  <span className="absolute right-2"><IaBadge /></span>
                </div>
              </div>
            </div>
          </Sub>
        </Section>

        {/* ── 9. UPLOAD ── */}
        <Section id="upload" title="Upload / Drag-Drop" description="Dropzone com 3 estados: idle, loading (extração IA), concluído.">
          <div className="max-w-sm">
            <DropzonePreview />
          </div>
        </Section>

        {/* ── 10. FORNECEDOR ── */}
        <Section id="fornecedor" title="Lookup de Fornecedor" description="Campo CNPJ com validação em tempo real e 4 estados de feedback.">
          <FornecedorLookup />
        </Section>

        {/* ── 11. RECORRÊNCIA ── */}
        <Section id="recorrencia" title="Recorrência" description="Toggle on/off + grid de frequência para despesas recorrentes.">
          <RecorrenciaToggle />
        </Section>

        {/* ── 12. MODAIS ── */}
        <Section id="modais" title="Modais de Confirmação" description="Cards de confirmação de aprovação e rejeição de despesa.">
          <ConfirmCards />
        </Section>

        {/* ── 13. DRAWER ── */}
        <Section id="drawer" title="Drawer" description="Painel lateral deslizante (right-to-left) com header, body scrollável e footer fixo.">
          <DrawerPreview />
        </Section>

        {/* ── 14. PROCESSING ── */}
        <Section id="processing" title="Processing Steps" description="Progressão animada das 4 etapas de extração por IA. Clique nos steps.">
          <div className="max-w-sm">
            <ProcessingSteps />
          </div>
        </Section>

        {/* ── 15. TABELA ── */}
        <Section id="tabela" title="Tabela de Dados" description="Com badges de status, indicador de confiança IA e botão de download.">
          <TablePreview />
        </Section>

        {/* ── 16. FILTROS ── */}
        <Section id="filtros" title="Barra de Filtros" description="Container com status dropdown, date picker e botões aplicar/limpar.">
          <FilterBar />
        </Section>

        {/* ── 17. PAGINAÇÃO ── */}
        <Section id="paginacao" title="Paginação" description="Interativa — seletor de página + navegação. Clique nos números.">
          <PaginationPreview />
        </Section>

        {/* ── 18. TIMELINE ── */}
        <Section id="timeline" title="Auditoria / Timeline" description="Histórico de ações com bullets coloridos, autor e diff de valores.">
          <div className="max-w-lg">
            <AuditTimeline />
          </div>
        </Section>

        {/* ── 19. ALERTS ── */}
        <Section id="alerts" title="Alert Boxes" description="Mensagens de erro, aviso e informação inline nos formulários.">
          <div className="max-w-lg">
            <AlertBoxes />
          </div>
        </Section>

        {/* ── 20. EMPTY ── */}
        <Section id="empty" title="Empty States" description="Tela vazia para tabela, fornecedores e histórico.">
          <EmptyStates />
        </Section>

        {/* ── 21. LOADING ── */}
        <Section id="loading" title="Loading & Retry" description="Spinner de carregamento, estado de erro com retry e timeout OMIE.">
          <LoadingStates />
        </Section>

        {/* ── 22. SIDEBAR ── */}
        <Section id="sidebar" title="Sidebar" description="Dark theme #0a1628 com logo Sellers. Modo compacto e expandido — clique para trocar item ativo.">
          <SidebarPreview />
        </Section>

        {/* ── 23. ÍCONES ── */}
        <Section id="icons" title="Ícones (Material Symbols)" description="Todos os ícones usados. Busque e clique para copiar o nome.">
          <IconsShowcase />
        </Section>

        {/* ── 24. GRÁFICOS ── */}
        <Section id="graficos" title="Paleta de Gráficos (Recharts)" description="Sequência de 10 cores para bar/line/pie charts.">
          <div className="flex gap-0 rounded-xl overflow-hidden h-10 shadow-sm border border-slate-200 mb-3">
            {CHART.map(c => <div key={c.hex} className="flex-1" style={{ backgroundColor:c.hex }} title={c.label} />)}
          </div>
          <div className="flex flex-wrap gap-2">
            {CHART.map(c => (
              <div key={c.hex} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-100 bg-slate-50">
                <div className="w-4 h-4 rounded-md" style={{ backgroundColor:c.hex }} />
                <span className="text-[10px] font-mono text-slate-500">{c.label}</span>
                <span className="text-[10px] font-mono text-slate-400">{c.hex}</span>
              </div>
            ))}
          </div>
        </Section>

        <div className="text-center py-6 border-t border-slate-200 mt-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src="/sellers-design-system/logo.jpeg" alt="Sellers" className="w-6 h-6 rounded-lg object-cover" />
            <p className="text-xs text-slate-500 font-medium">Sellers Sistema Financeiro · Design System v0.1</p>
          </div>
          <p className="text-[10px] text-slate-400">Inter · Material Symbols Outlined · Tailwind CSS 3.3 · Radix UI · Recharts</p>
        </div>
      </div>
    </div>
  );
}
