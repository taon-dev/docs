
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevUiSrcLibTaonConfirmDialogTaonConfirmDialogMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./taon-confirm-dialog.component').then(m => m.TaonDevUiSrcLibTaonConfirmDialogTaonConfirmDialogMdComponent)
  },
];

    