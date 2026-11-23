
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSessionTodoMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./TODO.component').then(m => m.TaonDevSessionTodoMdComponent)
  },
];

    