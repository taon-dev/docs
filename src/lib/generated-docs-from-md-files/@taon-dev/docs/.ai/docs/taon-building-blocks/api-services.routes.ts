
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksApiServicesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api-services.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksApiServicesMdComponent)
  },
];

    