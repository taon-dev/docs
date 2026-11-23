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
  selector: 'app-my-docs-page-i-18-n-md',
  templateUrl: './i18n.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsI18NMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "import { Taon } from 'taon/src';\nimport { Translation } from '@taon-dev/i18n/src';\n\nconst t = Translation.for(\n  Taon.__FILE_RELATIVE_PATH,\n  Taon.LANG_IMPORT_MAP,\n);\n\n@Component({\n  selector: 'my-component',\n  // ...\n})\nexport class MyComponent {\n  //#region injections\n\n  t = t.for(this);\n\n  //#endregion\n\n  signalLabel = this.t.signal.gettext('Label signal');\n\n  signalWithParams = this.t.signal.gettext('Params: [[ test ]]', {\n    test: 'test param',\n  });\n\n  normalLabel = this.t.gettext('Normal label');\n\n  normalLabelWithContext = this.t.gettext(\n    'Normal label',\n    {},\n    'context of translation',\n  );\n\n  refresh = new BehaviorSubject({});\n\n  valueInsideComponent = 'dynamic!';\n\n  observableLabel$ = this.refresh.asObservable().pipe(\n    switchMap(() =>\n      this.t.$.gettext('I am [[ dynamicParam ]]', {\n        dynamicParam: this.valueInsideComponent,\n      }),\n    ),\n  );\n}\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-keyword\">import</span> { Taon } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { Translation } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/i18n/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">const</span> t = Translation.for(\n  Taon.__FILE_RELATIVE_PATH,\n  Taon.LANG_IMPORT_MAP,\n);\n\n<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">selector</span>: <span class=\"hljs-string\">&#x27;my-component&#x27;</span>,\n  <span class=\"hljs-comment\">// ...</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyComponent</span> </span>{\n  <span class=\"hljs-comment\">//#region injections</span>\n\n  t = t.for(<span class=\"hljs-built_in\">this</span>);\n\n  <span class=\"hljs-comment\">//#endregion</span>\n\n  signalLabel = <span class=\"hljs-built_in\">this</span>.t.signal.gettext(<span class=\"hljs-string\">&#x27;Label signal&#x27;</span>);\n\n  signalWithParams = <span class=\"hljs-built_in\">this</span>.t.signal.gettext(<span class=\"hljs-string\">&#x27;Params: [[ test ]]&#x27;</span>, {\n    <span class=\"hljs-attr\">test</span>: <span class=\"hljs-string\">&#x27;test param&#x27;</span>,\n  });\n\n  normalLabel = <span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&#x27;Normal label&#x27;</span>);\n\n  normalLabelWithContext = <span class=\"hljs-built_in\">this</span>.t.gettext(\n    <span class=\"hljs-string\">&#x27;Normal label&#x27;</span>,\n    {},\n    <span class=\"hljs-string\">&#x27;context of translation&#x27;</span>,\n  );\n\n  refresh = <span class=\"hljs-keyword\">new</span> BehaviorSubject({});\n\n  valueInsideComponent = <span class=\"hljs-string\">&#x27;dynamic!&#x27;</span>;\n\n  observableLabel$ = <span class=\"hljs-built_in\">this</span>.refresh.asObservable().pipe(\n    switchMap(<span class=\"hljs-function\">() =&gt;</span>\n      <span class=\"hljs-built_in\">this</span>.t.$.gettext(<span class=\"hljs-string\">&#x27;I am [[ dynamicParam ]]&#x27;</span>, {\n        <span class=\"hljs-attr\">dynamicParam</span>: <span class=\"hljs-built_in\">this</span>.valueInsideComponent,\n      }),\n    ),\n  );\n}\n",
