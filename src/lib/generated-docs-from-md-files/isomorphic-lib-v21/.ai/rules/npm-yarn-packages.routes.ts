
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiRulesNpmYarnPackagesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./npm-yarn-packages.component').then(m => m.IsomorphicLibV21AiRulesNpmYarnPackagesMdComponent)
  },
];

    