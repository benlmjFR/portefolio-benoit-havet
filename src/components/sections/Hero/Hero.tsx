"use client";

import classNames from "classnames/bind";
import React, { useRef } from "react";
import styles from "./Hero.module.scss";
import { useTranslations } from "next-intl";
import { Contacts } from "../Contacts/Contacts";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

const titleContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const letterWrap = {
  hidden: {},
  show: {},
};

const letter = {
  hidden: { y: "120%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 800,
      damping: 36,
      mass: 0.6,
    },
  },
};

export const Hero = () => {
  const t = useTranslations("Hero");
  const sectionRef = useRef<HTMLElement | null>(null);

  const titleText = t("title");
  const subtitleText = t("subtitle");

  return (
    <section
      ref={sectionRef}
      className={cx("hero")}
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop")',
      }}
    >
      <div className={cx("hero__overlay")} />

      <div className={cx("hero__content")}>
        <motion.h1
          variants={titleContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className={cx("hero__title")}
        >
          {Array.from(titleText).map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              className={cx("hero__letterWrap")}
              variants={letterWrap}
            >
              <motion.span className={cx("hero__letter")} variants={letter}>
                {char === " " ? " " : char}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className={cx("hero__subtitle")}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.5,
          }}
        >
          {subtitleText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: 0.5 + index * 0.05,
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          className={cx("hero__tagline")}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {t("tagline")}
        </motion.p>

        <motion.div
          className={cx("hero__cta")}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <a href="#projects" className={cx("hero__cta-primary")}>
            {t("cta1")}
          </a>
          <a href="#contact" className={cx("hero__cta-secondary")}>
            {t("cta2")}
          </a>
        </motion.div>

        <Contacts />
      </div>
    </section>
  );
};
