
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsWhatToAvoidMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./what-to-avoid.component').then(m => m.TaonDevDocsAiDocsWhatToAvoidMdComponent)
  },
];

    