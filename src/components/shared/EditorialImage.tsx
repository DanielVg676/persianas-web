import Image from "next/image";

import { cn } from "@/shared/lib/cn";

type EditorialImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export function EditorialImage({
  src,
  alt,
  priority = false,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-stone",
        className,
      )}
    >
      <Image
        alt={alt}
        className={cn("object-cover", imageClassName)}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}
