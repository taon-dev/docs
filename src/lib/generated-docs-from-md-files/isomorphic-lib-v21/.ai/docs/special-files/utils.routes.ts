
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsSpecialFilesUtilsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./utils.component').then(m => m.IsomorphicLibV21AiDocsSpecialFilesUtilsMdComponent)
  },
];

    