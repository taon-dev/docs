
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const TaonDevSessionSrcLibTaonAuditEventsTaonAuditEventsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./taon-audit-events.component').then(m => m.TaonDevSessionSrcLibTaonAuditEventsTaonAuditEventsMdComponent)
  },
];

    