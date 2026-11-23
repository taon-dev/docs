
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TnpReadmeMdComponent)
  },
];

    