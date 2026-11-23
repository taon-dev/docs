
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsUsefullPromptsApplyTranslationsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./apply-translations.component').then(m => m.IsomorphicLibV21DocsUsefullPromptsApplyTranslationsMdComponent)
  },
];

    