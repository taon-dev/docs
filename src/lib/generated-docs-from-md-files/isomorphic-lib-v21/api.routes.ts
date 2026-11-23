
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21ApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.IsomorphicLibV21Component )
  },
];
        