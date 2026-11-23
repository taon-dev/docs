
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiRulesEnvironmentVariablesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./environment-variables.component').then(m => m.IsomorphicLibV21AiRulesEnvironmentVariablesMdComponent)
  },
];

    