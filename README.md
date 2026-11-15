# Site web AEERNY

Le site présente le jus de mangue AEERNY, produit à Nyambaka, au Cameroun. Ce site statique est rédigé en français. Les visiteurs peuvent découvrir le produit et l’association, consulter les informations nutritionnelles et les réalisations, puis contacter AEERNY sur WhatsApp pour commander. Le site ne propose ni panier ni paiement en ligne.

## Pages

- `index.html` : accueil, produits, informations nutritionnelles, FAQ et contact WhatsApp.
- `histoires.html` : histoire, mission, parcours et galerie photo de l’association.
- `realisation.html` : distinctions, couverture médiatique et informations sur l’impact communautaire.

## Fichiers du projet

- `style.css` : styles communs, boutons, en-tête et bannière d’accueil.
- `sections.css` : styles des sections et mises en page adaptatives.
- `sidebar.css` : styles du menu latéral.
- `main.js` : défilement de l’en-tête, respect des préférences de réduction des animations et comportement de la FAQ.
- `sidebar.js` : interactions du menu latéral.
- `video.js` : lecture à l’apparition d’une vidéo si la page contient un élément avec l’identifiant `midVideo`.
- `ASSETS/` : logos, photos des produits et de la communauté, et vidéos.
- `CNAME` : nom de domaine personnalisé, `nyambaka.com`.

Le projet ne nécessite ni étape de compilation ni installation de paquets. Respectez exactement les majuscules et minuscules des noms de fichiers : certains hébergeurs distinguent la casse dans les chemins.

## Prévisualisation en local

Depuis le dossier racine du projet, lancez un serveur statique avec Python :

```powershell
py -m http.server 8000
```

Ouvrez <http://localhost:8000/> dans un navigateur. Pour arrêter le serveur, appuyez sur `Ctrl+C` dans le terminal.

## Vidéo d’accueil

La bannière d’accueil utilise d’abord `ASSETS/aeerny-loop-transparent.webm`, puis `ASSETS/AEERNY VIDEO.mp4` comme solution de repli. La vidéo est muette et respecte la préférence de réduction des animations du visiteur. Conservez les deux fichiers lors du remplacement de la vidéo afin de maintenir la compatibilité avec les navigateurs qui ne prennent pas en charge WebM.

## Publication

Le dépôt Git est hébergé sur GitHub et le fichier `CNAME` contient `nyambaka.com`. Pour publier le site avec GitHub Pages, choisissez la source de publication dans **Settings → Pages**, conservez `CNAME` à la racine du dépôt et configurez le DNS du domaine pour GitHub Pages. Après la publication, vérifiez le domaine et l’état HTTPS dans les paramètres Pages.

## Confidentialité et statistiques

Les pages HTML chargent actuellement Google Analytics. Avant de collecter des statistiques de visite, déterminez comment informer les visiteurs et appliquer leurs choix de consentement à la balise Google. Le site ne comporte actuellement ni notice de confidentialité, ni notice relative aux cookies, ni bannière de consentement. Vérifiez les règles camerounaises applicables à la protection des données et au commerce électronique avant la mise en ligne ; désactivez ou bloquez Google Analytics jusqu’au consentement si nécessaire.
