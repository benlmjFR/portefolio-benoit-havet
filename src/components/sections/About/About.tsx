"use client";

import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
};

type StackGroup = {
  title: string;
  items: string[];
};

export const About = () => {
  const t = useTranslations("About");
  const experience = t.raw("experience") as Experience[];
  const stack = t.raw("stack") as StackGroup[];

  return (
    <section className={cx("about")} id="about" aria-labelledby="about-title">
      <motion.div
        className={cx("about__card")}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className={cx("about__years")}>{t("years")}</p>
        <h2 id="about-title" className={cx("about__title")}>
          {t("title")}
        </h2>
        <p className={cx("about__text")}>{t("description")}</p>

        <h3 className={cx("about__subtitle")}>{t("experienceTitle")}</h3>
        <ol className={cx("about__timeline")}>
          {experience.map((xp) => (
            <li key={`${xp.company}-${xp.role}`} className={cx("about__xp")}>
              <p className={cx("about__period")}>{xp.period}</p>
              <h4 className={cx("about__role")}>
                {xp.role} <span className={cx("about__company")}>· {xp.company}</span>
              </h4>
              <p className={cx("about__xp-text")}>{xp.description}</p>
            </li>
          ))}
        </ol>

        <h3 className={cx("about__subtitle")}>{t("stackTitle")}</h3>
        <div className={cx("about__stack")}>
          {stack.map((group) => (
            <div key={group.title} className={cx("about__group")}>
              <p className={cx("about__group-title")}>{group.title}</p>
              <ul className={cx("about__badges")}>
                {group.items.map((item) => (
                  <li key={item} className={cx("about__badge")}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
