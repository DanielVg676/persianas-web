import { Container } from "@/components/shared/Container";
import { LineIcon } from "@/components/shared/LineIcon";
import { trustItems } from "@/shared/constants/site";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-stone py-8">
      <Container className="grid gap-4 md:grid-cols-4">
        {trustItems.map((item) => (
          <div className="flex gap-4 rounded-xl bg-surface p-5" key={item.title}>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-primary">
              <LineIcon name={item.icon} />
            </span>
            <div>
              <h2 className="text-base font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
