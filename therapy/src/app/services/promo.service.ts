import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  productdata=[{id:5, nom:'catrice',description: 'Rouge à l\'évres-Vegan collagen Matt Lipstick', image:'assets/rouge1.png', prix:18.9, promo:15.12,stock:'in stock'},
  {id:22, nom:'Kiko', description:'Masque - Hydra ', image:'assets/masquek.png', prix: 105.9, promo:95.9 ,stock:'in stock'},
  {id:15,nom: 'SVR',description: ' Crème-Hydraliane', image:'assets/creme.png',prix: 46, promo:39.5,stock:'in stock'},
  {id:21, nom:'Kiko', description:'Palette Fards à Paupiére - Ray Of Love', image:'assets/palettek1.png',stock:'in stock',prix:  89.9, promo:59.9},
  {id:16, nom:'SVR', description:'Gel -Physiopure', image:'assets/gel.png', prix:37, promo:29.6,stock:'hors stock'},]
  constructor() { }
}
