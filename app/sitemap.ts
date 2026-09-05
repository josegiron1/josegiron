import type { MetadataRoute } from "next";
import { locales } from "@/lib/site";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${base}/en`,
        es: `${base}/es`,
      },
    },
  }));
}
