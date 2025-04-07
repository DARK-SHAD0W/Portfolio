import React from 'react';
import Formulaire from '../components/Formulaire';
import ContactLogos from '../components/ContactLogos';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="page-title">Contact</h1>
      <ContactLogos />
      <Formulaire />
    </div>
  );
}
