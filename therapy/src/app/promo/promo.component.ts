import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../services/produits.service';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  products: any[] = [];


  constructor(private produitsService: ProduitsService,
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.produitsService.getProducts().subscribe(
      (data) => {
        this.products = data;
       // console.log('my Products:', this.products); // Check if data is received

        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  

}