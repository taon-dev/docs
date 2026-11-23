
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevUiApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevUiComponent )
  },
];
        