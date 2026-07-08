# Contenido y datos

## Marca

- Nombre comercial: Grupo Vizcaino.
- Descriptor: Persianas & Pisos.
- Ubicacion principal: Durango, Dgo.
- CTA principal: Solicitar cotizacion.
- CTA secundario: Explorar soluciones.

## Categorias principales

La oferta debe organizarse en seis grupos para evitar saturacion visual:

- Persianas y cortinas
- Pisos
- Toldos y exteriores
- Muros y acabados
- Automatizacion
- Proyectos personalizados

## Productos y servicios

Registrar productos dentro de constantes o contenido centralizado, no directamente en JSX repetido:

- Persianas enrollables
- Persianas blackout
- Persianas Neolux o Sheer Elegance
- Persianas de madera
- Persianas de aluminio
- Persianas verticales
- Persianas celulares
- Panel japones
- Persianas Vienna
- Persianas motorizadas
- Cortinas tradicionales
- Cortinas Dunes
- Pisos para interiores
- Toldos para exteriores
- Papel tapiz
- Lambrin
- Paneles decorativos
- Recubrimientos y acabados para muros
- Asesoria, medicion e instalacion

## Datos centralizados

Los datos comerciales deben vivir en `siteConfig`, dentro de `src/shared/constants/site.ts`.

No repetir manualmente:

- Telefonos
- WhatsApp
- Correo
- Direccion
- Horarios
- Redes sociales
- Enlace de Google Maps
- Mensajes precargados

Si un dato no esta confirmado, usar un placeholder claro como `[TELEFONO CONFIRMADO]`.

## Contenido centralizado implementado

`src/shared/constants/site.ts` concentra:

- Navegacion.
- Datos de marca y contacto.
- Assets de marca.
- Imagenes visuales provisionales.
- Beneficios de confianza.
- Categorias de servicio.
- Productos destacados de persianas.
- Necesidades y recomendaciones.
- Pasos de proceso.
- Galeria de proyectos.
- Testimonios temporales marcados como no verificados.
- FAQs.
- Opciones del formulario.

## Tono

El contenido debe sonar profesional, cercano, claro y orientado a beneficios.

Preferir:

- Soluciones adaptadas a cada espacio.
- Control de luz y privacidad.
- Asesoria para elegir materiales y acabados.
- Opciones para hogares, oficinas y comercios.

Evitar:

- Somos los mejores.
- Calidad inigualable.
- Lideres absolutos.
- Precios increibles.
- La mejor empresa del mercado.
- Cifras, garantias, testimonios o certificaciones no confirmadas.

## Contenido temporal

Los testimonios, cifras de experiencia, direccion, horarios y marcas solo se publican cuando sean reales. Si se necesita placeholder, debe quedar marcado en constantes o comentarios de codigo.
