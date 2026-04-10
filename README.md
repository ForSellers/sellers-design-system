# Sellers Design System

> Referência visual do sistema financeiro Sellers — tokens de cor, tipografia e todos os componentes da interface de contas a pagar.

🔗 **[Ver design system ao vivo →](https://forsellers.github.io/sellers-design-system/)**

---

## Stack

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&labelColor=20232a)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white&labelColor=1a1a2e)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white&labelColor=1a1a2e)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.3-06b6d4?logo=tailwindcss&logoColor=white&labelColor=0f172a)

---

## Paleta de Cores

### Brand Sellers

| Swatch | Nome | Token | Hex | Uso |
|--------|------|-------|-----|-----|
| ![](https://placehold.co/24x24/E8533A/E8533A.png) | **Coral** | `--brand-coral` | `#E8533A` | CTAs primários, ícones ativos na sidebar |
| ![](https://placehold.co/24x24/FDF1EE/FDF1EE.png) | Coral Light | `--brand-coral-light` | `#FDF1EE` | Fundos tintados com coral |
| ![](https://placehold.co/24x24/F5C4B8/F5C4B8.png) | Coral Border | `--brand-coral-border` | `#F5C4B8` | Bordas e separadores coral |
| ![](https://placehold.co/24x24/2563EB/2563EB.png) | **Blue** | `--brand-blue` | `#2563EB` | Links, ações, botão Aprovar |
| ![](https://placehold.co/24x24/EFF6FF/EFF6FF.png) | Blue Light | `--brand-blue-light` | `#EFF6FF` | Fundos de badges e highlights |
| ![](https://placehold.co/24x24/BFDBFE/BFDBFE.png) | Blue Border | `--brand-blue-border` | `#BFDBFE` | Bordas azuis suaves |

### Sidebar Dark Theme

| Swatch | Token | Hex | Ratio WCAG |
|--------|-------|-----|------------|
| ![](https://placehold.co/24x24/0a1628/0a1628.png) | Fundo | `#0a1628` | — |
| ![](https://placehold.co/24x24/94a3b8/94a3b8.png) | Inativo | `#94a3b8` | **5.9:1 ✓** |
| ![](https://placehold.co/24x24/f1f5f9/f1f5f9.png) | Ativo | `#f1f5f9` | **12:1 ✓** |
| ![](https://placehold.co/24x24/E8533A/E8533A.png) | Ícone ativo | `#E8533A` | 3.1:1 ✓ (UI) |
| ![](https://placehold.co/24x24/cbd5e1/cbd5e1.png) | Nome usuário | `#cbd5e1` | **8.1:1 ✓** |

### Paleta de Gráficos (Recharts)

![](https://placehold.co/36x24/2563eb/2563eb.png)
![](https://placehold.co/36x24/7c3aed/7c3aed.png)
![](https://placehold.co/36x24/0891b2/0891b2.png)
![](https://placehold.co/36x24/059669/059669.png)
![](https://placehold.co/36x24/d97706/d97706.png)
![](https://placehold.co/36x24/dc2626/dc2626.png)
![](https://placehold.co/36x24/db2777/db2777.png)
![](https://placehold.co/36x24/0d9488/0d9488.png)
![](https://placehold.co/36x24/ea580c/ea580c.png)
![](https://placehold.co/36x24/4f46e5/4f46e5.png)

`blue-600` · `violet-700` · `cyan-600` · `emerald-600` · `amber-600` · `red-600` · `pink-600` · `teal-600` · `orange-600` · `indigo-600`

---

## Componentes

### Status Badges

Todos os estados do workflow de aprovação de despesas:

| Badge | Enum | Cor |
|-------|------|-----|
| ![](https://placehold.co/120x24/eff6ff/1d4ed8.png?text=Pend.+aprovação) | `pendente_aprovacao` | blue-50 · blue-700 |
| ![](https://placehold.co/120x24/fffbeb/b45309.png?text=Aguard.+CFO) | `aguardando_cfo` | amber-50 · amber-700 |
| ![](https://placehold.co/120x24/fff7ed/c2410c.png?text=Revisão+manual) | `revisao_manual` | orange-50 · orange-700 |
| ![](https://placehold.co/120x24/ecfdf5/047857.png?text=Aprovado) | `aprovado` | emerald-50 · emerald-700 |
| ![](https://placehold.co/120x24/d1fae5/065f46.png?text=Pago) | `pago` | emerald-100 · emerald-800 |
| ![](https://placehold.co/120x24/fef2f2/b91c1c.png?text=Rejeitado) | `rejeitado` | red-50 · red-700 |
| ![](https://placehold.co/120x24/f5f3ff/6d28d9.png?text=Fornec.+pendente) | `fornecedor_pendente` | violet-50 · violet-700 |
| ![](https://placehold.co/120x24/f0f9ff/0369a1.png?text=Processando) | `processando` | sky-50 · sky-700 |
| ![](https://placehold.co/120x24/f8fafc/64748b.png?text=Cancelado) | `cancelado` | slate-100 · slate-500 |

---

### KPI Cards

Cards de métricas do dashboard com accent lateral colorido:

| Cor | border-l | bg | Uso |
|-----|----------|----|-----|
| ![](https://placehold.co/12x12/f59e0b/f59e0b.png) **amber** | `border-l-amber-500` | `bg-amber-50` | Pendente aprovação |
| ![](https://placehold.co/12x12/f97316/f97316.png) **orange** | `border-l-orange-500` | `bg-orange-50` | Aguardando CFO |
| ![](https://placehold.co/12x12/ef4444/ef4444.png) **red** | `border-l-red-500` | `bg-red-50` | Revisão manual |
| ![](https://placehold.co/12x12/8b5cf6/8b5cf6.png) **violet** | `border-l-violet-500` | `bg-violet-50` | Fornecedor pendente |
| ![](https://placehold.co/12x12/3b82f6/3b82f6.png) **blue** | `border-l-blue-500` | `bg-blue-50` | Métricas gerais |

```tsx
<KPICard
  label="Pendente aprovação"
  value={14}
  sublabel="aguardando financeiro"
  icon="schedule"
  color="amber"
/>
```

---

### Botões

| Variante | Classe / estilo | Uso |
|----------|-----------------|-----|
| **Primary coral** | `bg-[#E8533A] text-white` | Ação principal — Nova despesa |
| **Action blue** | `bg-blue-600 text-white` | Aprovações e confirmações |
| **Secondary** | `bg-white border border-slate-200` | Ações secundárias — Filtros |
| **Ghost** | `hover:bg-slate-100` | Ações discretas — Exportar |
| **Destructive** | `bg-red-600 text-white` | Exclusão, rejeição |
| **Icon only** | `w-9 h-9 rounded-lg border` | Menus contextuais |

---

### Notificações (Toast)

| Nível | Icon bg | Border | Uso |
|-------|---------|--------|-----|
| ![](https://placehold.co/12x12/d1fae5/d1fae5.png) **success** | `bg-emerald-100` | `border-emerald-200` | Operação concluída |
| ![](https://placehold.co/12x12/dbeafe/dbeafe.png) **info** | `bg-blue-100` | `border-blue-200` | Eventos informativos |
| ![](https://placehold.co/12x12/fef3c7/fef3c7.png) **warning** | `bg-amber-100` | `border-amber-200` | Confiança IA < 85% |
| ![](https://placehold.co/12x12/fee2e2/fee2e2.png) **error** | `bg-red-100` | `border-red-200` | Falha de conexão OMIE |

- Auto-dismiss em 8s para notificações sem retry
- Loop de retry com até 3 tentativas para erros de integração
- Barra de progresso animada

---

### Inputs

| Estado | Borda | Ring |
|--------|-------|------|
| Default | `border-slate-200` | — |
| Foco | `border-blue-400` | `ring-2 ring-blue-100` |
| Erro | `border-red-300` | `ring-2 ring-red-100` |
| Disabled | `border-slate-100 bg-slate-50` | — |

---

### Paginação

```
[ |< ] [ < ]  1  …  2  [3]  4  …  8  [ > ] [ >| ]
              10 por página ·  21–30 de 78 registros
```

- Elipses automáticas para > 7 páginas
- Seletor de itens por página: 5 / 10 / 20 / 50
- Botão da página atual: `bg-blue-600 text-white border-blue-600`

---

### Sidebar

```
┌────┬──────────────────┐
│ ▤  │  Sellers         │
│    │  Sistema Financeiro│
├────┼──────────────────┤
│ 🔴 │ Contas a Pagar   │  ← ativo: coral + bg sutil
│ ○  │ Relatórios       │
│ ○  │ Fornecedores     │
│ ○  │ Configurações    │
│ ○  │ Integrações  [em breve] │
└────┴──────────────────┘
```

- Fundo: `#0a1628` (navy escuro)
- Largura expandida: `w-64` / compacta: `w-16`
- Transição: `duration-200 ease-in-out`
- Ícone ativo: coral `#E8533A` com `FILL 1`

---

### Tipografia

| Classe Tailwind | Tamanho | Peso | Uso |
|-----------------|---------|------|-----|
| `text-2xl font-bold` | 24px | 700 | Valores monetários grandes |
| `text-xl font-semibold` | 20px | 600 | Títulos de página |
| `text-lg font-semibold` | 18px | 600 | Títulos de seção |
| `text-base font-medium` | 16px | 500 | Nome de fornecedores |
| `text-sm` | 14px | 400 | Corpo, descrições |
| `text-xs font-medium` | 12px | 500 | Metadados, labels |
| `text-[11px] uppercase tracking-wider` | 11px | 600 | Rótulos de coluna |
| `font-mono text-sm` | 14px mono | 400 | IDs, CNPJs, datas |
| `tabular-nums` | — | — | Valores numéricos alinhados |

---

### Ícones

Material Symbols Outlined carregados via Google Fonts.

**Configuração global:**
```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'OPSZ' 20;
}
```

**Ícone preenchido (ativo):**
```tsx
style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'OPSZ' 22" }}
```

Principais ícones usados: `payments` · `schedule` · `gpp_maybe` · `warning` · `check_circle` · `cancel` · `paid` · `store` · `receipt_long` · `bar_chart` · `settings` · `person` · `palette`

---

## Desenvolvimento local

```bash
git clone https://github.com/ForSellers/sellers-design-system.git
cd sellers-design-system
npm install
npm run dev
# → http://localhost:3333
```

## Build e preview

```bash
npm run build
npm run preview
```

## Branches

| Branch | Propósito |
|--------|-----------|
| `main` | Estável — deploy automático no GitHub Pages |
| `dev` | Desenvolvimento ativo — abrir PRs aqui |

## Deploy

Push em `main` aciona o workflow `.github/workflows/deploy.yml` automaticamente e publica em:
**https://forsellers.github.io/sellers-design-system/**
