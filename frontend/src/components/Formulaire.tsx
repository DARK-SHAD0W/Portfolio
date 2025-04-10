import React, { useState } from 'react';
import "../styles/formulaire.scss";

// Composant principal du formulaire de contact
export default function Formulaire() {
  // État principal des données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    reason: "",
    message: ""
  });

  // État pour stocker les erreurs individuelles par champ
  const [errors, setErrors] = useState({
    name: "",
    firstname: "",
    email: "",
    reason: "",
    message: ""
  });

  // Erreur globale à afficher si des champs sont vides ou invalides
  const [globalError, setGlobalError] = useState("");

  // État pour afficher le message de succès après soumission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonctions de validation par champ
  const validateName = (name: string) => name.trim().length > 2;
  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validateReason = (reason: string) => reason.trim().length > 5;
  const validateMessage = (message: string) => message.trim().length > 10;

  // Détecte si tous les champs sont valides et remplis
  const isFormValid =
    Object.values(errors).every(err => err === "") &&
    Object.values(formData).every(val => val.trim() !== "");

  // Gère le changement dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Met à jour les données du formulaire
    setFormData({ ...formData, [name]: value });

    // Valide la valeur saisie et met à jour les erreurs si nécessaire
    let error = "";
    if ((name === "name" || name === "firstname") && !validateName(value))
      error = "Minimum 3 caractères";
    if (name === "email" && !validateEmail(value)) error = "Email invalide";
    if (name === "reason" && !validateReason(value)) error = "Raison trop courte (min. 5 caractères)";
    if (name === "message" && !validateMessage(value)) error = "Message trop court (min. 10 caractères)";

    setErrors({ ...errors, [name]: error });

    // Réinitialise l'erreur globale lors de la modification d’un champ
    setGlobalError("");
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((val) => val.trim() === "");
    const hasErrors = Object.values(errors).some((err) => err !== "");

    // Affiche un message global si des champs sont vides ou invalides
    if (isEmpty || hasErrors) {
      setGlobalError("Tous les champs sont obligatoires.");
      return;
    }

    // Si tout est valide, envoie du formulaire simulé
    setIsSubmitted(true);
    setGlobalError("");

    // Réinitialise après 6 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        firstname: "",
        email: "",
        reason: "",
        message: ""
      });
    }, 6000);
  };

  return (
    <div className="formulaire-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="page-title">Ecrivez-moi</h1>

        {/* Champ Nom */}
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

        {/* Champ Prénom */}
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

        {/* Champ Email */}
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

        {/* Champ Raison */}
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

        {/* Champ Message */}
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "invalid" : "valid"}
          style={{ maxWidth: "90%" }}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Bouton dynamique selon la validité */}
        <button
          type="submit"
          className={`btn ${isFormValid ? "ready" : "error"}`}
        >
          Envoyer
        </button>

        {/* Erreur globale s’il manque des infos */}
        {globalError && <p className="error">{globalError}</p>}

        {/* Message de confirmation après envoi */}
        {isSubmitted && <p className="success-msg">Message envoyé avec succès !</p>}
      </form>
    </div>
  );
}
