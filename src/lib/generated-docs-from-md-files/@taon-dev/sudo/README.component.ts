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
export class TaonDevSudoReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {

  };

  headings: DocsHeading[] = [
  {
    "id": "sudo",
    "title": "Sudo",
    "level": 1
  },
  {
    "id": "data",
    "title": "Data",
    "level": 2
  },
  {
    "id": "raw-migrations",
    "title": "Raw Migrations",
    "level": 2
  },
  {
    "id": "app-state",
    "title": "App State",
    "level": 2
  },
  {
    "id": "http-errors",
    "title": "HTTP Errors",
    "level": 2
  },
  {
    "id": "sql-scripts",
    "title": "SQL Scripts",
    "level": 2
  }
];

}

    