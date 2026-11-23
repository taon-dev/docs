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
  selector: 'app-my-docs-page-taon-vs-others-md',
  templateUrl: './TAON-VS-OTHERS.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpDocsTaonVsOthersMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "index.scss",
// @taonSkipNextLineCut
codeblock1: "@taon-dev/cms",
// @taonSkipNextLineCut
codeblock2: "@taon-dev/e-commerce",
// @taonSkipNextLineCut
codeblock3: "@taon-dev/baseline"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-vs-other-frameworks-clis-and-platforms",
    "title": "Taon vs. Other Frameworks, CLIs, and Platforms",
    "level": 1
  },
  {
    "id": "taon-vs-nestjs",
    "title": "Taon vs. NestJS",
    "level": 2
  },
  {
    "id": "taon-vs-express",
    "title": "Taon vs. Express",
    "level": 2
  },
  {
    "id": "taon-cli-vs-angular-cli",
    "title": "Taon CLI vs. Angular CLI",
    "level": 2
  },
  {
    "id": "taon-vs-next-js",
    "title": "Taon vs. Next.js",
    "level": 2
  },
  {
    "id": "taon-vs-wordpress-and-prestashop",
    "title": "Taon vs. WordPress and PrestaShop",
    "level": 2
  },
  {
    "id": "what-building-with-taon-involves",
    "title": "What building with Taon involves",
    "level": 3
  },
  {
    "id": "which-platform-fits-your-project",
    "title": "Which platform fits your project?",
    "level": 3
  }
];

}

    