
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsSpecialFilesValidatorsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./validators.component').then(m => m.TaonDevDocsAiDocsSpecialFilesValidatorsMdComponent)
  },
];

    