import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { LineIcon } from "@/components/shared/LineIcon";
import { heroImage, siteConfig } from "@/shared/constants/site";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-surface" id="inicio">
      <Container className="grid min-h-[84vh] content-center gap-10 py-12 md:grid-cols-[1fr_0.95fr] md:items-center md:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Persianas, pisos y soluciones para tus espacios
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            Diseño que transforma cada espacio
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Descubre persianas, pisos, cortinas, toldos y acabados para mejorar
            la luz, la privacidad y el estilo de tu hogar o negocio en{" "}
            {siteConfig.city}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#contacto">Solicitar cotización</ButtonLink>
            <ButtonLink href="#soluciones" variant="secondary">
              Explorar soluciones
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-3">
            {["Atención personalizada", "Soluciones a medida", "Instalación profesional"].map(
              (item) => (
                <div className="flex items-center gap-2" key={item}>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-stone text-primary">
                    <LineIcon className="h-3.5 w-3.5" name="check" />
                  </span>
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
        <EditorialImage
          alt={heroImage.alt}
          className="min-h-[360px] md:min-h-[640px]"
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          src={heroImage.src}
        />
      </Container>
    </section>
  );
}
