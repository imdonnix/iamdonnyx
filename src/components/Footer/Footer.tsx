import React from "react";
import { Facebook, Twitter, Instagram, GitHub, LinkedIn } from "@mui/icons-material";
import { useTranslations } from "../../utils/translations/translations";
import "./Footer.scss";

export const Footer: React.FC = () => {
  const { t } = useTranslations();

  return (
    <footer className="footer-container">
      <p>
        &copy; {new Date().getFullYear()} Donny. {t.footer.copyright}
      </p>

      <div className="social-container">
        <a
          href="https://facebook.com/imdonnyx"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link facebook"
        >
          <Facebook sx={{ fontSize: 24 }} />
        </a>

        <a
          href="https://twitter.com/imdonnyxx"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link twitter"
        >
          <Twitter sx={{ fontSize: 24 }} />
        </a>

        <a
          href="https://instagram.com/imdonnyx"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link instagram"
        >
          <Instagram sx={{ fontSize: 24 }} />
        </a>

        <a
          href="https://github.com/imdonnix"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link github"
        >
          <GitHub sx={{ fontSize: 24 }} />
        </a>

        <a
          href="https://www.linkedin.com/in/donn-darryl-dimayuga-370929150"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link linkedin"
        >
          <LinkedIn sx={{ fontSize: 24 }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
