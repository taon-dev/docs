
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksRepositoriesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./repositories.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksRepositoriesMdComponent)
  },
];

    