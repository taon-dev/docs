
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsCopyManagerCopyManagerMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./COPY-MANAGER.component').then(m => m.TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsCopyManagerCopyManagerMdComponent)
  },
];

    