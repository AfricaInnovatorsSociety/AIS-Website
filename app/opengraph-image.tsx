import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site.config";

export const dynamic = "force-static";
export const alt = `${siteConfig.name}, ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #45040f 0%, #9c0f28 40%, #c41230 70%, #f59e0b 130%)",
          padding: "72px 80px",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,255,255,0.15)",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>
              {siteConfig.shortName}
            </div>
            <div
              style={{
                fontSize: 14,
                opacity: 0.85,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              {siteConfig.affiliation}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              maxWidth: 980,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 24,
              opacity: 0.9,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {`The student-led innovation society at ${siteConfig.affiliation}.`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
