
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksMiddlewaresMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./middlewares.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksMiddlewaresMdComponent)
  },
];

    