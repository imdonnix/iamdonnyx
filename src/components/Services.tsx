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
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Services: React.FC = () => (
  <Section id="services">
    <Title>My Services</Title>
    <Grid>
      <Card>Web Development</Card>
      <Card>UI/UX Design</Card>
      <Card>Consultation</Card>
      <Card>Website Optimization</Card>
    </Grid>
  </Section>
);
