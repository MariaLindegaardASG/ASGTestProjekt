import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ContactComponent } from './contact/contact.component';
import { LeaseFormComponent } from './lease-form/lease-form.component';

export const appRoutes: Routes = [
  // Route for the home page, which is displayed by default
  { path: '', component: HomeComponent },

  // Route for the about page
  { path: 'about', component: AboutComponent },

  // Route for displaying details of a specific car
  { path: 'car-detail', component: CarDetailComponent },

  // Route for the contact page
  { path: 'contact', component: ContactComponent },

  // Route for the lease form page
  { path: 'lease-form', component: LeaseFormComponent },

  // Route for displaying details of a specific car by ID
  { path: 'car-detail/:id', component: CarDetailComponent },

  // Wildcard route that redirects to the home page if the URL doesn't match any defined route
  { path: '**', redirectTo: '' }
];
