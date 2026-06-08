import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-charcoal-900" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3 text-charcoal-900" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-2 text-charcoal-900" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mt-4 text-charcoal-700 leading-relaxed text-pretty" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mt-4 mb-4 space-y-2 list-disc pl-6 text-charcoal-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mt-4 mb-4 space-y-2 list-decimal pl-6 text-charcoal-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed pl-1" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-4 border-crimson-700 bg-crimson-50/40 pl-5 py-3 italic text-charcoal-800"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ href = "#", children, ...props }) => {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-crimson-700 underline underline-offset-4 hover:text-crimson-800"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="text-crimson-700 underline underline-offset-4 hover:text-crimson-800"
        {...props}
      >
        {children}
      </Link>
    );
  },
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-charcoal-900" {...props}>
      {children}
    </strong>
  ),
  hr: () => <hr className="my-10 border-charcoal-100" />,
  code: ({ children, ...props }) => (
    <code className="px-1.5 py-0.5 rounded bg-charcoal-100 text-charcoal-800 text-[0.92em]" {...props}>
      {children}
    </code>
  ),
};
