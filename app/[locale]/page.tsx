import { notFound } from "next/navigation";
import { About, Contact } from "@/components/about";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";
import { SiteSidebar } from "@/components/site-sidebar";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getDictionary(locale);

  return (
    <div className="flex flex-1 flex-col gap-4 px-1.5 py-2 md:flex-row md:items-start">
      <main id="content" className="min-w-0 flex-1">
        <Hero messages={messages} />
        <FeaturedWork messages={messages} />
        <About messages={messages} />
        <Contact messages={messages} />
      </main>
      <SiteSidebar messages={messages} />
    </div>
  );
}
