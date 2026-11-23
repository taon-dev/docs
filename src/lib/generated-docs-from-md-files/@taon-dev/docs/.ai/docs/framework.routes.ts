
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsFrameworkMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./framework.component').then(m => m.TaonDevDocsAiDocsFrameworkMdComponent)
  },
];

    