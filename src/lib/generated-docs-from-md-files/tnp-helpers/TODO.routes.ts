
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpHelpersTodoMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./TODO.component').then(m => m.TnpHelpersTodoMdComponent)
  },
];

    