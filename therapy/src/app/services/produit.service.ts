// produit.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produitSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  produit$: Observable<any> = this.produitSubject.asObservable();

  setProduit(produit: any): void {
    this.produitSubject.next(produit);
  }
}
