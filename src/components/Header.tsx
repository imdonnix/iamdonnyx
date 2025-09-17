import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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

export const Header: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Nav>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>Donny</Logo>
        </a>
        <Menu>
          <a href="#services" onClick={(e) => handleScroll(e, "#services")}>Services</a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>Portfolio</a>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a>
        </Menu>
      </Nav>
    </>
  );
};
