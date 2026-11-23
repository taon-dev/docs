
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsIsomorphicCodeRegionsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./isomorphic-code-regions.component').then(m => m.TaonDevDocsAiDocsIsomorphicCodeRegionsMdComponent)
  },
];

    