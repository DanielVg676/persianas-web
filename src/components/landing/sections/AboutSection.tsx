import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { siteConfig, visualAssets } from "@/shared/constants/site";

export function AboutSection() {
  return (
    <section className="bg-stone py-20" id="nosotros">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            description={`En ${siteConfig.name} ayudamos a transformar hogares, oficinas y comercios mediante persianas, pisos y soluciones decorativas seleccionadas de acuerdo con las necesidades de cada proyecto.`}
            eyebrow="Nosotros"
            title="Soluciones pensadas para cada espacio"
          />
          <p className="mt-6 leading-8 text-muted">
            Nuestro proceso parte de entender el espacio, comparar alternativas y
            acompañar al cliente hasta la instalación. Los datos de experiencia,
            sucursales o certificaciones se agregarán únicamente cuando estén
            confirmados.
          </p>
        </div>
        <EditorialImage
          alt={visualAssets.consultation.alt}
          className="min-h-[420px]"
          src={visualAssets.consultation.src}
        />
      </Container>
    </section>
  );
}
