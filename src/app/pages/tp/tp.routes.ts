import {Route} from '@angular/router';

export const TP_ROUTES: Route[] = [
  {
    path: 'directives',
    loadComponent: ()=> import('./directives/directives').then(m => m.Directives)
  },
  {
    path: 'component-communication',
    loadComponent: ()=>import('./component-communication/component-communication').then(m=>m.ComponentCommunication)
  }
]
