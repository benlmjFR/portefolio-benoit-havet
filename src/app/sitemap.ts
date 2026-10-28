import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";
import { services } from "../data/services";
import { SITE_URL } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l === "kr" ? "ko" : l, `${SITE_URL}/${l}`]),
  );

  const home = routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === "fr" ? 1 : 0.7,
    alternates: { languages },
  }));

  const landings = services.map((s) => ({
    url: `${SITE_URL}/fr/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const legal = {
    url: `${SITE_URL}/fr/mentions-legales`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  };

  return [...home, ...landings, legal];
}
