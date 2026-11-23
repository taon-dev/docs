
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiRulesTypescriptMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./typescript.component').then(m => m.TaonDevDocsAiRulesTypescriptMdComponent)
  },
];

    