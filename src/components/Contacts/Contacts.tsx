"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";
import { useTranslations } from "next-intl";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

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

        <motion.div
          className={cx("contact__buttons")}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        >
          <a
            href="mailto:myungjae84@gmail.com"
            className={cx("contact__btn", "contact__btn--primary")}
          >
            <Mail size={18} />
            {t("email")}
          </a>

          <a
            href="https://www.linkedin.com/in/beno%C3%AEt-havet-708752154/"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("contact__btn")}
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://www.malt.fr/profile/benoitmyungjaehavet"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("contact__btn")}
          >
            <ExternalLink size={18} />
            Malt
          </a>
        </motion.div>

        <div className={cx("contact__glow")} aria-hidden />
      </div>
    </section>
  );
};

export default Contacts;
