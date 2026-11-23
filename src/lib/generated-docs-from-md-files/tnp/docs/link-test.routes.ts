
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsLinkTestMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./link-test.component').then(m => m.TnpDocsLinkTestMdComponent)
  },
];

    