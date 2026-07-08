import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/styles/globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grupo Vizcaíno Durango | Persianas, pisos y soluciones",
  description:
    "Persianas, pisos, cortinas, toldos, automatización y soluciones decorativas para hogares, oficinas y comercios en Durango.",
  openGraph: {
    title: "Grupo Vizcaíno Durango | Persianas, pisos y soluciones",
    description:
      "Persianas, pisos, cortinas, toldos, automatización y soluciones decorativas para hogares, oficinas y comercios en Durango.",
    locale: "es_MX",
    siteName: "Grupo Vizcaíno",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Vizcaíno Durango | Persianas, pisos y soluciones",
    description:
      "Persianas, pisos, cortinas, toldos, automatización y soluciones decorativas para hogares, oficinas y comercios en Durango.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${headingFont.variable} ${bodyFont.variable}`} lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
