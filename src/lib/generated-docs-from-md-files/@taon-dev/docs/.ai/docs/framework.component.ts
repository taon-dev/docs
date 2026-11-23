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
  selector: 'app-my-docs-page-framework-md',
  templateUrl: './framework.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsFrameworkMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "User"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-framework-building-blocks",
    "title": "Taon framework building blocks",
    "level": 1
  },
  {
    "id": "find-the-right-building-block",
    "title": "Find the right building block",
    "level": 2
  },
  {
    "id": "how-the-pieces-fit-together",
    "title": "How the pieces fit together",
    "level": 2
  },
  {
    "id": "related-guides",
    "title": "Related guides",
    "level": 2
  }
];

}

    