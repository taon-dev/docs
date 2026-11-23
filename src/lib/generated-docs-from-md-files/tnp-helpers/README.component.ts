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
  selector: 'app-my-docs-page-readme-md',
  templateUrl: './README.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpHelpersReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "import { Helpers } from 'tnp-helpers';\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-keyword\">import</span> { Helpers } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;tnp-helpers&#x27;</span>;\n",
// @taonSkipNextLineCut
codeblock1: "import { Helpers } from 'tnp-helpers/browser';\n",
// @taonSkipNextLineCut
codeblock1Html: "<span class=\"hljs-keyword\">import</span> { Helpers } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;tnp-helpers/browser&#x27;</span>;\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-helpers-tnp-helpers",
    "title": "taon-helpers ( tnp-helpers )",
    "level": 1
  },
  {
    "id": "usage",
    "title": "Usage",
    "level": 2
  }
];

}

    