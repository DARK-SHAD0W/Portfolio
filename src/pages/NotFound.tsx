export default function NotFound() {
    return (
    <div className="not-found">
      <h1 className="page-title" >Page Non Trouvée</h1>
      <center>
        <p>La page que vous cherchez n'existe pas.</p>
        <img src="/src/assets/no-data.gif" alt="Not Found Icon" />
        <p>Veuillez vérifier l'URL ou retourner à la page d'accueil.</p>
        <a href="/">Retour à l'accueil</a>
      </center>
    </div>
    )
  }
  