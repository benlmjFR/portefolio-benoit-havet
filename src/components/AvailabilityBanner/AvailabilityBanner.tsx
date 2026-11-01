"use client";

import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "../../i18n/navigation";
import { CALENDLY_URL } from "../../lib/site";
import styles from "./AvailabilityBanner.module.scss";

const cx = classNames.bind(styles);

export const AvailabilityBanner = () => {
  const t = useTranslations("Availability");

  return (
    <div className={cx("banner")} role="status">
      <p className={cx("banner__text")}>
        <span>{t("banner")}</span>
      </p>
      <Link href="/#quick-contact" className={cx("banner__cta")}>
        {t("bannerCta")}
        <ArrowRight size={14} aria-hidden />
      </Link>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cx("banner__cta", "banner__cta--outline")}
      >
        <CalendarDays size={14} aria-hidden />
        {t("bannerBook")}
      </a>
    </div>
  );
};

export default AvailabilityBanner;
