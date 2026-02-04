import React, { useState } from "react";
import { useTranslations } from "../../utils/translations/translations";
import { Language } from "@mui/icons-material";
import "./Header.scss";

export const Header: React.FC = () => {
  const { t, currentLanguage, setLanguage } = useTranslations();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLanguageChange = (lang: "en" | "ja") => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <nav>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo">{t.header.Donny}</div>
        </a>
        <div className="menu">
          <a href="#services" onClick={(e) => handleScroll(e, "#services")}>{t.header.services}</a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>{t.header.portfolio}</a>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")}>{t.header.about}</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>{t.header.contact}</a>
          <div className="language-toggle">
            <button
              className="language-button"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              aria-label="Toggle language"
            >
              <Language />
            </button>
            <div className={`language-dropdown ${isLanguageDropdownOpen ? "open" : "closed"}`}>
              <button
                className={`language-option ${currentLanguage === "en" ? "active" : ""}`}
                onClick={() => handleLanguageChange("en")}
              >
                English
              </button>
              <button
                className={`language-option ${currentLanguage === "ja" ? "active" : ""}`}
                onClick={() => handleLanguageChange("ja")}
              >
                日本語
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
