  import { Question } from "./question.model";
  export const questions: Question[] = [
    {
      id:1,
      question: 'Quel langage est utilisé avec Angular ?',
      options: ['Java', 'TypeScript', 'Python', 'PHP'],
      answer: 'TypeScript'
    },
    {
      id:2,
      question: 'Quel est le framework CSS le plus populaire ?',
      options: ['Bootstrap', 'Bulma', 'Tailwind', 'Materialize'],
      answer: 'Bootstrap'
    },
    {
    id: 3,
    question: 'Quel est le rôle principal de HTML ?',
    options: ['Styliser les éléments', 'Structurer la page', 'Ajouter des animations', 'Gérer la base de données'],
    answer: 'Structurer la page'
  },
  {
    id: 4,
    question: 'Quel langage est exécuté côté client dans le navigateur ?',
    options: ['Java', 'PHP', 'JavaScript', 'Python'],
    answer: 'JavaScript'
  },
  {
    id: 5,
    question: 'Quel framework front-end est basé sur TypeScript ?',
    options: ['React', 'Angular', 'Vue.js', 'jQuery'],
    answer: 'Angular'
  },
  {
    id: 6,
    question: 'Quelle balise HTML est utilisée pour insérer une image ?',
    options: ['<image>', '<pic>', '<img>', '<src>'],
    answer: '<img>'
  },
  {
    id: 7,
    question: 'Quel langage est souvent utilisé pour le back-end avec MySQL ?',
    options: ['CSS', 'PHP', 'TypeScript', 'HTML'],
    answer: 'PHP'
  },
  {
    id: 8,
    question: 'Quel mot-clé est utilisé en JavaScript pour définir une fonction ?',
    options: ['def', 'function', 'fun', 'define'],
    answer: 'function'
  },
  {
    id: 9,
    question: 'Quel framework back-end utilise Express ?',
    options: ['Laravel', 'Spring', 'Node.js', 'Django'],
    answer: 'Node.js'
  },
  {
    id: 10,
    question: 'En CSS, que fait la propriété `display: flex;` ?',
    options: ['Ajoute une animation', 'Aligne les éléments en colonne ou en ligne', 'Ajoute un effet 3D', 'Crée une image'],
    answer: 'Aligne les éléments en colonne ou en ligne'
  },
  {
    id: 11,
    question: 'Quel fichier contient les dépendances d’un projet Node.js ?',
    options: ['package.json', 'index.js', 'main.js', 'server.js'],
    answer: 'package.json'
  },
  {
    id: 12,
    question: 'Quel framework PHP suit le modèle MVC ?',
    options: ['Laravel', 'jQuery', 'Bootstrap', 'React'],
    answer: 'Laravel'
  },
      {
        question: "Quel protocole est utilisé pour charger une page web ?",
        options: ["FTP", "SMTP", "HTTP", "SSH"],
        answer: "HTTP",
        id: 13
    }, {
        question: "Quelle méthode HTTP est utilisée pour envoyer des données ?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "POST",
        id: 14
    }, {
        question: "Quelle extension de fichier correspond à un fichier CSS ?",
        options: [".html", ".js", ".css", ".ts"],
        answer: ".css",
        id: 15
    }, {
        question: "Quel outil permet de versionner le code source ?",
        options: ["Node.js", "Git", "npm", "Webpack"],
        answer: "Git",
        id: 16
    }, {
        question: "Quel langage est requis pour manipuler le DOM ?",
        options: ["PHP", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript",
        id: 17
    }, {
        question: "Quel outil permet de gérer les paquets en Node.js ?",
        options: ["npm", "composer", "bundler", "yarn"],
        answer: "npm",
        id: 18
    }, {
        question: "Quel tag HTML représente un paragraphe ?",
        options: ["&lt;div&gt;", "&lt;span&gt;", "&lt;p&gt;", "&lt;section&gt;"],
        answer: "&lt;p&gt;",
        id: 19
    }, {
        question: "Quel est le rôle du fichier index.html ?",
        options: ["Gérer les styles", "Gérer les routes", "Page d’accueil principale", "Configurer le serveur"],
        answer: "Page d’accueil principale",
        id: 20
    }, {
        question: "Quel mot-clé JavaScript déclare une variable modifiable ?",
        options: ["const", "fixed", "let", "var"],
        answer: "let",
        id: 21
    },
    {
        question: "Quelle commande Git permet de récupérer les changements du dépôt distant ?",
        options: ["git pull", "git push", "git fetch", "git clone"],
        answer: "git pull",
        id: 22
    }
    , {
        id: 23,
        question: "Quel langage permet de styliser une page web ?",
        options: ["HTML", "JavaScript", "CSS", "PHP"],
        answer: "CSS"
    },
    {
        id: 24,
        question: "Quel est le rôle de la balise &lt;a&gt; en HTML ?",
        options: ["Afficher une image", "Créer un lien", "Faire une liste", "Ajouter du texte"],
        answer: "Créer un lien"},
    {
        id: 25,
        question: "Quelle directive Angular permet d'afficher une liste ?",
        options: ["*ngIf", "*ngFor", "*ngShow", "*ngModel"],
        answer: "*ngFor"},
    {
        id: 26,
        question: "Quel fichier de configuration est utilisé par Angular ?",
        options: ["angular.json", "config.js", "package.json", "main.ts"],
        answer: "angular.json"},
    {
        id: 27,
        question: "Quelle commande installe un paquet avec npm ?",
        options: ["npm install", "npm init", "npm serve", "npm start"],
        answer: "npm install"},
    {
        id: 28,
        question: "Quel langage permet de manipuler le style dynamiquement ?",
        options: ["HTML", "JavaScript", "PHP", "SQL"],
        answer: "JavaScript"
    },
    {
        id: 29,
        question: "Quelle est la bonne syntaxe pour un commentaire CSS ?",
        options: ["// commentaire", "&lt;!-- commentaire --&gt;", "/* commentaire */", "# commentaire"],
        answer: "/* commentaire */"
    },
    {
        id: 30,
        question: "Que fait la propriété CSS ''color'' ?",
        options: ["Change la taille", "Change la position", "Change la couleur du texte", "Change la police"],
        answer: "Change la couleur du texte"},
    {
        id: 31,
        question: "Quelle méthode HTTP permet de supprimer une ressource ?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: "DELETE"
      },
    {
        id: 32,
        question: "Quel type d'élément est une div ?",
        options: ["Inline", "Block", "Inline-block", "Flex"],
        answer: "Block"},
    {
        id: 33,
        question: "Que signifie API ?",
        options: ["Application Programming Interface", "Automatic Page Indexing", "Advanced PHP Interface", "Angular Programming Integration"],
        answer: "Application Programming Interface"},
    {
        id: 34,
        question: "Quelle commande permet de créer un nouveau projet Angular ?",
        options: ["ng serve", "ng new", "ng generate", "ng start"],
        answer: "ng new"},
    {
        id: 35,
        question: "Quel outil compile le code TypeScript en JavaScript ?",
        options: ["Babel", "Webpack", "TypeScript Compiler", "PostCSS"],
        answer: "TypeScript Compiler"},
    {
        id: 36,
        question: "Quel est le port par défaut d'un serveur HTTP local ?",
        options: ["80", "3000", "443", "8080"],
        answer: "80"},
    {
        id: 37,
        question: "Quel attribut HTML permet d’envoyer un formulaire ?",
        options: ["method", "action", "submit", "send"],
        answer: "action"},
    {
        id: 38,
        question: "Quelle propriété CSS est utilisée pour centrer horizontalement un bloc ?",
        options: ["text-align", "margin", "align-items", "margin: auto"],
        answer: "margin: auto"},
    {
        id: 39,
        question: "Quelle extension est utilisée pour un fichier JavaScript ?",
        options: [".html", ".js", ".json", ".css"],
        answer: ".js"},
    {
        id: 40,
        question: "Quelle balise HTML est utilisée pour insérer une vidéo ?",
        options: ["&lt;media&gt;", "&lt;video&gt;", "&lt;vid&gt;", "&lt;player&gt;"],
        answer: "&lt;video&gt;"},
    {
        id: 41,
        question: "Quelle fonction JavaScript permet de retarder une exécution ?",
        options: ["wait()", "sleep()", "delay()", "setTimeout()"],
        answer: "setTimeout()"},
    {
        id: 42,
        question: "Quel outil permet de surveiller les modifications de code et recompiler ?",
        options: ["webpack", "nodemon", "vite", "gulp"],
        answer: "nodemon"},
    {
        id: 43,
        question: "Quel est l’objectif du responsive design ?",
        options: ["Optimiser le SEO", "Accélérer le site", "Adapter l’affichage aux écrans", "Créer des animations"],
        answer: "Adapter l’affichage aux écrans"},
    {
        id: 44,
        question: "Quel élément HTML représente une liste non ordonnée ?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        answer: "&lt;ul&gt;"},
    {
        id: 45,
        question: "Quel langage est utilisé pour interroger une base de données ?",
        options: ["PHP", "SQL", "CSS", "XML"],
        answer: "SQL"},
    {
        id: 46,
        question: "Quelle commande initialise un dépôt Git ?",
        options: ["git push", "git start", "git init", "git create"],
        answer: "git init"},
    {
        id: 47,
        question: "Quel mot-clé JavaScript empêche la réaffectation d'une variable ?",
        options: ["var", "let", "const", "static"],
        answer: "const"},
    {
        id: 48,
        question: "Quelle méthode transforme une chaîne en entier en JavaScript ?",
        options: ["parseInt()", "Number()", "toString()", "int()"],
        answer: "parseInt()"},
    {
        id: 49,
        question: "Quel est le rôle de ''routerLink'' dans Angular ?",
        options: ["Définir un style", "Créer un lien entre composants", "Gérer une animation", "Définir un service"],
        answer: "Créer un lien entre composants"},
    {
        id: 50,
        question: "Quel fichier définit les routes dans une app Angular ?",
        options: ["app.routes.ts", "router.module.ts", "app-routing.module.ts", "routes.ts"],
        answer: "app-routing.module.ts"},
    {
        id: 51,
        question: "Quel outil sert à compiler un projet Angular ?",
        options: ["ng build", "npm install", "ng serve", "ng new"],
        answer: "ng build"},
    {
        id: 52,
        question: "Quel est l'équivalent d'un composant en JavaScript pur ?",
        options: ["Une classe", "Une fonction", "Un module", "Un objet"],
        answer: "Une fonction"},
    {
        id: 53,
        question: "Quel protocole est sécurisé pour les sites web ?",
        options: ["HTTP", "HTTPS", "FTP", "WS"],
        answer: "HTTPS"},
    {
        id: 54,
        question: "Quel outil permet de visualiser le DOM dans un navigateur ?",
        options: ["Postman", "Git", "DevTools", "Docker"],
        answer: "DevTools"},
    {
        id: 55,
        question: "Quel est le rôle de JSON ?",
        options: ["Styliser la page", "Gérer des routes", "Échanger des données", "Créer un serveur"],
        answer: "Échanger des données"},
    {
        id: 56,
        question: "Que fait la commande ''ng serve'' ?",
        options: ["Compile et lance le serveur", "Installe Angular", "Teste les composants", "Génère un module"],
        answer: "Compile et lance le serveur"},
    {
        id: 57,
        question: "Quel mot-clé déclare une constante en JavaScript ?",
        options: ["let", "const", "static", "var"],
        answer: "const"
      },
    {
        id: 58,
        question: "Quelle propriété CSS contrôle la taille du texte ?",
        options: ["font-size", "text-style", "text-height", "size"],
        answer: "font-size"
      },
    {
      id: 59,
      question: "Quel attribut HTML permet de donner une valeur par défaut à un champ input ?",
      options: ["default", "placeholder", "value", "data"],
      answer: "value"
    },
    {
      id: 60,
      question: "Quelle propriété CSS permet d’ajouter une ombre au texte ?",
      options: ["box-shadow", "text-shadow", "font-shadow", "shadow"],
      answer: "text-shadow"
    },
    {
      id: 61,
      question: "Quel est le langage de requête utilisé avec les bases relationnelles ?",
      options: ["NoSQL", "XML", "SQL", "ORM"],
      answer: "SQL"},
    {
      id: 62,
      question: "Quelle extension de fichier est utilisée pour TypeScript ?",
      options: [".ts", ".js", ".jsx", ".tsx"],
      answer: ".ts"
    }

];
