
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiExamplesMyEntityWorkerReadmeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./my-entity.worker.README.component').then(m => m.IsomorphicLibV21AiExamplesMyEntityWorkerReadmeMdComponent)
  },
];

    