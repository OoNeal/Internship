import { Component } from '@angular/core';

@Component({
  selector: 'app-info-dep',
  templateUrl: './info-dep.component.html',
  styleUrls: ['./info-dep.component.scss']
})
export class InfoDepComponent {
  selectedTech: { name: string, description: string, link?: string } | null = null;
  opened = false;
  technologies = [
    {
      name: 'IDE',
      description: 'Un IDE est un environnement de développement intégré, c\'est-à-dire un logiciel qui regroupe plusieurs outils utilisés pour le développement de logiciels. Un IDE typique inclut un éditeur de code source, un débogueur, un compilateur ou interpréteur, et d\'autres outils comme un gestionnaire de versions (ex: Git) et des extensions pour supporter différentes technologies (ex: HTML, CSS, JavaScript). Les IDE les plus courants sont Visual Studio Code, IntelliJ IDEA, Eclipse, et PyCharm. Ils simplifient le processus de développement en intégrant tous les outils nécessaires dans une seule interface.',
    },
    {
      name: 'IntelliJ',
      description: 'IntelliJ IDEA est un environnement de développement intégré (IDE) développé par JetBrains, principalement utilisé pour le développement Java, bien qu\'il prenne en charge de nombreux autres langages de programmation. Il est apprécié pour ses fonctionnalités avancées comme l\'autocomplétion intelligente, le refactoring de code, l\'intégration avec les systèmes de contrôle de version, et le support pour les frameworks modernes. IntelliJ offre une expérience de développement fluide, augmentant la productivité des développeurs grâce à ses outils puissants et son interface utilisateur bien conçue.',
      link: 'https://fr.wikipedia.org/wiki/IntelliJ_IDEA'
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
