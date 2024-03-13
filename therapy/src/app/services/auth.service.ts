// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(email: string, password: string) {
    // Appeler votre backend pour gérer la connexion
    console.log('Login with:', email, password);
    // Ajouter la logique de gestion de la connexion
  }

  register(email: string, password: string) {
    // Appeler votre backend pour gérer l'inscription
    console.log('Register with:', email, password);
    // Ajouter la logique de gestion de l'inscription
  }
}
