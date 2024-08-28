import { Component } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {

  selectedTech: { name: string, description: string, link: string } | null = null;
  opened = false;
  technologies = [
    {
      name: 'HTTP',
      description: 'HTTP est le protocole de communication utilisé sur le web pour échanger des informations entre un client (généralement un navigateur web) et un serveur. Il permet de demander et de recevoir des pages web, des images, des vidéos, et d\'autres types de contenus. HTTP fonctionne en établissant une connexion entre le client et le serveur, où le client envoie une requête HTTP (GET, POST, etc.), et le serveur répond avec une réponse HTTP contenant les données demandées. HTTP est la base de la communication sur le web, et ses versions plus récentes (comme HTTP/2 et HTTP/3) améliorent les performances et la sécurité.',
      link: 'https://developer.mozilla.org/fr/docs/Web/HTTP',
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
