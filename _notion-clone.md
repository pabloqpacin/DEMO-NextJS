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

## Trunk Code Quality Extension

1. about
   - [Marketplace](https://marketplace.visualstudio.com/items?itemName=Trunk.io)
   - [Documentation](https://docs.trunk.io/code-quality/ide-integration/vscode)

2. instalar extensión
   - RESPONDER SÍ: *Do you trust the publisher "trunk"? The extension Trunk Code Quality is published by trunk. This is the first extension you're installing from this publisher. trunk is not verified. VSCodium has no control over the behavior of third-party extensions, including how they manage your personal data. Proceed only if you trust the publisher.*
   - Se abre una terminal con info sobre los linters
   - Se crea `.trunk/trunk.yaml`
   - [ ] Login via GitHub?
   - [ ] GH Actions?

3. usar activamente
   - VSC Command (Ctrl+Shift+P)> Format Document With > Trunk Code Quality (default)


## Routing groups

- `app/test`
  - creamos `app/test/page.tsx`

```ts
const TestPage = () => {
  return <div>Hello Test Page</div>;
};

export default TestPage;
```

- - abrimos `localhost:3000/test` en el navegador y vemos que se carga la página, es decir hay enrutamiento
- - esto no lo queremos, y para evitarlo habría que renombrar el directorio como `_test` (ASÍ SE ELIMINA LA ROUTE Y SU CONTENIDO)
- `app/(root)`
  - creamos `app/(root)` y movemos ahí el `app/page.tsx`
  - abrimos `localhost:3000/` y se carga normal!
  - IMPORTANTE: es útil para que X Layouts afecten solo a las pages de este grupo
- `app/(auth)/(routes)/{login,register}/page.tsx`
  - creamos estos directorios y archivos
  - en el navegador vemos que se cargan en `localhost:3000/{login,register}`
  - CARPETAS CON PARÉNTESIS NOT PART OF THE URL UNTIL REACH A NORMAL FOLDER NAME, SOLO ORGANIZATIONAL
- `app/(auth)/layout.tsx`
  - lo creamos y comprobamos que se aplica solo a `localhost:3000/{login,register}`

