
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevI18NSrcAppAutoGenDocsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.auto-gen-docs.component').then(m => m.TaonDevI18NSrcAppAutoGenDocsMdComponent)
  },
];

    