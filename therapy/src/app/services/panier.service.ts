import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  ajouterProduit(produit: any) {
    throw new Error('Method not implemented.');
  }
  getProduits() {
    throw new Error('Method not implemented.');
  }
  private mySendProduct = new BehaviorSubject<number[]>([]);

  constructor() {}

  // Ajouter un produit à la liste des produits du panier
  addProductToCart(productId: number): void {
    const currentProducts = this.mySendProduct.value;
    const updatedProducts = [...currentProducts, productId];
    this.mySendProduct.next(updatedProducts);
  }

  // Obtenir la liste des produits du panier
  getProductsInCart(): Observable<number[]> {
    return this.mySendProduct.asObservable();
  }
}
