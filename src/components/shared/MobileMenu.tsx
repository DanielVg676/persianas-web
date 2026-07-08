"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ButtonLink } from "@/components/shared/ButtonLink";
import { LineIcon } from "@/components/shared/LineIcon";
import { brandAssets, navItems } from "@/shared/constants/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white text-foreground"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <LineIcon name={open ? "close" : "menu"} />
      </button>

      {open ? (
        <div
          className="fixed inset-0 top-16 z-40 bg-foreground/40 backdrop-blur-sm"
          id="mobile-menu"
          onClick={() => setOpen(false)}
        >
          <div
            className="ml-auto h-full w-[min(86vw,360px)] bg-surface p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              alt="Grupo Vizcaíno"
              className="h-11 w-auto object-contain"
              height={200}
              src={brandAssets.logoFull}
              width={844}
            />
            <nav className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <Link
                  className="rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-stone"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ButtonLink
              className="mt-6 w-full"
              href="#contacto"
              onClick={() => setOpen(false)}
            >
              Solicitar cotización
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
