
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpHelpersApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TnpHelpersComponent )
  },
];
        