
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevI18NReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TaonDevI18NReadmeMdComponent)
  },
];

    