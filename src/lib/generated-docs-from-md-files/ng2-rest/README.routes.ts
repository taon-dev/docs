
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const Ng2RestReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.Ng2RestReadmeMdComponent)
  },
];

    