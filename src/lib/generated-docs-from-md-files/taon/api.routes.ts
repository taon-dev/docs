
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonComponent )
  },
];
        