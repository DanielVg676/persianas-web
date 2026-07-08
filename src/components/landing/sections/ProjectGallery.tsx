import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { projectImages } from "@/shared/constants/site";

export function ProjectGallery() {
  return (
    <section className="bg-surface py-20" id="proyectos">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            description="Conoce aplicaciones de persianas, pisos, cortinas y acabados en diferentes ambientes."
            eyebrow="Proyectos"
            title="Espacios transformados"
          />
          <ButtonLink href="#contacto" variant="secondary">
            Ver más proyectos
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projectImages.map((image, index) => (
            <a
              className="group block"
              href={image.src}
              key={`${image.title}-${index}`}
              rel="noreferrer"
              target="_blank"
            >
              <EditorialImage
                alt={image.alt}
                className="min-h-64"
                imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 33vw, 100vw"
                src={image.src}
              />
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="font-semibold">{image.title}</span>
                <span className="text-muted">{image.category}</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
