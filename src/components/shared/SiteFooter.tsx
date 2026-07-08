import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { LineIcon } from "@/components/shared/LineIcon";
import {
  brandAssets,
  navItems,
  serviceCategories,
  siteConfig,
} from "@/shared/constants/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Image
              alt={siteConfig.name}
              className="h-12 w-auto rounded-md bg-white object-contain p-1"
              height={200}
              src={brandAssets.logoFull}
              width={844}
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
              Grupo Vizcaíno. Persianas, pisos y soluciones para tus espacios en
              Durango.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Navegación</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {navItems.map((item) => (
                <a className="hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Categorías</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {serviceCategories.slice(0, 5).map((item) => (
                <a className="hover:text-white" href={item.href} key={item.title}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contacto</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.schedule}</p>
              <p>{siteConfig.address}</p>
              <div className="flex gap-3 pt-2">
                <a aria-label="Instagram" className="hover:text-white" href={siteConfig.instagram}>
                  <LineIcon name="instagram" />
                </a>
                <a aria-label="Facebook" className="hover:text-white" href={siteConfig.facebook}>
                  <LineIcon name="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/12 pt-6 text-sm text-white/60">
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
