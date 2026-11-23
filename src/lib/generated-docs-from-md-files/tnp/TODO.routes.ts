
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpTodoMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./TODO.component').then(m => m.TnpTodoMdComponent)
  },
];

    