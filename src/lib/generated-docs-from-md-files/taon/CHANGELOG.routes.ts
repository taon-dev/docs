
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonChangelogMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./CHANGELOG.component').then(m => m.TaonChangelogMdComponent)
  },
];

    