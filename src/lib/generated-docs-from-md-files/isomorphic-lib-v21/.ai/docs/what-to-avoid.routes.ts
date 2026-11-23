
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsWhatToAvoidMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./what-to-avoid.component').then(m => m.IsomorphicLibV21AiDocsWhatToAvoidMdComponent)
  },
];

    