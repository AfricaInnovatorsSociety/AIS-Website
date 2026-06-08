import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)] focus-visible:ring-crimson-700 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson-700 text-white hover:bg-crimson-800 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)]",
  secondary:
    "bg-charcoal-900 text-white hover:bg-charcoal-800",
  ghost:
    "bg-transparent text-charcoal-800 hover:bg-charcoal-100",
  outline:
    "bg-transparent text-charcoal-900 border border-charcoal-300 hover:border-crimson-700 hover:text-crimson-700",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, withArrow } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if ("href" in props && props.href) {
    const isExternal = props.external ?? /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={cn(classes, "group")}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button className={cn(classes, "group")} {...rest}>
      {content}
    </button>
  );
}
