
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiRulesEnvironmentVariablesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./environment-variables.component').then(m => m.TaonDevDocsAiRulesEnvironmentVariablesMdComponent)
  },
];

    