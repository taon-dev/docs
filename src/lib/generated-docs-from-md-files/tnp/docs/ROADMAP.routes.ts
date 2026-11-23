
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsRoadmapMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ROADMAP.component').then(m => m.TnpDocsRoadmapMdComponent)
  },
];

    