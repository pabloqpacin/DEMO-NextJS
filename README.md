# DEMO-NextJS


## DOCUMENTATION

- YT @Codevolution: [Next.js 15 Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY)



## Crear proyecto

- Crear proyecto boilerplate

```bash
# ...

npx create-next-app@latest
  # Need to install the following packages:
  # create-next-app@15.1.7
  # Ok to proceed? (y) y

  # Project name: hello-world
  # Use TypeScript: y
  # Use ESLint: y
  # Use Tailwind CSS: y
  # Keep code in src/: y
  # Use App Router: y
  # Use Turbopack: n
  # Customize import alias: n

rm -rf hello-world/.git
```

- Levantar
 
```bash
sed -i 's/Save and see your changes instantly./Hello, World!/' hello-world/src/app/page.tsx

cd hello-world
npm run dev
```

- Dockerizar

```bash
# https://github.com/vercel/next.js/tree/canary/examples/with-docker

# ...
```


