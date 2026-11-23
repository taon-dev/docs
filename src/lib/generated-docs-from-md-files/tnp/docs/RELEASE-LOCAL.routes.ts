
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsReleaseLocalMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./RELEASE-LOCAL.component').then(m => m.TnpDocsReleaseLocalMdComponent)
  },
];

    