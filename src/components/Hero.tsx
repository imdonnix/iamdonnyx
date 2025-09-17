import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 0 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  max-width: 650px;
`;

export const Hero: React.FC = () => (
<Section>
<Title>
    I’m Donny, a{" "}
    <span
        style={{
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            transition: "color 0.3s",
        }}
        className="code-word"
        onMouseEnter={e => {
            const word = e.currentTarget as HTMLElement;
            word.style.animation = "codePulse 0.6s";
            setTimeout(() => {
                word.style.animation = "";
            }, 600);
        }}
    >
        Code
        <style>
            {`
            .code-word:hover {
                animation: codePulse 0.6s;
            }
            @keyframes codePulse {
                0%   { color: #0070f3; transform: scale(1); }
                30%  { color: #00c896; transform: scale(1.15); }
                60%  { color: #ff4081; transform: scale(0.95); }
                100% { color: #0070f3; transform: scale(1); }
            }
            `}
        </style>
    </span>{" "}
    <span
        style={{
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            transition: "color 0.3s",
        }}
        className="artist-word"
        onMouseEnter={() => {
            const word = document.querySelector(".artist-word") as HTMLElement;
            if (word) {
                word.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                for (let i = 0; i < 10; i++) {
                    const particle = document.createElement("span");
                    const size = Math.random() * 8 + 4;
                    const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
                    particle.style.position = "absolute";
                    particle.style.left = "50%";
                    particle.style.top = "50%";
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.borderRadius = "50%";
                    particle.style.background = color;
                    particle.style.pointerEvents = "none";
                    particle.style.zIndex = "2";
                    particle.style.transform = "translate(-50%, -50%)";
                    particle.style.opacity = "1";
                    particle.style.transition = "opacity 0.6s";
                    const angle = (Math.PI * 2 * i) / 10;
                    const distance = 40 + Math.random() * 20;
                    setTimeout(() => {
                        particle.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
                        particle.style.opacity = "0";
                    }, 10);
                    setTimeout(() => {
                        if (particle.parentNode) particle.parentNode.removeChild(particle);
                    }, 700);
                    word.appendChild(particle);
                }
            }
        }}
    >
        Artist
        <style>
            {`
            .artist-word:hover {
                animation: bounce 0.5s;
            }
            @keyframes bounce {
                0%   { transform: translateY(0); }
                30%  { transform: translateY(-10px); }
                50%  { transform: translateY(0); }
                70%  { transform: translateY(-5px); }
                100% { transform: translateY(0); }
            }
            `}
        </style>
    </span>.
</Title>
<Subtitle>
    I’m a software engineer passionate about building great products. I love capturing moments through photography and enjoy collecting unique toys in my free time.
</Subtitle>
</Section>

);
