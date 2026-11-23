
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsUsefullPromptsTranslatePoFilesAndFixTyposMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./translate-po-files-and-fix-typos.component').then(m => m.IsomorphicLibV21DocsUsefullPromptsTranslatePoFilesAndFixTyposMdComponent)
  },
];

    