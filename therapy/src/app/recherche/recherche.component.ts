import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../services/produits.service';
import { BehaviorService } from '../services/behavior.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  receivedName: string = '';
  products: any[] = [];

  constructor(
    private behaviorService: BehaviorService,
    private produitsService: ProduitsService
  ) {}

  ngOnInit(): void {
    this.behaviorService.getName().subscribe(resultName => {
      console.log('Result from receive:', resultName);
      this.receivedName = resultName;
      this.loadProducts();
    });
  }

  private loadProducts(): void {
    this.produitsService.getProducts().subscribe(
      (data) => {
        // Filtrer les produits par nom
        this.products = data.filter(product => product.nom === this.receivedName);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
