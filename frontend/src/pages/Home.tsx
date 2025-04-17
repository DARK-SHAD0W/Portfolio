import { useCallback } from "react";
import "../styles/home.scss";

// Composant principal de la page d’accueil (Home)
export default function Home() {
  // Logic pour télécharger le CV depuis le backend
  const downloadCv = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cv", { method: "GET" });
      if (!res.ok) throw new Error(`Serveur a répondu ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Cv_Ahmed_Yahya.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erreur téléchargement CV :", err);
      alert("❌ Impossible de télécharger le CV. Réessayez plus tard.");
    }
  }, []);

  return (
    <div>
      {/* Titre de la page */}
      <h1 className="page-title">Home</h1>

      {/* Texte d’introduction interactif */}
      <p className="intro-text">
        🌟 <b>Bienvenue sur mon portfolio !</b><br />
        N'hésitez pas à explorer et à déplacer votre curseur pour découvrir des petites animations 
        et effets visuels. Profitez d'une expérience interactive et dynamique !
      </p>

      {/* Conteneur principal : carte + bouton */}
      <div className="home-container">

        {/* Carte de profil contenant la photo et la description */}
        <div className="profile-card">

          {/* Section de la photo de profil */}
          <div className="photo-container">
            <img src="/src/assets/photo-pro.png" alt="Profile" />
          </div>

          {/* Section de description avec nom et présentation */}
          <div className="description">
            <h1 className="page-title">Ahmed Yahya Letaief</h1>
            <p>
              💡 Passionné par le développement logiciel, je suis toujours prêt à explorer, apprendre et innover. <br />
              Ma curiosité et mon esprit créatif m'incitent à relever des défis complexes avec enthousiasme. <br />
              Mon objectif ? Créer des solutions pratiques, intelligentes et durables tout en restant à la pointe des technologies.<br />
            </p>
          </div>

        </div>

        {/* Bouton pour télécharger le CV au format PDF */}
        <div className="cv-button-container">
          <button className="cv-button" onClick={downloadCv}>
            Télécharger le CV
          </button>
        </div>

      </div>
    </div>
  );
}
