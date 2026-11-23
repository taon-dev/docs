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
  selector: 'app-my-docs-page-isomorphic-code-regions-md',
  templateUrl: './isomorphic-code-regions.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsIsomorphicCodeRegionsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@backend",
// @taonSkipNextLineCut
codeblock1: "@backendFunc",
// @taonSkipNextLineCut
codeblock2: "undefined",
// @taonSkipNextLineCut
codeblock3: "function getNodeVersion(): string | undefined {\n  //#region @backendFunc\n  return process.version;\n  //#endregion\n}\n",
// @taonSkipNextLineCut
codeblock3Html: "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getNodeVersion</span>(<span class=\"hljs-params\"></span>): <span class=\"hljs-title\">string</span> | <span class=\"hljs-title\">undefined</span> </span>{\n  <span class=\"hljs-comment\">//#region @backendFunc</span>\n  <span class=\"hljs-keyword\">return</span> process.version;\n  <span class=\"hljs-comment\">//#endregion</span>\n}\n",
// @taonSkipNextLineCut
codeblock4: "@websql",
// @taonSkipNextLineCut
codeblock5: "@websqlFunc",
// @taonSkipNextLineCut
codeblock6: "function getBackendValue(): string | undefined {\n  //#region @websqlFunc\n  return 'backend-value';\n  //#endregion\n}\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getBackendValue</span>(<span class=\"hljs-params\"></span>): <span class=\"hljs-title\">string</span> | <span class=\"hljs-title\">undefined</span> </span>{\n  <span class=\"hljs-comment\">//#region @websqlFunc</span>\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">&#x27;backend-value&#x27;</span>;\n  <span class=\"hljs-comment\">//#endregion</span>\n}\n",
// @taonSkipNextLineCut
codeblock7: "@backend",
// @taonSkipNextLineCut
codeblock8: "function getRuntimeName(): string {\n  //#region @backend\n  return process.release.name;\n  //#endregion\n  return 'browser';\n}\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getRuntimeName</span>(<span class=\"hljs-params\"></span>): <span class=\"hljs-title\">string</span> </span>{\n  <span class=\"hljs-comment\">//#region @backend</span>\n  <span class=\"hljs-keyword\">return</span> process.release.name;\n  <span class=\"hljs-comment\">//#endregion</span>\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">&#x27;browser&#x27;</span>;\n}\n",
// @taonSkipNextLineCut
codeblock9: "@browser",
// @taonSkipNextLineCut
codeblock10: "import { TaonAdminService } from 'taon/src'; // @browser\n",
// @taonSkipNextLineCut
codeblock10Html: "<span class=\"hljs-keyword\">import</span> { TaonAdminService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>; <span class=\"hljs-comment\">// @browser</span>\n",
// @taonSkipNextLineCut
codeblock11: "@websqlOnly",
// @taonSkipNextLineCut
codeblock12: "//#region @websqlOnly\nconst websqlOnlyValue = 'browser backend';\n//#endregion\n",
// @taonSkipNextLineCut
codeblock12Html: "<span class=\"hljs-comment\">//#region @websqlOnly</span>\n<span class=\"hljs-keyword\">const</span> websqlOnlyValue = <span class=\"hljs-string\">&#x27;browser backend&#x27;</span>;\n<span class=\"hljs-comment\">//#endregion</span>\n",
// @taonSkipNextLineCut
codeblock13: "@esmRemove",
// @taonSkipNextLineCut
codeblock14: "@cjsRemove",
// @taonSkipNextLineCut
codeblock15: "function loadValue(): string {\n  if (isCloudflareWorker()) {\n    //#region @esmRemove\n    return readFromNodeFilesystem();\n    //#endregion\n    return readFromWorkerBinding();\n  }\n  return readFromNodeFilesystem();\n}\n",
// @taonSkipNextLineCut
codeblock15Html: "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">loadValue</span>(<span class=\"hljs-params\"></span>): <span class=\"hljs-title\">string</span> </span>{\n  <span class=\"hljs-keyword\">if</span> (isCloudflareWorker()) {\n    <span class=\"hljs-comment\">//#region @esmRemove</span>\n    <span class=\"hljs-keyword\">return</span> readFromNodeFilesystem();\n    <span class=\"hljs-comment\">//#endregion</span>\n    <span class=\"hljs-keyword\">return</span> readFromWorkerBinding();\n  }\n  <span class=\"hljs-keyword\">return</span> readFromNodeFilesystem();\n}\n",
// @taonSkipNextLineCut
codeblock16: ".browser.ts",
// @taonSkipNextLineCut
codeblock17: ".backend.ts",
// @taonSkipNextLineCut
codeblock18: ".service.ts",
// @taonSkipNextLineCut
codeblock19: ".routes.ts",
// @taonSkipNextLineCut
codeblock20: "// @browser"
  };

  headings: DocsHeading[] = [
  {
    "id": "isomorphic-code-regions",
    "title": "Isomorphic code regions",
    "level": 1
  },
  {
    "id": "backend-code",
    "title": "Backend code",
    "level": 2
  },
  {
    "id": "browser-only-and-websql-only-code",
    "title": "Browser-only and WebSQL-only code",
    "level": 2
  },
  {
    "id": "commonjs-and-esm-differences",
    "title": "CommonJS and ESM differences",
    "level": 2
  },
  {
    "id": "file-suffixes-and-imports",
    "title": "File suffixes and imports",
    "level": 2
  }
];

}

    