import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { MobileMenu } from "@/components/shared/MobileMenu";
import { brandAssets, navItems, siteConfig } from "@/shared/constants/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/92 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link aria-label={siteConfig.name} className="flex items-center" href="/">
          <Image
            alt={siteConfig.name}
            className="h-10 w-auto object-contain md:h-12"
            height={200}
            priority
            src={brandAssets.logoFull}
            width={844}
          />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-muted lg:flex">
          {navItems.map((item) => (
            <a className="transition-colors hover:text-primary" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <ButtonLink className="min-h-11 px-4" href="#contacto">
            Solicitar cotización
          </ButtonLink>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
