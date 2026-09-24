import { ImageResponse } from "next/og";
export const alt = "DevSoftWeb — Websites en applicaties voor uw bedrijf";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7f9f8",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#0f766e", fontSize: 36, fontWeight: 700 }}>
        DevSoftWeb
      </div>
      <div
        style={{
          color: "#0f172a",
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.1,
        }}
      >
        Een website die past bij uw bedrijf.
      </div>
      <div style={{ color: "#475569", fontSize: 26 }}>
        Websites · Applicaties · Onderhoud
      </div>
    </div>,
    size,
  );
}
