# [Notion Clone](https://www.youtube.com/watch?v=0OaDyjB9Ib8)


## Intro

- Crear proyecto y preparar dockerización

```bash
npx create-next-app@latest notion-clone
  # Need to install the following packages:
  # create-next-app@15.1.7
  # Ok to proceed? (y) y

  # Project name: hello-world
  # Use TypeScript: y
  # Use ESLint: y
  # Use Tailwind CSS: y
  # Keep code in src/: n
  # Use App Router: y
  # Use Turbopack: n
  # Customize import alias: n

rm -rf notion-clone/.git

cp hello-world/Dockerfile notion-clone/
vi notion-clone/next.config.ts
vi docker-compose.yaml

# git rm -r hello-world
```

- Implantar [shadcn-ui](https://ui.shadcn.com/)

```sh
cd notion-clone
npx shadcn@latest init
  # Need to install the following packages:
  # shadcn@2.3.0
  # Ok to proceed? (y)

  # style? Default
  # base color? Neutral
  # use CSS variables for colors? yes

  # It looks like you are using React 19.
  # Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).
  # ? How to proceed? Use --legacy-peer-deps
```


## Cambios

> [!NOTE]
> - Layouts: groupfiles reflecting every single route and component; not meant for rendering, more like a **reusable layout like a sidebar or a navigation bar**
> - Pages: forms for users etc.

<!-- - `app/layout.tsx`: -->

- Limpiar boilerplate de `app/page.tsx`

```ts
export default function Home() {
  return (
    // Eliminar boilerplate, crear buttons!
  );
}
```

- añadir `button` de Shadcn

```sh
npx shadcn@latest add button
  # --legacy-peer-deps

ls components/ui/button.tsx

vi app/page.tsx
```







