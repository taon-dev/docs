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
  selector: 'app-my-docs-page-session-md',
  templateUrl: './session.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTaonAdminSessionMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/session",
// @taonSkipNextLineCut
codeblock1: "TaonSessionAbstractContext",
// @taonSkipNextLineCut
codeblock2: "TaonSessionAbstractContext",
// @taonSkipNextLineCut
codeblock3: "TaonSessionButtonComponent",
// @taonSkipNextLineCut
codeblock4: "TaonSessionComponent",
// @taonSkipNextLineCut
codeblock5: "TaonSessionConfig",
// @taonSkipNextLineCut
codeblock6: "import { Component } from '@angular/core';\nimport {\n  TaonSessionComponent,\n  TaonSessionConfig,\n} from '@taon-dev/session/src';\n\n@Component({\n  imports: [TaonSessionComponent],\n  template: '<taon-session [config]=\"config\" />',\n})\nexport class SessionHostComponent {\n  config: TaonSessionConfig = {};\n}\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> {\n  TaonSessionComponent,\n  TaonSessionConfig,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/session/src&#x27;</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">imports</span>: [TaonSessionComponent],\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">&#x27;&lt;taon-session [config]=&quot;config&quot; /&gt;&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SessionHostComponent</span> </span>{\n  <span class=\"hljs-attr\">config</span>: TaonSessionConfig = {};\n}\n",
// @taonSkipNextLineCut
codeblock7: "TaonSessionMiddleware",
// @taonSkipNextLineCut
codeblock8: "toManageUsers",
// @taonSkipNextLineCut
codeblock9: "toManageSessions",
// @taonSkipNextLineCut
codeblock10: "toManageAuthorization"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-session",
    "title": "Taon Session",
    "level": 1
  },
  {
    "id": "add-it-to-an-application",
    "title": "Add it to an application",
    "level": 2
  },
  {
    "id": "main-features-and-authorization",
    "title": "Main features and authorization",
    "level": 2
  },
  {
    "id": "runtime-notes",
    "title": "Runtime notes",
    "level": 2
  }
];

}

    