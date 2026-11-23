//#region imports
import { BehaviorSubject } from 'rxjs';
import { Taon } from 'taon/src';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Translation, TranslateDirective } from '@taon-dev/i18n/src';
import { TaonDocsPageComponent, DocsHeading } from 'taon/src';

//#endregion

const t = Translation.for(Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP);

@Component({
  selector: 'app-my-docs-page-add-taon-admin-to-existing-project-md',
  templateUrl: './add-taon-admin-to-existing-project.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTutorialAddTaonAdminToExistingProjectMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "npm install",
// @taonSkipNextLineCut
codeblock1: "@taon-dev/baseline",
// @taonSkipNextLineCut
codeblock2: "TaonBaselineAbstractContext",
// @taonSkipNextLineCut
codeblock3: "TaonBaseContext",
// @taonSkipNextLineCut
codeblock4: "import { TaonBaselineAbstractContext } from '@taon-dev/baseline/src';\nimport { Taon, TaonBaseContext } from 'taon/src';\n\nexport const AppContext = Taon.createContext(() => ({\n  contextName: 'AppContext',\n  contexts: {\n    TaonBaseContext,\n    TaonBaselineAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock4Html: "<span class=\"hljs-keyword\">import</span> { TaonBaselineAbstractContext } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/baseline/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { Taon, TaonBaseContext } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> AppContext = Taon.createContext(<span class=\"hljs-function\">() =&gt;</span> ({\n  <span class=\"hljs-attr\">contextName</span>: <span class=\"hljs-string\">&#x27;AppContext&#x27;</span>,\n  <span class=\"hljs-attr\">contexts</span>: {\n    TaonBaseContext,\n    TaonBaselineAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock5: "import { TaonBaselineBackofficeRoutes } from '@taon-dev/baseline/src';\nimport { TaonBaselineBackofficeOutletName } from '@taon-dev/ui/src';\nimport { TAON_CONTEXT } from 'taon/src';\n\nconst adminRoute = {\n  path: 'backoffice',\n  outlet: TaonBaselineBackofficeOutletName,\n  providers: [\n    { provide: TAON_CONTEXT, useFactory: () => AppContext },\n  ],\n  loadChildren: () =>\n    import('@taon-dev/baseline/src').then(\n      module => module.TaonBaselineBackofficeRoutes,\n    ),\n};\n",
// @taonSkipNextLineCut
codeblock5Html: "<span class=\"hljs-keyword\">import</span> { TaonBaselineBackofficeRoutes } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/baseline/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TaonBaselineBackofficeOutletName } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/ui/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TAON_CONTEXT } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">const</span> adminRoute = {\n  <span class=\"hljs-attr\">path</span>: <span class=\"hljs-string\">&#x27;backoffice&#x27;</span>,\n  <span class=\"hljs-attr\">outlet</span>: TaonBaselineBackofficeOutletName,\n  <span class=\"hljs-attr\">providers</span>: [\n    { <span class=\"hljs-attr\">provide</span>: TAON_CONTEXT, <span class=\"hljs-attr\">useFactory</span>: <span class=\"hljs-function\">() =&gt;</span> AppContext },\n  ],\n  <span class=\"hljs-attr\">loadChildren</span>: <span class=\"hljs-function\">() =&gt;</span>\n    <span class=\"hljs-keyword\">import</span>(<span class=\"hljs-string\">&#x27;@taon-dev/baseline/src&#x27;</span>).then(\n      <span class=\"hljs-function\"><span class=\"hljs-params\">module</span> =&gt;</span> <span class=\"hljs-built_in\">module</span>.TaonBaselineBackofficeRoutes,\n    ),\n};\n",
// @taonSkipNextLineCut
codeblock6: "adminRoute",
// @taonSkipNextLineCut
codeblock7: "admin",
// @taonSkipNextLineCut
codeblock8: "TAON_CONTEXT",
// @taonSkipNextLineCut
codeblock9: "toManageCms",
// @taonSkipNextLineCut
codeblock10: "toManagerEcommerce",
// @taonSkipNextLineCut
codeblock11: "toManageAnalytics",
// @taonSkipNextLineCut
codeblock12: "toManageSeo",
// @taonSkipNextLineCut
codeblock13: "toManageMarketing",
// @taonSkipNextLineCut
codeblock14: "STRIPE_SECRET_KEY",
// @taonSkipNextLineCut
codeblock15: "STRIPE_WEBHOOK_KEY",
// @taonSkipNextLineCut
codeblock16: "taon build:watch:lib\ntaon app:normal\n",
// @taonSkipNextLineCut
codeblock16Html: "taon build:watch:lib\ntaon app:normal\n",
// @taonSkipNextLineCut
codeblock17: "admin"
  };

  headings: DocsHeading[] = [
  {
    "id": "add-taon-admin-to-an-existing-taon-project",
    "title": "Add Taon Admin to an existing Taon project",
    "level": 1
  },
  {
    "id": "prerequisites",
    "title": "Prerequisites",
    "level": 2
  },
  {
    "id": "1-add-baseline-to-the-taon-context",
    "title": "1. Add Baseline to the Taon context",
    "level": 2
  },
  {
    "id": "2-add-the-lazy-backoffice-route",
    "title": "2. Add the lazy backoffice route",
    "level": 2
  },
  {
    "id": "3-configure-authorization-and-module-services",
    "title": "3. Configure authorization and module services",
    "level": 2
  },
  {
    "id": "4-build-and-verify",
    "title": "4. Build and verify",
    "level": 2
  }
];

}

    