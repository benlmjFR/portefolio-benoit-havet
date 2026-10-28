import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import classNames from "classnames/bind";
import styles from "./ServicePage.module.scss";
import { Head } from "../../../components/layouts/Head/Head";
import { Footer } from "../../../components/layouts/Footer/Footer";
import { Link } from "../../../i18n/navigation";
import { getService, services } from "../../../data/services";
import { BRAND, SITE_URL, SOCIALS, quoteMailto } from "../../../lib/site";

const cx = classNames.bind(styles);

type tParamsSlug = Promise<{ locale: string; slug: string }>;

// Service landing pages only exist in French (target market: Hauts-de-France / France).
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ locale: "fr", slug: s.slug }));
}

export async function generateMetadata(props: {
  params: tParamsSlug;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  const url = `${SITE_URL}/fr/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: BRAND,
      title: `${service.metaTitle} | ${BRAND}`,
      description: service.metaDescription,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage(props: { params: tParamsSlug }) {
  const { slug, locale } = await props.params;
  const service = getService(slug);
  if (locale !== "fr" || !service) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const url = `${SITE_URL}/fr/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.h1,
        description: service.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#studio` },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Hauts-de-France" },
          { "@type": "Country", name: "France" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: BRAND, item: `${SITE_URL}/fr` },
          { "@type": "ListItem", position: 2, name: service.metaTitle, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Head />
      <main className={cx("service")}>
        <nav aria-label="Fil d'Ariane" className={cx("service__breadcrumb")}>
          <Link href="/">{BRAND}</Link> / <span>{service.metaTitle}</span>
        </nav>

        <h1 className={cx("service__title")}>{service.h1}</h1>
        <p className={cx("service__intro")}>{service.intro}</p>

        <a
          href={quoteMailto(t("Contacts.quoteSubject"), t("Contacts.quoteBody"))}
          className={cx("service__cta")}
        >
          {t("Contacts.quote")}
        </a>

        <section className={cx("service__block")}>
          <h2>{t("Footer.audience")}</h2>
          <p>{service.audience}</p>
        </section>

        <section className={cx("service__block")}>
          <h2>{t("Footer.deliverables")}</h2>
          <ul>
            {service.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>

        <section className={cx("service__block")}>
          <h2>{t("Footer.stack")}</h2>
          <ul className={cx("service__pills")}>
            {service.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className={cx("service__block")}>
          <h2>{t("Footer.faq")}</h2>
          {service.faq.map((f) => (
            <details key={f.q} className={cx("service__faq")}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        <section className={cx("service__block", "service__block--cta")}>
          <h2>{t("Footer.ctaTitle")}</h2>
          <p>{t("Footer.ctaText")}</p>
          <div className={cx("service__actions")}>
            <a
              href={quoteMailto(t("Contacts.quoteSubject"), t("Contacts.quoteBody"))}
              className={cx("service__cta")}
            >
              {t("Contacts.quote")}
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className={cx("service__ghost")}>
              LinkedIn
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className={cx("service__ghost")}>
              Instagram @hblabstudio
            </a>
          </div>
        </section>

        <section className={cx("service__block")}>
          <h2>Autres services {BRAND}</h2>
          <ul>
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`}>{s.metaTitle}</Link>
                </li>
              ))}
          </ul>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
