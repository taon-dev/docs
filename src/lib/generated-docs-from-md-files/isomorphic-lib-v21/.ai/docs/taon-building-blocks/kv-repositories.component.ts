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
  selector: 'app-my-docs-page-kv-repositories-md',
  templateUrl: './kv-repositories.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsTaonBuildingBlocksKvRepositoriesMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "TaonBaseKvRepository",
// @taonSkipNextLineCut
codeblock1: "@TaonRepository",
// @taonSkipNextLineCut
codeblock2: "users",
// @taonSkipNextLineCut
codeblock3: "User[]",
// @taonSkipNextLineCut
codeblock4: "setUsers()",
// @taonSkipNextLineCut
codeblock5: "getUsers()",
// @taonSkipNextLineCut
codeblock6: "@TaonRepository({\n  className: 'UserKvRepository',\n})\nexport class UserKvRepository extends TaonBaseKvRepository<{\n  users: User[];\n}> {\n  async setUsers(users: User[]): Promise<void> {\n    //#region @websqlFunc\n    await this.set('users', users);\n    //#endregion\n  }\n\n  async getUsers(): Promise<User[]> {\n    //#region @websqlFunc\n    return await this.get('users');\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-meta\">@TaonRepository</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;UserKvRepository&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserKvRepository</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseKvRepository</span>&lt;</span>{\n  <span class=\"hljs-attr\">users</span>: User[];\n}&gt; {\n  <span class=\"hljs-keyword\">async</span> setUsers(users: User[]): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.set(<span class=\"hljs-string\">&#x27;users&#x27;</span>, users);\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n\n  <span class=\"hljs-keyword\">async</span> getUsers(): <span class=\"hljs-built_in\">Promise</span>&lt;User[]&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.get(<span class=\"hljs-string\">&#x27;users&#x27;</span>);\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock7: "@websqlFunc",
// @taonSkipNextLineCut
codeblock8: "injectKvRepository()",
// @taonSkipNextLineCut
codeblock9: "private readonly userKvRepository = this.inject(\n  UserKvRepository,\n);\n",
// @taonSkipNextLineCut
codeblock9Html: "<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> userKvRepository = <span class=\"hljs-built_in\">this</span>.inject(\n  UserKvRepository,\n);\n",
// @taonSkipNextLineCut
codeblock10: "UserKvRepository"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-kv-repositories",
    "title": "Taon KV Repositories",
    "level": 1
  },
  {
    "id": "define-a-repository",
    "title": "Define a repository",
    "level": 2
  },
  {
    "id": "inject-the-repository-into-a-context",
    "title": "Inject the repository into a context",
    "level": 2
  },
  {
    "id": "choose-the-right-storage-model",
    "title": "Choose the right storage model",
    "level": 2
  }
];

}

    