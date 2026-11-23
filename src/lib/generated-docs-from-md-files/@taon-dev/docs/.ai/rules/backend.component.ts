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
  selector: 'app-my-docs-page-backend-md',
  templateUrl: './backend.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiRulesBackendMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: ".ts",
// @taonSkipNextLineCut
codeblock1: "@backend",
// @taonSkipNextLineCut
codeblock2: "@backendFunc",
// @taonSkipNextLineCut
codeblock3: "@websql",
// @taonSkipNextLineCut
codeblock4: "@websqlFunc",
// @taonSkipNextLineCut
codeblock5: "@browser",
// @taonSkipNextLineCut
codeblock6: "@websqlOnly",
// @taonSkipNextLineCut
codeblock7: "@esmRemove",
// @taonSkipNextLineCut
codeblock8: "@cjsRemove",
// @taonSkipNextLineCut
codeblock9: "@backendFunc",
// @taonSkipNextLineCut
codeblock10: "undefined",
// @taonSkipNextLineCut
codeblock11: "export namespace Utils {\n  export const createBackendFile = () => {\n    //#region @backendFunc\n    /* ... */\n    //#endregion\n  };\n}\n",
// @taonSkipNextLineCut
codeblock11Html: "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">namespace</span> Utils {\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> createBackendFile = <span class=\"hljs-function\">() =&gt;</span> {\n    <span class=\"hljs-comment\">//#region @backendFunc</span>\n    <span class=\"hljs-comment\">/* ... */</span>\n    <span class=\"hljs-comment\">//#endregion</span>\n  };\n}\n",
// @taonSkipNextLineCut
codeblock12: "@websqlFunc",
// @taonSkipNextLineCut
codeblock13: "export namespace Utils {\n  export const createBackendFile = () => {\n    //#region @websqlFunc\n    /* ... */\n    //#endregion\n  };\n}\n",
// @taonSkipNextLineCut
codeblock13Html: "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">namespace</span> Utils {\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> createBackendFile = <span class=\"hljs-function\">() =&gt;</span> {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-comment\">/* ... */</span>\n    <span class=\"hljs-comment\">//#endregion</span>\n  };\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "backend",
    "title": "Backend",
    "level": 1
  },
  {
    "id": "isomorphic-source",
    "title": "Isomorphic source",
    "level": 2
  },
  {
    "id": "runtime-differences",
    "title": "Runtime differences",
    "level": 2
  },
  {
    "id": "runtime-specific-functions",
    "title": "Runtime-specific functions",
    "level": 2
  }
];

}

    