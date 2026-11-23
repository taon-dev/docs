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
  selector: 'app-my-docs-page-entities-md',
  templateUrl: './entities.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsTaonBuildingBlocksEntitiesMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@TaonEntity",
// @taonSkipNextLineCut
codeblock1: "className",
// @taonSkipNextLineCut
codeblock2: "@StringColumn()",
// @taonSkipNextLineCut
codeblock3: "location",
// @taonSkipNextLineCut
codeblock4: "@websql",
// @taonSkipNextLineCut
codeblock5: "@TaonEntity({ className: 'Project' })\nexport class Project extends TaonBaseEntity {\n  //#region @websql\n  @StringColumn()\n  //#endregion\n  location?: string;\n}\n",
// @taonSkipNextLineCut
codeblock5Html: "<span class=\"hljs-meta\">@TaonEntity</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;Project&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">Project</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseEntity</span> </span>{\n  <span class=\"hljs-comment\">//#region @websql</span>\n  <span class=\"hljs-meta\">@StringColumn</span>()\n  <span class=\"hljs-comment\">//#endregion</span>\n  location?: <span class=\"hljs-built_in\">string</span>;\n}\n",
// @taonSkipNextLineCut
codeblock6: "?",
// @taonSkipNextLineCut
codeblock7: "location",
// @taonSkipNextLineCut
codeblock8: "TaonBaseAbstractEntity",
// @taonSkipNextLineCut
codeblock9: "id",
// @taonSkipNextLineCut
codeblock10: "version",
// @taonSkipNextLineCut
codeblock11: "@TaonEntity({ className: 'User' })\nexport class User extends TaonBaseAbstractEntity {\n  //#region @websql\n  @StringColumn()\n  //#endregion\n  name?: string;\n}\n",
// @taonSkipNextLineCut
codeblock11Html: "<span class=\"hljs-meta\">@TaonEntity</span>({ <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;User&#x27;</span> })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">User</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseAbstractEntity</span> </span>{\n  <span class=\"hljs-comment\">//#region @websql</span>\n  <span class=\"hljs-meta\">@StringColumn</span>()\n  <span class=\"hljs-comment\">//#endregion</span>\n  name?: <span class=\"hljs-built_in\">string</span>;\n}\n",
// @taonSkipNextLineCut
codeblock12: "this.injectRepo()",
// @taonSkipNextLineCut
codeblock13: "private readonly userRepository = this.injectRepo(User);\n",
// @taonSkipNextLineCut
codeblock13Html: "<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> userRepository = <span class=\"hljs-built_in\">this</span>.injectRepo(User);\n",
// @taonSkipNextLineCut
codeblock14: "@StringColumn()",
// @taonSkipNextLineCut
codeblock15: "int",
// @taonSkipNextLineCut
codeblock16: "jsonb"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-entities",
    "title": "Taon entities",
    "level": 1
  },
  {
    "id": "define-an-entity",
    "title": "Define an entity",
    "level": 2
  },
  {
    "id": "use-the-base-entity-with-id-and-version-fields",
    "title": "Use the base entity with ID and version fields",
    "level": 2
  },
  {
    "id": "inject-an-entity-repository",
    "title": "Inject an entity repository",
    "level": 2
  },
  {
    "id": "keep-entities-compatible-with-sqlite",
    "title": "Keep entities compatible with SQLite",
    "level": 2
  }
];

}

    