
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsRealtimeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./realtime.component').then(m => m.TaonDevDocsAiDocsRealtimeMdComponent)
  },
];

    