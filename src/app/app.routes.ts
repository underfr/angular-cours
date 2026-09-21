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
    path: 'exercices/text-interpolation',
    loadComponent: ()=>import('./pages/exercices/text-interpolation-exercice/text-interpolation-exercice').then(m => m.TextInterpolationExercice)
  },
  {
    path: 'exercices/attribute-binding',
    loadComponent: ()=>import('./pages/exercices/attribute-binding-exercice/attribute-binding-exercice').then(m => m.AttributeBindingExercice)
  },
  {
    path: '**',
    loadComponent: ()=>import('./pages/not-found/not-found').then(m => m.NotFound),
  },
];
