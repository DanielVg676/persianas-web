import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { LineIcon } from "@/components/shared/LineIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { serviceCategories } from "@/shared/constants/site";

export function ServicesSection() {
  return (
    <section className="bg-background py-20" id="soluciones">
      <Container>
        <SectionHeader
          description="Encuentra opciones funcionales y decorativas para controlar la luz, renovar tus superficies y crear ambientes más cómodos."
          eyebrow="Soluciones"
          title="Soluciones para cada parte de tu espacio"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <article
              className="group overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
              key={service.title}
            >
              <EditorialImage
                alt={service.image.alt}
                className="min-h-56 rounded-none border-0"
                imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                src={service.image.src}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 min-h-14 leading-7 text-muted">
                  {service.description}
                </p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  href={service.href}
                >
                  Ver soluciones <LineIcon className="h-4 w-4" name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
