
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsTaonBuildMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./taon-build.component').then(m => m.TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsTaonBuildMdComponent)
  },
];

    