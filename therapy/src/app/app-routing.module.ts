import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { MarqueComponent } from './marque/marque.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { PromoComponent } from './promo/promo.component';
import { ContactComponent } from './contact/contact.component';

import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { PanierComponent } from './panier/panier.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProduitdetailleComponent } from './produitdetaille/produitdetaille.component';

const routes: Routes = [
  {
    path:'acceuil',
    component:AcceuilComponent
  },
  {
    path:'produit',
    component:ProduitComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'marque',
    component:MarqueComponent
  },
  {
    path:'bestseller',
    component:BestsellerComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'promo',
    component:PromoComponent

  },
  {path:'contact',
component:ContactComponent},
{path:'panier',
component:PanierComponent},
{path:'recherche',
component:RechercheComponent},
{
  path:'detail/:productName',
  component:ProduitdetailleComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
