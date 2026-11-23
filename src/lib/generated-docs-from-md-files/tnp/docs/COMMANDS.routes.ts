
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsCommandsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./COMMANDS.component').then(m => m.TnpDocsCommandsMdComponent)
  },
];

    