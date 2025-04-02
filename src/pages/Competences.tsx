import React from 'react';
import "../styles/competences.scss";

export default function Competences() {
  return (
    <div className="competences-container">
      <h1 className="page-title">Compétences</h1>

      <div className="competence-group">
        <h2>Développement Logiciel</h2>
        <div className="skills-section">
          <div className="skills-text">
            <h3>Langages de Programmation</h3>
            <p>C, C#, Python, JavaScript, Java, Assembly (asm), Prolog, Julia</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/icons/code-icon.png" alt="Code" />
          </div>
        </div>
        <div className="skills-section">
          <div className="skills-text">
            <h3>Langages de Description</h3>
            <p>HTML, CSS, XML, Markdown</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/icons/html-css-icon.png" alt="HTML/CSS" />
          </div>
        </div>
      </div>

      <div className="competence-group">
        <h2>Base de Données</h2>
        <div className="skills-section">
          <div className="skills-text">
            <h3>SGBD</h3>
            <p>SQL Server, PostgreSQL, Oracle</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/icons/database-icon.png" alt="Database" />
          </div>
        </div>
      </div>

      <div className="competence-group">
        <h2>Outils et Logiciels</h2>
        <div className="skills-section">
          <div className="skills-text">
            <h3>Logiciels</h3>
            <p>SSMS, PowerBI, Office 360, GitHub, VS Code, Adobe, Unity, Processing, Jupyter, Spyder</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/icons/tools-icon.png" alt="Tools" />
          </div>
        </div>
      </div>

      <div className="competence-group">
        <h2>Modélisation Scientifique</h2>
        <div className="skills-section">
          <div className="skills-text">
            <h3>Outils de Modélisation</h3>
            <p>UML, Matplotlib, Cplex, OPL, SageMath</p>
          </div>
          <div className="skills-logo">
            <img src="/src/assets/icons/modeling-icon.png" alt="Modeling" />
          </div>
        </div>
      </div>
    </div>
  );
}
