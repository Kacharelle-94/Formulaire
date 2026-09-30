import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css'
})
export class Inscription {

  nomComplet = '';
  email = '';
  places: number | null = null;
  conditions = false;

  inscrire(formulaire: any) {
    console.log(formulaire.value);
    formulaire.reset();
  }
}