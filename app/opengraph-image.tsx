import { ImageResponse } from "next/og";
import { profile } from "@/lib/site";

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview: the header rule and the headline, nothing else.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fafaf8",
          color: "#0d0d0d",
          padding: "56px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            paddingBottom: 22,
            borderBottom: "2px solid #0d0d0d",
          }}
        >
          <span style={{ fontWeight: 600 }}>{profile.name}</span>
          <span style={{ color: "#74746f" }}>{profile.role}</span>
        </div>
        <div style={{ display: "flex", marginTop: 110, fontSize: 76, lineHeight: 1.04, letterSpacing: -3, maxWidth: 1000 }}>
          {profile.headline}
        </div>
      </div>
    ),
    size,
  );
}
