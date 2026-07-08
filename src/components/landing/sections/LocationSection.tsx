import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { LineIcon } from "@/components/shared/LineIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { siteConfig } from "@/shared/constants/site";

export function LocationSection() {
  return (
    <section className="bg-background py-20" id="ubicacion">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeader
            description="La dirección y referencias se publicarán cuando estén confirmadas."
            eyebrow="Ubicación"
            title="Visítanos o agenda una asesoría"
          />
          <div className="mt-8 grid gap-4 text-muted">
            <p className="flex gap-3">
              <LineIcon className="text-primary" name="map" />
              {siteConfig.address}
            </p>
            <p>{siteConfig.schedule}</p>
            <p>{siteConfig.serviceArea}</p>
          </div>
          <ButtonLink className="mt-8" href="#contacto">
            Cómo llegar
          </ButtonLink>
        </div>
        <div className="flex min-h-[360px] items-center justify-center rounded-xl border border-dashed border-border bg-stone p-8 text-center text-muted">
          Mapa diferido pendiente. No se cargará un mapa pesado hasta contar con
          dirección y enlace confirmados.
        </div>
      </Container>
    </section>
  );
}
