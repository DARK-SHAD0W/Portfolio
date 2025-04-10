import "../styles/notfound.scss";

// Composant affiché lorsque la page demandée n'existe pas (erreur 404)
export default function NotFound() {
  return (
    <div className="not-found">
      
      {/* Conteneur principal centré verticalement et horizontalement */}
      <div className="not-found-container">
        
        {/* Bloc contenant les chiffres 404 avec effet visuel */}
        <div className="not-found-numbers">
          <div className="number number4">4</div>
          <div className="number number0">0</div>
          <div className="number number4">4</div>
        </div>

        {/* Message et bouton de retour */}
        <div className="message">
          <h1>Page Non Trouvée</h1>
          <p>La page que vous cherchez n'existe pas.</p>

          {/* Bouton stylisé en 3D pour revenir à la page d’accueil */}
          <a href="/" className="bouton3D">
            Retour Accueil
          </a>
        </div>

      </div>
    </div>
  );
}
