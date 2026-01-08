import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames/bind";
import styles from "./CvOverlay.module.scss";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const cx = classNames.bind(styles);

const CvOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cvUrl = "/CV_HAVET_BENOIT.pdf";
  const cvEnUrl = "/CV_HAVET_BENOIT_EN.pdf";

  const t = useTranslations("CvOverlay");

  const openButton = t("openButton");
  const downLoadButton = t("downLoadButton");

  const currentLocale = useLocale();

  const isFrench = currentLocale === "fr";
  const cvToUse = isFrench ? cvUrl : cvEnUrl;

  return (
    <>
      <motion.div
        className={cx("label")}
        onClick={() => setIsOpen(true)}
        whileHover={{ x: -5 }}
      >
        <span>{openButton}</span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cx("overlay")}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className={cx("header")}>
              <button
                className={cx("close")}
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
              >
                <X size={22} />
              </button>
              <a
                href={cvToUse}
                download
                className={cx("download")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {downLoadButton}
              </a>
            </div>

            <div className={cx("content")}>
              <iframe src={cvToUse} title="CV" className={cx("iframe")} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CvOverlay;
