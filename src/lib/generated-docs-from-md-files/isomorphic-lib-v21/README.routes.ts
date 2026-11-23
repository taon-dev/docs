
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21ReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.IsomorphicLibV21ReadmeMdComponent)
  },
];

    