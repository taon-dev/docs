
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiRulesAngularMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./angular.component').then(m => m.TaonDevDocsAiRulesAngularMdComponent)
  },
];

    