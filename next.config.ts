import type { NextConfig } from "next";

/**
 * BASE_PATH and ASSET_PREFIX are set by the GitHub Actions workflow when deploying
 * to GitHub Pages (e.g. BASE_PATH=/ais-website). They're empty in local dev so
 * everything works at http://localhost:3000.
 *
 * If you ever migrate to Vercel or a custom root domain, just don't set these
 * env vars and the site will serve at the root path again.
 */
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Static-only export so the site can be hosted on GitHub Pages.
  output: "export",

  // Trailing slashes make GitHub Pages routing predictable
  // (e.g. /about/ -> /about/index.html, no surprises).
  trailingSlash: true,

  // GitHub Pages can't run the Next image optimizer.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },

  basePath,
  assetPrefix: basePath || undefined,

  // Make the basePath available to the client at runtime so we can prefix
  // any non-Next.js asset references (rare, but useful as an escape hatch).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
