// contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      this.apiService.sendFormData(formData).subscribe(
        (response) => {
          console.log('Réponse du serveur :', response);
          // Gérer la réponse du serveur ici, par exemple, afficher un message à l'utilisateur.
        },
        (error) => {
          console.error('Erreur lors de la requête au serveur :', error);
        }
      );
    }
  }
}
