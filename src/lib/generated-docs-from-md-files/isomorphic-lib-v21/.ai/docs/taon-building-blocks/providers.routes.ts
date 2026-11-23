
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksProvidersMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./providers.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksProvidersMdComponent)
  },
];

    