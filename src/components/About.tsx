import React from "react";
import styled from "styled-components";

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

const Skill = styled.span<{ bgColor: string }>`
  background: ${(props) => props.bgColor};
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

// Random pastel colors generator
const colors = [
  "#ff6b6b",
  "#6bcfff",
  "#6bff95",
  "#ffc36b",
  "#b36bff",
  "#6bfff3",
  "#ffa6d5",
  "#8aff6b",
  "#6b9bff",
  "#ffd76b",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
  <Skill bgColor={getRandomColor()}>{name}</Skill>
);

export const About: React.FC = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Text>
      I am a passionate web developer specializing in React and TypeScript. I
      focus on creating minimalist and functional designs that deliver clean,
      modern, and user-friendly web experiences.
    </Text>

    <Title>Skills</Title>
    <CardGrid>
      <SkillCard>
        <CardTitle>Frontend Development</CardTitle>
        <SkillsContainer>
          {["React.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind CSS", "Ant Design", "Redux.js", "jQuery"].map(
            (skill) => (
              <SkillBadge key={skill} name={skill} />
            )
          )}
        </SkillsContainer>
      </SkillCard>

      <SkillCard>
        <CardTitle>Backend & Databases</CardTitle>
        <SkillsContainer>
          {["Node.js", "C#.NET", "SQL", "Microsoft SQL Server", "JSON", "Red Gate Tools"].map(
            (skill) => (
              <SkillBadge key={skill} name={skill} />
            )
          )}
        </SkillsContainer>
      </SkillCard>

      <SkillCard>
        <CardTitle>Cloud & Tools</CardTitle>
        <SkillsContainer>
          {["AWS", "Git", "Figma", "Microsoft Office"].map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </SkillsContainer>
      </SkillCard>

      <SkillCard>
        <CardTitle>Methodologies</CardTitle>
        <SkillsContainer>
          {["Agile", "Full-Stack Development"].map((skill) => (
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
      Download My Latest Resume
    </ResumeButton>
  </Section>
);
