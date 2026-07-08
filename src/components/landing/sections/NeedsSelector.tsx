"use client";

import { useState } from "react";

import { Container } from "@/components/shared/Container";
import { LineIcon } from "@/components/shared/LineIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { needs } from "@/shared/constants/site";
import { cn } from "@/shared/lib/cn";

export function NeedsSelector() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = needs[selectedIndex];

  return (
    <section className="bg-background py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          description="En lugar de elegir a ciegas, parte de lo que quieres resolver en tu casa, oficina o comercio."
          eyebrow="Necesidades"
          title="¿Qué quieres mejorar en tu espacio?"
        />
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
          <div className="grid gap-2 sm:grid-cols-2">
            {needs.map((need, index) => (
              <button
                className={cn(
                  "rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors",
                  selectedIndex === index
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-foreground hover:border-primary",
                )}
                key={need.label}
                onClick={() => setSelectedIndex(index)}
                type="button"
              >
                {need.label}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-xl bg-stone p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Recomendación
            </p>
            <p className="mt-3 text-lg leading-8 text-foreground">
              {selected.recommendation}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {selected.products.map((product) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-muted"
                  key={product}
                >
                  <LineIcon className="h-3.5 w-3.5 text-primary" name="check" />
                  {product}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
