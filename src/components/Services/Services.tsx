import React from "react";
import { useTranslations } from "../../utils/translations/translations";
import {
  CodeOutlined,
  WebAssetOutlined,
  ForumOutlined,
  BoltOutlined,
} from "@mui/icons-material";
import "./Services.scss";

export const Services: React.FC = () => {
  const { t } = useTranslations();

  const services = [
    {
      num: "01",
      icon: <CodeOutlined sx={{ fontSize: "1.35rem" }} />,
      label: t.services.webDevelopment,
      desc: "Building responsive, performant web applications with React, TypeScript, and Node.js.",
    },
    {
      num: "02",
      icon: <WebAssetOutlined sx={{ fontSize: "1.35rem" }} />,
      label: t.services.uiUxDesign,
      desc: "Crafting clean, intuitive interfaces that balance form and function using Figma.",
    },
    {
      num: "03",
      icon: <ForumOutlined sx={{ fontSize: "1.35rem" }} />,
      label: t.services.consultation,
      desc: "Technical guidance, architecture reviews, and stack recommendations for digital products.",
    },
    {
      num: "04",
      icon: <BoltOutlined sx={{ fontSize: "1.35rem" }} />,
      label: t.services.websiteOptimization,
      desc: "Improving performance, Core Web Vitals, SEO, and user experience of existing web apps.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <span className="section-label">What I Do</span>
        <h2 className="services-title">{t.services.title}</h2>
        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-card" key={svc.num}>
              <span className="service-num">{svc.num}</span>
              <div className="service-icon">{svc.icon}</div>
              <h3 className="service-name">{svc.label}</h3>
              <p className="service-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
