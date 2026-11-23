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
  selector: 'app-my-docs-page-providers-md',
  templateUrl: './providers.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsTaonBuildingBlocksProvidersMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@TaonProvider({\n  className: 'TaonConfigProvier',\n})\nexport class TaonConfigProvier extends TaonBaseProvider {\n  config = {\n    lang: 'en',\n    country: 'Poland'\n  }\n  \n  SECRET_ENV: string;\n  GOOGLE_ID:string;\n\n  async _() {\n    //#region @backend\n    this.SECRET_ENV = await ENV_NODE_APP_SECRET_ENV();\n    //#endregion\n    GOOGLE_ID = '123123123123123123123123'\n  }\n}\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-meta\">@TaonProvider</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;TaonConfigProvier&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">TaonConfigProvier</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseProvider</span> </span>{\n  config = {\n    <span class=\"hljs-attr\">lang</span>: <span class=\"hljs-string\">&#x27;en&#x27;</span>,\n    <span class=\"hljs-attr\">country</span>: <span class=\"hljs-string\">&#x27;Poland&#x27;</span>\n  }\n  \n  <span class=\"hljs-attr\">SECRET_ENV</span>: <span class=\"hljs-built_in\">string</span>;\n  GOOGLE_ID:<span class=\"hljs-built_in\">string</span>;\n\n  <span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-title\">_</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-comment\">//#region @backend</span>\n    <span class=\"hljs-built_in\">this</span>.SECRET_ENV = <span class=\"hljs-keyword\">await</span> ENV_NODE_APP_SECRET_ENV();\n    <span class=\"hljs-comment\">//#endregion</span>\n    GOOGLE_ID = <span class=\"hljs-string\">&#x27;123123123123123123123123&#x27;</span>\n  }\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-providers",
    "title": "Taon providers",
    "level": 1
  }
];

}

    