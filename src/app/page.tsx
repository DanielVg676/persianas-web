import { LandingPage } from "@/components/landing/LandingPage";
import { siteConfig } from "@/shared/constants/site";

export default function Home() {
  // El archivo de ruta solo delega UI; las secciones viven fuera de app.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description:
      "Persianas, pisos, cortinas, toldos, automatización y soluciones decorativas para hogares, oficinas y comercios.",
    areaServed: siteConfig.city,
    serviceType: [
      "Persianas",
      "Cortinas",
      "Pisos",
      "Toldos",
      "Automatización",
      "Muros y acabados",
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <LandingPage />
    </>
  );
}
