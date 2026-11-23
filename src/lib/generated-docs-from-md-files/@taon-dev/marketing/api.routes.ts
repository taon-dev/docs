
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevMarketingApiMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api.component').then(m => m.TaonDevMarketingComponent )
  },
];
        