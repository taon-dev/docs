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
  selector: 'app-my-docs-page-repositories-md',
  templateUrl: './repositories.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsTaonBuildingBlocksRepositoriesMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "TaonBaseRepository<Entity>",
// @taonSkipNextLineCut
codeblock1: "TaonBaseCustomRepository",
// @taonSkipNextLineCut
codeblock2: "TaonBaseRepository<User>",
// @taonSkipNextLineCut
codeblock3: "entityClassResolveFn",
// @taonSkipNextLineCut
codeblock4: "User",
// @taonSkipNextLineCut
codeblock5: "this.repo",
// @taonSkipNextLineCut
codeblock6: "findByEmail()",
// @taonSkipNextLineCut
codeblock7: "@websqlFunc",
// @taonSkipNextLineCut
codeblock8: "@TaonRepository({ className: 'UserRepository' })\nexport class UserRepository extends TaonBaseRepository<User> {\n  entityClassResolveFn = () => User;\n\n  async findByEmail(email: string) {\n    //#region @websqlFunc\n    return this.repo.findOne({ where: { email } });\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-meta\">@TaonRepository</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;UserRepository&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserRepository</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseRepository</span>&lt;<span class=\"hljs-title\">User</span>&gt; </span>{\n  entityClassResolveFn = <span class=\"hljs-function\">() =&gt;</span> User;\n\n  <span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-title\">findByEmail</span>(<span class=\"hljs-params\">email: <span class=\"hljs-built_in\">string</span></span>)</span> {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>.repo.findOne({ <span class=\"hljs-attr\">where</span>: { email } });\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock9: "TaonBaseCustomRepository",
// @taonSkipNextLineCut
codeblock10: "createCheckoutUrl",
// @taonSkipNextLineCut
codeblock11: "@backendFunc",
// @taonSkipNextLineCut
codeblock12: "@TaonRepository({ className: 'TaonStripeApiRepository' })\nexport abstract class TaonStripeApiRepository extends TaonBaseCustomRepository {\n  async getCheckoutUrl(): Promise<string> {\n    //#region @backendFunc\n    return this.createCheckoutUrl();\n    //#endregion\n  }\n\n  protected abstract createCheckoutUrl(): Promise<string>;\n}\n",
// @taonSkipNextLineCut
codeblock12Html: "<span class=\"hljs-meta\">@TaonRepository</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;TaonStripeApiRepository&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">abstract</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">TaonStripeApiRepository</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseCustomRepository</span> </span>{\n  <span class=\"hljs-keyword\">async</span> getCheckoutUrl(): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @backendFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>.createCheckoutUrl();\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n\n  <span class=\"hljs-keyword\">protected</span> <span class=\"hljs-keyword\">abstract</span> createCheckoutUrl(): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">string</span>&gt;;\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-repositories",
    "title": "Taon repositories",
    "level": 1
  }
];

}

    