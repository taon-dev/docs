
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTaonAdminMarketingMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./marketing.component').then(m => m.IsomorphicLibV21DocsTaonAdminMarketingMdComponent)
  },
];

    