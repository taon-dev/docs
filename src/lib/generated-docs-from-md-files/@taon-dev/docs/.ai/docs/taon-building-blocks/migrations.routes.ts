
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTaonBuildingBlocksMigrationsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./migrations.component').then(m => m.TaonDevDocsAiDocsTaonBuildingBlocksMigrationsMdComponent)
  },
];

    