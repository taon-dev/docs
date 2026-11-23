
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksApiServicesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api-services.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksApiServicesMdComponent)
  },
];

    