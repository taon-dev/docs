
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevDocsAiDocsTransportLayerMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./transport-layer.component').then(m => m.TaonDevDocsAiDocsTransportLayerMdComponent)
  },
];

    