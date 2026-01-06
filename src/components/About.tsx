import React from "react";
import styled from "styled-components";
import { useTranslations } from "../utils/translations/translations";

const Section = styled.section`
  padding: 6rem 4rem;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #0077ff;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
`;

const Skill = styled.span`
  background: #0077ff;
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin: 2rem auto 0 auto;
  padding: 0.8rem 2rem;
  background: #0077ff;
  color: #fff;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: background 0.2s;

  &:hover {
    background: #005fcc;
  }
`;

const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
  <Skill>{name}</Skill>
);

export const About: React.FC = () => {
  const { t } = useTranslations();

  return (
    <Section id="about">
      <Title>{t.about.title}</Title>
      <Text>{t.about.description}</Text>

      <Title>{t.about.skillsTitle}</Title>
      <CardGrid>
        <SkillCard>
          <CardTitle>{t.about.frontendTitle}</CardTitle>
          <SkillsContainer>
            {t.about.frontendSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </SkillsContainer>
        </SkillCard>

        <SkillCard>
          <CardTitle>{t.about.backendTitle}</CardTitle>
          <SkillsContainer>
            {t.about.backendSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </SkillsContainer>
        </SkillCard>

        <SkillCard>
          <CardTitle>{t.about.cloudTitle}</CardTitle>
          <SkillsContainer>
            {t.about.cloudSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </SkillsContainer>
        </SkillCard>

        <SkillCard>
          <CardTitle>{t.about.methodologiesTitle}</CardTitle>
          <SkillsContainer>
            {t.about.methodologiesSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </SkillsContainer>
        </SkillCard>
      </CardGrid>

      <ResumeButton
        href="/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.about.downloadResume}
      </ResumeButton>
    </Section>
  );
};
