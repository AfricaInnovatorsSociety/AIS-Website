import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Container";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Post not found" });
  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    path: `/blog/${slug}`,
  });
}

function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="container-page max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-500 hover:text-charcoal-900 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            {post.frontmatter.tags?.map((t) => (
              <Badge key={t} tone="outline" className="capitalize">{t}</Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.05]">
            {post.frontmatter.title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-charcoal-700 leading-relaxed">
            {post.frontmatter.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm text-charcoal-500">
            <span className="font-medium text-charcoal-700">{post.frontmatter.author}</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatPostDate(post.frontmatter.date)}
            </span>
          </div>
        </div>
      </header>

      <Section className="!pt-2 md:!pt-4">
        <div className="max-w-3xl mx-auto">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </Section>
    </article>
  );
}
