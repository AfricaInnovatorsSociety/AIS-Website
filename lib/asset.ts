/**
 * Prefix a path under public/ with the site's basePath.
 *
 * When deploying to GitHub Pages at https://owner.github.io/<repo>/, we need
 * every reference to a public/ asset to be prefixed with `/<repo>`. Next.js
 * does this automatically for routes and `_next/*` chunks, but with
 * `images.unoptimized: true` it does NOT auto-prefix `<img src>` for assets
 * under public/. This helper bridges that gap.
 *
 * Pass-throughs:
 *   - Empty / undefined values are returned untouched
 *   - Absolute URLs (http://, https://, //) are returned untouched
 *   - Data URIs are returned untouched
 *   - In dev (no BASE_PATH set), the path is returned untouched
 *
 * Examples:
 *   asset("/ais-logo.png")                  -> "/ais-website/ais-logo.png"  (in prod)
 *   asset("/ais-logo.png")                  -> "/ais-logo.png"              (in dev)
 *   asset("https://cdn.example.com/x.png")  -> unchanged
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string | undefined | null): string {
  if (!path) return "";
  if (/^(https?:)?\/\//i.test(path)) return path;
  if (path.startsWith("data:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
