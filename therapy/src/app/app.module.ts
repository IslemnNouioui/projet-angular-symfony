// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MarqueComponent } from './marque/marque.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { PromoComponent } from './promo/promo.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitsService } from './services/produits.service';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProduitdetailleComponent } from './produitdetaille/produitdetaille.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    MarqueComponent,
    BestsellerComponent,
    PromoComponent,
    ProduitComponent,
    ContactComponent,
    RegisterComponent,
    SignupComponent,
    RechercheComponent,
    ProduitdetailleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
