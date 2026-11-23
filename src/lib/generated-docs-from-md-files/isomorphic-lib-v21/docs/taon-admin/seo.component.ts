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
  selector: 'app-my-docs-page-seo-md',
  templateUrl: './seo.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTaonAdminSeoMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/seo",
// @taonSkipNextLineCut
codeblock1: "TaonSeoAbstractContext",
// @taonSkipNextLineCut
codeblock2: "TaonSeoBackofficeRoutes",
// @taonSkipNextLineCut
codeblock3: "TaonBaselineAbstractContext",
// @taonSkipNextLineCut
codeblock4: "TaonBaselineBackofficeRoutes",
// @taonSkipNextLineCut
codeblock5: "import { provideTaonSeo } from '@taon-dev/seo';\n\nexport const appConfig = {\n  providers: [\n    ...provideTaonSeo(),\n  ],\n};\n",
// @taonSkipNextLineCut
codeblock5Html: "<span class=\"hljs-keyword\">import</span> { provideTaonSeo } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/seo&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> appConfig = {\n  <span class=\"hljs-attr\">providers</span>: [\n    ...provideTaonSeo(),\n  ],\n};\n",
// @taonSkipNextLineCut
codeblock6: "canonicalBaseUrl",
// @taonSkipNextLineCut
codeblock7: "canonicalUrl",
// @taonSkipNextLineCut
codeblock8: "toManageSeo",
// @taonSkipNextLineCut
codeblock9: "provideTaonSeo()"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-seo",
    "title": "Taon SEO",
    "level": 1
  },
  {
    "id": "add-and-configure",
    "title": "Add and configure",
    "level": 2
  },
  {
    "id": "metadata-behavior-and-permissions",
    "title": "Metadata behavior and permissions",
    "level": 2
  },
  {
    "id": "runtime-notes",
    "title": "Runtime notes",
    "level": 2
  }
];

}

    