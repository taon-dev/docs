
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiRulesFileNamingConventionsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./file-naming-conventions.component').then(m => m.TaonDevDocsAiRulesFileNamingConventionsMdComponent)
  },
];

    