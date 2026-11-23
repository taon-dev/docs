
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksControllersMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./controllers.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksControllersMdComponent)
  },
];

    