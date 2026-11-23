
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTaonAdminBaselineMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./baseline.component').then(m => m.IsomorphicLibV21DocsTaonAdminBaselineMdComponent)
  },
];

    