
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpSrcLibProjectAbstractTaonWorkerDevModeDevModeReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dev-mode.README.component').then(m => m.TnpSrcLibProjectAbstractTaonWorkerDevModeDevModeReadmeMdComponent)
  },
];

    