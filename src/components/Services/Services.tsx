import React from "react";
import { useTranslations } from "../../utils/translations/translations";
import "./Services.scss";

export const Services: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">{t.services.title}</h2>
      <div className="grid">
        <div className="card">{t.services.webDevelopment}</div>
        <div className="card">{t.services.uiUxDesign}</div>
        <div className="card">{t.services.consultation}</div>
        <div className="card">{t.services.websiteOptimization}</div>
      </div>
    </section>
  );
};
