"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { EventCard } from "./EventCard";
import { cn } from "@/lib/cn";
import type { EventFrontmatter, ContentEntry } from "@/lib/content";
import { CalendarOff } from "lucide-react";

type Tab = "upcoming" | "past";

export function EventsView({
  upcoming,
  past,
}: {
  upcoming: ContentEntry<EventFrontmatter>[];
  past: ContentEntry<EventFrontmatter>[];
}) {
  // Default tab is always "upcoming", when none are scheduled the empty
  // state invites visitors to switch to the Past archive.
  const [tab, setTab] = useState<Tab>("upcoming");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    [...upcoming, ...past].forEach((e) => (e.frontmatter.tags ?? []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [upcoming, past]);

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const source = tab === "upcoming" ? upcoming : past;
    if (!activeTag) return source;
    return source.filter((e) => (e.frontmatter.tags ?? []).includes(activeTag));
  }, [tab, activeTag, upcoming, past]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div
          role="tablist"
          aria-label="Event filter"
          className="inline-flex p-1 rounded-full bg-charcoal-100 self-start"
        >
          {(["upcoming", "past"] as const).map((id) => {
            const count = id === "upcoming" ? upcoming.length : past.length;
            const active = tab === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(id)}
                className={cn(
                  "relative px-5 py-2 text-sm font-semibold rounded-full transition-colors",
                  active ? "text-charcoal-900" : "text-charcoal-600 hover:text-charcoal-900",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="events-tab-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-[var(--shadow-soft)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center capitalize">
                  {id}
                  <span
                    className={cn(
                      "ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-[11px] font-bold",
                      id === "upcoming"
                        ? "bg-crimson-100 text-crimson-700"
                        : "bg-charcoal-200 text-charcoal-700",
                    )}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-full ring-1 ring-inset transition-colors",
                activeTag === null
                  ? "bg-crimson-700 text-white ring-crimson-700"
                  : "bg-white text-charcoal-600 ring-charcoal-200 hover:ring-crimson-200",
              )}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t === activeTag ? null : t)}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full ring-1 ring-inset capitalize transition-colors",
                  activeTag === t
                    ? "bg-crimson-700 text-white ring-crimson-700"
                    : "bg-white text-charcoal-600 ring-charcoal-200 hover:ring-crimson-200",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 rounded-2xl border border-dashed border-charcoal-200">
          <CalendarOff className="h-10 w-10 mx-auto text-charcoal-300" />
          <p className="mt-4 text-charcoal-500">
            {tab === "upcoming"
              ? "No upcoming events scheduled yet. Check back soon."
              : "No past events match this filter."}
          </p>
          {tab === "upcoming" && past.length > 0 && (
            <button
              onClick={() => setTab("past")}
              className="mt-4 text-sm font-semibold text-crimson-700 hover:text-crimson-800"
            >
              Browse the past events archive →
            </button>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e) => (
            <EventCard
              key={e.slug}
              slug={e.slug}
              frontmatter={e.frontmatter}
              variant={tab === "past" ? "past" : "default"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
