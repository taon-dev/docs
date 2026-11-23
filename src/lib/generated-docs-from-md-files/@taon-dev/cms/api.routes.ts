
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevCmsApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevCmsComponent )
  },
];
        