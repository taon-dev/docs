
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksControllersMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./controllers.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksControllersMdComponent)
  },
];

    