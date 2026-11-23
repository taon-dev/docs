
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiExamplesMyEntityWorkerReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./my-entity.worker.README.component').then(m => m.TaonDevDocsAiExamplesMyEntityWorkerReadmeMdComponent)
  },
];

    