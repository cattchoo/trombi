// Clé d'accès personnel GitHub
// const accessToken = 'VOTRE_CLE_D_ACCES_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PERSONNEL';

// Données des étudiants provenant du fichier JSON
const json = {
    "students": [
      "bell4my",
      "cattchoo",
      "Davyde35",
      "Gstarmix",
      "grizzlywawa",
      "josic490",
      "errudo",
      "anthony35540",
      "sumnifer",
      "seynipeyre",
      "faaay80",
      "jdasou"
    ]
  };

    // Fonction pour récupérer les profils des utilisateurs
    async function fetchUserProfiles() {
    const profilesContainer = document.getElementById('profiles');
  
    // ici je Mélange les étudiants de manière aléatoire
    const shuffledStudents = json.students.sort(() => Math.random() - 0.5);

    // Boucle for qui parcourt chaque noms utilisateurs 
    // des etudiants aléatoirement
    for (const username of shuffledStudents) {
      try {
        // requete envoyé a API GITHUB pour obtenir le profil de l'utilisateur
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const profile = response.data;
        // recupere la reponse data = donnée de (profil de l'utilisateur)

        // Pour creer ma carte des profils j'appelle les données du profil
        createProfileCard(profilesContainer, profile);
        // si requete echoue utilisateur n'existe pas ou il y a une erreur de réseau
      } catch (error) {
        console.log(`Erreur lors de la récupération du profil de ${username}:`, error.message);
      }
      // le message d'erreur est affiché dans la console lors de la récupération du profil
    }
  }
  
  // Fonction qui recois 2 parametres : container et profile
  // pour créer une carte de profil la fonction va chercher élément conteneur ici div dans html et css
  function createProfileCard(container, profile) {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');
  
    // l'URL de l image que je veux afficher avec la valeur: 
    // avatarImg.src
    const avatarImg = document.createElement('img');
    avatarImg.src = profile.avatar_url;

    // ici je creer element <a> lien qui utilise la propriéte profile.html_url
    // l RUL du lien doit pointer vers le profil GitHub de l'utilisateur.
    const profileLink = document.createElement('a');
    profileLink.href = profile.html_url;
    // lien doit s'ouvrir dans un nouvel onglet
    profileLink.target = '_blank';
    // Affiche contenu du texte 
    profileLink.textContent = 'Voir le profil';
  
    // permet d'attribuer la valeur profile.login au texte
    // Création de l'élément h2 pour afficher le nom d'utilisateur
    const usernameHeading = document.createElement('h2');
    usernameHeading.textContent = profile.login;
  
    // Création de l'élément p pour afficher le nom du profil
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = profile.name;
  
    // ajout des elements: img, liens, titre: h2, paragraphe à la carte profil
    profileDiv.appendChild(avatarImg);
    profileDiv.appendChild(profileLink);
    profileDiv.appendChild(usernameHeading);
    profileDiv.appendChild(nameParagraph);
  
     // Ajout de la carte de profil au conteneur spécifié (devient un enfant direct de container)
    container.appendChild(profileDiv);
  }
  
  // Exécution de la fonction pour récupérer les profils des utilisateurs
  fetchUserProfiles().catch(error => {
    console.log('Erreur lors de la récupération des profils:', error.message);
  });
  

 //  ✨  ✨  ✨   Effet paralaxe   ✨  ✨  ✨ //

 (function() {
  // lors d'un evenement de la souris j'appel la fontion  ✨ parallax  ✨
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  //j'appelle elem qui est element ID #parallax ds mon html
  function parallax(e) {
    // La fonction ✨  parallax ✨  calcule la moitié de la largeur et de la hauteur de la fenêtre du navigateur et 
    //les stock dans les variables '_w' pour largeur et '_h'. pour la hauteur
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      // ici les coordonnées X et Y de la souris à partir de l'objet 'e' 
      //(l'événement) et les stocke dans les variables '_mouseX' et '_mouseY'.
      //ici les valeurs (depth) de profondeur sont calculées pour déplacer l'arrière-plan d'un élément dans la page au mouvement de la souris.
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.02}%`;
      //poisson rayure
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${30 - (_mouseY - _h) * 0.14}%`;
      //tortue
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.26}%`;
      //poisson violet
      let _depth4 = `${40 - (_mouseX - _w) * 0.08}% ${60 - (_mouseY - _h) * 0.38}%`;
      //ici le requin va a l'opposer car mis une valeur négative
      let _depth5 = `${50 - (_mouseX - _w) * -0.20}% ${50 - (_mouseY - _h) * -0.60}%`;
      //mouseX donne les valeurs de la souris sur axe x horizontal et axe Y vetical
      //Les valeurs sont des % qui seront utilisés pour déterminer la position de l'arrière-plan.
      let x = `${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
      // element (elem avec la valeur X backgroundPosition) ce qui déplace l'arrière-plan 
      //de l'élément en fonction des coordonnées de la souris.
      //ce qui créer un  ✨ effet parallax  ✨  
  }

})();
