
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevI18NApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevI18NComponent )
  },
];
        