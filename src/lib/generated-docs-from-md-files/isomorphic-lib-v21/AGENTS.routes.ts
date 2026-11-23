
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AgentsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./AGENTS.component').then(m => m.IsomorphicLibV21AgentsMdComponent)
  },
];

    