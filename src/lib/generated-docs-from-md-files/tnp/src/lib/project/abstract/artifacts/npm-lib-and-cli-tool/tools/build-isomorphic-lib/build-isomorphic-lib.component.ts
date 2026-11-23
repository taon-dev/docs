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
  selector: 'app-my-docs-page-build-isomorphic-lib-md',
  templateUrl: './build-isomorphic-lib.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpSrcLibProjectAbstractArtifactsNpmLibAndCliToolToolsBuildIsomorphicLibBuildIsomorphicLibMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "import { Taon } from 'taon/src'\n\nconsole.log('visible everywhere')\n//#region @backend\nconsole.log('visible in backend only')\n//#endregion\nif(Helpers.isBrowser) {\n  console.log('visible everywhere, but only in browser')\n}\n\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-keyword\">import</span> { Taon } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>\n\n<span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">&#x27;visible everywhere&#x27;</span>)\n<span class=\"hljs-comment\">//#region @backend</span>\n<span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">&#x27;visible in backend only&#x27;</span>)\n<span class=\"hljs-comment\">//#endregion</span>\n<span class=\"hljs-keyword\">if</span>(Helpers.isBrowser) {\n  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">&#x27;visible everywhere, but only in browser&#x27;</span>)\n}\n\n",
// @taonSkipNextLineCut
codeblock1: "import { Taon } from 'taon/src'\n\n\nclass MyController {\n\n  getSecrets() {\n    //#region @backendFunc\n      \n    //#endregion\n  }\n\n\n}\n\n\n",
// @taonSkipNextLineCut
codeblock1Html: "<span class=\"hljs-keyword\">import</span> { Taon } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>\n\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyController</span> </span>{\n\n  <span class=\"hljs-function\"><span class=\"hljs-title\">getSecrets</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-comment\">//#region @backendFunc</span>\n      \n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n\n\n}\n\n\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "build-isomorphi-lib",
    "title": "Build isomorphi lib:",
    "level": 1
  },
  {
    "id": "usage-of-region-backend",
    "title": "Usage of region @backend",
    "level": 3
  },
  {
    "id": "usage-of-region-backendfunc",
    "title": "Usage of region @backendFunc",
    "level": 3
  }
];

}

    