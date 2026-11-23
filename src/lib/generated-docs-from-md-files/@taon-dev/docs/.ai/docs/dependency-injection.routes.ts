
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsDependencyInjectionMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dependency-injection.component').then(m => m.TaonDevDocsAiDocsDependencyInjectionMdComponent)
  },
];

    