import { Routes } from '@angular/router';

import { Inscription } from './inscription/inscription';
import { Profil } from './profil/profil';
import { Reservation } from './reservation/reservation';
import { Contact } from './contact/contact';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: 'inscription',
    component: Inscription
  },

  {
    path: 'profil',
    component: Profil
  },

  {
    path: 'reservation',
    component: Reservation
  }

];