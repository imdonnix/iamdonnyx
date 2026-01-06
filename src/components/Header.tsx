import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useTranslations } from "../utils/translations/translations";
import { Language } from "@mui/icons-material";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;

    &:hover {
      color: #0070f3;
    }
  }
`;

const LanguageToggle = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  transition: color 0.2s ease;

  &:hover {
    color: #0070f3;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  min-width: 150px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1000;
`;

const LanguageOption = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: ${(props) => (props.isActive ? "#f0f0f0" : "transparent")};
  cursor: pointer;
  text-align: left;
  color: inherit;
  transition: background 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

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
    <>
      <GlobalStyle />
      <Nav>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>{t.header.Donny}</Logo>
        </a>
        <Menu>
          <a href="#services" onClick={(e) => handleScroll(e, "#services")}>{t.header.services}</a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>{t.header.portfolio}</a>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")}>{t.header.about}</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>{t.header.contact}</a>
          <LanguageToggle>
            <LanguageButton
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              aria-label="Toggle language"
            >
              <Language />
            </LanguageButton>
            <LanguageDropdown isOpen={isLanguageDropdownOpen}>
              <LanguageOption
                isActive={currentLanguage === "en"}
                onClick={() => handleLanguageChange("en")}
              >
                English
              </LanguageOption>
              <LanguageOption
                isActive={currentLanguage === "ja"}
                onClick={() => handleLanguageChange("ja")}
              >
                日本語
              </LanguageOption>
            </LanguageDropdown>
          </LanguageToggle>
        </Menu>
      </Nav>
    </>
  );
};
