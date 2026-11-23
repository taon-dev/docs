
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAgentsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./AGENTS.component').then(m => m.TaonDevDocsAgentsMdComponent)
  },
];

    