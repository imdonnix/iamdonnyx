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
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  max-width: 500px;
  margin: 2rem auto 0 auto;
  background: #fafafa;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-size: 1rem;
  color: #222;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  p {
    margin: 0.5rem 0;
    word-break: break-word;
  }
`;

const MapWrapper = styled.div`
  margin-top: 1.2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  iframe {
    width: 100%;
    height: 250px;
    border: none;
    display: block;

    @media (max-width: 500px) {
      height: 200px;
    }
  }
`;

const Form = styled.form`
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>

        <ContactInfo>
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> +639 17244 6461</p>
          <p><strong>Email:</strong> dimayugadonndarryl@gmail.com</p>
          <p><strong>Location:</strong> Tinga Itaas, Batangas City, Philippines</p>

          <MapWrapper>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.698603118217!2d121.0887567!3d13.7941716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0fd8969ff69f%3A0xc8a72f6568d91254!2sTingga%20Itaas%2C%20Poblacion%2C%20Batangas%20City%2C%20Batangas!5e0!3m2!1sen!2sph!4v1736056400000!5m2!1sen!2sph"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapWrapper>
        </ContactInfo>
      </Wrapper>
    </Section>
  );
};
