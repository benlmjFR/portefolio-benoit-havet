"use client";

import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CalendarDays, Mail } from "lucide-react";
import { CALENDLY_URL } from "../../../lib/site";
import styles from "./Availability.module.scss";

const cx = classNames.bind(styles);

const ROLE_KEYS = ["agency", "sprint", "fullstack", "remote", "paris"] as const;

export const Availability = () => {
  const t = useTranslations("Availability");

  return (
    <section className={cx("availability")} id="availability" aria-labelledby="availability-title">
      <motion.div
        className={cx("availability__card")}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className={cx("availability__status")}>
          <span className={cx("availability__dot")} aria-hidden />
          {t("status")}
        </p>

        <h2 id="availability-title" className={cx("availability__title")}>
          {t("title")}
        </h2>

        <p className={cx("availability__text")}>{t("text")}</p>

        <ul className={cx("availability__roles")}>
          {ROLE_KEYS.map((key) => (
            <li key={key} className={cx("availability__role")}>
              {t(`roles.${key}`)}
            </li>
          ))}
        </ul>

        <div className={cx("availability__actions")}>
          <a href="#quick-contact" className={cx("availability__cta")}>
            <Mail size={18} aria-hidden />
            {t("cta")}
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cx("availability__cta", "availability__cta--outline")}
          >
            <CalendarDays size={18} aria-hidden />
            {t("bookCta")}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Availability;
