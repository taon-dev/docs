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
  selector: 'app-my-docs-page-baseline-md',
  templateUrl: './baseline.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTaonAdminBaselineMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/baseline",
// @taonSkipNextLineCut
codeblock1: "TaonBaselineAbstractContext",
// @taonSkipNextLineCut
codeblock2: "TaonBaselineBackofficeRoutes",
// @taonSkipNextLineCut
codeblock3: "import { TaonBaselineAbstractContext } from '@taon-dev/baseline/src';\nimport { Taon, TaonBaseContext } from 'taon/src';\n\nexport const AppContext = Taon.createContext(() => ({\n  contextName: 'AppContext',\n  contexts: {\n    TaonBaseContext,\n    TaonBaselineAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock3Html: "<span class=\"hljs-keyword\">import</span> { TaonBaselineAbstractContext } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/baseline/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { Taon, TaonBaseContext } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> AppContext = Taon.createContext(<span class=\"hljs-function\">() =&gt;</span> ({\n  <span class=\"hljs-attr\">contextName</span>: <span class=\"hljs-string\">&#x27;AppContext&#x27;</span>,\n  <span class=\"hljs-attr\">contexts</span>: {\n    TaonBaseContext,\n    TaonBaselineAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock4: "admin",
// @taonSkipNextLineCut
codeblock5: "TaonBaselineBackofficeOutletName",
// @taonSkipNextLineCut
codeblock6: "import { TaonBaselineBackofficeRoutes } from '@taon-dev/baseline/src';\nimport { TaonBaselineBackofficeOutletName } from '@taon-dev/ui/src';\nimport { TAON_CONTEXT } from 'taon/src';\n\nconst routes = [\n  {\n    path: 'backoffice',\n    outlet: TaonBaselineBackofficeOutletName,\n    providers: [\n      { provide: TAON_CONTEXT, useFactory: () => AppContext },\n    ],\n    loadChildren: () =>\n      import('@taon-dev/baseline/src').then(\n        module => module.TaonBaselineBackofficeRoutes,\n      ),\n  },\n];\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-keyword\">import</span> { TaonBaselineBackofficeRoutes } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/baseline/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TaonBaselineBackofficeOutletName } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/ui/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TAON_CONTEXT } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">const</span> routes = [\n  {\n    <span class=\"hljs-attr\">path</span>: <span class=\"hljs-string\">&#x27;backoffice&#x27;</span>,\n    <span class=\"hljs-attr\">outlet</span>: TaonBaselineBackofficeOutletName,\n    <span class=\"hljs-attr\">providers</span>: [\n      { <span class=\"hljs-attr\">provide</span>: TAON_CONTEXT, <span class=\"hljs-attr\">useFactory</span>: <span class=\"hljs-function\">() =&gt;</span> AppContext },\n    ],\n    <span class=\"hljs-attr\">loadChildren</span>: <span class=\"hljs-function\">() =&gt;</span>\n      <span class=\"hljs-keyword\">import</span>(<span class=\"hljs-string\">&#x27;@taon-dev/baseline/src&#x27;</span>).then(\n        <span class=\"hljs-function\"><span class=\"hljs-params\">module</span> =&gt;</span> <span class=\"hljs-built_in\">module</span>.TaonBaselineBackofficeRoutes,\n      ),\n  },\n];\n",
// @taonSkipNextLineCut
codeblock7: "toManageCms",
// @taonSkipNextLineCut
codeblock8: "toManagerEcommerce",
// @taonSkipNextLineCut
codeblock9: "toManageAnalytics",
// @taonSkipNextLineCut
codeblock10: "toManageSeo",
// @taonSkipNextLineCut
codeblock11: "toManageMarketing",
// @taonSkipNextLineCut
codeblock12: "toManageUsers",
// @taonSkipNextLineCut
codeblock13: "toManageSessions",
// @taonSkipNextLineCut
codeblock14: "toManageAuthorization",
// @taonSkipNextLineCut
codeblock15: "TaonBaselineAbstractContext",
// @taonSkipNextLineCut
codeblock16: "TaonBaselineBackofficeRoutes",
// @taonSkipNextLineCut
codeblock17: "admin"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-baseline",
    "title": "Taon Baseline",
    "level": 1
  },
  {
    "id": "register-the-context-and-route",
    "title": "Register the context and route",
    "level": 2
  },
  {
    "id": "configure-access",
    "title": "Configure access",
    "level": 2
  },
  {
    "id": "runtime-and-project-dependencies",
    "title": "Runtime and project dependencies",
    "level": 2
  }
];

}

    