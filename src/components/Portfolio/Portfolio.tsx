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
        fallback: "https://via.placeholder.com/220x160?text=NOAH",
        title: "NOAH Business Applications",
    },
    {
        img: require("../../pictures/ImageNotAvailable.png"),
        alt: "IRG",
        fallback: "https://via.placeholder.com/220x160?text=IRG",
        title: "IRG - Accenture",
    },
    {
        img: require("../../pictures/ImageNotAvailable.png"),
        alt: "GPHLiteChronos",
        fallback: "https://via.placeholder.com/220x160?text=GPHLiteChronos",
        title: "GPH Lite - Chronos - Accenture",
    },
    {
        img: require("../../pictures/CALTEXGO.JPG"),
        alt: "CaltexGO",
        fallback: "https://via.placeholder.com/220x160?text=CaltexGO",
        title: "Chevron Corporation - Accenture",
    },
    {
        img: require("../../pictures/GenAI.JPG"),
        alt: "GenWizUni",
        fallback: "https://via.placeholder.com/220x160?text=GenWizUni",
        title: "GenWizard University - Accenture",
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
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h3>{title}</h3>
                <img src={image} alt={alt} className="modal-image" />
                <button
                    onClick={onClose}
                    className="close-button"
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "transparent",
                        color: "#333",
                        fontSize: "1.5rem",
                        padding: 0,
                        width: "2.5rem",
                        height: "2.5rem",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        lineHeight: 1,
                        transition: "background 0.2s, transform 0.2s",
                    }}
                    aria-label="Close modal"
                    onMouseOver={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "#eee";
                        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1) rotate(90deg)";
                    }}
                    onMouseOut={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.transform = "none";
                    }}
                >
                    &times;
                </button>
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

    const handleCardClick = (img: string, alt: string, title:string) => {
        setModalImg(img);
        setModalAlt(alt);
        setModalOpen(true);
        setModalTitle(title)
    };

    const handleImgError = (
        e: React.SyntheticEvent<HTMLImageElement, Event>,
        fallback: string
    ) => {
        e.currentTarget.src = fallback;
    };

    return (
        <section id="portfolio" className="portfolio-section">
            <h2 className="section-title">{t.portfolio.title}</h2>
            <div className="portfolio-grid">
                {projects.map((project, idx) => (
                    <button
                        key={idx}
                        className="project-card"
                        onClick={() => handleCardClick(project.img, project.alt, project.title)}
                        aria-label={`Open image for ${project.title}`}
                    >
                        <img
                            src={project.img}
                            alt={project.alt}
                            onError={e => handleImgError(e, project.fallback)}
                        />
                        <h3>{project.title}</h3>
                    </button>
                ))}
            </div>
            <Modal open={modalOpen} image={modalImg} alt={modalAlt} title={modalTitle} onClose={() => setModalOpen(false)} />
        </section>
    );
};
