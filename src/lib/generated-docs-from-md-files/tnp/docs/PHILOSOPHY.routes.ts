
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsPhilosophyMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./PHILOSOPHY.component').then(m => m.TnpDocsPhilosophyMdComponent)
  },
];

    