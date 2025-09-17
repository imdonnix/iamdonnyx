import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
    padding: 6rem 4rem;
    @media (max-width: 768px) {
        padding: 4rem 2rem;
    }
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
`;

const ProjectCard = styled.button`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  h3 {
    margin: 0;
    padding: 1rem;
    font-size: 1.2rem;
    color: #fff;
    background: linear-gradient(135deg, #e2e2e2ff, #adafafff);
    text-align: center;
    font-weight: 600;
  }
`;


const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 1rem;
    max-width: 90vw;
    max-height: 90vh;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalImage = styled.img`
    max-width: 80vw;
    max-height: 70vh;
    border-radius: 8px;
    margin-bottom: 1rem;
`;

const CloseButton = styled.button`
    background: #333;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
`;

type Project = {
    img: string;
    alt: string;
    fallback: string;
    title: string;
};

const projects: Project[] = [
    {
        img: require("../pictures/NOAH.JPG"),
        alt: "NOAH",
        fallback: "https://via.placeholder.com/220x160?text=NOAH",
        title: "NOAH Business Applications",
    },
    {
        img: require("../pictures/ImageNotAvailable.png"),
        alt: "IRG",
        fallback: "https://via.placeholder.com/220x160?text=IRG",
        title: "IRG - Accenture",
    },
    {
        img: require("../pictures/ImageNotAvailable.png"),
        alt: "GPHLiteChronos",
        fallback: "https://via.placeholder.com/220x160?text=GPHLiteChronos",
        title: "GPH Lite - Chronos - Accenture",
    },
    {
        img: require("../pictures/CALTEXGO.JPG"),
        alt: "CaltexGO",
        fallback: "https://via.placeholder.com/220x160?text=CaltexGO",
        title: "Chevron Corporation - Accenture",
    },
    {
        img: require("../pictures/GenAI.JPG"),
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
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <h3>{title}</h3>
                <ModalImage src={image} alt={alt} />
                <CloseButton
                    onClick={onClose}
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
                </CloseButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export const Portfolio: React.FC = () => {
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
        <Section id="portfolio">
            <Title>Projects I've handled so far</Title>
            <Grid>
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        onClick={() => handleCardClick(project.img, project.alt, project.title)}
                        aria-label={`Open image for ${project.title}`}
                    >
                        <img
                            src={project.img}
                            alt={project.alt}
                            onError={e => handleImgError(e, project.fallback)}
                        />
                        <h3>{project.title}</h3>
                    </ProjectCard>
                ))}
            </Grid>
            <Modal open={modalOpen} image={modalImg} alt={modalAlt} title={modalTitle} onClose={() => setModalOpen(false)} />
        </Section>
    );
};
