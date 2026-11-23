
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSessionReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TaonDevSessionReadmeMdComponent)
  },
];

    