import React from 'react';
import "../styles/contact-logos.scss";

const logos = [
  { name: "Gmail", link: "mailto:your-email@gmail.com", img: "/src/assets/contact-logos/gmail.png" },
  { name: "LinkedIn", link: "https://www.linkedin.com", img: "/src/assets/contact-logos/linkedin.png" },
  { name: "Phone", link: "tel:+1234567890", img: "/src/assets/contact-logos/phone.png" },
  { name: "Instagram", link: "https://www.instagram.com", img: "/src/assets/contact-logos/instagram.png" },
];

export default function ContactLogos() {
  return (
    <div className="contact-logos">
      {logos.map((logo, index) => (
        <a 
          key={index} 
          href={logo.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="logo-container"
        >
          <img src={logo.img} alt={logo.name} />
        </a>
      ))}
    </div>
  );
}
