
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSessionApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevSessionComponent )
  },
];
        