// Importation du fichier de style associé à cette section
import "../styles/contact-logos.scss";

// Définition du tableau contenant les informations pour chaque logo de contact
const logos = [
  {
    name: "Gmail",
    link: "mailto:letaiefahmedyahya@gmail.com",
    img: "/src/assets/contact-logos/gmail.png",
    className: "gmail"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/letaief-ahmed-yahya-2678a9218/",
    img: "/src/assets/contact-logos/linkedin.png",
    className: "linkedin"
  },
  {
    name: "Phone",
    link: "tel:+33604488609",
    img: "/src/assets/contact-logos/phone.png",
    className: "phone"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ahmed_yahya_letaief/",
    img: "/src/assets/contact-logos/instagram.png",
    className: "instagram"
  }
];

// Composant principal pour l'affichage des logos de contact
export default function ContactLogos() {
  return (
    <div className="contact-logos">
      {/* On boucle sur chaque élément du tableau 'logos' pour générer un lien cliquable avec l'image correspondante */}
      {logos.map((logo, index) => (
        <a
          key={index} // Clé unique pour chaque élément de la liste
          href={logo.link} // Lien de redirection (mail, tel, ou URL)
          target="_blank" // Ouvre le lien dans un nouvel onglet
          rel="noopener noreferrer" // Bonne pratique de sécurité
          className={`logo-container ${logo.className}`} // Classe CSS dynamique pour styliser chaque logo
        >
          <img src={logo.img} alt={logo.name} /> {/* Affichage de l'image du logo avec un alt pour l'accessibilité */}
        </a>
      ))}
    </div>
  );
}
