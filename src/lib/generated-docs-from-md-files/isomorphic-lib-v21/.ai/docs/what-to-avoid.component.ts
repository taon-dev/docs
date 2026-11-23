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
  selector: 'app-my-docs-page-what-to-avoid-md',
  templateUrl: './what-to-avoid.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsWhatToAvoidMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "await queryRunner.startTransaction();\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-keyword\">await</span> queryRunner.startTransaction();\n",
// @taonSkipNextLineCut
codeblock1: "await queryRunner.release();  // IT IS NOT ENOUGH\n                        // and this may cause weird errors\n\n// proper 'end' of transaction\nawait queryRunner.commitTransaction();\nawait queryRunner.release();\n",
// @taonSkipNextLineCut
codeblock1Html: "<span class=\"hljs-keyword\">await</span> queryRunner.release();  <span class=\"hljs-comment\">// IT IS NOT ENOUGH</span>\n                        <span class=\"hljs-comment\">// and this may cause weird errors</span>\n\n<span class=\"hljs-comment\">// proper &#x27;end&#x27; of transaction</span>\n<span class=\"hljs-keyword\">await</span> queryRunner.commitTransaction();\n<span class=\"hljs-keyword\">await</span> queryRunner.release();\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "what-to-avoid",
    "title": "What to avoid",
    "level": 1
  },
  {
    "id": "finish-migration-transactions-correctly",
    "title": "Finish migration transactions correctly",
    "level": 2
  },
  {
    "id": "use-current-timestamp-instead-now",
    "title": "Use CURRENT_TIMESTAMP instead NOW()",
    "level": 2
  },
  {
    "id": "use-integer-instead-int",
    "title": "Use integer instead int",
    "level": 2
  }
];

}

    