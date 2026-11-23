
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsExamplesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./EXAMPLES.component').then(m => m.TnpDocsExamplesMdComponent)
  },
];

    