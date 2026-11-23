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
  selector: 'app-my-docs-page-track-analytics-events-md',
  templateUrl: './track-analytics-events.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTutorialTrackAnalyticsEventsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "TaonAnalyticsAbstractContext",
// @taonSkipNextLineCut
codeblock1: "TaonBaselineAbstractContext",
// @taonSkipNextLineCut
codeblock2: "TaonAnalyticsTrackingService",
// @taonSkipNextLineCut
codeblock3: "start()",
// @taonSkipNextLineCut
codeblock4: "import { TaonAnalyticsTrackingService } from '@taon-dev/analytics/src';\n\nexport class AppComponent implements OnInit {\n  private readonly analytics = inject(TaonAnalyticsTrackingService);\n\n  ngOnInit(): void {\n    this.analytics.start();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock4Html: "<span class=\"hljs-keyword\">import</span> { TaonAnalyticsTrackingService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/analytics/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> <span class=\"hljs-title\">implements</span> <span class=\"hljs-title\">OnInit</span> </span>{\n  <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> analytics = inject(TaonAnalyticsTrackingService);\n\n  ngOnInit(): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-built_in\">this</span>.analytics.start();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock5: "localStorage",
// @taonSkipNextLineCut
codeblock6: "sessionStorage",
// @taonSkipNextLineCut
codeblock7: "recordEvent()",
// @taonSkipNextLineCut
codeblock8: "await this.analytics.recordEvent('banner-click', {\n  category: 'marketing',\n  data: { bannerId: 'summer' },\n});\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.analytics.recordEvent(<span class=\"hljs-string\">&#x27;banner-click&#x27;</span>, {\n  <span class=\"hljs-attr\">category</span>: <span class=\"hljs-string\">&#x27;marketing&#x27;</span>,\n  <span class=\"hljs-attr\">data</span>: { <span class=\"hljs-attr\">bannerId</span>: <span class=\"hljs-string\">&#x27;summer&#x27;</span> },\n});\n",
// @taonSkipNextLineCut
codeblock9: "toManageAnalytics"
  };

  headings: DocsHeading[] = [
  {
    "id": "track-analytics-events-in-a-taon-app",
    "title": "Track analytics events in a Taon app",
    "level": 1
  },
  {
    "id": "1-register-the-analytics-context",
    "title": "1. Register the analytics context",
    "level": 2
  },
  {
    "id": "2-start-the-browser-tracker",
    "title": "2. Start the browser tracker",
    "level": 2
  },
  {
    "id": "3-record-an-interaction",
    "title": "3. Record an interaction",
    "level": 2
  },
  {
    "id": "verify",
    "title": "Verify",
    "level": 2
  }
];

}

    