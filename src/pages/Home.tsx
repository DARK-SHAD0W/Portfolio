import "../styles/home.scss";

export default function Home() {
  return (
    <div>
      <h1 className="page-title">Home</h1>
      <p className="intro-text">
        🌟 <b>Bienvenue sur mon portfolio !</b><br />
        N'hésitez pas à explorer et à déplacer votre curseur pour découvrir des petites animations 
        et effets visuels. Profitez d'une expérience interactive et dynamique !
      </p>
      <div className="home-container">
        <div className="profile-card">
          <div className="photo-container">
            <img src="/src/assets/photo-pro.png" alt="Profile" />
          </div>
          <div className="description">
            <h1 className="page-title">Ahmed Yahya Letaief</h1>
            <p>
              💡 Passionné par le développement logiciel, je suis toujours prêt à explorer, apprendre et innover. <br />
              Ma curiosité et mon esprit créatif m'incitent à relever des défis complexes avec enthousiasme. <br />
              Mon objectif ? Créer des solutions pratiques, intelligentes et durables tout en restant à la pointe des technologies.<br />
            </p>
          </div>
        </div>

        {/* CV Download Button */}
        <div className="cv-button-container">
          <a href="/src/assets/CV-Ahmed-Yahya.pdf" download>
            <button className="cv-button">Télécharger le CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}
