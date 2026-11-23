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
  selector: 'app-my-docs-page-analytics-md',
  templateUrl: './analytics.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTaonAdminAnalyticsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/analytics",
// @taonSkipNextLineCut
codeblock1: "TaonAnalyticsAbstractContext",
// @taonSkipNextLineCut
codeblock2: "TaonAnalyticsBackofficeRoutes",
// @taonSkipNextLineCut
codeblock3: "TaonAnalyticsTrackingService",
// @taonSkipNextLineCut
codeblock4: "import { Component, OnInit, inject } from '@angular/core';\nimport { TaonAnalyticsTrackingService } from '@taon-dev/analytics/src';\n\n@Component({\n  selector: 'app-root',\n  template: '',\n})\nexport class AppComponent implements OnInit {\n  private readonly analytics = inject(TaonAnalyticsTrackingService);\n\n  ngOnInit(): void {\n    this.analytics.start();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock4Html: "<span class=\"hljs-keyword\">import</span> { Component, OnInit, inject } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TaonAnalyticsTrackingService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/analytics/src&#x27;</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">selector</span>: <span class=\"hljs-string\">&#x27;app-root&#x27;</span>,\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">&#x27;&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> <span class=\"hljs-title\">implements</span> <span class=\"hljs-title\">OnInit</span> </span>{\n  <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> analytics = inject(TaonAnalyticsTrackingService);\n\n  ngOnInit(): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-built_in\">this</span>.analytics.start();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock5: "start()",
// @taonSkipNextLineCut
codeblock6: "await this.analytics.recordEvent('banner-click', {\n  category: 'marketing',\n  data: { bannerId: 'summer' },\n});\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.analytics.recordEvent(<span class=\"hljs-string\">&#x27;banner-click&#x27;</span>, {\n  <span class=\"hljs-attr\">category</span>: <span class=\"hljs-string\">&#x27;marketing&#x27;</span>,\n  <span class=\"hljs-attr\">data</span>: { <span class=\"hljs-attr\">bannerId</span>: <span class=\"hljs-string\">&#x27;summer&#x27;</span> },\n});\n",
// @taonSkipNextLineCut
codeblock7: "localStorage",
// @taonSkipNextLineCut
codeblock8: "sessionStorage",
// @taonSkipNextLineCut
codeblock9: "TaonAnalyticsEventRepository",
// @taonSkipNextLineCut
codeblock10: "record()",
// @taonSkipNextLineCut
codeblock11: "toManageAnalytics"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-analytics",
    "title": "Taon Analytics",
    "level": 1
  },
  {
    "id": "add-and-start-tracking",
    "title": "Add and start tracking",
    "level": 2
  },
  {
    "id": "events-and-data-behavior",
    "title": "Events and data behavior",
    "level": 2
  },
  {
    "id": "permissions-and-runtime",
    "title": "Permissions and runtime",
    "level": 2
  }
];

}

    