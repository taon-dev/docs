
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsI18NMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./i18n.component').then(m => m.IsomorphicLibV21AiDocsI18NMdComponent)
  },
];

    