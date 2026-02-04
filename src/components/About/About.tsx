import React from "react";
import { useTranslations } from "../../utils/translations/translations";
import "./About.scss";

const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
  <span className="skill">{name}</span>
);

export const About: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">{t.about.title}</h2>
      <p className="about-text">{t.about.description}</p>

      <h2 className="about-title">{t.about.skillsTitle}</h2>
      <div className="card-grid">
        <div className="skill-card">
          <h3 className="card-title">{t.about.frontendTitle}</h3>
          <div className="skills-container">
            {t.about.frontendSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3 className="card-title">{t.about.backendTitle}</h3>
          <div className="skills-container">
            {t.about.backendSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3 className="card-title">{t.about.cloudTitle}</h3>
          <div className="skills-container">
            {t.about.cloudSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3 className="card-title">{t.about.methodologiesTitle}</h3>
          <div className="skills-container">
            {t.about.methodologiesSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>

      <a
        href="/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        {t.about.downloadResume}
      </a>
    </section>
  );
};
