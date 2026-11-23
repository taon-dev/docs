
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsArchitectureMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./architecture.component').then(m => m.TaonDevDocsAiDocsArchitectureMdComponent)
  },
];

    