
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TnpComponent )
  },
];
        