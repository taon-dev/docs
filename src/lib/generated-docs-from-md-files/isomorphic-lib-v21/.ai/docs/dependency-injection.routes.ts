
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsDependencyInjectionMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dependency-injection.component').then(m => m.IsomorphicLibV21AiDocsDependencyInjectionMdComponent)
  },
];

    