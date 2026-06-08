import Image from "next/image";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

export function Avatar({
  src,
  name,
  size = 48,
  className,
}: {
  src?: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .replace(/\{TODO[^}]*\}/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("") || "A";

  const dim = { width: size, height: size };

  if (src && !src.startsWith("{")) {
    return (
      <Image
        src={asset(src)}
        alt={name}
        width={size}
        height={size}
        className={cn("rounded-full object-cover ring-2 ring-white", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={name}
      style={dim}
      className={cn(
        "rounded-full flex items-center justify-center font-semibold text-white gradient-brand ring-2 ring-white",
        className,
      )}
    >
      <span style={{ fontSize: size * 0.36 }}>{initials}</span>
    </div>
  );
}
