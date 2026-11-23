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
  selector: 'app-my-docs-page-realtime-md',
  templateUrl: './realtime.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsRealtimeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@TaonSubscriber({\n  className: 'RealtimeClassSubscriber',\n})\nexport class RealtimeClassSubscriber extends TaonBaseSubscriberForEntity {\n  listenTo() {\n    return UserEntity;\n  }\n\n  afterInsert(entity: any) {\n    console.log(`AFTER INSERT: `, entity);\n    MainContext.realtime.server.triggerEntityTableChanges(UserEntity);\n  }\n}\n\n// listen change on backend\nasync function start() {\n MainContext.realtime.server\n  .listenChangesCustomEvent(saveNewUserEventKey)\n  .subscribe(async () => {\n    console.log('save new user event');\n    await realtimeUserController.saveNewUser();\n  });\n}\n\n  // listen changes on frontend\nexport class RealtimeClassSubscriberComponent {  \n  ngOnInit(): void {\n    console.log('realtime client subscribers start listening!');\n\n    MainContext.realtime.client\n      .listenChangesEntityTable(UserEntity)\n      .pipe(untilDestroyed(this), debounceTime(1000))\n      .subscribe(message => {\n        console.log('realtime message from class subscriber ', message);\n      });\n  }\n}\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-meta\">@TaonSubscriber</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;RealtimeClassSubscriber&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">RealtimeClassSubscriber</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseSubscriberForEntity</span> </span>{\n  <span class=\"hljs-function\"><span class=\"hljs-title\">listenTo</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-keyword\">return</span> UserEntity;\n  }\n\n  <span class=\"hljs-function\"><span class=\"hljs-title\">afterInsert</span>(<span class=\"hljs-params\">entity: <span class=\"hljs-built_in\">any</span></span>)</span> {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">`AFTER INSERT: `</span>, entity);\n    MainContext.realtime.server.triggerEntityTableChanges(UserEntity);\n  }\n}\n\n<span class=\"hljs-comment\">// listen change on backend</span>\n<span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">start</span>(<span class=\"hljs-params\"></span>) </span>{\n MainContext.realtime.server\n  .listenChangesCustomEvent(saveNewUserEventKey)\n  .subscribe(<span class=\"hljs-keyword\">async</span> () =&gt; {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">&#x27;save new user event&#x27;</span>);\n    <span class=\"hljs-keyword\">await</span> realtimeUserController.saveNewUser();\n  });\n}\n\n  <span class=\"hljs-comment\">// listen changes on frontend</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">RealtimeClassSubscriberComponent</span> </span>{  \n  ngOnInit(): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">&#x27;realtime client subscribers start listening!&#x27;</span>);\n\n    MainContext.realtime.client\n      .listenChangesEntityTable(UserEntity)\n      .pipe(untilDestroyed(<span class=\"hljs-built_in\">this</span>), debounceTime(<span class=\"hljs-number\">1000</span>))\n      .subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">message</span> =&gt;</span> {\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">&#x27;realtime message from class subscriber &#x27;</span>, message);\n      });\n  }\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "realtime-communications",
    "title": "Realtime communications",
    "level": 1
  }
];

}

    