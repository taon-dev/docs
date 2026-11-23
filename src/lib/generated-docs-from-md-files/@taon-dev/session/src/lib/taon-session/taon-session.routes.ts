
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSessionSrcLibTaonSessionTaonSessionMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./taon-session.component').then(m => m.TaonDevSessionSrcLibTaonSessionTaonSessionMdComponent)
  },
];

    