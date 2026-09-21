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
]
