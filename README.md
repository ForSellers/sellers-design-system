# Sellers Design System

> Referencia visual do sistema financeiro Sellers — tokens, componentes e padroes de interface.

🔗 **[Ver design system ao vivo →](https://forsellers.github.io/sellers-design-system/)**

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&labelColor=20232a)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white&labelColor=1a1a2e)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white&labelColor=1a1a2e)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.3-06b6d4?logo=tailwindcss&logoColor=white&labelColor=0f172a)

---

## O que e

Uma pagina unica e interativa que documenta todos os tokens de design, componentes e animacoes usados no frontend do Sellers Sistema Financeiro. Serve como referencia para devs e designers manterem consistencia visual.

O design system **nao e uma biblioteca de componentes** — e uma documentacao viva. Os componentes reais ficam no repositorio do frontend. Aqui eles sao replicados como previews interativos.

---

## Desenvolvimento local

```bash
git clone https://github.com/ForSellers/sellers-design-system.git
cd sellers-design-system
npm install
npm run dev
# → http://localhost:3333/sellers-design-system/
```

## Build e preview

```bash
npm run build
npm run preview
```

---

## Como adicionar um componente novo

1. **Crie a funcao de preview** em `src/pages/DesignSystemPage.tsx`, antes do comentario `// ─── NAV INDEX`. O preview deve ser auto-contido (sem dependencias externas, sem API calls) e interativo quando possivel.

2. **Adicione a secao no array `SECTIONS`** para que apareca no menu de navegacao:
   ```tsx
   { id: "meu-componente", label: "Meu Componente", icon: "icon_name" },
   ```

3. **Adicione o bloco de conteudo** no JSX do `DesignSystemPage`, seguindo o padrao:
   ```tsx
   <div id="meu-componente" className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
     <Section title="Meu Componente" description="Descricao curta do que e e quando usar.">
       <MeuComponentePreview />
     </Section>
   </div>
   ```

4. **Se precisar de animacoes CSS**, adicione os `@keyframes` em `src/index.css`.

5. **Teste no browser** antes de abrir PR.

---

## Como adicionar uma animacao nova

Animacoes ficam em `src/index.css`. O padrao e:

```css
@keyframes nome-da-animacao {
  0%   { /* estado inicial */ }
  100% { /* estado final */ }
}
.animate-nome-da-animacao {
  animation: nome-da-animacao 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

Para animacoes em loop, use `infinite` em vez de `forwards`.

Depois adicione o preview no grid de animacoes dentro do `TailwindAnimsGrid` ou `ExtraAnimationsGrid`.

---

## Estrutura do projeto

```
src/
  main.tsx                   # Entry point — monta DesignSystemPage
  index.css                  # Tailwind base, CSS vars, @keyframes
  pages/
    DesignSystemPage.tsx     # Tudo: helpers, previews, layout, nav
```

Tudo vive em um unico arquivo TSX por escolha deliberada — facilita busca, copy-paste de trechos e mantem o design system como snapshot auto-contido.

---

## Convencoes

- **Helpers reutilizaveis**: `Section`, `SubSection`, `Chip`, `MSIcon`, `ColorSwatch`, `ColorDot`, `OculosIcon`, `SellersIcon`
- **Previews**: cada componente tem uma funcao `NomePreview()` que renderiza o demo interativo
- **Cores brand**: usar CSS vars `--brand-coral`, `--brand-blue` ou valores hex diretos
- **Icones**: Material Symbols Outlined — buscar nomes em [fonts.google.com/icons](https://fonts.google.com/icons)
- **Sem dependencias externas**: previews nao importam nada alem de React

---

## Branches e workflow

| Branch | Proposito |
|--------|-----------|
| `main` | Estavel — deploy automatico no GitHub Pages |
| `dev` | Desenvolvimento ativo |
| `feature/*` | Features novas — abrir PR para `dev` |

### Fluxo para contribuir

```bash
git checkout dev
git pull origin dev
git checkout -b feature/minha-feature
# ... faz as alteracoes ...
npm run build              # garante que compila
git add src/index.css src/pages/DesignSystemPage.tsx
git commit -m "feat: descricao curta"
git push -u origin feature/minha-feature
# Abrir PR para dev no GitHub
```

Depois de aprovado e mergeado em `dev`, abrir PR de `dev` → `main` para deploy.

---

## Deploy

Push em `main` aciona o workflow `.github/workflows/deploy.yml` e publica automaticamente em:

**https://forsellers.github.io/sellers-design-system/**
