import React from "react";
import { useTranslations } from "../../utils/translations/translations";
import "./Hero.scss";

export const Hero: React.FC = () => {
  const { t } = useTranslations();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <p className="hero-eyebrow">Hello, world!</p>
      <h1 className="hero-title">
        {t.hero.intro} <span className="code-word">{t.hero.codeWord}</span>{" "}
        <span className="artist-word">{t.hero.artistWord}</span>.
      </h1>
      <p className="hero-subtitle">{t.hero.description}</p>
      <div className="hero-cta">
        <a
          href="#portfolio"
          className="hero-btn-primary"
          onClick={(e) => scrollTo(e, "#portfolio")}
        >
          View Work
        </a>
        <a
          href="#contact"
          className="hero-btn-secondary"
          onClick={(e) => scrollTo(e, "#contact")}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};
