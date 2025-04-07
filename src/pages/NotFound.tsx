import React from 'react';
import "../styles/notfound.scss";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-numbers">
          <div className="number number4">4</div>
          <div className="number number0">0</div>
          <div className="number number4">4</div>
        </div>
        <div className="message">
          <h1>Page Non Trouvée</h1>
          <p>La page que vous cherchez n'existe pas.</p>
          <a href="/" className="bouton3D">Retour Accueil</a>
        </div>
      </div>
    </div>
  );
}
