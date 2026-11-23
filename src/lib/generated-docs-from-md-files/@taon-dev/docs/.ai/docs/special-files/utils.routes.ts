
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsSpecialFilesUtilsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./utils.component').then(m => m.TaonDevDocsAiDocsSpecialFilesUtilsMdComponent)
  },
];

    