import { isLocale, type Locale } from "@/lib/site";
import { en, type Messages } from "./en";
import { es } from "./es";

const dictionaries: Record<Locale, Messages> = {
  en,
  es,
};

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}

export type { Locale, Messages };
export { isLocale };
