# CONSIGNES :
## Créer un projet Vue-CLI
    1. Sur le projet Vue-CLI, afficher les données via un fichier json :
        - Récupérer les données d’un listing d’auteurs via le fichier authors.json
        - Afficher les données des auteurs sous forme de liste (penser à faire une
        gestion d’erreur en l’absence de données)
        - Implémenter un tri par nombre de like / tri par ordre alphabétique sur les noms
        de famille via des boutons dédiés
        - Implémenter un filtre par thématique : les thématiques sont récupérées via le
        fichier thematics.json
    2. Toujours sur le projet Vue-CLI et séparément du listing d’auteurs, faire un
    formulaire d’inscription :
        - Créer un formulaire d’inscription avec une gestion d’erreur pour les champs
        non rempli
        - Stocker les valeurs avec l’utilisation de Vuex à la validation du formulaire
        - Afficher les données stockées via Vuex de l’utilisateur lorsque le formulaire
        est validé