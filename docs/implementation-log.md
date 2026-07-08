# Bitacora de implementacion

## 2026-07-07

- Se movio el router de `app` en raiz a `src/app`.
- Se mantuvo `src` como espacio principal de componentes, estilos, constantes, utilidades y tipos.
- Se agregaron `docs`, `.agent` y `codex/skills` al nivel de `src`.
- Se documenta que `app` no debe existir en raiz para evitar que Next ignore `src/app`.

## 2026-07-08

- Se documento el brief visual y funcional de Grupo Vizcaino en guias internas.
- Se alinearon los tokens globales con la paleta roja, negra y calida del proyecto.
- Se amplio `siteConfig` para centralizar datos comerciales confirmables y placeholders.
- Se implemento la landing completa con secciones principales del brief.
- Se movieron los assets de marca a `public/brand`.
- Se agregaron tipografias con `next/font`, metadata, robots, sitemap y JSON-LD prudente.
- El formulario quedo como UI con validacion local, sin envio real ni integracion.
- Se agrego `src/app/favicon.ico` usando el icono real disponible.
