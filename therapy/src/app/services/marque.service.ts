// marque.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  marques: any[] = [
    {
      image: 'assets/marques/b.jpg',
      description: 'bourjois est une marque de cosmétiques française fondée en 1935, proposant une gamme de produits de maquillage, de soins de la peau et de parfums de luxe pour les femmes et les hommes. La marque est connue pour ses produits innovants et sa collaboration avec des célébrités et des designers renommés.'
    },
    {
      image: 'assets/marques/ccc.jpg',
      description: ' C’est pourquoi nous sommes aussi exigeants pour l’emballage de nos produits : il doit non seulement protéger le contenu, mais être aussi très esthétique. Dans le même temps, nous nous sommes également fixés pour objectifs d’éviter le gaspillage des ressources et d’utiliser autant que possible les matériaux les plus respectueux de l’environnement.'
    },
    {
      image: 'assets/marques/s.jpg',
      description: 'Afin d’assurer des produits sûrs et efficaces aux consommateurs, la marque rassure ces derniers en agissant avec transparence concernant les soins qu’elle développe. En effet, ils sont utilisés par de nombreuses familles, et SVR est soucieuse de la tolérance, mais aussi de la sécurité de ses produits.'
    },
    
    {
      image: 'assets/marques/ee.jpg',
      description: 'Essence est une marque de cosmétiques proposant des produits de maquillage créatifs et tendance à des prix abordables pour tous les styles et budgets. Des ingrédients naturels et végan sont utilisés chaque fois que cela est possible. Vous pouvez profiter de nos produits l’esprit tranquille !'
    },
    {
      image: 'assets/marques/eee.jpg',
      description: 'Revolution Beauty, également connue sous le nom de Makeup Revolution, est une marque de cosmétiques britannique proposant une large gamme de produits de maquillage de qualité à des prix abordables. La marque est connue pour sa créativité et son engagement envers la diversité, offrant des produits adaptés à tous les types de peau et à toutes les couleurs de peau.'
    },
    // Ajoutez d'autres objets pour chaque marque
  ];

  constructor() { }

  getMarques(): any[] {
    return this.marques;
  }
}
