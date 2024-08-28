import { Component } from '@angular/core';

@Component({
  selector: 'app-cypress',
  templateUrl: './cypress.component.html',
  styleUrls: ['./cypress.component.scss']
})
export class CypressComponent {
  selectedTech: { name: string, description: string, link?: string } | null = null;
  opened = false;
  technologies = [
    {
      name: 'JSON',
      description: 'JSON est un format de données léger et facile à lire utilisé pour échanger des informations entre un client et un serveur. Il est principalement utilisé dans les communications web pour envoyer et recevoir des données structurées. JSON est un format texte qui est facile à lire pour les humains et à parser pour les machines, ce qui en fait un choix populaire pour les APIs web. Il représente des objets sous forme de paires clé-valeur, similaire à la syntaxe des objets en JavaScript.',
      link: 'https://fr.wikipedia.org/wiki/JavaScript_Object_Notation'
    },
    {
      name: 'API',
      description: 'Une API est une interface qui permet à différents logiciels de communiquer entre eux. Elle définit un ensemble de règles et de protocoles pour accéder aux fonctionnalités d\'une application, d\'un service ou d\'un système. Les APIs sont essentielles pour l\'intégration entre différentes applications, en permettant par exemple à une application mobile d\'accéder aux fonctionnalités d\'un serveur web ou à un service externe comme une passerelle de paiement. Les APIs REST (Representational State Transfer) et GraphQL sont parmi les plus couramment utilisées pour les services web.',
      link: 'https://fr.wikipedia.org/wiki/Interface_de_programmation'
    },

  ];

  openSidenav(techName: string) {
    this.selectedTech = this.technologies.find(tech => tech.name === techName) || null;
    this.opened = true;
  }

  closeSidenav() {
    this.opened = false;
  }
}
