
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsSpecialFilesValidatorsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./validators.component').then(m => m.IsomorphicLibV21AiDocsSpecialFilesValidatorsMdComponent)
  },
];

    