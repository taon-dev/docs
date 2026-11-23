
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTaonAdminSeoMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./seo.component').then(m => m.IsomorphicLibV21DocsTaonAdminSeoMdComponent)
  },
];

    