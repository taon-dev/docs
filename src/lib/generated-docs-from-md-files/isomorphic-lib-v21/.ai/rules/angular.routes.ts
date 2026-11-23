
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiRulesAngularMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./angular.component').then(m => m.IsomorphicLibV21AiRulesAngularMdComponent)
  },
];

    