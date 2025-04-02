
import "../styles/home.scss";

export default function Home() {
  return (
    <div>
      <h1 className="page-title"> Home</h1>
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
      </div>
    </div>
  );
}
