
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const IsomorphicLibV21DocsTutorialTrackAnalyticsEventsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./track-analytics-events.component').then(m => m.IsomorphicLibV21DocsTutorialTrackAnalyticsEventsMdComponent)
  },
];

    