
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevAnalyticsApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevAnalyticsComponent )
  },
];
        