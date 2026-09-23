import {Route} from '@angular/router';

export const EXERCICES_ROUTES: Route[] = [
  {
    path: 'text-interpolation',
    loadComponent: ()=> import('./text-interpolation-exercice/text-interpolation-exercice').then(m => m.TextInterpolationExercice)
  },
  {
    path: 'attribute-binding',
    loadComponent: ()=>import('./attribute-binding-exercice/attribute-binding-exercice').then(m=>m.AttributeBindingExercice)
  },
  {
    path: 'event-binding',
    loadComponent: ()=>import('./event-binding-exercice/event-binding-exercice').then(m=>m.EventBindingExercice)
  },
  {
    path: 'meteo',
    loadComponent: ()=>import('./meteo/meteo').then(m=>m.Meteo)
  },
  {
    path: 'random-user',
    loadComponent: ()=>import('./random-user-api/random-user-api').then(m=>m.RandomUserApi)
  }
]
