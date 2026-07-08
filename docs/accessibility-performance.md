# Accesibilidad, SEO y rendimiento

## Accesibilidad

- Usar HTML semantico.
- Mantener un solo H1.
- Respetar jerarquia de encabezados.
- Asociar labels con todos los campos.
- Asegurar focus visible.
- Permitir navegacion por teclado.
- Usar alt text descriptivo.
- No depender solo del color para estados.
- Respetar `prefers-reduced-motion`.
- Vincular errores de formulario con sus campos.

## Rendimiento

- Usar imagenes WebP o AVIF.
- Definir dimensiones para evitar saltos de layout.
- Usar priority solo en la imagen principal.
- Lazy loading debajo del primer viewport.
- Mantener JavaScript minimo y preferir Server Components.
- Diferir mapa, galerias ampliadas y scripts externos.
- Evitar videos automaticos, GIF pesados, sliders complejos e iconos desde multiples librerias.

Objetivos:

- Lighthouse Performance mayor a 90.
- Lighthouse Accessibility mayor a 90.
- Lighthouse Best Practices mayor a 90.
- Lighthouse SEO mayor a 90.

## SEO local

Titulo objetivo:

`Grupo Vizcaino Durango | Persianas, pisos y soluciones para tus espacios`

Descripcion objetivo:

`Persianas, pisos, cortinas, toldos, automatizacion y soluciones decorativas para hogares, oficinas y comercios en Durango. Solicita una cotizacion personalizada.`

Pendientes SEO:

- Open Graph.
- Twitter Cards.
- URL canonica.
- Sitemap.
- Robots.txt.
- Favicon.
- Metadatos de ubicacion.
- Datos estructurados LocalBusiness.
- Datos estructurados Service.
- Datos estructurados FAQPage cuando exista FAQ real.

No incluir datos comerciales no confirmados dentro de schema.

## Implementado en primera version

- Metadata base, Open Graph y Twitter Card desde `src/app/layout.tsx`.
- `robots.ts` y `sitemap.ts` en `src/app`.
- JSON-LD prudente en la home sin telefono ni direccion no confirmados.
- Componentes de servidor por defecto; solo `MobileMenu`, `NeedsSelector`, `ContactSection` y `WhatsAppButton` son Client Components.
- `next/image` para logos e imagenes editoriales.
- `prefers-reduced-motion` en CSS global.
