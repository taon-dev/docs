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
  selector: 'app-my-docs-page-subscriber-md',
  templateUrl: './subscriber.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsTaonBuildingBlocksSubscriberMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@TaonSubscriber({\n  className: 'TaonSubscriber',\n})\nexport class TaonSubscriber extends TaonBaseSubscriberForEntity {\n  listenTo() {\n    return UserEntity;\n  }\n\n  afterInsert(entity: any) {\n    console.log(`AFTER INSERT: `, entity);\n    MainContext.realtime.server.triggerEntityTableChanges(UserEntity);\n  }\n}\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-meta\">@TaonSubscriber</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;TaonSubscriber&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">TaonSubscriber</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseSubscriberForEntity</span> </span>{\n  <span class=\"hljs-function\"><span class=\"hljs-title\">listenTo</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-keyword\">return</span> UserEntity;\n  }\n\n  <span class=\"hljs-function\"><span class=\"hljs-title\">afterInsert</span>(<span class=\"hljs-params\">entity: <span class=\"hljs-built_in\">any</span></span>)</span> {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">`AFTER INSERT: `</span>, entity);\n    MainContext.realtime.server.triggerEntityTableChanges(UserEntity);\n  }\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-subscribers",
    "title": "Taon subscribers",
    "level": 1
  }
];

}

    