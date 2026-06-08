import Image from "next/image";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

type Variant = "mark" | "full";

export function Logo({
  variant = "mark",
  className,
  alt = "Africa Innovators Society",
  priority = false,
}: {
  variant?: Variant;
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  if (variant === "full") {
    return (
      <Image
        src={asset("/ais-logo-cropped.png")}
        alt={alt}
        width={780}
        height={240}
        priority={priority}
        className={cn("object-contain", className)}
      />
    );
  }
  return (
    <Image
      src={asset("/ais-mark.png")}
      alt={alt}
      width={180}
      height={240}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
