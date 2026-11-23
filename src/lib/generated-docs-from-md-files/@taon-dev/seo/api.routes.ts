
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSeoApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevSeoComponent )
  },
];
        