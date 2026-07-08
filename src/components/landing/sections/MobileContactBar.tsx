import { LineIcon } from "@/components/shared/LineIcon";
import { siteConfig } from "@/shared/constants/site";

export function MobileContactBar() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    siteConfig.quoteMessage,
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-surface px-3 py-2 text-xs font-semibold shadow-[0_-8px_24px_rgba(0,0,0,0.08)] md:hidden">
      <a className="flex min-h-11 flex-col items-center justify-center gap-1" href={`tel:${siteConfig.phone}`}>
        <LineIcon className="h-4 w-4 text-primary" name="phone" />
        Llamar
      </a>
      <a
        className="flex min-h-11 flex-col items-center justify-center gap-1"
        href={whatsappHref}
        rel="noreferrer"
        target="_blank"
      >
        <LineIcon className="h-4 w-4 text-primary" name="whatsapp" />
        WhatsApp
      </a>
      <a className="flex min-h-11 flex-col items-center justify-center gap-1" href="#contacto">
        <LineIcon className="h-4 w-4 text-primary" name="message" />
        Cotizar
      </a>
    </div>
  );
}
