
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevDocsComponent )
  },
];
        