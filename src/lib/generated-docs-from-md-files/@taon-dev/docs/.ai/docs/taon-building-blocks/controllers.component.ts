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
  selector: 'app-my-docs-page-controllers-md',
  templateUrl: './controllers.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsTaonBuildingBlocksControllersMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "*.api.service.ts",
// @taonSkipNextLineCut
codeblock1: "@TaonController",
// @taonSkipNextLineCut
codeblock2: "@GET()",
// @taonSkipNextLineCut
codeblock3: "@websqlFunc",
// @taonSkipNextLineCut
codeblock4: "@TaonController({ className: 'UserController' })\nexport class UserController extends TaonBaseController {\n  @GET()\n  helloWorld(): Taon.Response<string> {\n    //#region @websqlFunc\n    return async () => 'Hello, world!';\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock4Html: "<span class=\"hljs-meta\">@TaonController</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;UserController&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseController</span> </span>{\n  <span class=\"hljs-meta\">@GET</span>()\n  helloWorld(): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> () =&gt; <span class=\"hljs-string\">&#x27;Hello, world!&#x27;</span>;\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock5: "TaonBaseCrudController<User>",
// @taonSkipNextLineCut
codeblock6: "entityClassResolveFn",
// @taonSkipNextLineCut
codeblock7: "User",
// @taonSkipNextLineCut
codeblock8: "getAll()",
// @taonSkipNextLineCut
codeblock9: "update()",
// @taonSkipNextLineCut
codeblock10: "@TaonController({ className: 'UserController' })\nexport class UserController extends TaonBaseCrudController<User> {\n  entityClassResolveFn = () => User;\n\n  @GET()\n  whatTimeIsIt(): Taon.Response<string> {\n    //#region @websqlFunc\n    return async () => new Date().toString();\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock10Html: "<span class=\"hljs-meta\">@TaonController</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;UserController&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseCrudController</span>&lt;<span class=\"hljs-title\">User</span>&gt; </span>{\n  entityClassResolveFn = <span class=\"hljs-function\">() =&gt;</span> User;\n\n  <span class=\"hljs-meta\">@GET</span>()\n  whatTimeIsIt(): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> () =&gt; <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().toString();\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock11: "Taon.error()",
// @taonSkipNextLineCut
codeblock12: "message",
// @taonSkipNextLineCut
codeblock13: "status",
// @taonSkipNextLineCut
codeblock14: "code",
// @taonSkipNextLineCut
codeblock15: "Taon.error()",
// @taonSkipNextLineCut
codeblock16: "throw '…'",
// @taonSkipNextLineCut
codeblock17: "throw new Error('…')",
// @taonSkipNextLineCut
codeblock18: "Error",
// @taonSkipNextLineCut
codeblock19: "res.status(...).json(...)",
// @taonSkipNextLineCut
codeblock20: "Taon.error()",
// @taonSkipNextLineCut
codeblock21: "errorType",
// @taonSkipNextLineCut
codeblock22: "@TaonController({ className: 'SampleController' })\nexport class SampleController extends TaonBaseController {\n  @GET()\n  helloWorld(\n    @Query('errorType')\n    errorType?: 'short' | 'stack' | 'customCode' | 'taonError',\n  ): Taon.Response<string> {\n    //#region @websqlFunc\n    return async (_req, res) => {\n      if (errorType === 'taonError') {\n        Taon.error({\n          message: 'This is a custom Taon error.',\n          code: 'CUSTOM_ERR',\n          status: 499,\n        });\n      }\n\n      if (errorType === 'short') {\n        throw 'A short error message.';\n      }\n\n      if (errorType === 'stack') {\n        throw new Error('An error with a stack trace.');\n      }\n\n      if (errorType === 'customCode') {\n        res.status(444).json({\n          customErrorMessage: 'A custom error response.',\n        });\n        return;\n      }\n\n      return 'Hello, world!';\n    };\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock22Html: "<span class=\"hljs-meta\">@TaonController</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;SampleController&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SampleController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseController</span> </span>{\n  <span class=\"hljs-meta\">@GET</span>()\n  helloWorld(\n    <span class=\"hljs-meta\">@Query</span>(<span class=\"hljs-string\">&#x27;errorType&#x27;</span>)\n    errorType?: <span class=\"hljs-string\">&#x27;short&#x27;</span> | <span class=\"hljs-string\">&#x27;stack&#x27;</span> | <span class=\"hljs-string\">&#x27;customCode&#x27;</span> | <span class=\"hljs-string\">&#x27;taonError&#x27;</span>,\n  ): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> (_req, res) =&gt; {\n      <span class=\"hljs-keyword\">if</span> (errorType === <span class=\"hljs-string\">&#x27;taonError&#x27;</span>) {\n        Taon.error({\n          <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#x27;This is a custom Taon error.&#x27;</span>,\n          <span class=\"hljs-attr\">code</span>: <span class=\"hljs-string\">&#x27;CUSTOM_ERR&#x27;</span>,\n          <span class=\"hljs-attr\">status</span>: <span class=\"hljs-number\">499</span>,\n        });\n      }\n\n      <span class=\"hljs-keyword\">if</span> (errorType === <span class=\"hljs-string\">&#x27;short&#x27;</span>) {\n        <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-string\">&#x27;A short error message.&#x27;</span>;\n      }\n\n      <span class=\"hljs-keyword\">if</span> (errorType === <span class=\"hljs-string\">&#x27;stack&#x27;</span>) {\n        <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Error</span>(<span class=\"hljs-string\">&#x27;An error with a stack trace.&#x27;</span>);\n      }\n\n      <span class=\"hljs-keyword\">if</span> (errorType === <span class=\"hljs-string\">&#x27;customCode&#x27;</span>) {\n        res.status(<span class=\"hljs-number\">444</span>).json({\n          <span class=\"hljs-attr\">customErrorMessage</span>: <span class=\"hljs-string\">&#x27;A custom error response.&#x27;</span>,\n        });\n        <span class=\"hljs-keyword\">return</span>;\n      }\n\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">&#x27;Hello, world!&#x27;</span>;\n    };\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-controllers",
    "title": "Taon controllers",
    "level": 1
  },
  {
    "id": "error-handling-in-controllers",
    "title": "Error handling in controllers",
    "level": 3
  }
];

}

    