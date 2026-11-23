
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksRepositoriesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./repositories.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksRepositoriesMdComponent)
  },
];

    