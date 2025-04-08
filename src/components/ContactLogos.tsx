import React from 'react';
import "../styles/contact-logos.scss";

const logos = [
  { name: "Gmail", link: "mailto:letaiefahmedyahya@gmail.com", img: "/src/assets/contact-logos/gmail.png", className: "gmail" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/letaief-ahmed-yahya-2678a9218/", img: "/src/assets/contact-logos/linkedin.png", className: "linkedin" },
  { name: "Phone", link: "tel:+33604488609", img: "/src/assets/contact-logos/phone.png", className: "phone" },
  { name: "Instagram", link: "https://www.instagram.com/ahmed_yahya_letaief/", img: "/src/assets/contact-logos/instagram.png", className: "instagram" },
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
          className={`logo-container ${logo.className}`}
        >
          <img src={logo.img} alt={logo.name} />
        </a>
      ))}
    </div>
  );
}
