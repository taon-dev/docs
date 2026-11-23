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
  selector: 'app-my-docs-page-contexts-md',
  templateUrl: './contexts.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsTaonBuildingBlocksContextsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "import { Taon, TaonBaseContext } from 'taon/src';\n\nexport const MainAbstractContext = Taon.createContext(() => ({\n  contextName: 'MainAbstractContext',\n  abstract: true,\n  contexts: {\n    TaonBaseContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-keyword\">import</span> { Taon, TaonBaseContext } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> MainAbstractContext = Taon.createContext(<span class=\"hljs-function\">() =&gt;</span> ({\n  <span class=\"hljs-attr\">contextName</span>: <span class=\"hljs-string\">&#x27;MainAbstractContext&#x27;</span>,\n  <span class=\"hljs-attr\">abstract</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">contexts</span>: {\n    TaonBaseContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock1: "export const AppContext = Taon.createContext(() => ({\n  ...HOST_CONFIG['AppContext'],\n  contexts: {\n    MainAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock1Html: "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> AppContext = Taon.createContext(<span class=\"hljs-function\">() =&gt;</span> ({\n  ...HOST_CONFIG[<span class=\"hljs-string\">&#x27;AppContext&#x27;</span>],\n  <span class=\"hljs-attr\">contexts</span>: {\n    MainAbstractContext,\n  },\n}));\n",
// @taonSkipNextLineCut
codeblock2: "TaonBaseContext"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-contexts",
    "title": "Taon contexts",
    "level": 1
  },
  {
    "id": "abstract-and-active-contexts",
    "title": "Abstract and active contexts",
    "level": 2
  },
  {
    "id": "initialization",
    "title": "Initialization",
    "level": 2
  },
  {
    "id": "related-building-blocks",
    "title": "Related building blocks",
    "level": 2
  }
];

}

    