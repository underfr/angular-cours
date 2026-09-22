import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: ()=>import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'home',
    loadComponent: ()=>import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'contact',
    loadComponent: ()=>import('./pages/contact/contact').then(m => m.Contact),
  },
  {
    path: 'exercices',
    loadChildren: ()=> import('./pages/exercices/exercices.routes').then(m=>m.EXERCICES_ROUTES)
  },
  {
    path: 'tp',
    loadChildren: ()=>import('./pages/tp/tp.routes').then(m=>m.TP_ROUTES)
  },
  {
    path: '**',
    loadComponent: ()=>import('./pages/not-found/not-found').then(m => m.NotFound),
  },
];
