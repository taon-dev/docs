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
export class TaonDevAnalyticsReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "TaonAnalyticsAbstractContext",
// @taonSkipNextLineCut
codeblock1: "TaonAnalyticsTrackingService",
// @taonSkipNextLineCut
codeblock2: "start()",
// @taonSkipNextLineCut
codeblock3: "await analytics.recordEvent('banner-click', {\n  category: 'marketing',\n  data: { bannerId: 'summer' },\n});\n",
// @taonSkipNextLineCut
codeblock3Html: "<span class=\"hljs-keyword\">await</span> analytics.recordEvent(<span class=\"hljs-string\">&#x27;banner-click&#x27;</span>, {\n  <span class=\"hljs-attr\">category</span>: <span class=\"hljs-string\">&#x27;marketing&#x27;</span>,\n  <span class=\"hljs-attr\">data</span>: { <span class=\"hljs-attr\">bannerId</span>: <span class=\"hljs-string\">&#x27;summer&#x27;</span> },\n});\n",
// @taonSkipNextLineCut
codeblock4: "TaonAnalyticsEventRepository",
// @taonSkipNextLineCut
codeblock5: "record()",
// @taonSkipNextLineCut
codeblock6: "createTable"
  };

  headings: DocsHeading[] = [
  {
    "id": "analytics",
    "title": "Analytics",
    "level": 1
  }
];

}

    