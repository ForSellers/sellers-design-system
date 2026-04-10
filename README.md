# Sellers Design System

Referência visual do sistema financeiro Sellers. Documenta todos os tokens de cor, componentes e padrões de interface usados na aplicação de contas a pagar.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| CSS | Tailwind CSS 3.3 |
| Ícones | Material Symbols Outlined |
| Fonte | Inter (Google Fonts) |

## O que está documentado

| Seção | Conteúdo |
|---|---|
| **Cores** | Brand coral/blue, tokens semânticos HSL, cores de status, sidebar dark theme, paleta de gráficos |
| **Tipografia** | Todos os tamanhos e pesos — `text-2xl bold` → `text-[11px] caps` → `font-mono` |
| **Botões** | Primary coral, action blue, secondary, ghost, destructive, icon-only, disabled |
| **Badges** | 9 estados de despesa: `pendente_aprovacao`, `aguardando_cfo`, `aprovado`, `pago`, `revisao_manual`, `rejeitado`, `fornecedor_pendente`, `processando`, `cancelado` |
| **KPI Cards** | 5 variantes de cor com accent lateral (amber, orange, red, violet, blue) |
| **Toasts** | 4 níveis de severidade com barra de progresso — success, info, warning, error |
| **Inputs** | Default, preenchido, foco, erro, disabled, textarea |
| **Tabela** | Header uppercase, hover sutil, badges inline |
| **Paginação** | Interativa — seletor de tamanho + navegação por páginas |
| **Sidebar** | Dark theme `#0a1628` com modo compacto e expandido, itens clicáveis |
| **Ícones** | ~56 Material Symbols com busca e cópia de nome no click |
| **Gráficos** | Paleta sequencial de 10 cores para Recharts |

## Desenvolvimento local

```bash
npm install
npm run dev
# http://localhost:3333
```

## Build

```bash
npm run build
npm run preview
```

## Branches

| Branch | Propósito |
|---|---|
| `main` | Versão estável, publicada |
| `dev` | Desenvolvimento ativo — abrir PRs aqui |

## Contribuindo

1. Crie sua branch a partir de `dev`
2. Faça as alterações em `src/pages/DesignSystemPage.tsx`
3. Abra um PR para `dev`
4. Após revisão, `dev` é mergeado em `main`
