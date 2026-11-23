
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsReleaseManualMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./RELEASE-MANUAL.component').then(m => m.TnpDocsReleaseManualMdComponent)
  },
];

    