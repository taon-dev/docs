
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksMiddlewaresMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./middlewares.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksMiddlewaresMdComponent)
  },
];

    