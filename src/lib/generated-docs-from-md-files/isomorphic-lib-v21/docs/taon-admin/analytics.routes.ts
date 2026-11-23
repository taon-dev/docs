
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTaonAdminAnalyticsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./analytics.component').then(m => m.IsomorphicLibV21DocsTaonAdminAnalyticsMdComponent)
  },
];

    