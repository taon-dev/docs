
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsReleaseCloudMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./RELEASE-CLOUD.component').then(m => m.TnpDocsReleaseCloudMdComponent)
  },
];

    