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
  selector: 'app-my-docs-page-translate-po-files-and-fix-typos-md',
  templateUrl: './translate-po-files-and-fix-typos.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsUsefullPromptsTranslatePoFilesAndFixTyposMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: ".po",
// @taonSkipNextLineCut
codeblock1: "pl-PL",
// @taonSkipNextLineCut
codeblock2: "de-DE",
// @taonSkipNextLineCut
codeblock3: ".ts",
// @taonSkipNextLineCut
codeblock4: ".html",
// @taonSkipNextLineCut
codeblock5: "pl-PL",
// @taonSkipNextLineCut
codeblock6: "de-DE",
// @taonSkipNextLineCut
codeblock7: ".po",
// @taonSkipNextLineCut
codeblock8: ".po",
// @taonSkipNextLineCut
codeblock9: ".po",
// @taonSkipNextLineCut
codeblock10: ".ts",
// @taonSkipNextLineCut
codeblock11: ".html",
// @taonSkipNextLineCut
codeblock12: "pl-PL",
// @taonSkipNextLineCut
codeblock13: "de-DE",
// @taonSkipNextLineCut
codeblock14: "pl-PL",
// @taonSkipNextLineCut
codeblock15: ".po",
// @taonSkipNextLineCut
codeblock16: "de-DE",
// @taonSkipNextLineCut
codeblock17: ".po",
// @taonSkipNextLineCut
codeblock18: ".ts",
// @taonSkipNextLineCut
codeblock19: ".html"
  };

  headings: DocsHeading[] = [];

}

    