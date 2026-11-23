
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevUiReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TaonDevUiReadmeMdComponent)
  },
];

    