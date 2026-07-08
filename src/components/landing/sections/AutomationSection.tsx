import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { LineIcon } from "@/components/shared/LineIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { visualAssets } from "@/shared/constants/site";

const benefits = [
  "Control remoto",
  "Programación de horarios",
  "Soluciones para ventanas amplias",
  "Integración según disponibilidad",
  "Mayor comodidad en el uso diario",
];

export function AutomationSection() {
  return (
    <section className="bg-foreground py-20 text-white" id="automatizacion">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            description="Automatiza la apertura y el cierre de tus persianas para controlar la iluminación con mayor comodidad."
            eyebrow="Automatización"
            invert
            title="Confort con un solo movimiento"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div className="flex gap-3 rounded-lg bg-white/7 p-4 text-sm text-white/78" key={benefit}>
                <LineIcon className="shrink-0 text-primary" name="check" />
                {benefit}
              </div>
            ))}
          </div>
          <ButtonLink className="mt-8" href="#contacto">
            Consultar opciones de automatización
          </ButtonLink>
        </div>
        <EditorialImage
          alt={visualAssets.automation.alt}
          className="min-h-[420px] border-white/12"
          src={visualAssets.automation.src}
        />
      </Container>
    </section>
  );
}
