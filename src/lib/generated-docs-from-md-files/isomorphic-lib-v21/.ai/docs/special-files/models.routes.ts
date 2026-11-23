
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsSpecialFilesModelsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./models.component').then(m => m.IsomorphicLibV21AiDocsSpecialFilesModelsMdComponent)
  },
];

    