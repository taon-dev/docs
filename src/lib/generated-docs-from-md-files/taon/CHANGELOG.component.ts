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
  selector: 'app-my-docs-page-changelog-md',
  templateUrl: './CHANGELOG.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonChangelogMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {

  };

  headings: DocsHeading[] = [
  {
    "id": "changelog",
    "title": "CHANGELOG",
    "level": 1
  },
  {
    "id": "changes-v19",
    "title": "Changes v19",
    "level": 2
  },
  {
    "id": "changes-v18",
    "title": "Changes v18",
    "level": 2
  },
  {
    "id": "changes-v16",
    "title": "Changes v16",
    "level": 2
  }
];

}

    