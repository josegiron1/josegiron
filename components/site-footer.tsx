import type { Locale } from "@/lib/site";
import type { Messages } from "@/lib/i18n";
import { site } from "@/lib/site";

type SiteFooterProps = {
  locale: Locale;
  messages: Messages;
};

export function SiteFooter({ locale, messages }: SiteFooterProps) {
  const year = new Intl.DateTimeFormat(locale === "es" ? "es-PR" : "en-US", {
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="mt-4 border-t border-[#c0c0c0] bg-[#f0f0f0] px-2 py-3 text-[11px] text-[#555]">
      <p translate="no">{`© ${year} ${site.name}`}</p>
      <p translate="no">{messages.footer.location}</p>
    </footer>
  );
}
