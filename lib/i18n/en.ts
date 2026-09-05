export const en = {
  meta: {
    title: "Jose Giron, Software Engineer",
    description:
      "Just a simple guy working as an engineer. Trying to learn and improve more every day.",
    ogAlt: "Jose Giron, software engineer",
  },
  skip: "Skip to content",
  nav: {
    work: "work",
    about: "about",
    contact: "contact",
    front: "home",
    home: "Jose Giron, home",
    primary: "Primary",
    language: "Language",
    english: "English",
    spanish: "Spanish",
  },
  hero: {
    kicker: "Software engineer · Cabo Rojo",
    name: "Jose Giron",
    lede: "Just a simple guy working as an engineer. Trying to learn and improve more every day.",
  },
  work: {
    kicker: "Work",
    liding: {
      title: "Liding",
      tagline: "Fantasy basketball for the BSN.",
      body: "Liding is a fantasy platform built for Baloncesto Superior Nacional, the league people in Puerto Rico actually watch. Live stats, head-to-head matchups, private leagues with friends. We ran the full 2025 season in beta. 2026 is the public launch.",
      roleLabel: "What I work on",
      role: "Player screens, the BSN scoreboard, image performance, the web app, and the deploy pipeline.",
      cta: "Visit liding.gg",
      posterAlt:
        "Liding app showing a Puerto Rican basketball fantasy lineup on a phone",
    },
    qr: {
      title: "QR Code Studio",
      tagline: "QR codes people actually scan.",
      body: "A Luminar app I built so a restaurant, a shop, anyone can put a QR on a table and still change where it goes later. Menus, links, files. It tracks scans. People use it.",
      roleLabel: "What I work on",
      role: "The product itself: making the codes, the menus, the tracking, the thing that opens when you scan.",
      cta: "Open QR Code Studio",
      posterAlt: "QR Code Studio app icon",
    },
  },
  listing: {
    self: "self.jose",
  },
  sidebar: {
    submit: "send an email",
  },
  about: {
    kicker: "About",
    title: "That's me",
    p1: "I’m a software engineer living in Cabo Rojo. Father of two, with a beautiful wife. That’s the important part.",
    p2: "At RepeatMD I try to bring the most value I can: help the product grow, and make sure patients and everyone using the app have a good experience.",
    p3: "I also work on Liding, trying to make fantasy basketball feel right for Puerto Rico, and I built QR Code Studio, a Luminar app people actually use. That’s me for now.",
  },
  contact: {
    kicker: "Contact",
    title: "Say hello",
    body: "Email is the fastest way to reach me.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  notFound: {
    title: "Page not found",
    body: "That page doesn’t exist. Head back home.",
    cta: "Back home",
  },
  footer: {
    location: "Cabo Rojo, PR",
  },
} as const;

type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Messages = DeepString<typeof en>;
