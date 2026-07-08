import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/shared/constants/site";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20">
      <Container>
        <SectionHeader
          description="Esta sección queda lista para sustituir contenido temporal por reseñas reales verificadas."
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article className="rounded-xl border border-border bg-surface p-6" key={index}>
              <p className="text-sm leading-7 text-muted">“{testimonial.comment}”</p>
              <div className="mt-6 border-t border-border pt-4">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-primary">{testimonial.projectType}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
