// panier.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent {
imgPath: any;
minus(arg0: any) {
throw new Error('Method not implemented.');
}
plus(arg0: any) {
throw new Error('Method not implemented.');
}
removeCart(arg0: any) {
throw new Error('Method not implemented.');
}
  quantities: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
cart: any;

  passerCommande() {
    // Ajoutez ici la logique pour passer la commande
    console.log('Commande passée!');
  }
}
