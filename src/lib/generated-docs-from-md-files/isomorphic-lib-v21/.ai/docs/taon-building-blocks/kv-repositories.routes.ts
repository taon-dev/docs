
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksKvRepositoriesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kv-repositories.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksKvRepositoriesMdComponent)
  },
];

    