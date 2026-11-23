
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTaonBuildingBlocksMigrationsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./migrations.component').then(m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksMigrationsMdComponent)
  },
];

    