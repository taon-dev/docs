
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevCmsTodoMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./TODO.component').then(m => m.TaonDevCmsTodoMdComponent)
  },
];

    