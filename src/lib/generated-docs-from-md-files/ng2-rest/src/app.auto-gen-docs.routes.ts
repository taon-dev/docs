
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const Ng2RestSrcAppAutoGenDocsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.auto-gen-docs.component').then(m => m.Ng2RestSrcAppAutoGenDocsMdComponent)
  },
];

    