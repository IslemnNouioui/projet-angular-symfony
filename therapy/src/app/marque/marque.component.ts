// marque.component.ts
import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../services/marque.service'; // Assurez-vous d'ajuster le chemin vers votre service

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  marques: any[] = [];

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.marques = this.marqueService.getMarques();
  }
}
