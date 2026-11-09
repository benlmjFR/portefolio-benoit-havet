import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import "../../styles/globals.scss";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { customFont, inter } from "../fonts";
import { routing } from "../../i18n/routing";
import { ThemeProvider } from 'next-themes';
import { Metadata } from "next";
import {
  AREA_SERVED,
  BRAND,
  EMAIL,
  LEGAL,
  OG_LOCALES,
  PERSON,
  SITE_URL,
  SOCIALS,
} from "../../lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const url = `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s | ${BRAND}`,
    },
    description: t("description"),
    applicationName: BRAND,
    authors: [{ name: PERSON, url: SITE_URL }],
    creator: PERSON,
    publisher: BRAND,
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale],
      url,
      title: t("title"),
      description: t("description"),
      siteName: BRAND,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: t("ogAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
        ko: `${SITE_URL}/kr`,
        "x-default": `${SITE_URL}/fr`,
      },
    },
    keywords: [
      "Senior Full-Stack Developer", "Tech Lead", "Lead Developer",
      "React", "Next.js", "App Router", "Server Components", "TypeScript",
      "Node.js", "NestJS", "PostgreSQL", "Prisma", "GraphQL", "CI/CD",
      "Docker", "AWS", "Vercel", "Design System", "Storybook", "Tailwind CSS",
      "a11y", "Core Web Vitals", "LLM", "RAG", "MCP", "Claude API",
      "freelance", "Paris", "Île-de-France", BRAND,
    ],
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    // Paste the token from Google Search Console / Bing Webmaster Tools here.
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#studio`,
      name: BRAND,
      legalName: `${BRAND} — ${LEGAL.legalName} (EI)`,
      taxID: LEGAL.siret.replace(/\s/g, ""),
      vatID: LEGAL.vat,
      url: SITE_URL,
      logo: `${SITE_URL}/images/bhash_logo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      email: EMAIL,
      description:
        "Studio de développement web : création et refonte de sites, CMS headless, applications React / Next.js, API Node.js / SQL et intégration IA.",
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: [
        { "@type": "AdministrativeArea", name: AREA_SERVED.region },
        ...AREA_SERVED.cities.map((name) => ({ "@type": "City", name })),
        { "@type": "Country", name: AREA_SERVED.country },
      ],
      knowsAbout: [
        "React", "Next.js", "TypeScript", "Node.js", "NestJS",
        "PostgreSQL", "Prisma", "REST", "GraphQL", "CI/CD", "Docker", "AWS",
        "Vercel", "CMS headless", "Storyblok", "Contentful", "SEO technique",
        "LLM", "RAG", "MCP", "Claude API",
      ],
      priceRange: "€€",
      sameAs: [SOCIALS.instagram, SOCIALS.linkedin, SOCIALS.malt],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON,
      jobTitle: "Senior Full-Stack Developer & Tech Lead – React · Next.js · NestJS · IA",
      description:
        "Senior Full-Stack Developer & Tech Lead, 7 ans d'expérience (startup, Razorfish – Publicis, freelance HBLabstudio). Paris / IDF – remote immédiat, hybride dès le 8 décembre 2026.",
      knowsAbout: [
        "Senior Full-Stack Developer", "Lead Developer", "Tech Lead",
        "React", "Next.js", "App Router", "Server Components", "TypeScript",
        "Node.js", "NestJS", "PostgreSQL", "Prisma", "REST", "GraphQL",
        "CI/CD", "Docker", "AWS", "Vercel", "Jest", "Cypress", "TDD",
        "Design System", "Storybook", "Tailwind CSS", "Atomic Design",
        "Accessibilité (a11y)", "Core Web Vitals", "SSO/OIDC",
        "LLM", "RAG", "Agents IA", "MCP", "Claude API",
        "Scrum/Agile", "Code Review", "Mentoring",
      ],
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      email: EMAIL,
      worksFor: { "@id": `${SITE_URL}/#studio` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      sameAs: [SOCIALS.linkedin, SOCIALS.github, SOCIALS.malt, SOCIALS.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND,
      publisher: { "@id": `${SITE_URL}/#studio` },
      inLanguage: ["fr-FR", "en", "ko"],
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale === "kr" ? "ko" : locale}
      className={`${customFont.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
