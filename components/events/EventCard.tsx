import Link from "next/link";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatEventDate, formatEventTime } from "@/lib/format";
import type { EventFrontmatter } from "@/lib/content";

export function EventCard({
  slug,
  frontmatter,
  variant = "default",
}: {
  slug: string;
  frontmatter: EventFrontmatter;
  variant?: "default" | "past";
}) {
  return (
    <Link href={`/events/${slug}`} className="group block">
      <Card className="overflow-hidden h-full hover:border-crimson-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] transition-all">
        <div className="relative h-44 gradient-brand">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="text-white text-2xl font-bold text-center leading-tight font-[var(--font-display)] line-clamp-3">
              {frontmatter.title}
            </p>
          </div>
          {variant === "past" && (
            <div className="absolute top-3 right-3">
              <Badge tone="charcoal" className="!bg-charcoal-950/80 !text-white !ring-white/10">
                Past event
              </Badge>
            </div>
          )}
        </div>
        <CardBody>
          <div className="flex items-center gap-4 text-xs text-charcoal-500 mb-3">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatEventDate(frontmatter.date)}
            </span>
            {formatEventTime(frontmatter.date) && (
              <span>{formatEventTime(frontmatter.date)}</span>
            )}
          </div>
          <h3 className="font-bold text-lg text-charcoal-900 group-hover:text-crimson-700 transition-colors line-clamp-2">
            {frontmatter.title}
          </h3>
          <p className="mt-2 text-sm text-charcoal-600 line-clamp-2 leading-relaxed">
            {frontmatter.description}
          </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-500 truncate">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{frontmatter.location}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-crimson-700 shrink-0">
              View
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
