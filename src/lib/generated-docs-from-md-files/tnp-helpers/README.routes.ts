
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpHelpersReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TnpHelpersReadmeMdComponent)
  },
];

    