import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../services/produits.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  products: any[] = [];

  constructor(private produitsService: ProduitsService) {}

  ngOnInit(): void {
    this.produitsService.getProducts().subscribe(
      (data) => {
        // Sélectionner les 4 derniers produits
        this.products = data.slice(-4);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}