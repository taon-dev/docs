
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsDocsCliMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./CLI.component').then(m => m.TaonDevDocsDocsCliMdComponent)
  },
];

    