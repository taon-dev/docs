
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiRulesBackendMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./backend.component').then(m => m.TaonDevDocsAiRulesBackendMdComponent)
  },
];

    