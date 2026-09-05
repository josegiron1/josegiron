import { ImageResponse } from "next/og";
import { getDictionary, isLocale } from "@/lib/i18n";

export const alt = "Jose Giron";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#eeeeee",
          color: "#000000",
          fontFamily: "Verdana, Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "#cee3f8",
            borderBottom: "1px solid #5f99cf",
            padding: "24px 48px",
          }}
        >
          <div
            style={{
              color: "#ff4500",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            jose
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "48px",
          }}
        >
          <div style={{ color: "#0000ff", fontSize: 40 }}>
            {messages.hero.name}
          </div>
          <div style={{ marginTop: 16, color: "#555555", fontSize: 28 }}>
            {messages.hero.lede}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
