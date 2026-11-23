
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksEntitiesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./entities.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksEntitiesMdComponent)
  },
];

    