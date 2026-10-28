// Single source of truth for SEO / brand / contact data.
// Set NEXT_PUBLIC_SITE_URL once a custom domain (ex: https://hblabstudio.fr) is plugged in.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portefolio-benoit-havet.vercel.app"
).replace(/\/$/, "");

export const BRAND = "HBLABSTUDIO";
export const PERSON = "Benoît Havet";
export const EMAIL = "myungjae84@gmail.com";

export const SOCIALS = {
  instagram: "https://www.instagram.com/hblabstudio/",
  linkedin: "https://www.linkedin.com/in/beno%C3%AEt-havet-708752154/",
  malt: "https://www.malt.fr/profile/benoitmyungjaehavet",
  github: "https://github.com/benlmjFR",
};

export const AREA_SERVED = {
  region: "Hauts-de-France",
  cities: [
    "Lille",
    "Roubaix",
    "Tourcoing",
    "Villeneuve-d'Ascq",
    "Lens",
    "Arras",
    "Douai",
    "Valenciennes",
    "Dunkerque",
    "Calais",
    "Amiens",
    "Beauvais",
    "Compiègne",
  ],
  country: "France",
};

export const OG_LOCALES: Record<string, string> = {
  fr: "fr_FR",
  en: "en_US",
  kr: "ko_KR",
};

export const quoteMailto = (subject: string, body: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
