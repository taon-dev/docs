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
  selector: 'app-my-docs-page-middlewares-md',
  templateUrl: './middlewares.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsTaonBuildingBlocksMiddlewaresMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "interceptServer()",
// @taonSkipNextLineCut
codeblock1: "interceptClient()",
// @taonSkipNextLineCut
codeblock2: "interceptServerMethod()",
// @taonSkipNextLineCut
codeblock3: "interceptClientMethod()",
// @taonSkipNextLineCut
codeblock4: "interceptServerMethod()",
// @taonSkipNextLineCut
codeblock5: "interceptClientMethod()",
// @taonSkipNextLineCut
codeblock6: "interceptServer()",
// @taonSkipNextLineCut
codeblock7: "next()",
// @taonSkipNextLineCut
codeblock8: "@TaonMiddleware({ className: 'ContextServerMiddleware' })\nexport class ContextServerMiddleware extends TaonBaseMiddleware {\n  interceptServer({\n    req,\n    next,\n  }: TaonServerMiddlewareInterceptOptions): Promise<void> | void {\n    console.log(req?.url);\n    next();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-meta\">@TaonMiddleware</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;ContextServerMiddleware&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">ContextServerMiddleware</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseMiddleware</span> </span>{\n  interceptServer({\n    req,\n    next,\n  }: TaonServerMiddlewareInterceptOptions): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; | <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-built_in\">console</span>.log(req?.url);\n    next();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock9: "interceptClient()",
// @taonSkipNextLineCut
codeblock10: "next.handle(req)",
// @taonSkipNextLineCut
codeblock11: "@TaonMiddleware({ className: 'ContextClientMiddleware' })\nexport class ContextClientMiddleware extends TaonBaseMiddleware {\n  interceptClient({\n    req,\n    next,\n  }: TaonClientMiddlewareInterceptOptions): Observable<AxiosResponse<any>> {\n    console.log(req?.url);\n    return next.handle(req);\n  }\n}\n",
// @taonSkipNextLineCut
codeblock11Html: "<span class=\"hljs-meta\">@TaonMiddleware</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;ContextClientMiddleware&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">ContextClientMiddleware</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseMiddleware</span> </span>{\n  interceptClient({\n    req,\n    next,\n  }: TaonClientMiddlewareInterceptOptions): Observable&lt;AxiosResponse&lt;<span class=\"hljs-built_in\">any</span>&gt;&gt; {\n    <span class=\"hljs-built_in\">console</span>.log(req?.url);\n    <span class=\"hljs-keyword\">return</span> next.handle(req);\n  }\n}\n",
// @taonSkipNextLineCut
codeblock12: "interceptServerMethod()",
// @taonSkipNextLineCut
codeblock13: "async",
// @taonSkipNextLineCut
codeblock14: "await",
// @taonSkipNextLineCut
codeblock15: "next()",
// @taonSkipNextLineCut
codeblock16: "interceptServer = undefined",
// @taonSkipNextLineCut
codeblock17: "@TaonMiddleware({ className: 'MethodServerMiddleware' })\nexport class MethodServerMiddleware extends TaonBaseMiddleware {\n  interceptServer = undefined;\n\n  interceptServerMethod(\n    { next }: TaonServerMiddlewareInterceptOptions,\n    { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo,\n  ): Promise<void> | void {\n    console.log(methodName, expressPath);\n    next();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock17Html: "<span class=\"hljs-meta\">@TaonMiddleware</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;MethodServerMiddleware&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MethodServerMiddleware</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseMiddleware</span> </span>{\n  interceptServer = <span class=\"hljs-literal\">undefined</span>;\n\n  interceptServerMethod(\n    { next }: TaonServerMiddlewareInterceptOptions,\n    { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo,\n  ): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; | <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-built_in\">console</span>.log(methodName, expressPath);\n    next();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock18: "interceptClientMethod()",
// @taonSkipNextLineCut
codeblock19: "next.handle(req)",
// @taonSkipNextLineCut
codeblock20: "tap()",
// @taonSkipNextLineCut
codeblock21: "interceptClient = undefined",
// @taonSkipNextLineCut
codeblock22: "@TaonMiddleware({ className: 'MethodClientMiddleware' })\nexport class MethodClientMiddleware extends TaonBaseMiddleware {\n  interceptClient = undefined;\n\n  interceptClientMethod(\n    { req, next }: TaonClientMiddlewareInterceptOptions,\n    { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo,\n  ): Observable<AxiosResponse<any>> {\n    console.log(methodName, expressPath);\n\n    return next.handle(req).pipe(\n      tap(response => console.log(response.status)),\n    );\n  }\n}\n",
// @taonSkipNextLineCut
codeblock22Html: "<span class=\"hljs-meta\">@TaonMiddleware</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;MethodClientMiddleware&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MethodClientMiddleware</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseMiddleware</span> </span>{\n  interceptClient = <span class=\"hljs-literal\">undefined</span>;\n\n  interceptClientMethod(\n    { req, next }: TaonClientMiddlewareInterceptOptions,\n    { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo,\n  ): Observable&lt;AxiosResponse&lt;<span class=\"hljs-built_in\">any</span>&gt;&gt; {\n    <span class=\"hljs-built_in\">console</span>.log(methodName, expressPath);\n\n    <span class=\"hljs-keyword\">return</span> next.handle(req).pipe(\n      tap(<span class=\"hljs-function\"><span class=\"hljs-params\">response</span> =&gt;</span> <span class=\"hljs-built_in\">console</span>.log(response.status)),\n    );\n  }\n}\n",
// @taonSkipNextLineCut
codeblock23: "@TaonController({ middlewares: ... })",
// @taonSkipNextLineCut
codeblock24: "parentMiddlewares",
// @taonSkipNextLineCut
codeblock25: "@TaonController({\n  className: 'SessionController',\n  middlewares: ({ parentMiddlewares }) => ({\n    ...parentMiddlewares,\n    MethodServerMiddleware,\n  }),\n})\nexport class SessionController extends TaonBaseController {\n  @GET()\n  helloWorld(): Taon.Response<string> {\n    //#region @websqlFunc\n    return async () => 'Hello, world!';\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock25Html: "<span class=\"hljs-meta\">@TaonController</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;SessionController&#x27;</span>,\n  <span class=\"hljs-attr\">middlewares</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">{ parentMiddlewares }</span>) =&gt;</span> ({\n    ...parentMiddlewares,\n    MethodServerMiddleware,\n  }),\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SessionController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseController</span> </span>{\n  <span class=\"hljs-meta\">@GET</span>()\n  helloWorld(): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> () =&gt; <span class=\"hljs-string\">&#x27;Hello, world!&#x27;</span>;\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock26: "middlewares",
// @taonSkipNextLineCut
codeblock27: "MethodClientMiddleware",
// @taonSkipNextLineCut
codeblock28: "helloWorld()",
// @taonSkipNextLineCut
codeblock29: "@websqlFunc",
// @taonSkipNextLineCut
codeblock30: "@TaonController({ className: 'SessionController' })\nexport class SessionController extends TaonBaseController {\n  @PUT({\n    middlewares: ({ parentMiddlewares }) => ({\n      ...parentMiddlewares,\n      MethodClientMiddleware,\n    }),\n  })\n  helloWorld(): Taon.Response<string> {\n    //#region @websqlFunc\n    return async () => 'Hello, world!';\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock30Html: "<span class=\"hljs-meta\">@TaonController</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;SessionController&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SessionController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseController</span> </span>{\n  <span class=\"hljs-meta\">@PUT</span>({\n    <span class=\"hljs-attr\">middlewares</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">{ parentMiddlewares }</span>) =&gt;</span> ({\n      ...parentMiddlewares,\n      MethodClientMiddleware,\n    }),\n  })\n  helloWorld(): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> () =&gt; <span class=\"hljs-string\">&#x27;Hello, world!&#x27;</span>;\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-middleware-and-interceptors",
    "title": "Taon middleware and interceptors",
    "level": 1
  }
];

}

    