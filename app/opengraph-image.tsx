import { ImageResponse } from "next/og";
import { profile } from "@/lib/site";

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview: the header rule and the opening statement, nothing else.
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
          <span style={{ color: "#74746f" }}>{profile.site.replace("https://", "")}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 76, fontSize: 84, fontWeight: 600, lineHeight: 1, letterSpacing: -3.5 }}>
          {profile.statement.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 32, color: "#4f4f4c", maxWidth: 900 }}>{profile.next}</div>
      </div>
    ),
    size,
  );
}
