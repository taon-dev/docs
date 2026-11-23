
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsCiCdMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./CI-CD.component').then(m => m.TnpDocsCiCdMdComponent)
  },
];

    