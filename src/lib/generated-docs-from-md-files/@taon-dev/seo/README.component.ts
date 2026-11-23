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
export class TaonDevSeoReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "1",
// @taonSkipNextLineCut
codeblock1: "/",
// @taonSkipNextLineCut
codeblock2: "/pricing",
// @taonSkipNextLineCut
codeblock3: "/courses",
// @taonSkipNextLineCut
codeblock4: "administrator",
// @taonSkipNextLineCut
codeblock5: "TaonSeoAbstractContext",
// @taonSkipNextLineCut
codeblock6: "TaonSeoBackofficeRoutes",
// @taonSkipNextLineCut
codeblock7: "import { provideTaonSeo } from '@taon-dev/seo';\n\nexport const appConfig = {\n  providers: [\n    ...provideTaonSeo(),\n    // Existing router, TAON_CONTEXT and Taon initialization providers.\n  ],\n};\n",
// @taonSkipNextLineCut
codeblock7Html: "<span class=\"hljs-keyword\">import</span> { provideTaonSeo } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/seo&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> appConfig = {\n  <span class=\"hljs-attr\">providers</span>: [\n    ...provideTaonSeo(),\n    <span class=\"hljs-comment\">// Existing router, TAON_CONTEXT and Taon initialization providers.</span>\n  ],\n};\n",
// @taonSkipNextLineCut
codeblock8: "/pricing/",
// @taonSkipNextLineCut
codeblock9: "/pricing",
// @taonSkipNextLineCut
codeblock10: "og:title",
// @taonSkipNextLineCut
codeblock11: "og:description",
// @taonSkipNextLineCut
codeblock12: "og:image",
// @taonSkipNextLineCut
codeblock13: "og:site_name",
// @taonSkipNextLineCut
codeblock14: "og:url",
// @taonSkipNextLineCut
codeblock15: "TaonSeoService.error",
// @taonSkipNextLineCut
codeblock16: "resolveSeoMetadata"
  };

  headings: DocsHeading[] = [
  {
    "id": "seo",
    "title": "SEO",
    "level": 1
  },
  {
    "id": "backoffice",
    "title": "Backoffice",
    "level": 2
  },
  {
    "id": "application-integration",
    "title": "Application integration",
    "level": 2
  },
  {
    "id": "migration",
    "title": "Migration",
    "level": 2
  }
];

}

    