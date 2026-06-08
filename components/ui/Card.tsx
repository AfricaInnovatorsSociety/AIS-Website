import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  as: As = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <As
      className={cn(
        "rounded-2xl bg-white border border-charcoal-100 shadow-[var(--shadow-soft)] transition-all",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function CardBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-6 md:p-7", className)}>{children}</div>;
}
