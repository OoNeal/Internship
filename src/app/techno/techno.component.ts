import { Component } from '@angular/core';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss']
})
export class TechnoComponent {
  selectedTech: { name: string, description: string, link: string } | null = null;
  opened = false;
  technologies = [
    {
      name: 'Angular',
      description: 'Angular est une plateforme de développement pour créer des applications web dynamiques et réactives. Utilisé principalement pour le développement de front-end, Angular permet de structurer et de gérer les applications de manière efficace grâce à ses composants, modules, et services.',
      link: 'https://angular.io/',
    },
    {
      name: 'Cypress',
      description: 'Cypress est un outil de test end-to-end pour les applications web. Il permet aux développeurs de tester rapidement et efficacement leurs applications directement dans le navigateur, offrant des fonctionnalités comme le rechargement à chaud, les captures d\'écran, et des outils de débogage avancés.',
      link: 'https://www.cypress.io/',
    },
    {
      name: 'HTML',
      description: 'HTML (HyperText Markup Language) est le langage standard utilisé pour créer et structurer le contenu des pages web. Il est à la base de tout document web, permettant de définir la structure des textes, images, liens, et autres éléments présents sur une page.',
      link: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language',
    },
    {
      name: 'SASS',
      description: 'SASS (Syntactically Awesome Stylesheets) est un préprocesseur CSS qui permet d\'écrire des feuilles de style plus maintenables et modulares. SASS offre des fonctionnalités comme les variables, les boucles, les conditions, et l\'imbrication, rendant le CSS plus puissant et facile à gérer.',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'TypeScript',
      description: 'TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques au langage. Il permet aux développeurs d\'écrire du code plus robuste et maintenable, avec un meilleur outillage pour la détection d\'erreurs et l\'autocomplétion.',
      link: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Java',
      description: 'Java est un langage de programmation orienté objet largement utilisé pour le développement d\'applications d\'entreprise, de systèmes embarqués, et d\'applications mobiles. Grâce à sa portabilité et à sa grande communauté, Java est un choix populaire pour les projets à grande échelle.',
      link: 'https://www.java.com/',
    },
    {
      name: 'PHP',
      description: 'PHP (Hypertext Preprocessor) est un langage de script principalement utilisé pour le développement web côté serveur. Il permet de créer des pages web dynamiques en intégrant des bases de données et en générant du contenu personnalisé pour les utilisateurs.',
      link: 'https://www.php.net/',
    },
    {
      name: 'Spring',
      description: 'Spring est un framework Java open-source utilisé pour le développement d\'applications d\'entreprise. Il facilite la création d\'applications robustes, testables et évolutives en fournissant une infrastructure complète pour gérer les services, la sécurité, la persistance des données, etc.',
      link: 'https://spring.io/',
    },
    {
      name: 'Symfony',
      description: 'Symfony est un framework PHP qui aide à créer des applications web robustes et évolutives. Il est utilisé pour construire des applications web complexes et repose sur des composants réutilisables pour assurer la rapidité et la stabilité du développement.',
      link: 'https://symfony.com/',
    },
    {
      name: 'Hibernate',
      description: 'Hibernate est un framework de mappage objet-relationnel (ORM) pour Java. Il simplifie l\'interaction avec les bases de données en permettant aux développeurs de travailler avec des objets Java au lieu de requêtes SQL directes.',
      link: 'https://hibernate.org/',
    },
    {
      name: 'Quarkus',
      description: 'Quarkus est un framework Java moderne conçu pour le cloud et le développement natif. Il permet de créer des applications Java extrêmement rapides, avec une faible consommation de mémoire, idéales pour les environnements serverless ou en conteneurs.',
      link: 'https://quarkus.io/',
    },
    {
      name: 'Doctrine',
      description: 'Doctrine est une bibliothèque de mappage objet-relationnel (ORM) pour PHP, intégrée dans Symfony et d\'autres frameworks. Elle facilite l\'interaction avec les bases de données en permettant aux développeurs de manipuler des objets PHP plutôt que des tables SQL.',
      link: 'https://www.doctrine-project.org/',
    },
    {
      name: 'Jira',
      description: 'Jira est un outil de gestion de projet et de suivi des bugs développé par Atlassian. Utilisé principalement par les équipes de développement logiciel, Jira aide à planifier, suivre et gérer les tâches et les projets de manière efficace.',
      link: 'https://www.atlassian.com/software/jira',
    },
    {
      name: 'Gerrit',
      description: 'Gerrit est un outil de révision de code utilisé pour le contrôle de version Git. Il permet aux développeurs de soumettre des modifications de code pour révision avant qu\'elles ne soient fusionnées dans le code principal, assurant ainsi une meilleure qualité du code.',
      link: 'https://www.gerritcodereview.com/',
    },
    {
      name: 'Git',
      description: 'Git est un système de contrôle de version distribué largement utilisé dans le développement logiciel. Il permet aux équipes de suivre les modifications du code source, de collaborer efficacement et de gérer différentes versions d\'un projet.',
      link: 'https://git-scm.com/',
    },
    {
      name: 'Jenkins',
      description: 'Jenkins est un outil d\'intégration continue open-source qui automatise les processus de développement, comme la compilation, les tests et le déploiement. Il aide à assurer la qualité du code et la rapidité des livraisons.',
      link: 'https://www.jenkins.io/',
    },
    {
      name: 'Teams',
      description: 'Microsoft Teams est une plateforme de communication collaborative qui permet aux équipes de travailler ensemble via des discussions, des appels, et des outils de collaboration intégrés comme le partage de fichiers et la gestion des tâches.',
      link: 'https://www.microsoft.com/fr-fr/microsoft-teams/group-chat-software',
    },
    {
      name: 'Trello',
      description: 'Trello est un outil de gestion de projet visuel qui utilise des tableaux, des listes, et des cartes pour organiser les tâches et les projets. Il est apprécié pour sa simplicité et son approche flexible de la gestion des flux de travail.',
      link: 'https://trello.com/',
    }
  ];



  openSidenav(techName: string) {
    this.selectedTech = this.technologies.find(tech => tech.name === techName) || null;
    this.opened = true;
  }

  closeSidenav() {
    this.opened = false;
  }
}
