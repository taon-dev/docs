
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsIsomorphicCodeRegionsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./isomorphic-code-regions.component').then(m => m.IsomorphicLibV21AiDocsIsomorphicCodeRegionsMdComponent)
  },
];

    