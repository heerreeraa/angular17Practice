import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
     path: 'header',
     loadComponent: () => import('./components/header/header.component').then(m => m.HeaderComponent)
    }
];
