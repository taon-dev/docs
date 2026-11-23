
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TnpHelpersBaseHelpersCommandsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./BASE-HELPERS-COMMANDS.component').then(m => m.TnpHelpersBaseHelpersCommandsMdComponent)
  },
];

    