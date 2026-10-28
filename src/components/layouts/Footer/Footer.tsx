import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import { Instagram, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.scss";
import { Link } from "../../../i18n/navigation";
import { services } from "../../../data/services";
import { BRAND, EMAIL, LEGAL, PERSON, SOCIALS } from "../../../lib/site";

const cx = classNames.bind(styles);

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className={cx("footer")}>
      <div className={cx("footer__inner")}>
        <div className={cx("footer__brand")}>
          <p className={cx("footer__name")}>{BRAND}</p>
          <p>{t("baseline")}</p>
          <p className={cx("footer__area")}>{t("area")}</p>
          <div className={cx("footer__socials")}>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram HBLABSTUDIO">
              <Instagram size={20} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${PERSON}`}>
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <nav aria-label={t("services")}>
          <p className={cx("footer__heading")}>{t("services")}</p>
          <p className={cx("footer__intro")}>{t("servicesIntro")}</p>
          <ul className={cx("footer__links")}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} locale="fr">
                  {t(`serviceLinks.${s.slug}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={cx("footer__copy")}>
        <p>
          © {new Date().getFullYear()} {BRAND} — {PERSON}, EI · SIRET {LEGAL.siret} · TVA {LEGAL.vat}
        </p>
        <Link href="/mentions-legales" locale="fr">
          {t("legal")}
        </Link>
      </div>
    </footer>
  );
};
