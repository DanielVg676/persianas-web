import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { faqs } from "@/shared/constants/site";

export function FAQSection() {
  return (
    <section className="bg-surface py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          description="Respuestas breves y prudentes para orientar antes de solicitar cotización."
          eyebrow="Preguntas frecuentes"
          title="Dudas comunes antes de cotizar"
        />
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              className="group rounded-xl border border-border bg-background p-5"
              key={faq.question}
            >
              <summary className="cursor-pointer list-none text-base font-semibold">
                {faq.question}
              </summary>
              <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
