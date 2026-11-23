
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksProvidersMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./providers.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksProvidersMdComponent)
  },
];

    