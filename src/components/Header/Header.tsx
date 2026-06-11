import React, { useState } from "react";
import { useTranslations } from "../../utils/translations/translations";
import { Language, Menu, Close } from "@mui/icons-material";
import "./Header.scss";

export const Header: React.FC = () => {
  const { t, currentLanguage, setLanguage } = useTranslations();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="logo">
            <span className="logo-bracket">&lt;</span>
            Donny
            <span className="logo-bracket"> /&gt;</span>
          </div>
        </a>
        <div className="menu">
          <a href="#services" onClick={(e) => handleScroll(e, "#services")}>
            {t.header.services}
          </a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>
            {t.header.portfolio}
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
            {t.header.about}
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
            {t.header.contact}
          </a>
          <div className="language-toggle">
            <button
              className="language-button"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              aria-label="Toggle language"
            >
              <Language />
            </button>
            <div
              className={`language-dropdown ${isLanguageDropdownOpen ? "open" : "closed"}`}
            >
              <button
                className={`language-option ${currentLanguage === "en" ? "active" : ""}`}
                onClick={() => handleLanguageChange("en")}
              >
                {t.header.english}
              </button>
              <button
                className={`language-option ${currentLanguage === "ja" ? "active" : ""}`}
                onClick={() => handleLanguageChange("ja")}
              >
                {t.header.japanese}
              </button>
            </div>
          </div>
        </div>
        <button
          className="hamburger-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <Close /> : <Menu />}
        </button>
      </nav>
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : "closed"}`}>
        <a
          href="#services"
          onClick={(e) => {
            handleScroll(e, "#services");
            closeMobileMenu();
          }}
        >
          {t.header.services}
        </a>
        <a
          href="#portfolio"
          onClick={(e) => {
            handleScroll(e, "#portfolio");
            closeMobileMenu();
          }}
        >
          {t.header.portfolio}
        </a>
        <a
          href="#about"
          onClick={(e) => {
            handleScroll(e, "#about");
            closeMobileMenu();
          }}
        >
          {t.header.about}
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            handleScroll(e, "#contact");
            closeMobileMenu();
          }}
        >
          {t.header.contact}
        </a>
        <div className="mobile-language-toggle">
          <button
            className={`language-option ${currentLanguage === "en" ? "active" : ""}`}
            onClick={() => {
              handleLanguageChange("en");
              closeMobileMenu();
            }}
          >
            {t.header.english}
          </button>
          <button
            className={`language-option ${currentLanguage === "ja" ? "active" : ""}`}
            onClick={() => {
              handleLanguageChange("ja");
              closeMobileMenu();
            }}
          >
            {t.header.japanese}
          </button>
        </div>
      </div>
    </header>
  );
};
