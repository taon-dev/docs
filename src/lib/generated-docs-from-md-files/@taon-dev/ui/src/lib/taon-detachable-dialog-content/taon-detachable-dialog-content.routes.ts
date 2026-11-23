
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevUiSrcLibTaonDetachableDialogContentTaonDetachableDialogContentMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./taon-detachable-dialog-content.component').then(m => m.TaonDevUiSrcLibTaonDetachableDialogContentTaonDetachableDialogContentMdComponent)
  },
];

    