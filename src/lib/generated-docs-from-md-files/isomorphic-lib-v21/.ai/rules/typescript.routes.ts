
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiRulesTypescriptMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./typescript.component').then(m => m.IsomorphicLibV21AiRulesTypescriptMdComponent)
  },
];

    