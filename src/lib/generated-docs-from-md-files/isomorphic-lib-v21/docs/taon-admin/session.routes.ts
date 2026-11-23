
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTaonAdminSessionMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./session.component').then(m => m.IsomorphicLibV21DocsTaonAdminSessionMdComponent)
  },
];

    