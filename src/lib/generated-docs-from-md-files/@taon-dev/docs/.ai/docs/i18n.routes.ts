
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsI18NMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./i18n.component').then(m => m.TaonDevDocsAiDocsI18NMdComponent)
  },
];

    