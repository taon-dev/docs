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
  selector: 'app-my-docs-page-marketing-md',
  templateUrl: './marketing.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTaonAdminMarketingMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/analytics",
// @taonSkipNextLineCut
codeblock1: "TaonAnalyticsTrackingService",
// @taonSkipNextLineCut
codeblock2: "import { inject } from '@angular/core';\nimport { TaonAnalyticsTrackingService } from '@taon-dev/analytics/src';\n\nexport class BannerComponent {\n  private readonly analytics = inject(TaonAnalyticsTrackingService);\n\n  async onBannerClick(): Promise<void> {\n    await this.analytics.recordEvent('banner-click', {\n      category: 'marketing',\n      data: { bannerId: 'summer' },\n    });\n  }\n}\n",
// @taonSkipNextLineCut
codeblock2Html: "<span class=\"hljs-keyword\">import</span> { inject } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TaonAnalyticsTrackingService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/analytics/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">BannerComponent</span> </span>{\n  <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> analytics = inject(TaonAnalyticsTrackingService);\n\n  <span class=\"hljs-keyword\">async</span> onBannerClick(): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; {\n    <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.analytics.recordEvent(<span class=\"hljs-string\">&#x27;banner-click&#x27;</span>, {\n      <span class=\"hljs-attr\">category</span>: <span class=\"hljs-string\">&#x27;marketing&#x27;</span>,\n      <span class=\"hljs-attr\">data</span>: { <span class=\"hljs-attr\">bannerId</span>: <span class=\"hljs-string\">&#x27;summer&#x27;</span> },\n    });\n  }\n}\n",
// @taonSkipNextLineCut
codeblock3: "toManageAnalytics",
// @taonSkipNextLineCut
codeblock4: "@taon-dev/marketing",
// @taonSkipNextLineCut
codeblock5: "@taon-dev/analytics"
  };

  headings: DocsHeading[] = [
  {
    "id": "marketing-related-analytics-events",
    "title": "Marketing-related analytics events",
    "level": 1
  },
  {
    "id": "record-an-interaction",
    "title": "Record an interaction",
    "level": 2
  },
  {
    "id": "admin-and-package-boundaries",
    "title": "Admin and package boundaries",
    "level": 2
  }
];

}

    