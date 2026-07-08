# Componentes reutilizables

Los componentes deben estar en `src/components/shared` cuando puedan usarse en mas de una seccion. Las secciones especificas de landing viven en `src/components/landing`.

## ButtonLink

Archivo actual: `src/components/shared/ButtonLink.tsx`.

Variantes esperadas:

- `primary`: fondo `--brand`, texto blanco, hover `--brand-hover`. Usar para "Solicitar cotizacion".
- `secondary`: transparente, texto `--foreground`, borde `--foreground`, hover con fondo oscuro y texto blanco. Usar para acciones secundarias como "Explorar soluciones".
- `accent`: fondo `--sand`, texto `--foreground`, hover `--stone`. Usar con moderacion en detalles o superficies oscuras.

Reglas:

- Altura minima: 48 px.
- Radio: 8 a 10 px.
- Focus visible obligatorio.
- Sin sombras fuertes.
- En movil, puede ocupar ancho completo cuando mejore la conversion.

## Inputs y formularios

Cuando se implemente `QuoteForm`, crear componentes reutilizables para:

- `TextField`
- `TextareaField`
- `SelectField`
- `CheckboxField`
- `FileField`
- `FormMessage`

Estados obligatorios:

- Default
- Hover
- Focus visible
- Error
- Disabled
- Loading del submit
- Success despues de enviar

Reglas de formulario:

- Altura minima de campos: 48 px.
- Label asociado a cada control.
- Mensaje de error claro y vinculado al campo.
- No borrar datos si falla el envio.
- Incluir consentimiento y honeypot o mecanismo ligero anti-spam.

## Header y navegacion

El header debe ser sticky. En desktop muestra logo, navegacion y CTA. En movil debe tener menu operable con teclado, cerrar al seleccionar una opcion y bloquear scroll de fondo cuando este abierto.

Opciones principales:

- Inicio
- Soluciones
- Persianas
- Pisos
- Proyectos
- Nosotros
- Contacto

## Tarjetas

Usar tarjetas para categorias, productos, testimonios, FAQs y proyectos. Deben tener bordes finos, fondo blanco o calido, radio sobrio y contenido breve.

No usar tarjetas con sombras pesadas, listas largas ni demasiados productos al mismo tiempo.

## Componentes planeados

- Implementados: `MobileMenu`, `HeroSection`, `TrustBar`, `ServicesSection`, `BlindsShowcase`, `NeedsSelector`, `FloorsAndFinishes`, `AutomationSection`, `ProcessSteps`, `ProjectGallery`, `AboutSection`, `TestimonialsSection`, `FAQSection`, `ContactSection`, `LocationSection`, `MobileContactBar`, `WhatsAppButton`.
- Compartidos implementados: `ButtonLink`, `Container`, `EditorialImage`, `SectionHeader`, `LineIcon`, campos base de formulario.
- Pendiente: conectar envio real del formulario, mapa real diferido y testimonios verificados.

## ContactSection / QuoteForm visual

La primera version del formulario es solo UI con validacion local. No envia datos, no abre WhatsApp y no llama APIs. Debe conservar los datos capturados cuando muestra errores.

Campos obligatorios actuales:

- Nombre completo
- Telefono
- Producto de interes
- Consentimiento

Campo honeypot:

- `companyWebsite`
