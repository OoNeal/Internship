import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {

  selectedTech: { name: string, description: string, link?: string } | null = null;
  opened = false;
  technologies = [
    {
      name: 'Framework',
      description: 'Un framework est un ensemble de bibliothèques et d\'outils qui fournit une structure standard pour développer des applications logicielles. Il définit une architecture de base et inclut des composants réutilisables pour les aspects courants du développement, comme l\'interface utilisateur, la gestion des données, et la communication réseau. Les frameworks permettent aux développeurs de gagner du temps en fournissant des solutions prêtes à l\'emploi pour des fonctionnalités courantes, tout en imposant une structure qui aide à maintenir la cohérence et la qualité du code. Exemples de frameworks populaires incluent Angular pour les applications web, Spring pour les applications Java, et Django pour les applications Python.',
      link: 'https://fr.wikipedia.org/wiki/Framework'
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
