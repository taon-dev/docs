
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpDocsAdditionalCommandsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ADDITIONAL-COMMANDS.component').then(m => m.TnpDocsAdditionalCommandsMdComponent)
  },
];

    