
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksKvRepositoriesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kv-repositories.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksKvRepositoriesMdComponent)
  },
];

    