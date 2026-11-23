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
  selector: 'app-my-docs-page-dev-mode-readme-md',
  templateUrl: './dev-mode.README.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpSrcLibProjectAbstractTaonWorkerDevModeDevModeReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "// your app app/cli\n\nfunction async startWorker() {\n  const worker = new DevModeWorker(\n    'unique-for-the-whole-os-id-for-service',\n    'command for starting this service. ex: dev-mode-cli startWorker'\n  );\n  const ctrl = await worker.cliStartProcedure(); // by default started as child_process\n  //\n}\n\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-comment\">// your app app/cli</span>\n\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">async</span> <span class=\"hljs-title\">startWorker</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">const</span> worker = <span class=\"hljs-keyword\">new</span> DevModeWorker(\n    <span class=\"hljs-string\">&#x27;unique-for-the-whole-os-id-for-service&#x27;</span>,\n    <span class=\"hljs-string\">&#x27;command for starting this service. ex: dev-mode-cli startWorker&#x27;</span>\n  );\n  <span class=\"hljs-keyword\">const</span> ctrl = <span class=\"hljs-keyword\">await</span> worker.cliStartProcedure(); <span class=\"hljs-comment\">// by default started as child_process</span>\n  <span class=\"hljs-comment\">//</span>\n}\n\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-worker-microservice",
    "title": "Taon Worker/Microservice",
    "level": 1
  }
];

}

    