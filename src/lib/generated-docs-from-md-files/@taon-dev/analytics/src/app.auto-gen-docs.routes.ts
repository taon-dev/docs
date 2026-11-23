
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevAnalyticsSrcAppAutoGenDocsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.auto-gen-docs.component').then(m => m.TaonDevAnalyticsSrcAppAutoGenDocsMdComponent)
  },
];

    