import { Routes } from '@angular/router';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';

export const AppLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'contact',   component: ContactComponent },
];