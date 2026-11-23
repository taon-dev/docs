
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiRulesNpmYarnPackagesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./npm-yarn-packages.component').then(m => m.TaonDevDocsAiRulesNpmYarnPackagesMdComponent)
  },
];

    