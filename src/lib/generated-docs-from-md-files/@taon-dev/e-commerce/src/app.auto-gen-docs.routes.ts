
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevECommerceSrcAppAutoGenDocsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.auto-gen-docs.component').then(m => m.TaonDevECommerceSrcAppAutoGenDocsMdComponent)
  },
];

    