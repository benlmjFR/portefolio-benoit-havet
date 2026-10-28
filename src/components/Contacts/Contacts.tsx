"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";
import { useTranslations } from "next-intl";
import { Mail, Linkedin, ExternalLink, Instagram, FileText } from "lucide-react";
import { EMAIL, SOCIALS, quoteMailto } from "../../lib/site";

const cx = classNames.bind(styles);

export const Contacts = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const t = useTranslations("Contacts");

  return (
    <section className={cx("contact")} id="contact">
      <div ref={ref} className={cx("contact__inner")}>
        <motion.h2
          className={cx("contact__title")}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {t("title")}
        </motion.h2>

        <p className={cx("contact__subtitle")}>{t("subtitle")}</p>

        <motion.div
          className={cx("contact__buttons")}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        >
          <a
            href={quoteMailto(t("quoteSubject"), t("quoteBody"))}
            className={cx("contact__btn", "contact__btn--primary")}
          >
            <FileText size={18} />
            {t("quote")}
          </a>

          <a href={`mailto:${EMAIL}`} className={cx("contact__btn")}>
            <Mail size={18} />
            {t("email")}
          </a>

          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cx("contact__btn")}
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={cx("contact__btn")}
          >
            <Instagram size={18} />
            @hblabstudio
          </a>

          <a
            href={SOCIALS.malt}
            target="_blank"
            rel="noopener noreferrer"
            className={cx("contact__btn")}
          >
            <ExternalLink size={18} />
            Malt
          </a>
        </motion.div>

        <p className={cx("contact__studio")}>{t("studio")}</p>

        <div className={cx("contact__glow")} aria-hidden />
      </div>
    </section>
  );
};

export default Contacts;
