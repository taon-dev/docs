
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSudoReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TaonDevSudoReadmeMdComponent)
  },
];

    