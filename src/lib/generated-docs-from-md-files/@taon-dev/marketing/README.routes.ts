
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevMarketingReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./README.component').then(m => m.TaonDevMarketingReadmeMdComponent)
  },
];

    