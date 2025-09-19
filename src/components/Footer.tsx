import React from "react";
import styled from "styled-components";
import { Facebook, Twitter, Instagram, GitHub, LinkedIn } from '@mui/icons-material';

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

const IconLink = styled.a<{ platform?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 24px;

  &:hover {
    transform: scale(1.15);
    ${props => {
      switch (props.platform) {
        case 'facebook':
          return 'color: #1877F2;'; // Facebook blue
        case 'twitter':
          return 'color: #1DA1F2;'; // Twitter blue
        case 'instagram':
          return 'background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); color: white;';
        case 'github':
          return 'color: #6e5494;'; // GitHub purple
        case 'linkedin':
          return 'color: #0A66C2;'; // LinkedIn blue
        default:
          return 'color: white;';
      }
    }}
  }
`;

export const Footer: React.FC = () => (
  <Container>
    <p>&copy; {new Date().getFullYear()} Donny. All rights reserved.</p>

    <SocialContainer>
      <IconLink 
        href="https://facebook.com/imdonnyx" 
        target="_blank" 
        rel="noopener noreferrer"
        platform="facebook"
      >
        <Facebook sx={{ fontSize: 24 }} />
      </IconLink>

      <IconLink 
        href="https://twitter.com/imdonnyxx" 
        target="_blank" 
        rel="noopener noreferrer"
        platform="twitter"
      >
        <Twitter sx={{ fontSize: 24 }} />
      </IconLink>

      <IconLink 
        href="https://instagram.com/imdonnyx" 
        target="_blank" 
        rel="noopener noreferrer"
        platform="instagram"
      >
        <Instagram sx={{ fontSize: 24 }} />
      </IconLink>

      <IconLink 
        href="https://github.com/imdonnix" 
        target="_blank" 
        rel="noopener noreferrer"
        platform="github"
      >
        <GitHub sx={{ fontSize: 24 }} />
      </IconLink>

      <IconLink 
        href="https://www.linkedin.com/in/donn-darryl-dimayuga-370929150" 
        target="_blank" 
        rel="noopener noreferrer"
        platform="linkedin"
      >
        <LinkedIn sx={{ fontSize: 24 }} />
      </IconLink>
    </SocialContainer>
  </Container>
);

export default Footer;
