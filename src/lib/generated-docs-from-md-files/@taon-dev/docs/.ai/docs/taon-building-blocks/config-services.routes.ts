
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksConfigServicesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./config-services.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksConfigServicesMdComponent)
  },
];

    