# Assets

## Marca

Los logos reales disponibles se movieron a:

- `public/brand/logotipo_solo.jpg`
- `public/brand/marca_letras_con_logo.jpg`
- `src/app/favicon.ico`

Reglas:

- No redisenar, recolorear, deformar ni agregar efectos al logo.
- Usar `marca_letras_con_logo.jpg` en header y footer mientras no exista una version vectorial.
- Usar `favicon.ico` como icono de navegador detectado por Next.js desde `src/app`.
- Mantenerlo sobre fondo blanco o calido para preservar contraste.

## Imagenes provisionales

Las imagenes editoriales estan centralizadas en `src/shared/constants/site.ts` dentro de `visualAssets`.

Fuente provisional:

- Unsplash: https://unsplash.com/

Notas:

- Son imagenes stock temporales para direccion visual.
- Deben sustituirse por fotografias reales de Grupo Vizcaino cuando esten disponibles.
- Cada imagen debe conservar `alt`, `category`, `sourceLabel` y `sourceUrl`.
- No usar imagenes con marcas de competidores, marcas de agua, saturacion excesiva o aspecto artificial.

## Pendientes

- Confirmar fotografias reales de proyectos.
- Confirmar si existe logo en SVG, PNG transparente o version blanca oficial.
- Crear favicon y Open Graph visual con assets definitivos.
