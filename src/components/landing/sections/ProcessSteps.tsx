import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { processSteps } from "@/shared/constants/site";

export function ProcessSteps() {
  return (
    <section className="bg-background py-20">
      <Container>
        <SectionHeader
          description="Un proceso sencillo para pasar de una idea inicial a una solución instalada."
          eyebrow="Proceso"
          title="De la idea a la instalación"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article className="rounded-xl border border-border bg-surface p-6" key={step.title}>
              <span className="font-serif text-5xl font-semibold text-primary/28">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
