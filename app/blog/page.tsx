import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllPosts } from "@/lib/content";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "Insights, playbooks, and lessons from the AIS community — written by members, mentors, and alumni.",
});

function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Lessons from the people building it."
        description="Playbooks, opinion pieces, and field notes from AIS members, alumni, and mentors. No fluff. Just what works."
      />

      <Section className="!pt-4">
        {posts.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-dashed border-charcoal-200">
            <p className="text-charcoal-500">New posts are being written. Check back soon.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="h-full overflow-hidden hover:border-crimson-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] transition-all">
                  <CardBody className="!p-7 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-xs text-charcoal-500">
                      <CalendarDays className="h-3.5 w-3.5" />
                      <time>{formatPostDate(post.frontmatter.date)}</time>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-crimson-700 transition-colors line-clamp-2">
                      {post.frontmatter.title}
                    </h3>
                    <p className="mt-3 text-sm text-charcoal-600 leading-relaxed flex-1 line-clamp-3">
                      {post.frontmatter.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div className="flex gap-1.5 flex-wrap">
                        {post.frontmatter.tags?.slice(0, 2).map((t) => (
                          <Badge key={t} tone="outline" className="capitalize">{t}</Badge>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-crimson-700 shrink-0">
                        Read
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-charcoal-100 text-xs text-charcoal-500">
                      By <span className="font-semibold text-charcoal-700">{post.frontmatter.author}</span>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