// @taonSkipNextLineCut
codeblock1: "signalLabel = this.t.signal.gettext('Label signal');\n",
// @taonSkipNextLineCut
codeblock1Html: "signalLabel = <span class=\"hljs-built_in\">this</span>.t.signal.gettext(<span class=\"hljs-string\">&#x27;Label signal&#x27;</span>);\n",
// @taonSkipNextLineCut
codeblock2: "signalWithParams = this.t.signal.gettext('Params: [[ test ]]', {\n  test: 'test param',\n});\n",
// @taonSkipNextLineCut
codeblock2Html: "signalWithParams = <span class=\"hljs-built_in\">this</span>.t.signal.gettext(<span class=\"hljs-string\">&#x27;Params: [[ test ]]&#x27;</span>, {\n  <span class=\"hljs-attr\">test</span>: <span class=\"hljs-string\">&#x27;test param&#x27;</span>,\n});\n",
// @taonSkipNextLineCut
codeblock3: "[[ paramName ]]",
// @taonSkipNextLineCut
codeblock4: "gettext()",
// @taonSkipNextLineCut
codeblock5: "normalLabel = this.t.gettext('Normal label');\n",
// @taonSkipNextLineCut
codeblock5Html: "normalLabel = <span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&#x27;Normal label&#x27;</span>);\n",
// @taonSkipNextLineCut
codeblock6: "normalLabelWithContext = this.t.gettext(\n  'Normal label',\n  {},\n  'context of translation',\n);\n",
// @taonSkipNextLineCut
codeblock6Html: "normalLabelWithContext = <span class=\"hljs-built_in\">this</span>.t.gettext(\n  <span class=\"hljs-string\">&#x27;Normal label&#x27;</span>,\n  {},\n  <span class=\"hljs-string\">&#x27;context of translation&#x27;</span>,\n);\n",
// @taonSkipNextLineCut
codeblock7: "observableLabel$ = this.refresh.asObservable().pipe(\n  switchMap(() =>\n    this.t.$.gettext('I am [[ dynamicParam ]]', {\n      dynamicParam: this.valueInsideComponent,\n    }),\n  ),\n);\n",
// @taonSkipNextLineCut
codeblock7Html: "observableLabel$ = <span class=\"hljs-built_in\">this</span>.refresh.asObservable().pipe(\n  switchMap(<span class=\"hljs-function\">() =&gt;</span>\n    <span class=\"hljs-built_in\">this</span>.t.$.gettext(<span class=\"hljs-string\">&#x27;I am [[ dynamicParam ]]&#x27;</span>, {\n      <span class=\"hljs-attr\">dynamicParam</span>: <span class=\"hljs-built_in\">this</span>.valueInsideComponent,\n    }),\n  ),\n);\n",
// @taonSkipNextLineCut
codeblock8: "<span>{{ signalLabel() }}</span>\n\n<span>{{ signalWithParams() }}</span>\n\n<span>{{ normalLabel }}</span>\n\n<span>{{ normalLabelWithContext }}</span>\n\n<span>{{ observableLabel$ | async }}</span>\n\n<span>{{ t.gettext('This also works!') }}</span>\n\n<!-- only when TranslateDirective included in imports -->\n<span translate>This will also be translated!</span>\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ signalLabel() }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ signalWithParams() }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ normalLabel }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ normalLabelWithContext }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ observableLabel$ | async }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ t.gettext(&#x27;This also works!&#x27;) }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- only when TranslateDirective included in imports --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">translate</span>&gt;</span>This will also be translated!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock9: "gettext()",
// @taonSkipNextLineCut
codeblock10: "t.$.gettext()",
// @taonSkipNextLineCut
codeblock11: "[[ param ]]",
// @taonSkipNextLineCut
codeblock12: "TranslateDirective",
// @taonSkipNextLineCut
codeblock13: "t = t.for(this)",
// @taonSkipNextLineCut
codeblock14: "// 🚫 DO NOT USE THIS FOR CONTROLLER REQUEST TRANSLATION\n\nconst t = Translation.for(\n  Taon.__FILE_RELATIVE_PATH,\n  Taon.LANG_IMPORT_MAP,\n);\n",
// @taonSkipNextLineCut
codeblock14Html: "<span class=\"hljs-comment\">// 🚫 DO NOT USE THIS FOR CONTROLLER REQUEST TRANSLATION</span>\n\n<span class=\"hljs-keyword\">const</span> t = Translation.for(\n  Taon.__FILE_RELATIVE_PATH,\n  Taon.LANG_IMPORT_MAP,\n);\n",
// @taonSkipNextLineCut
codeblock15: "t",
// @taonSkipNextLineCut
codeblock16: "return async (req, res, { t }) => {\n  // use t here\n};\n",
// @taonSkipNextLineCut
codeblock16Html: "<span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> (req, res, { t }) =&gt; {\n  <span class=\"hljs-comment\">// use t here</span>\n};\n",
// @taonSkipNextLineCut
codeblock17: "t.signal",
// @taonSkipNextLineCut
codeblock18: "t.$",
// @taonSkipNextLineCut
codeblock19: "t.gettext(...)\n",
// @taonSkipNextLineCut
codeblock19Html: "t.gettext(...)\n",
// @taonSkipNextLineCut
codeblock20: "t.translate(...)\n",
// @taonSkipNextLineCut
codeblock20Html: "t.translate(...)\n",
// @taonSkipNextLineCut
codeblock21: "@TaonController({\n  className: 'ExampleController',\n})\nexport class ExampleController extends TaonBaseController {\n  @GET()\n  helloWorld(\n    @Query('yourName') yourName: string,\n  ): Taon.Response<string> {\n    //#region @websqlFunc\n    return async (req, res, { t }) => {\n      return `${t.gettext('Hello')} : ${yourName}`;\n    };\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock21Html: "<span class=\"hljs-meta\">@TaonController</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;ExampleController&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">ExampleController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseController</span> </span>{\n  <span class=\"hljs-meta\">@GET</span>()\n  helloWorld(\n    <span class=\"hljs-meta\">@Query</span>(<span class=\"hljs-string\">&#x27;yourName&#x27;</span>) yourName: <span class=\"hljs-built_in\">string</span>,\n  ): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> (req, res, { t }) =&gt; {\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`<span class=\"hljs-subst\">${t.gettext(<span class=\"hljs-string\">&#x27;Hello&#x27;</span>)}</span> : <span class=\"hljs-subst\">${yourName}</span>`</span>;\n    };\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock22: "t",
// @taonSkipNextLineCut
codeblock23: "@GET()\nhelloWorldInFrench(\n  @Query('yourName') yourName: string,\n): Taon.Response<string> {\n  //#region @websqlFunc\n  return async (req, res, { t }) => {\n    await t.changeFileLang('fr-FR');\n\n    return `${t.gettext('Hello')} : ${yourName}`;\n  };\n  //#endregion\n}\n",
// @taonSkipNextLineCut
codeblock23Html: "<span class=\"hljs-meta\">@GET</span>()\nhelloWorldInFrench(\n  <span class=\"hljs-meta\">@Query</span>(<span class=\"hljs-string\">&#x27;yourName&#x27;</span>) yourName: <span class=\"hljs-built_in\">string</span>,\n): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n  <span class=\"hljs-comment\">//#region @websqlFunc</span>\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> (req, res, { t }) =&gt; {\n    <span class=\"hljs-keyword\">await</span> t.changeFileLang(<span class=\"hljs-string\">&#x27;fr-FR&#x27;</span>);\n\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`<span class=\"hljs-subst\">${t.gettext(<span class=\"hljs-string\">&#x27;Hello&#x27;</span>)}</span> : <span class=\"hljs-subst\">${yourName}</span>`</span>;\n  };\n  <span class=\"hljs-comment\">//#endregion</span>\n}\n",
// @taonSkipNextLineCut
codeblock24: "gettext()",
// @taonSkipNextLineCut
codeblock25: "translate()",
// @taonSkipNextLineCut
codeblock26: "@POST()\ntranslateSomethingUnknown(\n  @Body('bigText') bigText: string,\n): Taon.Response<string> {\n  //#region @websqlFunc\n  return async (req, res, { t }) => {\n    t.changeFileLang('es-ES');\n\n    return t.translate(bigText);\n  };\n  //#endregion\n}\n",
// @taonSkipNextLineCut
codeblock26Html: "<span class=\"hljs-meta\">@POST</span>()\ntranslateSomethingUnknown(\n  <span class=\"hljs-meta\">@Body</span>(<span class=\"hljs-string\">&#x27;bigText&#x27;</span>) bigText: <span class=\"hljs-built_in\">string</span>,\n): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n  <span class=\"hljs-comment\">//#region @websqlFunc</span>\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> (req, res, { t }) =&gt; {\n    t.changeFileLang(<span class=\"hljs-string\">&#x27;es-ES&#x27;</span>);\n\n    <span class=\"hljs-keyword\">return</span> t.translate(bigText);\n  };\n  <span class=\"hljs-comment\">//#endregion</span>\n}\n",
// @taonSkipNextLineCut
codeblock27: "t",
// @taonSkipNextLineCut
codeblock28: "{ t }",
// @taonSkipNextLineCut
codeblock29: "t",
// @taonSkipNextLineCut
codeblock30: "t.gettext()",
// @taonSkipNextLineCut
codeblock31: "t.translate()",
// @taonSkipNextLineCut
codeblock32: "t.changeFileLang(...)",
// @taonSkipNextLineCut
codeblock33: "Translation.for(...)",
// @taonSkipNextLineCut
codeblock34: "taon lang:extract\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "internationalization-i18n",
    "title": "Internationalization (i18n)",
    "level": 1
  },
  {
    "id": "frontend",
    "title": "Frontend",
    "level": 2
  },
  {
    "id": "component-setup",
    "title": "Component setup",
    "level": 3
  },
  {
    "id": "choosing-the-translation-api",
    "title": "Choosing the translation API",
    "level": 3
  },
  {
    "id": "template-usage",
    "title": "Template usage",
    "level": 3
  },
  {
    "id": "frontend-rules",
    "title": "Frontend rules",
    "level": 3
  },
  {
    "id": "backend",
    "title": "Backend",
    "level": 2
  },
  {
    "id": "important-do-not-create-the-frontend-translation-helper",
    "title": "Important: do NOT create the frontend translation helper",
    "level": 3
  },
  {
    "id": "backend-translations-are-synchronous",
    "title": "Backend translations are synchronous",
    "level": 3
  },
  {
    "id": "translate-using-the-request-language",
    "title": "Translate using the request language",
    "level": 3
  },
  {
    "id": "force-a-specific-language",
    "title": "Force a specific language",
    "level": 3
  },
  {
    "id": "translate-arbitrary-text",
    "title": "Translate arbitrary text",
    "level": 3
  },
  {
    "id": "backend-rules",
    "title": "Backend rules",
    "level": 3
  },
  {
    "id": "cli",
    "title": "CLI",
    "level": 3
  }
];

}

    