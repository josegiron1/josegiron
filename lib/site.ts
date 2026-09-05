export const site = {
  name: "Jose Giron",
  email: "gironjose15@gmail.com",
  github: "https://github.com/josegiron1",
  linkedin: "https://www.linkedin.com/in/gironjose5",
} as const;

export const liding = {
  href: "https://liding.gg",
  domain: "liding.gg",
  poster: {
    src: "/liding-poster.webp",
    width: 380,
    height: 754,
  },
  thumb: {
    src: "/liding-logo.png",
    width: 70,
    height: 70,
  },
  stack: ["Go", "TypeScript", "Expo", "Postgres"] as const,
} as const;

export const qrStudio = {
  href: "https://qrcode.luminarapps.com/",
  domain: "qrcode.luminarapps.com",
  poster: {
    src: "/qr-studio-icon.png",
    width: 640,
    height: 640,
  },
  thumb: {
    src: "/qr-studio-icon.png",
    width: 70,
    height: 70,
  },
  stack: ["TypeScript", "React", "Hono", "Postgres"] as const,
} as const;

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
