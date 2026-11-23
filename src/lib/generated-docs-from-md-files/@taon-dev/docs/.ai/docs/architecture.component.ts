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
  selector: 'app-my-docs-page-architecture-md',
  templateUrl: './architecture.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsArchitectureMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "src/",
// @taonSkipNextLineCut
codeblock1: "taon.jsonc",
// @taonSkipNextLineCut
codeblock2: "taon.jsonc",
// @taonSkipNextLineCut
codeblock3: "type",
// @taonSkipNextLineCut
codeblock4: "type",
// @taonSkipNextLineCut
codeblock5: "isomorphic-lib",
// @taonSkipNextLineCut
codeblock6: "src/",
// @taonSkipNextLineCut
codeblock7: "container",
// @taonSkipNextLineCut
codeblock8: "taon.jsonc",
// @taonSkipNextLineCut
codeblock9: "taon.jsonc",
// @taonSkipNextLineCut
codeblock10: "isomorphic-lib",
// @taonSkipNextLineCut
codeblock11: "taon.jsonc",
// @taonSkipNextLineCut
codeblock12: "{\n  \"type\": \"isomorphic-lib\"\n}\n",
// @taonSkipNextLineCut
codeblock13: "src/",
// @taonSkipNextLineCut
codeblock14: "type",
// @taonSkipNextLineCut
codeblock15: "my-feature/\n  taon.jsonc\n  src/\n    lib/\n      index.ts\n    app.ts\n",
// @taonSkipNextLineCut
codeblock15Html: "my-feature/\n  taon.jsonc\n  src/\n    lib/\n      index.ts\n    app.ts\n",
// @taonSkipNextLineCut
codeblock16: "container",
// @taonSkipNextLineCut
codeblock17: "taon.jsonc",
// @taonSkipNextLineCut
codeblock18: "{\n  \"type\": \"container\"\n}\n",
// @taonSkipNextLineCut
codeblock19: "workspace/\n  taon.jsonc\n  shared-feature/\n    taon.jsonc\n    src/\n  applications/\n    taon.jsonc\n    website/\n      taon.jsonc\n      src/\n",
// @taonSkipNextLineCut
codeblock19Html: "workspace/\n  taon.jsonc\n  shared-feature/\n    taon.jsonc\n    src/\n  applications/\n    taon.jsonc\n    website/\n      taon.jsonc\n      src/\n",
// @taonSkipNextLineCut
codeblock20: "workspace/",
// @taonSkipNextLineCut
codeblock21: "applications/",
// @taonSkipNextLineCut
codeblock22: "shared-feature/",
// @taonSkipNextLineCut
codeblock23: "website/",
// @taonSkipNextLineCut
codeblock24: "website/",
// @taonSkipNextLineCut
codeblock25: "shared-feature/",
// @taonSkipNextLineCut
codeblock26: "website/",
// @taonSkipNextLineCut
codeblock27: "taon.jsonc",
// @taonSkipNextLineCut
codeblock28: "taon.jsonc",
// @taonSkipNextLineCut
codeblock29: "src/",
// @taonSkipNextLineCut
codeblock30: "taon.jsonc",
// @taonSkipNextLineCut
codeblock31: "src/",
// @taonSkipNextLineCut
codeblock32: "src/lib/index.ts",
// @taonSkipNextLineCut
codeblock33: "src/app.ts",
// @taonSkipNextLineCut
codeblock34: "src/app.electron.ts",
// @taonSkipNextLineCut
codeblock35: "src/app.vscode.ts",
// @taonSkipNextLineCut
codeblock36: "src/cli.ts",
// @taonSkipNextLineCut
codeblock37: "src/global.scss",
// @taonSkipNextLineCut
codeblock38: "taon build:lib\ntaon build:watch:lib\n",
// @taonSkipNextLineCut
codeblock38Html: "taon build:lib\ntaon build:watch:lib\n",
// @taonSkipNextLineCut
codeblock39: "taon app:normal\n",
// @taonSkipNextLineCut
codeblock39Html: "taon app:normal\n",
// @taonSkipNextLineCut
codeblock40: "taon app:websql",
// @taonSkipNextLineCut
codeblock41: "taon app:cloudflare",
// @taonSkipNextLineCut
codeblock42: "taon app:electron",
// @taonSkipNextLineCut
codeblock43: "taon app:normal"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-architecture",
    "title": "Taon architecture",
    "level": 1
  },
  {
    "id": "identify-a-taon-project",
    "title": "Identify a Taon project",
    "level": 2
  },
  {
    "id": "standalone-projects",
    "title": "Standalone projects",
    "level": 3
  },
  {
    "id": "container-projects",
    "title": "Container projects",
    "level": 3
  },
  {
    "id": "navigate-a-workspace",
    "title": "Navigate a workspace",
    "level": 3
  },
  {
    "id": "standalone-project-entry-points",
    "title": "Standalone project entry points",
    "level": 2
  },
  {
    "id": "how-an-application-is-assembled",
    "title": "How an application is assembled",
    "level": 2
  },
  {
    "id": "isomorphic-source-and-runtime-targets",
    "title": "Isomorphic source and runtime targets",
    "level": 2
  },
  {
    "id": "build-and-run-a-standalone-project",
    "title": "Build and run a standalone project",
    "level": 2
  },
  {
    "id": "further-reading",
    "title": "Further reading",
    "level": 2
  }
];

}

    