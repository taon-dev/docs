
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiRulesGeneralMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./general.component').then(m => m.TaonDevDocsAiRulesGeneralMdComponent)
  },
];

    