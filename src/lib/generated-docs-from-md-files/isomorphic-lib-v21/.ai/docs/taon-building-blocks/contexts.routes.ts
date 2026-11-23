
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksContextsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contexts.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksContextsMdComponent)
  },
];

    