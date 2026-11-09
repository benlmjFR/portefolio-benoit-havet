import React, { useRef, useState, useEffect } from "react";
import Skill from "./Skill/Skill";
import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const cx = classNames.bind(styles);

const skills = [
  {
    tags: ["LLM", "RAG", "AI Agents", "MCP", "Claude API", "Vector DB", "Prompt Engineering"],
    backgroundColor: "rgba(22, 14, 6, 0.50)",
    dynamicColor: "#FFFFFF",
  },
  {
    tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "REST", "GraphQL", "SSO/OIDC", "Docker", "AWS"],
    backgroundColor: "rgba(10, 8, 4, 0.58)",
    dynamicColor: "#FFFFFF",
  },
  {
    tags: ["React", "Next.js App Router", "Server Components", "TypeScript", "Tailwind CSS", "Core Web Vitals", "a11y", "Jest", "Cypress", "TDD"],
    backgroundColor: "rgba(20, 14, 4, 0.52)",
    dynamicColor: "#FFFFFF",
  },
  {
    tags: ["Design System", "Storybook", "Atomic Design", "UI/UX Design", "Prototyping", "Motion Design"],
    backgroundColor: "rgba(16, 10, 6, 0.55)",
    dynamicColor: "#FFFFFF",
  },
  {
    tags: ["Tech Lead", "Lead Developer", "Code Review", "Mentoring", "Scrum/Agile", "CI/CD", "Vercel", "Headless CMS"],
    backgroundColor: "rgba(12, 9, 5, 0.56)",
    dynamicColor: "#FFFFFF",
  },
];

const Skills = () => {
  const t = useTranslations("Skills");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const inputRange = skills.map((_, i) => i / (skills.length - 1));
  const outputRange = skills.map((s) => s.backgroundColor);
  const background = useTransform(scrollYProgress, inputRange, outputRange);

  const [dynamicColor, setDynamicColor] = useState(skills[0].dynamicColor);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const index = Math.floor(v * (skills.length - 0.00001) * 1.01);
      const current = skills[Math.min(index, skills.length - 1)];
      setDynamicColor(current.dynamicColor);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.section
      className={cx("skills")}
      ref={containerRef}
      style={{
        background,
        minHeight: "100vh",
        padding: "4rem 2rem",
        color: dynamicColor,
        transition: "color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      id="skills"
    >
      <ul className={cx("skills__list")}>
        {skills.map((skill, i) => (
          <Skill
            key={i}
            {...skill}
            dynamicColor={dynamicColor}
            title={t(`${i}.title`)}
            description={[
              t(`${i}.description1`),
              t(`${i}.description2`),
              t(`${i}.description3`),
            ]}
          />
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
