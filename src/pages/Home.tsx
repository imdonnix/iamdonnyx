import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
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
                        right: "2rem",
                        bottom: "2rem",
                        zIndex: 1000,
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "48px",
                        height: "48px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        cursor: "pointer",
                        transition: "transform 0.3s",
                        animation: "bounce 1s infinite"
                    }}
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
            <style>
                {`
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                `}
            </style>
        </>
    );
};
