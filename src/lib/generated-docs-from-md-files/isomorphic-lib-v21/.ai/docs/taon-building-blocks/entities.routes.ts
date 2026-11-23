
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksEntitiesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./entities.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksEntitiesMdComponent)
  },
];

    