import React, { useState } from 'react';
import "../styles/formulaire.scss";

export default function Formulaire() {
  const [formData, setFormData] = useState({ name: "", firstname: "", email: "", reason: "", message: "" });
  const [errors, setErrors] = useState({ name: "", firstname: "", email: "", reason: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateName = (name: string) => name.trim().length > 2;
  const validateFirstname = (firstname: string) => firstname.trim().length > 2;
  const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validateReason = (reason: string) => reason.trim().length > 5;
  const validateMessage = (message: string) => message.trim().length > 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if ((name === "name" || name === "firstname") && !validateName(value)) error = "Minimum 3 caractères";
    if (name === "email" && !validateEmail(value)) error = "Email invalide";
    if (name === "reason" && !validateReason(value)) error = "Raison trop courte (min. 5 caractères)";
    if (name === "message" && !validateMessage(value)) error = "Message trop court (min. 10 caractères)";

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", firstname: "", email: "", reason: "", message: "" });
    }, 3000);
  };

  return (
    <div className="formulaire-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="page-title">Ecrivez-moi</h1>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "invalid" : "valid"}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="firstname">Prénom :</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className={errors.firstname ? "invalid" : "valid"}
        />
        {errors.firstname && <p className="error">{errors.firstname}</p>}

        <label htmlFor="email">Email :</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "invalid" : "valid"}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="reason">Raison :</label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className={errors.reason ? "invalid" : "valid"}
        />
        {errors.reason && <p className="error">{errors.reason}</p>}

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "invalid" : "valid"}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" className={`btn ${isSubmitted ? "success" : ""}`}>
          Envoyer
        </button>

        {isSubmitted && <p className="success-msg">Message envoyé avec succès !</p>}
      </form>
    </div>
  );
}
