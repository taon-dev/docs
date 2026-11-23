
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpHelpersSrcAppAutoGenDocsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.auto-gen-docs.component').then(m => m.TnpHelpersSrcAppAutoGenDocsMdComponent)
  },
];

    