// Import du formulaire de contact personnalisé
import Formulaire from '../components/Formulaire';

// Import des icônes de contact (Gmail, LinkedIn, etc.)
import ContactLogos from '../components/ContactLogos';

// Composant principal de la page Contact
export default function Contact() {
  return (
    <div className="contact-container">
      {/* Titre principal de la page */}
      <h1 className="page-title">Contact</h1>

      {/* Bloc contenant les icônes de contact (email, téléphone, etc.) */}
      <ContactLogos />

      {/* Formulaire pour envoyer un message depuis le site */}
      <Formulaire />
    </div>
  );
}
