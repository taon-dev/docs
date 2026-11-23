
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTaonAdminCmsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./cms.component').then(m => m.IsomorphicLibV21DocsTaonAdminCmsMdComponent)
  },
];

    