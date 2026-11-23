
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevECommerceApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevECommerceComponent )
  },
];
        