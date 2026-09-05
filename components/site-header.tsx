"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/site";
import type { Messages } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  messages: Messages;
};

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const tabs = [
    { href: `/${locale}`, id: "", label: messages.nav.front },
    { href: "#work", id: "#work", label: messages.nav.work },
    { href: "#about", id: "#about", label: messages.nav.about },
    { href: "#contact", id: "#contact", label: messages.nav.contact },
  ] as const;

  return (
    <header>
      <div className="sr-strip flex items-center justify-between gap-3">
        <p>{messages.hero.kicker}</p>
        <div
          className="flex items-center gap-2"
          role="navigation"
          aria-label={messages.nav.language}
        >
          <Link
            href="/en"
            hrefLang="en"
            lang="en"
            aria-label={messages.nav.english}
            aria-current={locale === "en" ? "page" : undefined}
            className={locale === "en" ? "font-bold" : undefined}
          >
            en
          </Link>
          <span aria-hidden="true">|</span>
          <Link
            href="/es"
            hrefLang="es"
            lang="es"
            aria-label={messages.nav.spanish}
            aria-current={locale === "es" ? "page" : undefined}
            className={locale === "es" ? "font-bold" : undefined}
          >
            es
          </Link>
        </div>
      </div>
      <div className="old-header px-2 pt-1.5 pb-0">
        <div className="flex flex-wrap items-end gap-3">
          <Link
            href={`/${locale}`}
            className="old-logo"
            translate="no"
          >
            <span className="sr-only">{messages.nav.home}</span>
            <span aria-hidden="true">jose</span>
          </Link>
          <nav aria-label={messages.nav.primary}>
            <ul className="tabmenu">
              {tabs.map((tab) => {
                const selected = tab.id === "" ? hash === "" : hash === tab.id;
                return (
                  <li key={tab.href}>
                    {tab.id === "" ? (
                      <Link
                        href={tab.href}
                        aria-current={selected ? "true" : undefined}
                      >
                        {tab.label}
                      </Link>
                    ) : (
                      <a
                        href={tab.href}
                        aria-current={selected ? "true" : undefined}
                      >
                        {tab.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
