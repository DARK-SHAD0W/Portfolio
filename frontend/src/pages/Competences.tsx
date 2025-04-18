
import "../styles/competences.scss";

// Composant principal de la page Compétences
export default function Competences() {
  return (
    <div className="competences-container">
      {/* Titre de la page */}
      <h1 className="page-title">Compétences</h1>

      {/* Groupe : Développement Logiciel */}
      <div className="competence-group">
        <h2>Développement Logiciel</h2>

        {/* Bloc : Langages de Programmation */}
        <div className="skills-section">
          <div className="skills-text">
            <h3>Langages de Programmation</h3>
            <p>JavaScript, TypeScript, Python, C, C#, Java, Assembly (asm), Prolog, Julia</p>   
          </div>
          <div className="skills-logo">
            <img src="/src/assets/images-competences/C1.png" alt="Code" />
          </div>
        </div>

        {/* Bloc : Langages de Description */}
        <div className="skills-section">
          <div className="skills-text">
            <h3>Langages de Description</h3>
            <p>HTML, CSS, SCSS, Markdown</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/images-competences/C2.png" alt="HTML/CSS" />
          </div>
        </div>

        {/* Bloc : Frameworks et Bibliothèques */}
        <div className="skills-section">
          <div className="skills-text">
            <h3>Frameworks et Bibliothèques</h3>
            <p>React.js, Node.js, Express.js, Vite, React Router DOM</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/images-competences/C3.png" alt="Frameworks" />
          </div>
        </div>

        {/* Bloc : Outils de Développement */}
        <div className="skills-section">
          <div className="skills-text">
            <h3>Outils de Développement</h3>
            <p>VS Code, Git, GitHub, Unity, Processing, PowerBi</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/images-competences/C4.png" alt="Dev Tools" />
          </div>
        </div>
      </div>

      {/* Groupe : Base de Données */}
      <div className="competence-group">
        <h2>Base de Données</h2>

        {/* Bloc : SGBD */}
        <div className="skills-section">
          <div className="skills-text">
            <h3>SGBD</h3>
            <p>MongoDB, SQL Server, PostgreSQL, Oracle</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/images-competences/C5.png" alt="Database" />
          </div>
        </div>
      </div>

      {/* Groupe : Technologies Web */}
      <div className="competence-group">
        <h2>Technologies Web</h2>

        {/* Bloc : Frontend */}
        <div className="skills-section">
          <div className="skills-text">
            <h3>Frontend</h3>
            <p>React.js, HTML, CSS, SCSS, JavaScript, TypeScript</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/images-competences/C6.png" alt="Frontend" />
          </div>
        </div>

        {/* Bloc : Backend */}
        <div className="skills-section">
          <div className="skills-text">
            <h3>Backend</h3>
            <p>Node.js, Express.js, API REST</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/images-competences/C7.png" alt="Backend" />
          </div>
        </div>
      </div>
    </div>
  );
}
