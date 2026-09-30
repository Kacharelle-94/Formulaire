import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css'
})
export class Reservation {

  nom = '';
  email = '';

  dateArrivee = '';
  dateDepart = '';
  personnes: number | null = null;

  adresseFacturationDifferente = false;

  rue = '';
  ville = '';
  codePostal = '';

  reserver(formulaire: any) {
    console.log(formulaire.value);
    formulaire.reset();
  }
}