# Arquitectura

## Organizacion principal

- `src/app`: ruteo de Next.js. Debe mantenerse delgado y delegar UI a componentes externos.
- `src/components/landing`: composicion y secciones especificas de la landing.
- `src/components/shared`: componentes reutilizables entre secciones o futuras rutas.
- `src/shared`: constantes, utilidades y tipos compartidos.
- `src/styles`: estilos globales y tokens base.
- `docs`: registro de decisiones importantes del proyecto.
- `.agent`: notas/configuracion futura para agentes.
- `codex/skills`: espacio reservado para crear skills del proyecto despues.

## Regla para Next.js

Next.js soporta `src/app`, pero si existe una carpeta `app` en la raiz, `src/app` se ignora. Por eso el ruteo vive solo dentro de `src/app`.

