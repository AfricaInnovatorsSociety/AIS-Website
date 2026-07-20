import type { NextConfig } from "next";

/**
 * Optional basePath for subdirectory hosts (e.g. legacy GitHub Pages).
 * Leave unset for Vercel / custom domain so the site serves from `/`.
 */
const basePath = process.env.BASE_PATH || "";
const isSubpathDeploy = Boolean(basePath);

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Static export only when deploying under a subdirectory (GitHub Pages).
  // On Vercel, omit this so SSR/ISR and Image Optimization work normally.
  ...(isSubpathDeploy ? { output: "export" as const, trailingSlash: true } : {}),

  images: {
    // GitHub Pages can't run the optimizer; Vercel can.
    unoptimized: isSubpathDeploy,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },

  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
