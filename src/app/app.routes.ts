import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ContactComponent } from './contact/contact.component';
import { LeaseFormComponent } from './lease-form/lease-form.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'car-detail', component: CarDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lease-form', component: LeaseFormComponent },
  { path: 'car-detail/:id', component: CarDetailComponent },
  { path: '**', redirectTo: '' }
];
