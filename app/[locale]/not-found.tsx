import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale } from "@/lib/site";

export default function NotFound() {
  const messages = getDictionary(defaultLocale);

  return (
    <main id="content" className="flex-1 px-2 py-4">
      <h1 className="text-[16px] font-normal">{messages.notFound.title}</h1>
      <p className="tagline mt-2">{messages.notFound.body}</p>
      <p className="mt-3">
        <Link href={`/${defaultLocale}`}>{messages.notFound.cta}</Link>
      </p>
    </main>
  );
}
