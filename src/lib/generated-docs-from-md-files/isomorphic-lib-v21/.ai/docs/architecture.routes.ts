
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsArchitectureMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./architecture.component').then(m => m.IsomorphicLibV21AiDocsArchitectureMdComponent)
  },
];

    