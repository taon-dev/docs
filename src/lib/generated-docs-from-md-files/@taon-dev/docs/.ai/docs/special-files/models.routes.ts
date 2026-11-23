
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsSpecialFilesModelsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./models.component').then(m => m.TaonDevDocsAiDocsSpecialFilesModelsMdComponent)
  },
];

    