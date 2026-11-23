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
  selector: 'app-my-docs-page-cms-md',
  templateUrl: './cms.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTaonAdminCmsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/cms",
// @taonSkipNextLineCut
codeblock1: "TaonBaselineAbstractContext",
// @taonSkipNextLineCut
codeblock2: "TaonBaselineBackofficeRoutes",
// @taonSkipNextLineCut
codeblock3: "TaonCmsAbstractContext",
// @taonSkipNextLineCut
codeblock4: "TaonCmsAbstractContext",
// @taonSkipNextLineCut
codeblock5: "TaonCmsBackofficeRoutes",
// @taonSkipNextLineCut
codeblock6: "import { TaonCmsAbstractContext } from '@taon-dev/cms/src';\nimport { Taon, TaonBaseContext } from 'taon/src';\n\nexport const AppContext = Taon.createContext(() => ({\n  contextName: 'AppContext',\n  contexts: {\n    TaonBaseContext,\n    TaonCmsAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-keyword\">import</span> { TaonCmsAbstractContext } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/cms/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { Taon, TaonBaseContext } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> AppContext = Taon.createContext(<span class=\"hljs-function\">() =&gt;</span> ({\n  <span class=\"hljs-attr\">contextName</span>: <span class=\"hljs-string\">&#x27;AppContext&#x27;</span>,\n  <span class=\"hljs-attr\">contexts</span>: {\n    TaonBaseContext,\n    TaonCmsAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock7: "TaonCmsBackofficeRoutes",
// @taonSkipNextLineCut
codeblock8: "TaonSessionAbstractContext",
// @taonSkipNextLineCut
codeblock9: "hasAccess.toManageCms",
// @taonSkipNextLineCut
codeblock10: "toManagePosts"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-cms",
    "title": "Taon CMS",
    "level": 1
  },
  {
    "id": "add-and-configure",
    "title": "Add and configure",
    "level": 2
  },
  {
    "id": "use-the-backoffice",
    "title": "Use the backoffice",
    "level": 2
  },
  {
    "id": "runtime-notes",
    "title": "Runtime notes",
    "level": 2
  }
];

}

    