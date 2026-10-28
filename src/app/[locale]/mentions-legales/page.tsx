import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import classNames from "classnames/bind";
import styles from "../[slug]/ServicePage.module.scss";
import { Head } from "../../../components/layouts/Head/Head";
import { Footer } from "../../../components/layouts/Footer/Footer";
import { Link } from "../../../i18n/navigation";
import { BRAND, EMAIL, LEGAL, PERSON, SITE_URL } from "../../../lib/site";

const cx = classNames.bind(styles);

type tParams = Promise<{ locale: string }>;

// Legal notice is French-only (French law, LCEN art. 6).
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "fr" }];
}

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${BRAND} — ${PERSON}, entrepreneur individuel.`,
  alternates: { canonical: `${SITE_URL}/fr/mentions-legales` },
};

export default async function LegalPage(props: { params: tParams }) {
  const { locale } = await props.params;
  if (locale !== "fr") notFound();
  setRequestLocale(locale);

  return (
    <>
      <Head />
      <main className={cx("service")}>
        <nav aria-label="Fil d'Ariane" className={cx("service__breadcrumb")}>
          <Link href="/">{BRAND}</Link> / <span>Mentions légales</span>
        </nav>

        <h1 className={cx("service__title")}>Mentions légales</h1>

        <section className={cx("service__block")}>
          <h2>Éditeur du site</h2>
          <ul>
            <li>
              {BRAND} — {LEGAL.legalName}
            </li>
            <li>{LEGAL.status}</li>
            <li>SIREN : {LEGAL.siren}</li>
            <li>SIRET (siège) : {LEGAL.siret}</li>
            <li>N° de TVA intracommunautaire : {LEGAL.vat}</li>
            <li>{LEGAL.registry}</li>
            <li>Adresse : {LEGAL.address}</li>
            <li>
              Email : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>Directeur de la publication : {PERSON}</li>
          </ul>
        </section>

        <section className={cx("service__block")}>
          <h2>Hébergement</h2>
          <p>{LEGAL.host}</p>
        </section>

        <section className={cx("service__block")}>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les contenus de ce site (textes, visuels, code) sont la propriété de {PERSON}, sauf
            mention contraire. Les projets réalisés pour des clients ou en agence sont présentés à
            titre illustratif ; les marques et logos restent la propriété de leurs détenteurs
            respectifs.
          </p>
        </section>

        <section className={cx("service__block")}>
          <h2>Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée via formulaire. Les emails reçus servent uniquement à
            répondre à votre demande. Conformément au RGPD, vous pouvez demander l&apos;accès, la
            rectification ou la suppression de vos données à <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
