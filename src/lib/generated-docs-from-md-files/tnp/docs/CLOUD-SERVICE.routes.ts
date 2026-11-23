
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsCloudServiceMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./CLOUD-SERVICE.component').then(m => m.TnpDocsCloudServiceMdComponent)
  },
];

    