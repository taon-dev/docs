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
  selector: 'app-my-docs-page-general-md',
  templateUrl: './general.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiRulesGeneralMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "taon.jsonc",
// @taonSkipNextLineCut
codeblock1: "{\n  \"type\": \"isomorphic-lib\"\n}\n",
// @taonSkipNextLineCut
codeblock1Html: "{\n  <span class=\"hljs-attr\">&quot;type&quot;</span>: <span class=\"hljs-string\">&quot;isomorphic-lib&quot;</span>\n}\n",
// @taonSkipNextLineCut
codeblock2: "/taon.jsonc",
// @taonSkipNextLineCut
codeblock3: "/src",
// @taonSkipNextLineCut
codeblock4: "{\n  \"type\": \"container\"\n}\n",
// @taonSkipNextLineCut
codeblock4Html: "{\n  <span class=\"hljs-attr\">&quot;type&quot;</span>: <span class=\"hljs-string\">&quot;container&quot;</span>\n}\n",
// @taonSkipNextLineCut
codeblock5: "/taon.jsonc",
// @taonSkipNextLineCut
codeblock6: "/src",
// @taonSkipNextLineCut
codeblock7: "/taon-dev/cms\n/taon-projects/cms\n",
// @taonSkipNextLineCut
codeblock7Html: "/taon-dev/cms\n/taon-projects/cms\n",
// @taonSkipNextLineCut
codeblock8: "/taon-dev/cms/src/**\n/taon-projects/cms/src/**\n",
// @taonSkipNextLineCut
codeblock8Html: "/taon-dev/cms/src/**\n/taon-projects/cms/src/**\n",
// @taonSkipNextLineCut
codeblock9: "/src",
// @taonSkipNextLineCut
codeblock10: "/src",
// @taonSkipNextLineCut
codeblock11: "/src",
// @taonSkipNextLineCut
codeblock12: "/src",
// @taonSkipNextLineCut
codeblock13: "/src",
// @taonSkipNextLineCut
codeblock14: "/src",
// @taonSkipNextLineCut
codeblock15: "/package.json\n/taon.jsonc\n/tsconfig.json\n/angular.json\n/.github/**\n/.ai/**\n/node_modules/**\n/dist/**\n",
// @taonSkipNextLineCut
codeblock15Html: "/package.json\n/taon.jsonc\n/tsconfig.json\n/angular.json\n/.github/**\n/.ai/**\n/node_modules/**\n/dist/**\n",
// @taonSkipNextLineCut
codeblock16: "/src",
// @taonSkipNextLineCut
codeblock17: "/taon-dev/cms\n/taon-projects/cms\n",
// @taonSkipNextLineCut
codeblock17Html: "/taon-dev/cms\n/taon-projects/cms\n",
// @taonSkipNextLineCut
codeblock18: "/src/**",
// @taonSkipNextLineCut
codeblock19: "/src",
// @taonSkipNextLineCut
codeblock20: "taon",
// @taonSkipNextLineCut
codeblock21: "taon mc my-new-migration\n",
// @taonSkipNextLineCut
codeblock21Html: "taon mc my-new-migration\n",
// @taonSkipNextLineCut
codeblock22: "taon lang:extract\n",
// @taonSkipNextLineCut
codeblock22Html: "taon lang:extract\n",
// @taonSkipNextLineCut
codeblock23: "taon",
// @taonSkipNextLineCut
codeblock24: "*.spec.ts\n*.test.ts\n*.spec.js\n*.test.js\n/test/**\n/tests/**\n/__tests__/**\n",
// @taonSkipNextLineCut
codeblock24Html: "*.spec.ts\n*.test.ts\n*.spec.js\n*.test.js\n/test/**\n/tests/**\n/__tests__/**\n",
// @taonSkipNextLineCut
codeblock25: "/package.json\n/taon.jsonc\n",
// @taonSkipNextLineCut
codeblock25Html: "/package.json\n/taon.jsonc\n",
// @taonSkipNextLineCut
codeblock26: "node_modules",
// @taonSkipNextLineCut
codeblock27: "/src/**"
  };

  headings: DocsHeading[] = [
  {
    "id": "general-rules",
    "title": "General Rules",
    "level": 1
  },
  {
    "id": "taon-project-structure",
    "title": "Taon Project Structure",
    "level": 2
  },
  {
    "id": "project-types",
    "title": "Project Types",
    "level": 3
  },
  {
    "id": "allowed-modification-scope",
    "title": "Allowed Modification Scope",
    "level": 1
  },
  {
    "id": "source-files-only",
    "title": "Source files only",
    "level": 2
  },
  {
    "id": "allowed",
    "title": "Allowed",
    "level": 3
  },
  {
    "id": "forbidden",
    "title": "Forbidden",
    "level": 3
  },
  {
    "id": "multi-project-tasks",
    "title": "Multi-Project Tasks",
    "level": 1
  },
  {
    "id": "project-and-artifact-management",
    "title": "Project and Artifact Management",
    "level": 1
  },
  {
    "id": "taon-cli-commands",
    "title": "Taon CLI Commands",
    "level": 1
  },
  {
    "id": "absolute-rule-never-create-or-modify-tests",
    "title": "ABSOLUTE RULE: Never Create or Modify Tests",
    "level": 1
  },
  {
    "id": "explicit-user-override",
    "title": "Explicit User Override",
    "level": 2
  },
  {
    "id": "configuration-and-dependencies",
    "title": "Configuration and Dependencies",
    "level": 1
  },
  {
    "id": "task-boundaries",
    "title": "Task Boundaries",
    "level": 1
  },
  {
    "id": "highest-priority-working-rule",
    "title": "Highest-Priority Working Rule",
    "level": 1
  }
];

}

    