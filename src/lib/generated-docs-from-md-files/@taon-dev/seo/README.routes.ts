
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSeoReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TaonDevSeoReadmeMdComponent)
  },
];

    