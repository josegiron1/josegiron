import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, isLocale } from "@/lib/i18n";
import { locales } from "@/lib/site";
import "../globals.css";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export const viewport: Viewport = {
  themeColor: "#cee3f8",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const messages = getDictionary(locale);
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      locale: locale === "es" ? "es_PR" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getDictionary(locale);

  return (
    <html lang={locale} className="h-full">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[#5f99cf] focus:px-2 focus:py-1 focus:text-white"
        >
          {messages.skip}
        </a>
        <SiteHeader locale={locale} messages={messages} />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter locale={locale} messages={messages} />
      </body>
    </html>
  );
}
