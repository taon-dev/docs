
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTaonAdminECommerceMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./e-commerce.component').then(m => m.IsomorphicLibV21DocsTaonAdminECommerceMdComponent)
  },
];

    