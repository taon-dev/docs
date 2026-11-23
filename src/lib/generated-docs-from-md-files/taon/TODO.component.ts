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
  selector: 'app-my-docs-page-todo-md',
  templateUrl: './TODO.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonTodoMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {

  };

  headings: DocsHeading[] = [
  {
    "id": "taon-v22-x-x",
    "title": "Taon v22.X.X",
    "level": 2
  },
  {
    "id": "taon-v21-x-x",
    "title": "Taon v21.X.X",
    "level": 2
  },
  {
    "id": "taon-v20-x-x",
    "title": "Taon v20.X.X",
    "level": 2
  },
  {
    "id": "taon-v19-x-x-current-version",
    "title": "Taon v19.X.X (CURRENT VERSION)",
    "level": 2
  },
  {
    "id": "taon-v18-x-x",
    "title": "Taon v18.X.X",
    "level": 2
  },
  {
    "id": "taon-firedev-v17-x-x",
    "title": "Taon (Firedev) v17.X.X",
    "level": 2
  },
  {
    "id": "taon-firedev-v16-x-x",
    "title": "Taon (Firedev) v16.X.X",
    "level": 2
  }
];

}

    