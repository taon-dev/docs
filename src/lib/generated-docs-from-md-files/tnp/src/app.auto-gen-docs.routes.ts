
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpSrcAppAutoGenDocsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.auto-gen-docs.component').then(m => m.TnpSrcAppAutoGenDocsMdComponent)
  },
];

    