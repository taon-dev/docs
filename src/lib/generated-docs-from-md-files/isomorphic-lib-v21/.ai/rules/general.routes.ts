
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiRulesGeneralMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./general.component').then(m => m.IsomorphicLibV21AiRulesGeneralMdComponent)
  },
];

    