
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksSubscriberMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./subscriber.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksSubscriberMdComponent)
  },
];

    