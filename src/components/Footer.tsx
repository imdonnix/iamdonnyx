import React from "react";
import styled from "styled-components";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import instagramIcon from "../assets/icons/instagram.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";

const Container = styled.footer`
  padding: 2rem 4rem;
  text-align: center;
  background-color: #111;
  color: #fff;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 15px;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: scale(1.15);
  }
`;

export const Footer: React.FC = () => (
  <Container>
    <p>&copy; {new Date().getFullYear()} Donny. All rights reserved.</p>

    <SocialContainer>
      <IconLink href="https://facebook.com/imdonnyx" target="_blank" rel="noopener noreferrer">
        <img src={""} alt="Facebook" />
      </IconLink>

      <IconLink href="https://twitter.com/imdonnyxx" target="_blank" rel="noopener noreferrer">
        <img src={""} alt="Twitter" />
      </IconLink>

      <IconLink href="https://instagram.com/imdonnyx" target="_blank" rel="noopener noreferrer">
        <img src={""} alt="Instagram" />
      </IconLink>

      <IconLink href="https://github.com/imdonnix" target="_blank" rel="noopener noreferrer">
        <img src={""} alt="GitHub" />
      </IconLink>

      <IconLink href="https://www.linkedin.com/in/donn-darryl-dimayuga-370929150" target="_blank" rel="noopener noreferrer">
        <img src={""} alt="LinkedIn" />
      </IconLink>
    </SocialContainer>
  </Container>
);

export default Footer;
