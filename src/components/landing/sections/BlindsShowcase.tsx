import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { blindProducts } from "@/shared/constants/site";

export function BlindsShowcase() {
  return (
    <section className="bg-surface py-20" id="persianas">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            description="Elige el sistema que mejor se adapte a la iluminación, dimensiones y uso de cada habitación."
            eyebrow="Persianas"
            title="Control de luz, privacidad y estilo"
          />
          <ButtonLink className="w-fit" href="#contacto" variant="secondary">
            Ver tipos de persianas
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blindProducts.map((product) => (
            <article
              className="overflow-hidden rounded-xl border border-border bg-background"
              key={product.name}
            >
              <EditorialImage
                alt={product.image.alt}
                className="min-h-48 rounded-none border-0"
                sizes="(min-width: 1024px) 33vw, 100vw"
                src={product.image.src}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-sm font-semibold text-primary">{product.benefit}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{product.application}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
