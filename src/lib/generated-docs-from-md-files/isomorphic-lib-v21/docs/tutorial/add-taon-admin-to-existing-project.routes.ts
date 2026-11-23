
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTutorialAddTaonAdminToExistingProjectMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./add-taon-admin-to-existing-project.component').then(m => m.IsomorphicLibV21DocsTutorialAddTaonAdminToExistingProjectMdComponent)
  },
];

    