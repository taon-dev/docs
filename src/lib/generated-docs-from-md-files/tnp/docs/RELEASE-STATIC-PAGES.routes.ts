
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsReleaseStaticPagesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./RELEASE-STATIC-PAGES.component').then(m => m.TnpDocsReleaseStaticPagesMdComponent)
  },
];

    