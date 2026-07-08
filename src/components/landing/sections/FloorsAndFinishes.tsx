import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { LineIcon } from "@/components/shared/LineIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { visualAssets } from "@/shared/constants/site";

const items = [
  "Pisos para diferentes estilos de interior",
  "Papel tapiz",
  "Lambrín",
  "Paneles decorativos",
  "Recubrimientos para muros",
  "Asesoría para combinar materiales y colores",
];

export function FloorsAndFinishes() {
  return (
    <section className="bg-surface py-20" id="acabados">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <EditorialImage
          alt={visualAssets.woodFloor.alt}
          className="min-h-[460px]"
          src={visualAssets.woodFloor.src}
        />
        <div>
          <SectionHeader
            description="Complementa tus espacios con pisos, recubrimientos y acabados que aportan textura, calidez y personalidad."
            eyebrow="Pisos y acabados"
            title="Renueva desde el piso hasta los muros"
          />
          <ul className="mt-8 grid gap-3 text-muted">
            {items.map((item) => (
              <li className="flex gap-3" key={item}>
                <LineIcon className="mt-0.5 shrink-0 text-primary" name="check" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink className="mt-8" href="#contacto">
            Conocer acabados
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
