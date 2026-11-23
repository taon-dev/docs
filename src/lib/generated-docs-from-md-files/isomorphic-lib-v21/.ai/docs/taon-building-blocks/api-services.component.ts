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
  selector: 'app-my-docs-page-api-services-md',
  templateUrl: './api-services.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsTaonBuildingBlocksApiServicesMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "providedIn: 'root'",
// @taonSkipNextLineCut
codeblock1: "@Injectable()\nexport class UserApiService extends TaonBaseAngularService {\n  protected userController = this.inject(UserController);\n\n  getCrudController() {\n    return this.userController;\n  }\n\n  getAll() {\n    return this.userController.getAll()\n      .request()\n      .observable\n      .pipe(map(response => response.body.json));\n  }\n\n  async getTime() {\n    const response = await this.userController.whatTimeIsIt().request();\n    return response.body.text;\n  }\n}\n",
// @taonSkipNextLineCut
codeblock1Html: "<span class=\"hljs-meta\">@Injectable</span>()\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserApiService</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseAngularService</span> </span>{\n  <span class=\"hljs-keyword\">protected</span> userController = <span class=\"hljs-built_in\">this</span>.inject(UserController);\n\n  <span class=\"hljs-function\"><span class=\"hljs-title\">getCrudController</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>.userController;\n  }\n\n  <span class=\"hljs-function\"><span class=\"hljs-title\">getAll</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>.userController.getAll()\n      .request()\n      .observable\n      .pipe(map(<span class=\"hljs-function\"><span class=\"hljs-params\">response</span> =&gt;</span> response.body.json));\n  }\n\n  <span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-title\">getTime</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-keyword\">const</span> response = <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.userController.whatTimeIsIt().request();\n    <span class=\"hljs-keyword\">return</span> response.body.text;\n  }\n}\n",
// @taonSkipNextLineCut
codeblock2: "request().observable",
// @taonSkipNextLineCut
codeblock3: "request()"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-api-service",
    "title": "Taon API service",
    "level": 1
  }
];

}

    