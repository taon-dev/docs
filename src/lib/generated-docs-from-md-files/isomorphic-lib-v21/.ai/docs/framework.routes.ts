
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsFrameworkMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./framework.component').then(m => m.IsomorphicLibV21AiDocsFrameworkMdComponent)
  },
];

    