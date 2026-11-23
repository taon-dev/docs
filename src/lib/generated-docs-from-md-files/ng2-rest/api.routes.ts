
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const Ng2RestApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.Ng2RestComponent )
  },
];
        