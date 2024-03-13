import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from '../services/produits.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent {
  products: any[] = [];
@Output() item= new EventEmitter()
  constructor(
    private produitsService: ProduitsService,
    private panierService: PanierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produitsService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  ajouterAuPanier(): void {
   
  }
}
