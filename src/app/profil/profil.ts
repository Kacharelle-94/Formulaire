import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {

  nom = '';
  prenom = '';
  dateNaissance = '';

  rue = '';
  ville = '';
  codePostal = '';

  enregistrer(formulaire: any) {
    console.log(formulaire.value);
    formulaire.reset();
  }
}