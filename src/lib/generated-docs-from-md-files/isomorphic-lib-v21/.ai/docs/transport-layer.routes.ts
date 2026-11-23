
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21AiDocsTransportLayerMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./transport-layer.component').then(m => m.IsomorphicLibV21AiDocsTransportLayerMdComponent)
  },
];

    