import React, { useState } from "react";
import { useTranslations } from "../../utils/translations/translations";
import "./Contact.scss";

export const Contact: React.FC = () => {
  const { t } = useTranslations();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-header">
          <span className="section-label">Let's Talk</span>
          <h2 className="contact-title">{t.contact.title}</h2>
        </div>

        <div className="contact-wrapper">
          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder={t.contact.nameLabel}
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder={t.contact.emailLabel}
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="contact-textarea"
              name="message"
              rows={5}
              placeholder={t.contact.messageLabel}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">
              {t.contact.sendButton}
            </button>
          </form>

          {/* Info panel */}
          <div className="contact-info">
            <h3>{t.contact.contactInfoTitle}</h3>
            <p>
              <strong>{t.contact.phoneLabel}</strong> {t.contact.phone}
            </p>
            <p>
              <strong>{t.contact.emailInfo}</strong>{" "}
              <a href={`mailto:${t.contact.emailAddress}`}>
                {t.contact.emailAddress}
              </a>
            </p>
            <p>
              <strong>{t.contact.locationLabel}</strong> {t.contact.location}
            </p>

            <div className="map-wrapper">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.698603118217!2d121.0887567!3d13.7941716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0fd8969ff69f%3A0xc8a72f6568d91254!2sTingga%20Itaas%2C%20Poblacion%2C%20Batangas%20City%2C%20Batangas!5e0!3m2!1sen!2sph!4v1736056400000!5m2!1sen!2sph"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
