
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiRulesFileNamingConventionsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./file-naming-conventions.component').then(m => m.IsomorphicLibV21AiRulesFileNamingConventionsMdComponent)
  },
];

    