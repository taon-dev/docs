
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSudoApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevSudoComponent )
  },
];
        