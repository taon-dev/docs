
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksConfigServicesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./config-services.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksConfigServicesMdComponent)
  },
];

    