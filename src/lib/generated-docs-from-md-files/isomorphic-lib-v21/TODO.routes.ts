
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21TodoMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./TODO.component').then(m => m.IsomorphicLibV21TodoMdComponent)
  },
];

    