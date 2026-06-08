import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-charcoal-100">
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center group" aria-label={`${siteConfig.name} home`}>
          <Logo variant="mark" className="h-10 w-auto sm:hidden transition-transform group-hover:scale-105" />
          <Logo variant="full" className="hidden sm:block h-9 md:h-10 w-auto transition-transform group-hover:scale-[1.02]" priority />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-charcoal-700 hover:text-crimson-700 hover:bg-crimson-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.forms.membership}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-crimson-700 hover:bg-crimson-800 text-white text-sm font-semibold px-4 py-2 transition-colors shadow-[var(--shadow-soft)]"
          >
            Join AIS
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
