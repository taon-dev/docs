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
  selector: 'app-my-docs-page-taon-session-md',
  templateUrl: './taon-session.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevSessionSrcLibTaonSessionTaonSessionMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "TaonSessionProvider.linkSocialAccountEmail = true",
// @taonSkipNextLineCut
codeblock1: "false",
// @taonSkipNextLineCut
codeblock2: "req.ip",
// @taonSkipNextLineCut
codeblock3: "/"
  };

  headings: DocsHeading[] = [
  {
    "id": "session-account-linking-and-backoffice",
    "title": "Session account linking and backoffice",
    "level": 1
  },
  {
    "id": "verified-email-linking",
    "title": "Verified-email linking",
    "level": 2
  },
  {
    "id": "profile-username",
    "title": "Profile username",
    "level": 2
  },
  {
    "id": "session-metadata-and-lifecycle",
    "title": "Session metadata and lifecycle",
    "level": 2
  },
  {
    "id": "backoffice",
    "title": "Backoffice",
    "level": 2
  }
];

}

    