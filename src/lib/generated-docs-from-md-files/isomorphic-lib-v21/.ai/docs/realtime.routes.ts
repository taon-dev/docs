
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsRealtimeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./realtime.component').then(m => m.IsomorphicLibV21AiDocsRealtimeMdComponent)
  },
];

    