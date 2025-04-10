// Ce composant affiche le pied de page avec l'année actuelle générée dynamiquement

export default function Footer() {
  // Récupération de l'année actuelle depuis l'objet Date
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Affichage dynamique de l'année avec nom et droits */}
      <p>&copy; {currentYear} Ahmed Yahya LETAIEF. Tous droits réservés</p>
    </footer>
  );
}
