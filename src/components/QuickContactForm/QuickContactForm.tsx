"use client";

import { FormEvent, useState } from "react";
import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { EMAIL, quoteMailto } from "../../lib/site";
import styles from "./QuickContactForm.module.scss";

const cx = classNames.bind(styles);

export const missionSubject = (client: string) =>
  `[Mission Freelance] Demande de dev - ${client}`;

export const QuickContactForm = () => {
  const t = useTranslations("QuickContact");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = quoteMailto(missionSubject(name), body);
    setSent(true);
  };

  return (
    <div className={cx("quick")} id="quick-contact">
      <h3 className={cx("quick__title")}>{t("title")}</h3>
      <p className={cx("quick__subtitle")}>{t("subtitle")}</p>

      <form className={cx("quick__form")} onSubmit={handleSubmit}>
        <div className={cx("quick__row")}>
          <label className={cx("quick__field")}>
            <span>{t("name")}</span>
            <input name="name" type="text" required autoComplete="name" placeholder={t("namePlaceholder")} />
          </label>
          <label className={cx("quick__field")}>
            <span>{t("email")}</span>
            <input name="email" type="email" required autoComplete="email" placeholder={t("emailPlaceholder")} />
          </label>
        </div>
        <label className={cx("quick__field")}>
          <span>{t("message")}</span>
          <textarea name="message" required rows={5} placeholder={t("messagePlaceholder")} />
        </label>

        <button type="submit" className={cx("quick__submit")}>
          <Send size={18} aria-hidden />
          {t("submit")}
        </button>

        <p className={cx("quick__hint")} aria-live="polite">
          {sent ? t("sent") : t("hint")}{" "}
          <a href={quoteMailto(missionSubject("[Nom du client]"), "")}>{EMAIL}</a>
        </p>
      </form>
    </div>
  );
};

export default QuickContactForm;
