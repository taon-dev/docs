
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksContextsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contexts.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksContextsMdComponent)
  },
];

    