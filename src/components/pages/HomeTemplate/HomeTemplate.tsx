"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Hero } from "../../sections/Hero/Hero";
import { Head } from "../../layouts/Head/Head";
import Skills from "../../sections/Skills/Skills";
import TechBanner from "../../TechBanner/TechBanner";
import CvOverlay from "../../CVOverlay/CvOverlay";
import { AnimatedThumbnails } from "../../AnimatedThumbnails/AnimatedThumbnails";
import { payload } from "../../Cards/Cards";
import Contacts from "../../Contacts/Contacts";

const HomeTemplate = () => {
  const t = useTranslations("Cards");

  const translatedCards = payload.cards.map((card, i) => ({
    ...card,
    description: t(`${i}.description`),
  }));

  return (
    <>
      <Head />
      <main>
        <Hero />
        <CvOverlay />
        <TechBanner />
        <Skills />
        <AnimatedThumbnails cards={translatedCards} />
        <Contacts />
      </main>
    </>
  );
};

export default HomeTemplate;
