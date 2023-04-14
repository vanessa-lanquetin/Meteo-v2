// Cette fonction prend en paramètre le nom d'une ville et récupère les informations météorologiques de cette ville à partir de l'API OpenWeatherMap
function actualisation(ville) {
  // Construire l'URL de la requête avec la ville sélectionnée et les paramètres pour authentifier la requête et spécifier l'unité de mesure en Celsius
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=df2fe288c24ad27ca426caafdfb045f0&units=metric";

  // Afficher l'URL de la requête dans la console pour vérification
  console.log(url);

  // Créer une nouvelle instance de XMLHttpRequest pour effectuer une requête HTTP GET vers l'URL construite précédemment
  let requete = new XMLHttpRequest();

  // Ouvrir la connexion avec la méthode GET et l'URL de la requête
  requete.open("GET", url);

  // Définir le type de réponse attendue en JSON
  requete.responseType = "json";

  // Envoyer la requête
  requete.send();

  // Définir une fonction anonyme à exécuter lorsque la réponse est reçue avec succès
  requete.onload = function () {
    // Vérifier si la requête est terminée et si le statut est OK (200)
    if (requete.readyState === XMLHttpRequest.DONE && requete.status === 200) {
      // Stocker la réponse dans une variable
      let reponse = requete.response;

      // Mettre à jour l'élément HTML correspondant à la température avec les données de la réponse
      // @ts-ignore : Ignorer les erreurs TypeScript pour sélectionner l'élément HTML par son ID
      document.querySelector("#temperature_label").textContent =
        reponse.main.temp;

      // Mettre à jour l'élément HTML correspondant au nom de la ville avec les données de la réponse
      // @ts-ignore : Ignorer les erreurs TypeScript pour sélectionner l'élément HTML par son ID
      document.querySelector("#ville").textContent = reponse.name;
    }
    else{
      console.log(requete.status);
    }
  };
}

// Sélectionner l'élément HTML correspondant au bouton avec l'ID "changer"
let button = document.querySelector("#changer");

// Vérifier si le bouton est présent dans le document
if (button) {
  // Ajouter un événement "click" au bouton pour appeler la fonction actualisation avec une nouvelle ville saisie par l'utilisateur
  button.addEventListener("click", () => {
    console.log("gfdyhd"); // Afficher un message dans la console (non nécessaire)
    let changerVille = prompt("Choisissez une ville :"); // Demander à l'utilisateur de saisir une nouvelle ville
    actualisation(changerVille); // Appeler la fonction actualisation avec la nouvelle ville saisie
  });
}

// Appeler la fonction actualisation avec "Paris" comme ville par défaut
actualisation("Paris");
