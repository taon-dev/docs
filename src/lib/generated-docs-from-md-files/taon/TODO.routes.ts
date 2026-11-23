
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonTodoMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./TODO.component').then(m => m.TaonTodoMdComponent)
  },
];

    