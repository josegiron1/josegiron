import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff4500",
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "Verdana, Arial, Helvetica, sans-serif",
        }}
      >
        JG
      </div>
    ),
    size,
  );
}
