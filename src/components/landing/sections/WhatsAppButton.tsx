"use client";

import { useEffect, useState } from "react";

import { LineIcon } from "@/components/shared/LineIcon";
import { siteConfig } from "@/shared/constants/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 260);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const href = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    siteConfig.quoteMessage,
  )}`;

  if (!visible) {
    return null;
  }

  return (
    <a
      aria-label="Solicitar cotización por WhatsApp"
      className="fixed bottom-24 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:flex"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <LineIcon name="whatsapp" />
    </a>
  );
}
