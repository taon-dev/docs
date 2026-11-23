
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksSubscriberMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./subscriber.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksSubscriberMdComponent)
  },
];

    