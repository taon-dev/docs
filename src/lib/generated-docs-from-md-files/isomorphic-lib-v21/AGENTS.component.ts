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
  selector: 'app-my-docs-page-agents-md',
  templateUrl: './AGENTS.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AgentsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "npm install",
// @taonSkipNextLineCut
codeblock1: "yarn install",
// @taonSkipNextLineCut
codeblock2: "/src",
// @taonSkipNextLineCut
codeblock3: "/src"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-project-instructions",
    "title": "Taon project instructions",
    "level": 1
  },
  {
    "id": "core-rules",
    "title": "Core rules",
    "level": 2
  },
  {
    "id": "references",
    "title": "References",
    "level": 2
  },
  {
    "id": "existing-code-and-verification",
    "title": "Existing code and verification",
    "level": 2
  }
];

}

    