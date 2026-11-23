
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsTaonVsOthersMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./TAON-VS-OTHERS.component').then(m => m.TnpDocsTaonVsOthersMdComponent)
  },
];

    