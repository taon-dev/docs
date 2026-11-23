
import  { Routes } from '@angular/router';
export  const TaonDev__DocsDocsRoutes: Routes = [
// {
//   path: '', // skipping default route for now
//   component: ComponentHere,
// },

   {
      path: '@taon-dev/analytics/README.md',
      loadChildren: () =>
        import('./@taon-dev/analytics/README.routes').then(
          m => m.TaonDevAnalyticsReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/analytics/api.md',
      loadChildren: () =>
        import('./@taon-dev/analytics/api.routes').then(
          m => m.TaonDevAnalyticsApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/analytics/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/analytics/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevAnalyticsSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/cms/README.md',
      loadChildren: () =>
        import('./@taon-dev/cms/README.routes').then(
          m => m.TaonDevCmsReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/cms/TODO.md',
      loadChildren: () =>
        import('./@taon-dev/cms/TODO.routes').then(
          m => m.TaonDevCmsTodoMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/cms/api.md',
      loadChildren: () =>
        import('./@taon-dev/cms/api.routes').then(
          m => m.TaonDevCmsApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/cms/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/cms/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevCmsSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/architecture.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/architecture.routes').then(
          m => m.TaonDevDocsAiDocsArchitectureMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/dependency-injection.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/dependency-injection.routes').then(
          m => m.TaonDevDocsAiDocsDependencyInjectionMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/framework.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/framework.routes').then(
          m => m.TaonDevDocsAiDocsFrameworkMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/i18n.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/i18n.routes').then(
          m => m.TaonDevDocsAiDocsI18NMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/isomorphic-code-regions.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/isomorphic-code-regions.routes').then(
          m => m.TaonDevDocsAiDocsIsomorphicCodeRegionsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/realtime.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/realtime.routes').then(
          m => m.TaonDevDocsAiDocsRealtimeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/special-files/models.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/special-files/models.routes').then(
          m => m.TaonDevDocsAiDocsSpecialFilesModelsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/special-files/utils.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/special-files/utils.routes').then(
          m => m.TaonDevDocsAiDocsSpecialFilesUtilsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/special-files/validators.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/special-files/validators.routes').then(
          m => m.TaonDevDocsAiDocsSpecialFilesValidatorsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/api-services.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/api-services.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksApiServicesMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksConfigServicesMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/contexts.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/contexts.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksContextsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/controllers.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/controllers.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksControllersMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/entities.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/entities.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksEntitiesMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/kv-repositories.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/kv-repositories.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksKvRepositoriesMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/middlewares.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/middlewares.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksMiddlewaresMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksMigrationsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/providers.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/providers.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksProvidersMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/repositories.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/repositories.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksRepositoriesMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/taon-building-blocks/subscriber.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/taon-building-blocks/subscriber.routes').then(
          m => m.TaonDevDocsAiDocsTaonBuildingBlocksSubscriberMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/transport-layer.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/transport-layer.routes').then(
          m => m.TaonDevDocsAiDocsTransportLayerMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/docs/what-to-avoid.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/docs/what-to-avoid.routes').then(
          m => m.TaonDevDocsAiDocsWhatToAvoidMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/examples/my-entity.worker.README.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/examples/my-entity.worker.README.routes').then(
          m => m.TaonDevDocsAiExamplesMyEntityWorkerReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/rules/angular.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/rules/angular.routes').then(
          m => m.TaonDevDocsAiRulesAngularMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/rules/backend.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/rules/backend.routes').then(
          m => m.TaonDevDocsAiRulesBackendMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/rules/environment-variables.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/rules/environment-variables.routes').then(
          m => m.TaonDevDocsAiRulesEnvironmentVariablesMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/rules/file-naming-conventions.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/rules/file-naming-conventions.routes').then(
          m => m.TaonDevDocsAiRulesFileNamingConventionsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/rules/general.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/rules/general.routes').then(
          m => m.TaonDevDocsAiRulesGeneralMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/rules/npm-yarn-packages.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/rules/npm-yarn-packages.routes').then(
          m => m.TaonDevDocsAiRulesNpmYarnPackagesMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/.ai/rules/typescript.md',
      loadChildren: () =>
        import('./@taon-dev/docs/.ai/rules/typescript.routes').then(
          m => m.TaonDevDocsAiRulesTypescriptMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/AGENTS.md',
      loadChildren: () =>
        import('./@taon-dev/docs/AGENTS.routes').then(
          m => m.TaonDevDocsAgentsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/README.md',
      loadChildren: () =>
        import('./@taon-dev/docs/README.routes').then(
          m => m.TaonDevDocsReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/api.md',
      loadChildren: () =>
        import('./@taon-dev/docs/api.routes').then(
          m => m.TaonDevDocsApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/docs/CLI.md',
      loadChildren: () =>
        import('./@taon-dev/docs/docs/CLI.routes').then(
          m => m.TaonDevDocsDocsCliMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/docs/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/docs/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevDocsSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/e-commerce/README.md',
      loadChildren: () =>
        import('./@taon-dev/e-commerce/README.routes').then(
          m => m.TaonDevECommerceReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/e-commerce/api.md',
      loadChildren: () =>
        import('./@taon-dev/e-commerce/api.routes').then(
          m => m.TaonDevECommerceApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/e-commerce/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/e-commerce/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevECommerceSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/i18n/README.md',
      loadChildren: () =>
        import('./@taon-dev/i18n/README.routes').then(
          m => m.TaonDevI18NReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/i18n/api.md',
      loadChildren: () =>
        import('./@taon-dev/i18n/api.routes').then(
          m => m.TaonDevI18NApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/i18n/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/i18n/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevI18NSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/marketing/README.md',
      loadChildren: () =>
        import('./@taon-dev/marketing/README.routes').then(
          m => m.TaonDevMarketingReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/marketing/api.md',
      loadChildren: () =>
        import('./@taon-dev/marketing/api.routes').then(
          m => m.TaonDevMarketingApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/marketing/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/marketing/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevMarketingSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/seo/README.md',
      loadChildren: () =>
        import('./@taon-dev/seo/README.routes').then(
          m => m.TaonDevSeoReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/seo/api.md',
      loadChildren: () =>
        import('./@taon-dev/seo/api.routes').then(
          m => m.TaonDevSeoApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/seo/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/seo/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevSeoSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/session/README.md',
      loadChildren: () =>
        import('./@taon-dev/session/README.routes').then(
          m => m.TaonDevSessionReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/session/TODO.md',
      loadChildren: () =>
        import('./@taon-dev/session/TODO.routes').then(
          m => m.TaonDevSessionTodoMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/session/api.md',
      loadChildren: () =>
        import('./@taon-dev/session/api.routes').then(
          m => m.TaonDevSessionApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/session/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/session/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevSessionSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/session/src/lib/taon-audit-events/taon-audit-events.md',
      loadChildren: () =>
        import('./@taon-dev/session/src/lib/taon-audit-events/taon-audit-events.routes').then(
          m => m.TaonDevSessionSrcLibTaonAuditEventsTaonAuditEventsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/session/src/lib/taon-session/taon-session.md',
      loadChildren: () =>
        import('./@taon-dev/session/src/lib/taon-session/taon-session.routes').then(
          m => m.TaonDevSessionSrcLibTaonSessionTaonSessionMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/sudo/README.md',
      loadChildren: () =>
        import('./@taon-dev/sudo/README.routes').then(
          m => m.TaonDevSudoReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/sudo/api.md',
      loadChildren: () =>
        import('./@taon-dev/sudo/api.routes').then(
          m => m.TaonDevSudoApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/sudo/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/sudo/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevSudoSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/ui/README.md',
      loadChildren: () =>
        import('./@taon-dev/ui/README.routes').then(
          m => m.TaonDevUiReadmeMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/ui/api.md',
      loadChildren: () =>
        import('./@taon-dev/ui/api.routes').then(
          m => m.TaonDevUiApiMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/ui/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./@taon-dev/ui/src/app.auto-gen-docs.routes').then(
          m => m.TaonDevUiSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/ui/src/lib/taon-confirm-dialog/taon-confirm-dialog.md',
      loadChildren: () =>
        import('./@taon-dev/ui/src/lib/taon-confirm-dialog/taon-confirm-dialog.routes').then(
          m => m.TaonDevUiSrcLibTaonConfirmDialogTaonConfirmDialogMdRoutes,
        ),
    }

  ,

   {
      path: '@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md',
      loadChildren: () =>
        import('./@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.routes').then(
          m => m.TaonDevUiSrcLibTaonDetachableDialogContentTaonDetachableDialogContentMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/architecture.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/architecture.routes').then(
          m => m.IsomorphicLibV21AiDocsArchitectureMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/dependency-injection.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/dependency-injection.routes').then(
          m => m.IsomorphicLibV21AiDocsDependencyInjectionMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/framework.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/framework.routes').then(
          m => m.IsomorphicLibV21AiDocsFrameworkMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/i18n.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/i18n.routes').then(
          m => m.IsomorphicLibV21AiDocsI18NMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/isomorphic-code-regions.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/isomorphic-code-regions.routes').then(
          m => m.IsomorphicLibV21AiDocsIsomorphicCodeRegionsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/realtime.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/realtime.routes').then(
          m => m.IsomorphicLibV21AiDocsRealtimeMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/special-files/models.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/special-files/models.routes').then(
          m => m.IsomorphicLibV21AiDocsSpecialFilesModelsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/special-files/utils.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/special-files/utils.routes').then(
          m => m.IsomorphicLibV21AiDocsSpecialFilesUtilsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/special-files/validators.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/special-files/validators.routes').then(
          m => m.IsomorphicLibV21AiDocsSpecialFilesValidatorsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/api-services.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/api-services.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksApiServicesMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksConfigServicesMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/contexts.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/contexts.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksContextsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/controllers.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/controllers.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksControllersMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/entities.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/entities.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksEntitiesMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/kv-repositories.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/kv-repositories.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksKvRepositoriesMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/middlewares.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/middlewares.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksMiddlewaresMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksMigrationsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/providers.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/providers.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksProvidersMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/repositories.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/repositories.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksRepositoriesMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/taon-building-blocks/subscriber.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/taon-building-blocks/subscriber.routes').then(
          m => m.IsomorphicLibV21AiDocsTaonBuildingBlocksSubscriberMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/transport-layer.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/transport-layer.routes').then(
          m => m.IsomorphicLibV21AiDocsTransportLayerMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/docs/what-to-avoid.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/docs/what-to-avoid.routes').then(
          m => m.IsomorphicLibV21AiDocsWhatToAvoidMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/examples/my-entity.worker.README.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/examples/my-entity.worker.README.routes').then(
          m => m.IsomorphicLibV21AiExamplesMyEntityWorkerReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/rules/angular.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/rules/angular.routes').then(
          m => m.IsomorphicLibV21AiRulesAngularMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/rules/backend.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/rules/backend.routes').then(
          m => m.IsomorphicLibV21AiRulesBackendMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/rules/environment-variables.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/rules/environment-variables.routes').then(
          m => m.IsomorphicLibV21AiRulesEnvironmentVariablesMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/rules/file-naming-conventions.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/rules/file-naming-conventions.routes').then(
          m => m.IsomorphicLibV21AiRulesFileNamingConventionsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/rules/general.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/rules/general.routes').then(
          m => m.IsomorphicLibV21AiRulesGeneralMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/rules/npm-yarn-packages.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/rules/npm-yarn-packages.routes').then(
          m => m.IsomorphicLibV21AiRulesNpmYarnPackagesMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/.ai/rules/typescript.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/.ai/rules/typescript.routes').then(
          m => m.IsomorphicLibV21AiRulesTypescriptMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/AGENTS.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/AGENTS.routes').then(
          m => m.IsomorphicLibV21AgentsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/README.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/README.routes').then(
          m => m.IsomorphicLibV21ReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/TODO.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/TODO.routes').then(
          m => m.IsomorphicLibV21TodoMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/api.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/api.routes').then(
          m => m.IsomorphicLibV21ApiMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/taon-admin/analytics.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/taon-admin/analytics.routes').then(
          m => m.IsomorphicLibV21DocsTaonAdminAnalyticsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/taon-admin/baseline.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/taon-admin/baseline.routes').then(
          m => m.IsomorphicLibV21DocsTaonAdminBaselineMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/taon-admin/cms.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/taon-admin/cms.routes').then(
          m => m.IsomorphicLibV21DocsTaonAdminCmsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/taon-admin/e-commerce.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/taon-admin/e-commerce.routes').then(
          m => m.IsomorphicLibV21DocsTaonAdminECommerceMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/taon-admin/marketing.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/taon-admin/marketing.routes').then(
          m => m.IsomorphicLibV21DocsTaonAdminMarketingMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/taon-admin/seo.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/taon-admin/seo.routes').then(
          m => m.IsomorphicLibV21DocsTaonAdminSeoMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/taon-admin/session.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/taon-admin/session.routes').then(
          m => m.IsomorphicLibV21DocsTaonAdminSessionMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.routes').then(
          m => m.IsomorphicLibV21DocsTutorialAddTaonAdminToExistingProjectMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/tutorial/track-analytics-events.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/tutorial/track-analytics-events.routes').then(
          m => m.IsomorphicLibV21DocsTutorialTrackAnalyticsEventsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/usefull-prompts/apply-translations.routes').then(
          m => m.IsomorphicLibV21DocsUsefullPromptsApplyTranslationsMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/docs/usefull-prompts/translate-po-files-and-fix-typos.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/docs/usefull-prompts/translate-po-files-and-fix-typos.routes').then(
          m => m.IsomorphicLibV21DocsUsefullPromptsTranslatePoFilesAndFixTyposMdRoutes,
        ),
    }

  ,

   {
      path: 'isomorphic-lib-v21/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./isomorphic-lib-v21/src/app.auto-gen-docs.routes').then(
          m => m.IsomorphicLibV21SrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: 'ng2-rest/README.md',
      loadChildren: () =>
        import('./ng2-rest/README.routes').then(
          m => m.Ng2RestReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'ng2-rest/api.md',
      loadChildren: () =>
        import('./ng2-rest/api.routes').then(
          m => m.Ng2RestApiMdRoutes,
        ),
    }

  ,

   {
      path: 'ng2-rest/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./ng2-rest/src/app.auto-gen-docs.routes').then(
          m => m.Ng2RestSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: 'taon/CHANGELOG.md',
      loadChildren: () =>
        import('./taon/CHANGELOG.routes').then(
          m => m.TaonChangelogMdRoutes,
        ),
    }

  ,

   {
      path: 'taon/README.md',
      loadChildren: () =>
        import('./taon/README.routes').then(
          m => m.TaonReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'taon/TODO.md',
      loadChildren: () =>
        import('./taon/TODO.routes').then(
          m => m.TaonTodoMdRoutes,
        ),
    }

  ,

   {
      path: 'taon/api.md',
      loadChildren: () =>
        import('./taon/api.routes').then(
          m => m.TaonApiMdRoutes,
        ),
    }

  ,

   {
      path: 'taon/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./taon/src/app.auto-gen-docs.routes').then(
          m => m.TaonSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/DEVELOPER_GUIDE.md',
      loadChildren: () =>
        import('./tnp/DEVELOPER_GUIDE.routes').then(
          m => m.TnpDeveloperGuideMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/README.md',
      loadChildren: () =>
        import('./tnp/README.routes').then(
          m => m.TnpReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/TODO.md',
      loadChildren: () =>
        import('./tnp/TODO.routes').then(
          m => m.TnpTodoMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/api.md',
      loadChildren: () =>
        import('./tnp/api.routes').then(
          m => m.TnpApiMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/ADDITIONAL-COMMANDS.md',
      loadChildren: () =>
        import('./tnp/docs/ADDITIONAL-COMMANDS.routes').then(
          m => m.TnpDocsAdditionalCommandsMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/CI-CD.md',
      loadChildren: () =>
        import('./tnp/docs/CI-CD.routes').then(
          m => m.TnpDocsCiCdMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/CLOUD-SERVICE.md',
      loadChildren: () =>
        import('./tnp/docs/CLOUD-SERVICE.routes').then(
          m => m.TnpDocsCloudServiceMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/COMMANDS.md',
      loadChildren: () =>
        import('./tnp/docs/COMMANDS.routes').then(
          m => m.TnpDocsCommandsMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/EXAMPLES.md',
      loadChildren: () =>
        import('./tnp/docs/EXAMPLES.routes').then(
          m => m.TnpDocsExamplesMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/PHILOSOPHY.md',
      loadChildren: () =>
        import('./tnp/docs/PHILOSOPHY.routes').then(
          m => m.TnpDocsPhilosophyMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/RELEASE-CLOUD.md',
      loadChildren: () =>
        import('./tnp/docs/RELEASE-CLOUD.routes').then(
          m => m.TnpDocsReleaseCloudMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/RELEASE-LOCAL.md',
      loadChildren: () =>
        import('./tnp/docs/RELEASE-LOCAL.routes').then(
          m => m.TnpDocsReleaseLocalMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/RELEASE-MANUAL.md',
      loadChildren: () =>
        import('./tnp/docs/RELEASE-MANUAL.routes').then(
          m => m.TnpDocsReleaseManualMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/RELEASE-STATIC-PAGES.md',
      loadChildren: () =>
        import('./tnp/docs/RELEASE-STATIC-PAGES.routes').then(
          m => m.TnpDocsReleaseStaticPagesMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/ROADMAP.md',
      loadChildren: () =>
        import('./tnp/docs/ROADMAP.routes').then(
          m => m.TnpDocsRoadmapMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/TAON-VS-OTHERS.md',
      loadChildren: () =>
        import('./tnp/docs/TAON-VS-OTHERS.routes').then(
          m => m.TnpDocsTaonVsOthersMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/docs/link-test.md',
      loadChildren: () =>
        import('./tnp/docs/link-test.routes').then(
          m => m.TnpDocsLinkTestMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./tnp/src/app.auto-gen-docs.routes').then(
          m => m.TnpSrcAppAutoGenDocsMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/build-isomorphic-lib/build-isomorphic-lib.md',
      loadChildren: () =>
        import('./tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/build-isomorphic-lib/build-isomorphic-lib.routes').then(
          m => m.TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsBuildIsomorphicLibBuildIsomorphicLibMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/copy-manager/COPY-MANAGER.md',
      loadChildren: () =>
        import('./tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/copy-manager/COPY-MANAGER.routes').then(
          m => m.TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsCopyManagerCopyManagerMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/taon-build.md',
      loadChildren: () =>
        import('./tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/taon-build.routes').then(
          m => m.TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsTaonBuildMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp/src/lib/project/abstract/taon-worker/dev-mode/dev-mode.README.md',
      loadChildren: () =>
        import('./tnp/src/lib/project/abstract/taon-worker/dev-mode/dev-mode.README.routes').then(
          m => m.TnpSrcLibProjectAbstractTaonWorkerDevModeDevModeReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp-helpers/BASE-HELPERS-COMMANDS.md',
      loadChildren: () =>
        import('./tnp-helpers/BASE-HELPERS-COMMANDS.routes').then(
          m => m.TnpHelpersBaseHelpersCommandsMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp-helpers/README.md',
      loadChildren: () =>
        import('./tnp-helpers/README.routes').then(
          m => m.TnpHelpersReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp-helpers/TODO.md',
      loadChildren: () =>
        import('./tnp-helpers/TODO.routes').then(
          m => m.TnpHelpersTodoMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp-helpers/api.md',
      loadChildren: () =>
        import('./tnp-helpers/api.routes').then(
          m => m.TnpHelpersApiMdRoutes,
        ),
    }

  ,

   {
      path: 'tnp-helpers/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./tnp-helpers/src/app.auto-gen-docs.routes').then(
          m => m.TnpHelpersSrcAppAutoGenDocsMdRoutes,
        ),
    }

  
];

export default TaonDev__DocsDocsRoutes;
    