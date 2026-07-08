"use client";

import { FormEvent, useState } from "react";

import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import {
  CheckboxField,
  FileField,
  SelectField,
  TextareaField,
  TextField,
} from "@/components/shared/FormFields";
import { LineIcon } from "@/components/shared/LineIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  productInterestOptions,
  siteConfig,
  spaceTypeOptions,
} from "@/shared/constants/site";
import type { QuoteFormValues } from "@/shared/types/content";

const initialValues: QuoteFormValues = {
  fullName: "",
  phone: "",
  email: "",
  spaceType: "",
  productInterest: "",
  location: "",
  message: "",
  photo: null,
  consent: false,
  companyWebsite: "",
};

export function ContactSection() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateValue<K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof QuoteFormValues, string>> = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Escribe tu nombre completo.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Agrega un teléfono para dar seguimiento.";
    }

    if (!values.productInterest) {
      nextErrors.productInterest = "Selecciona un producto de interés.";
    }

    if (!values.consent) {
      nextErrors.consent = "Confirma que aceptas ser contactado.";
    }

    if (values.companyWebsite) {
      nextErrors.companyWebsite = "No fue posible validar el formulario.";
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <section className="bg-stone py-20" id="contacto">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl bg-foreground p-8 text-white">
          <SectionHeader
            description="Envíanos algunos datos y un asesor podrá ayudarte a encontrar una solución adecuada."
            eyebrow="Cotización"
            invert
            title="Cuéntanos qué espacio quieres transformar"
          />
          <div className="mt-8 grid gap-4 text-sm text-white/72">
            <p className="flex gap-3">
              <LineIcon className="mt-0.5 text-primary" name="phone" />
              {siteConfig.phone}
            </p>
            <p className="flex gap-3">
              <LineIcon className="mt-0.5 text-primary" name="message" />
              WhatsApp: {siteConfig.whatsapp}
            </p>
            <p className="flex gap-3">
              <LineIcon className="mt-0.5 text-primary" name="map" />
              {siteConfig.address}
            </p>
            <p>{siteConfig.schedule}</p>
            <p>{siteConfig.serviceArea}</p>
          </div>
          <ButtonLink className="mt-8" href="#ubicacion" variant="accent">
            Ver ubicación
          </ButtonLink>
        </div>
        <form
          className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <TextField
              error={errors.fullName}
              label="Nombre completo"
              name="fullName"
              onChange={(event) => updateValue("fullName", event.target.value)}
              value={values.fullName}
            />
            <TextField
              error={errors.phone}
              label="Teléfono"
              name="phone"
              onChange={(event) => updateValue("phone", event.target.value)}
              value={values.phone}
            />
            <TextField
              label="Correo electrónico opcional"
              name="email"
              onChange={(event) => updateValue("email", event.target.value)}
              type="email"
              value={values.email}
            />
            <SelectField
              label="Tipo de espacio"
              name="spaceType"
              onChange={(event) => updateValue("spaceType", event.target.value)}
              options={spaceTypeOptions}
              value={values.spaceType}
            />
            <SelectField
              error={errors.productInterest}
              label="Producto de interés"
              name="productInterest"
              onChange={(event) => updateValue("productInterest", event.target.value)}
              options={productInterestOptions}
              value={values.productInterest}
            />
            <TextField
              label="Ciudad o colonia"
              name="location"
              onChange={(event) => updateValue("location", event.target.value)}
              value={values.location}
            />
          </div>
          <div className="mt-5 grid gap-5">
            <TextareaField
              label="Mensaje"
              name="message"
              onChange={(event) => updateValue("message", event.target.value)}
              placeholder="Cuéntanos qué necesitas, medidas aproximadas o detalles del espacio."
              value={values.message}
            />
            <FileField
              accept="image/*"
              label="Adjuntar fotografía opcional"
              name="photo"
              onChange={(event) => updateValue("photo", event.target.files?.[0] ?? null)}
            />
            <input
              aria-hidden="true"
              className="hidden"
              name="companyWebsite"
              onChange={(event) => updateValue("companyWebsite", event.target.value)}
              tabIndex={-1}
              value={values.companyWebsite}
            />
            <CheckboxField
              checked={values.consent}
              error={errors.consent}
              label="Al enviar este formulario aceptas ser contactado para dar seguimiento a tu solicitud."
              name="consent"
              onChange={(event) => updateValue("consent", event.target.checked)}
            />
            {submitted ? (
              <p className="rounded-lg border border-brand/20 bg-brand/8 p-4 text-sm font-semibold text-primary">
                Formulario validado visualmente. El envío real se conectará en una fase posterior.
              </p>
            ) : null}
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              type="submit"
            >
              Solicitar cotización
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
