
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDeveloperGuideMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./DEVELOPER_GUIDE.component').then(m => m.TnpDeveloperGuideMdComponent)
  },
];

    