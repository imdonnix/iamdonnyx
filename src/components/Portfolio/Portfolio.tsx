import React, { useState } from "react";
import { useTranslations } from "../../utils/translations/translations";
import "./Portfolio.scss";

type Project = {
  img: string;
  alt: string;
  fallback: string;
  title: string;
};

const projects: Project[] = [
  {
    img: require("../../pictures/NOAH.JPG"),
    alt: "NOAH",
    fallback: "https://via.placeholder.com/400x240?text=NOAH",
    title: "NOAH Business Applications",
  },
  {
    img: require("../../pictures/ImageNotAvailable.png"),
    alt: "IRG",
    fallback: "https://via.placeholder.com/400x240?text=IRG",
    title: "IRG — Accenture",
  },
  {
    img: require("../../pictures/ImageNotAvailable.png"),
    alt: "GPHLiteChronos",
    fallback: "https://via.placeholder.com/400x240?text=GPH+Lite+Chronos",
    title: "GPH Lite — Chronos — Accenture",
  },
  {
    img: require("../../pictures/CALTEXGO.JPG"),
    alt: "CaltexGO",
    fallback: "https://via.placeholder.com/400x240?text=Caltex+GO",
    title: "Chevron Corporation — Accenture",
  },
  {
    img: require("../../pictures/GenAI.JPG"),
    alt: "GenWizUni",
    fallback: "https://via.placeholder.com/400x240?text=GenWizard+Uni",
    title: "GenWizard University — Accenture",
  },
  {
    img: require("../../pictures/Global Automation Website.png"),
    alt: "Global Automation Website",
    fallback: "https://via.placeholder.com/400x240?text=Global+Automation",
    title: "Global Automation Website",
  },
];

const Modal: React.FC<{
  open: boolean;
  image: string;
  alt: string;
  title: string;
  onClose: () => void;
}> = ({ open, image, alt, title, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Close modal"
        >
          ✕
        </button>
        <img src={image} alt={alt} className="modal-image" />
        <p className="modal-title">{title}</p>
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const { t } = useTranslations();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleCardClick = (img: string, alt: string, title: string) => {
    setModalImg(img);
    setModalAlt(alt);
    setModalOpen(true);
    setModalTitle(title);
  };

  const handleImgError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    fallback: string,
  ) => {
    e.currentTarget.src = fallback;
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-inner">
        <span className="section-label">Selected Work</span>
        <h2 className="portfolio-title">{t.portfolio.title}</h2>
        <div className="portfolio-grid">
          {projects.map((project, idx) => (
            <button
              key={idx}
              className="project-card"
              onClick={() =>
                handleCardClick(project.img, project.alt, project.title)
              }
              aria-label={`View ${project.title}`}
            >
              <div className="project-img-wrap">
                <img
                  src={project.img}
                  alt={project.alt}
                  onError={(e) => handleImgError(e, project.fallback)}
                />
                <div className="project-overlay">
                  <span className="project-view-label">View ↗</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Modal
        open={modalOpen}
        image={modalImg}
        alt={modalAlt}
        title={modalTitle}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
