
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiRulesBackendMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./backend.component').then(m => m.IsomorphicLibV21AiRulesBackendMdComponent)
  },
];

    