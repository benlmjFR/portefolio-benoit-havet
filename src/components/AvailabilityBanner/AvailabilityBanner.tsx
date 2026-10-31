"use client";

import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "../../i18n/navigation";
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
    </div>
  );
};

export default AvailabilityBanner;
