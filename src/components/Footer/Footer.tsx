import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { useTranslations } from "../../utils/translations/translations";
import "./Footer.scss";

export const Footer: React.FC = () => {
  const { t } = useTranslations();

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <p className="footer-built">
          Built with <span className="footer-tech">React</span>
          {" + "}
          <span className="footer-tech">TypeScript</span>
        </p>

        <div className="social-container">
          <a
            href="https://github.com/imdonnix"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link github"
            aria-label="GitHub"
          >
            <GitHub sx={{ fontSize: 18 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/donn-darryl-dimayuga-370929150"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link linkedin"
            aria-label="LinkedIn"
          >
            <LinkedIn sx={{ fontSize: 18 }} />
          </a>
          <a
            href="https://twitter.com/imdonnyxx"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link twitter"
            aria-label="Twitter"
          >
            <Twitter sx={{ fontSize: 18 }} />
          </a>
          <a
            href="https://instagram.com/imdonnyx"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link instagram"
            aria-label="Instagram"
          >
            <Instagram sx={{ fontSize: 18 }} />
          </a>
          <a
            href="https://facebook.com/imdonnyx"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link facebook"
            aria-label="Facebook"
          >
            <Facebook sx={{ fontSize: 18 }} />
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Donny. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
