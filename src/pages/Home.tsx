import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Services } from "../components/Services/Services";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { useTranslations } from "../utils/translations/translations";
import { KeyboardArrowUp } from "@mui/icons-material";

export const Home: React.FC = () => {
  const { t } = useTranslations();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            right: "1.5rem",
            bottom: "1.5rem",
            zIndex: 1000,
            background: "var(--bg-elevated)",
            color: "var(--accent)",
            border: "1px solid rgba(0, 217, 255, 0.28)",
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
            padding: 0,
          }}
          aria-label={t.home.scrollToTopLabel}
          onMouseEnter={(e) => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.transform = "translateY(-3px)";
            btn.style.boxShadow = "0 8px 22px rgba(0, 217, 255, 0.18)";
            btn.style.borderColor = "rgba(0, 217, 255, 0.55)";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.4)";
            btn.style.borderColor = "rgba(0, 217, 255, 0.28)";
          }}
        >
          <KeyboardArrowUp sx={{ fontSize: "1.2rem" }} />
        </button>
      )}
    </>
  );
};
