import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "Insights, playbooks, and lessons from the AIS community, written by members, mentors, and alumni.",
});

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
            {posts.map((post, i) => (
              <BlogCard key={post.slug} slug={post.slug} frontmatter={post.frontmatter} index={i} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
