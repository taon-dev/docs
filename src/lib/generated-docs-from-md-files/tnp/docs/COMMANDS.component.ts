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
  selector: 'app-my-docs-page-commands-md',
  templateUrl: './COMMANDS.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpDocsCommandsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "taon new",
// @taonSkipNextLineCut
codeblock1: "taon new my-standalone-project\n",
// @taonSkipNextLineCut
codeblock1Html: "taon new my-standalone-project\n",
// @taonSkipNextLineCut
codeblock2: "taon new my-standalone-project --baseline\n",
// @taonSkipNextLineCut
codeblock2Html: "taon new my-standalone-project --baseline\n",
// @taonSkipNextLineCut
codeblock3: "taon new my-standalone-project --docs\n",
// @taonSkipNextLineCut
codeblock3Html: "taon new my-standalone-project --docs\n",
// @taonSkipNextLineCut
codeblock4: "taon new my-projects-container/my-project\n",
// @taonSkipNextLineCut
codeblock4Html: "taon new my-projects-container/my-project\n",
// @taonSkipNextLineCut
codeblock5: "my-projects-container/\n└── my-project/\n",
// @taonSkipNextLineCut
codeblock5Html: "my-projects-container/\n└── my-project/\n",
// @taonSkipNextLineCut
codeblock6: "my-container-org",
// @taonSkipNextLineCut
codeblock7: "taon new @my-container-org/my-project\n",
// @taonSkipNextLineCut
codeblock7Html: "taon new @my-container-org/my-project\n",
// @taonSkipNextLineCut
codeblock8: "my-container-org/\n└── my-project/\n",
// @taonSkipNextLineCut
codeblock8Html: "my-container-org/\n└── my-project/\n",
// @taonSkipNextLineCut
codeblock9: "./src/lib/index.ts",
// @taonSkipNextLineCut
codeblock10: "./src/cli.ts",
// @taonSkipNextLineCut
codeblock11: "./src/app.ts",
// @taonSkipNextLineCut
codeblock12: "./src/app.electron.ts",
// @taonSkipNextLineCut
codeblock13: "./src/app.vscode.ts",
// @taonSkipNextLineCut
codeblock14: "./src/app.mobile.ts",
// @taonSkipNextLineCut
codeblock15: "**/*.md",
// @taonSkipNextLineCut
codeblock16: "**/*.story.ts",
// @taonSkipNextLineCut
codeblock17: "taon build\n",
// @taonSkipNextLineCut
codeblock17Html: "taon build\n",
// @taonSkipNextLineCut
codeblock18: "taon b\n",
// @taonSkipNextLineCut
codeblock18Html: "taon b\n",
// @taonSkipNextLineCut
codeblock19: "taon clear:build\n",
// @taonSkipNextLineCut
codeblock19Html: "taon clear:build\n",
// @taonSkipNextLineCut
codeblock20: "taon cb\n",
// @taonSkipNextLineCut
codeblock20Html: "taon cb\n",
// @taonSkipNextLineCut
codeblock21: "taon build:prod\n",
// @taonSkipNextLineCut
codeblock21Html: "taon build:prod\n",
// @taonSkipNextLineCut
codeblock22: "taon bp\n",
// @taonSkipNextLineCut
codeblock22Html: "taon bp\n",
// @taonSkipNextLineCut
codeblock23: "taon build:watch\n",
// @taonSkipNextLineCut
codeblock23Html: "taon build:watch\n",
// @taonSkipNextLineCut
codeblock24: "taon bw\n",
// @taonSkipNextLineCut
codeblock24Html: "taon bw\n",
// @taonSkipNextLineCut
codeblock25: "genTsDocsInclude:[ ]",
// @taonSkipNextLineCut
codeblock26: "taon.jsonc",
// @taonSkipNextLineCut
codeblock27: "taon build",
// @taonSkipNextLineCut
codeblock28: "node_modules/my-porject/source \n",
// @taonSkipNextLineCut
codeblock28Html: "node_modules/my-porject/<span class=\"hljs-built_in\">source</span> \n",
// @taonSkipNextLineCut
codeblock29: "src/lib/generated-docs-from-md-files",
// @taonSkipNextLineCut
codeblock30: "taon docs\n",
// @taonSkipNextLineCut
codeblock30Html: "taon docs\n",
// @taonSkipNextLineCut
codeblock31: "taon d\n",
// @taonSkipNextLineCut
codeblock31Html: "taon d\n",
// @taonSkipNextLineCut
codeblock32: "taon app\n",
// @taonSkipNextLineCut
codeblock32Html: "taon app\n",
// @taonSkipNextLineCut
codeblock33: "taon app:normal",
// @taonSkipNextLineCut
codeblock34: "taon an",
// @taonSkipNextLineCut
codeblock35: "taon app:cloudflare",
// @taonSkipNextLineCut
codeblock36: "taon ac",
// @taonSkipNextLineCut
codeblock37: "taon app:websql",
// @taonSkipNextLineCut
codeblock38: "taon aw",
// @taonSkipNextLineCut
codeblock39: "taon app:electron",
// @taonSkipNextLineCut
codeblock40: "taon ae",
// @taonSkipNextLineCut
codeblock41: "taon an\n",
// @taonSkipNextLineCut
codeblock41Html: "taon an\n",
// @taonSkipNextLineCut
codeblock42: "taon ac\n",
// @taonSkipNextLineCut
codeblock42Html: "taon ac\n",
// @taonSkipNextLineCut
codeblock43: "taon aw\n",
// @taonSkipNextLineCut
codeblock43Html: "taon aw\n",
// @taonSkipNextLineCut
codeblock44: "taon ae\n",
// @taonSkipNextLineCut
codeblock44Html: "taon ae\n",
// @taonSkipNextLineCut
codeblock45: "taon bw\n",
// @taonSkipNextLineCut
codeblock45Html: "taon bw\n",
// @taonSkipNextLineCut
codeblock46: "taon an\n",
// @taonSkipNextLineCut
codeblock46Html: "taon an\n",
// @taonSkipNextLineCut
codeblock47: "taon bw\n",
// @taonSkipNextLineCut
codeblock47Html: "taon bw\n",
// @taonSkipNextLineCut
codeblock48: "taon ae\n",
// @taonSkipNextLineCut
codeblock48Html: "taon ae\n",
// @taonSkipNextLineCut
codeblock49: "taon bw\n",
// @taonSkipNextLineCut
codeblock49Html: "taon bw\n",
// @taonSkipNextLineCut
codeblock50: "taon release\n",
// @taonSkipNextLineCut
codeblock50Html: "taon release\n",
// @taonSkipNextLineCut
codeblock51: "taon r\n",
// @taonSkipNextLineCut
codeblock51Html: "taon r\n",
// @taonSkipNextLineCut
codeblock52: "taon auto:release\n",
// @taonSkipNextLineCut
codeblock52Html: "taon auto:release\n",
// @taonSkipNextLineCut
codeblock53: "taon.jsonc",
// @taonSkipNextLineCut
codeblock54: "autoReleaseConfigAllowedItems",
// @taonSkipNextLineCut
codeblock55: "taon ar task-name-from-taon-jsonc\n",
// @taonSkipNextLineCut
codeblock55Html: "taon ar task-name-from-taon-jsonc\n",
// @taonSkipNextLineCut
codeblock56: "taon ar npm\n",
// @taonSkipNextLineCut
codeblock56Html: "taon ar npm\n",
// @taonSkipNextLineCut
codeblock57: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock57Html: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock58: "npm link",
// @taonSkipNextLineCut
codeblock59: "taon link\n",
// @taonSkipNextLineCut
codeblock59Html: "taon link\n",
// @taonSkipNextLineCut
codeblock60: "taon link:global\n",
// @taonSkipNextLineCut
codeblock60Html: "taon link:global\n",
// @taonSkipNextLineCut
codeblock61: "logo.png",
// @taonSkipNextLineCut
codeblock62: "taon branding\n",
// @taonSkipNextLineCut
codeblock62Html: "taon branding\n",
// @taonSkipNextLineCut
codeblock63: "taon refactor\n",
// @taonSkipNextLineCut
codeblock63Html: "taon refactor\n",
// @taonSkipNextLineCut
codeblock64: "taon sub add\n",
// @taonSkipNextLineCut
codeblock64Html: "taon sub add\n",
// @taonSkipNextLineCut
codeblock65: "sub-projects",
// @taonSkipNextLineCut
codeblock66: "my-taon-project/\n│\n├── src/\n│\n├── sub-projects/\n│   └── custom-workers/\n│       └── my-worker/\n│\n└── taon.jsonc\n",
// @taonSkipNextLineCut
codeblock66Html: "my-taon-project/\n│\n├── src/\n│\n├── sub-projects/\n│   └── custom-workers/\n│       └── my-worker/\n│\n└── taon.jsonc\n",
// @taonSkipNextLineCut
codeblock67: "rimraf ./sub-projects/custom-workers/my-worker\n",
// @taonSkipNextLineCut
codeblock67Html: "rimraf ./sub-projects/custom-workers/my-worker\n",
// @taonSkipNextLineCut
codeblock68: "taon sub deploy\n",
// @taonSkipNextLineCut
codeblock68Html: "taon sub deploy\n",
// @taonSkipNextLineCut
codeblock69: "taon sub dev\n",
// @taonSkipNextLineCut
codeblock69Html: "taon sub dev\n",
// @taonSkipNextLineCut
codeblock70: "taon ac\n",
// @taonSkipNextLineCut
codeblock70Html: "taon ac\n",
// @taonSkipNextLineCut
codeblock71: "taon new",
// @taonSkipNextLineCut
codeblock72: "taon build",
// @taonSkipNextLineCut
codeblock73: "taon b",
// @taonSkipNextLineCut
codeblock74: "taon clear:build",
// @taonSkipNextLineCut
codeblock75: "taon cb",
// @taonSkipNextLineCut
codeblock76: "taon build:prod",
// @taonSkipNextLineCut
codeblock77: "taon bp",
// @taonSkipNextLineCut
codeblock78: "taon build:watch",
// @taonSkipNextLineCut
codeblock79: "taon bw",
// @taonSkipNextLineCut
codeblock80: "taon app",
// @taonSkipNextLineCut
codeblock81: "taon app:normal",
// @taonSkipNextLineCut
codeblock82: "taon an",
// @taonSkipNextLineCut
codeblock83: "taon app:cloudflare",
// @taonSkipNextLineCut
codeblock84: "taon ac",
// @taonSkipNextLineCut
codeblock85: "taon app:websql",
// @taonSkipNextLineCut
codeblock86: "taon aw",
// @taonSkipNextLineCut
codeblock87: "taon app:electron",
// @taonSkipNextLineCut
codeblock88: "taon ae",
// @taonSkipNextLineCut
codeblock89: "taon release",
// @taonSkipNextLineCut
codeblock90: "taon r",
// @taonSkipNextLineCut
codeblock91: "taon auto:release",
// @taonSkipNextLineCut
codeblock92: "taon ar",
// @taonSkipNextLineCut
codeblock93: "taon link:global",
// @taonSkipNextLineCut
codeblock94: "taon branding",
// @taonSkipNextLineCut
codeblock95: "taon refactor",
// @taonSkipNextLineCut
codeblock96: "taon sub add",
// @taonSkipNextLineCut
codeblock97: "taon sub deploy",
// @taonSkipNextLineCut
codeblock98: "taon sub dev"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-cli-developer-guide",
    "title": "Taon CLI — Developer Guide",
    "level": 1
  },
  {
    "id": "1-creating-projects",
    "title": "1. Creating Projects",
    "level": 2
  },
  {
    "id": "standalone-project",
    "title": "Standalone Project",
    "level": 3
  },
  {
    "id": "standalone-project-with-admin-backoffice",
    "title": "Standalone Project with Admin Backoffice",
    "level": 3
  },
  {
    "id": "documentation-project",
    "title": "Documentation Project",
    "level": 3
  },
  {
    "id": "container-with-a-child-project",
    "title": "Container with a Child Project",
    "level": 3
  },
  {
    "id": "organization-container",
    "title": "Organization Container",
    "level": 3
  },
  {
    "id": "2-supported-build-artifacts",
    "title": "2. Supported Build Artifacts",
    "level": 2
  },
  {
    "id": "3-building-projects",
    "title": "3. Building Projects",
    "level": 2
  },
  {
    "id": "development-build",
    "title": "Development Build",
    "level": 3
  },
  {
    "id": "clean-development-build",
    "title": "Clean Development Build",
    "level": 3
  },
  {
    "id": "production-build",
    "title": "Production Build",
    "level": 3
  },
  {
    "id": "watch-build",
    "title": "Watch Build",
    "level": 3
  },
  {
    "id": "docs-extract",
    "title": "Docs extract",
    "level": 3
  },
  {
    "id": "4-running-applications",
    "title": "4. Running Applications",
    "level": 2
  },
  {
    "id": "application-commands",
    "title": "Application Commands",
    "level": 3
  },
  {
    "id": "normal-web-application",
    "title": "Normal Web Application",
    "level": 3
  },
  {
    "id": "cloudflare-development",
    "title": "Cloudflare Development",
    "level": 3
  },
  {
    "id": "websql-development",
    "title": "WebSQL Development",
    "level": 3
  },
  {
    "id": "electron-development",
    "title": "Electron Development",
    "level": 3
  },
  {
    "id": "5-recommended-development-workflows",
    "title": "5. Recommended Development Workflows",
    "level": 2
  },
  {
    "id": "scenario-1-web-application-and-npm-library",
    "title": "Scenario 1: Web Application and NPM Library",
    "level": 3
  },
  {
    "id": "scenario-2-electron-application-and-npm-library",
    "title": "Scenario 2: Electron Application and NPM Library",
    "level": 3
  },
  {
    "id": "scenario-3-vs-code-extension-and-npm-library",
    "title": "Scenario 3: VS Code Extension and NPM Library",
    "level": 3
  },
  {
    "id": "6-releasing-projects",
    "title": "6. Releasing Projects",
    "level": 2
  },
  {
    "id": "interactive-release-menu",
    "title": "Interactive Release Menu",
    "level": 3
  },
  {
    "id": "automated-releases",
    "title": "Automated Releases",
    "level": 3
  },
  {
    "id": "npm-release",
    "title": "NPM Release",
    "level": 3
  },
  {
    "id": "cloudflare-production-release",
    "title": "Cloudflare Production Release",
    "level": 3
  },
  {
    "id": "7-linking-projects-and-cli-tools",
    "title": "7. Linking Projects and CLI Tools",
    "level": 2
  },
  {
    "id": "interactive-linking",
    "title": "Interactive Linking",
    "level": 3
  },
  {
    "id": "global-development-linking",
    "title": "Global Development Linking",
    "level": 3
  },
  {
    "id": "8-branding-and-pwa-assets",
    "title": "8. Branding and PWA Assets",
    "level": 2
  },
  {
    "id": "9-automated-code-refactoring",
    "title": "9. Automated Code Refactoring",
    "level": 2
  },
  {
    "id": "10-cloudflare-subprojects",
    "title": "10. Cloudflare Subprojects",
    "level": 2
  },
  {
    "id": "add-a-subproject",
    "title": "Add a Subproject",
    "level": 3
  },
  {
    "id": "example-structure",
    "title": "Example Structure",
    "level": 3
  },
  {
    "id": "remove-a-subproject",
    "title": "Remove a Subproject",
    "level": 3
  },
  {
    "id": "deploy-subprojects-manually",
    "title": "Deploy Subprojects Manually",
    "level": 3
  },
  {
    "id": "local-cloudflare-worker-development",
    "title": "Local Cloudflare Worker Development",
    "level": 3
  },
  {
    "id": "11-quick-command-reference",
    "title": "11. Quick Command Reference",
    "level": 2
  },
  {
    "id": "summary",
    "title": "Summary",
    "level": 2
  }
];

}

    