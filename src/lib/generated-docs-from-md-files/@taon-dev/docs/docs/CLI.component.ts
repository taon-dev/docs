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
  selector: 'app-my-docs-page-cli-md',
  templateUrl: './CLI.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsDocsCliMdComponent extends TaonDocsPageComponent {
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
codeblock47: "taon bwl\n",
// @taonSkipNextLineCut
codeblock47Html: "taon bwl\n",
// @taonSkipNextLineCut
codeblock48: "taon ae\n",
// @taonSkipNextLineCut
codeblock48Html: "taon ae\n",
// @taonSkipNextLineCut
codeblock49: "taon bwl\n",
// @taonSkipNextLineCut
codeblock49Html: "taon bwl\n",
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
codeblock60: "taon link:local\n",
// @taonSkipNextLineCut
codeblock60Html: "taon link:<span class=\"hljs-built_in\">local</span>\n",
// @taonSkipNextLineCut
codeblock61: "taon link:global\n",
// @taonSkipNextLineCut
codeblock61Html: "taon link:global\n",
// @taonSkipNextLineCut
codeblock62: "taon link:release\n",
// @taonSkipNextLineCut
codeblock62Html: "taon link:release\n",
// @taonSkipNextLineCut
codeblock63: "logo.png",
// @taonSkipNextLineCut
codeblock64: "taon branding\n",
// @taonSkipNextLineCut
codeblock64Html: "taon branding\n",
// @taonSkipNextLineCut
codeblock65: "taon refactor\n",
// @taonSkipNextLineCut
codeblock65Html: "taon refactor\n",
// @taonSkipNextLineCut
codeblock66: "taon sub add\n",
// @taonSkipNextLineCut
codeblock66Html: "taon sub add\n",
// @taonSkipNextLineCut
codeblock67: "sub-projects",
// @taonSkipNextLineCut
codeblock68: "my-taon-project/\n│\n├── src/\n│\n├── sub-projects/\n│   └── custom-workers/\n│       └── my-worker/\n│\n└── taon.jsonc\n",
// @taonSkipNextLineCut
codeblock68Html: "my-taon-project/\n│\n├── src/\n│\n├── sub-projects/\n│   └── custom-workers/\n│       └── my-worker/\n│\n└── taon.jsonc\n",
// @taonSkipNextLineCut
codeblock69: "rimraf ./sub-projects/custom-workers/my-worker\n",
// @taonSkipNextLineCut
codeblock69Html: "rimraf ./sub-projects/custom-workers/my-worker\n",
// @taonSkipNextLineCut
codeblock70: "taon sub deploy\n",
// @taonSkipNextLineCut
codeblock70Html: "taon sub deploy\n",
// @taonSkipNextLineCut
codeblock71: "taon sub dev\n",
// @taonSkipNextLineCut
codeblock71Html: "taon sub dev\n",
// @taonSkipNextLineCut
codeblock72: "taon ac\n",
// @taonSkipNextLineCut
codeblock72Html: "taon ac\n",
// @taonSkipNextLineCut
codeblock73: "taon new",
// @taonSkipNextLineCut
codeblock74: "taon build",
// @taonSkipNextLineCut
codeblock75: "taon b",
// @taonSkipNextLineCut
codeblock76: "taon clear:build",
// @taonSkipNextLineCut
codeblock77: "taon cb",
// @taonSkipNextLineCut
codeblock78: "taon build:prod",
// @taonSkipNextLineCut
codeblock79: "taon bp",
// @taonSkipNextLineCut
codeblock80: "taon build:watch",
// @taonSkipNextLineCut
codeblock81: "taon bw",
// @taonSkipNextLineCut
codeblock82: "taon build:watch:lib",
// @taonSkipNextLineCut
codeblock83: "taon bwl",
// @taonSkipNextLineCut
codeblock84: "taon app",
// @taonSkipNextLineCut
codeblock85: "taon app:normal",
// @taonSkipNextLineCut
codeblock86: "taon an",
// @taonSkipNextLineCut
codeblock87: "taon app:cloudflare",
// @taonSkipNextLineCut
codeblock88: "taon ac",
// @taonSkipNextLineCut
codeblock89: "taon app:websql",
// @taonSkipNextLineCut
codeblock90: "taon aw",
// @taonSkipNextLineCut
codeblock91: "taon app:electron",
// @taonSkipNextLineCut
codeblock92: "taon ae",
// @taonSkipNextLineCut
codeblock93: "taon release",
// @taonSkipNextLineCut
codeblock94: "taon r",
// @taonSkipNextLineCut
codeblock95: "taon auto:release",
// @taonSkipNextLineCut
codeblock96: "taon ar",
// @taonSkipNextLineCut
codeblock97: "taon link",
// @taonSkipNextLineCut
codeblock98: "taon link:global",
// @taonSkipNextLineCut
codeblock99: "taon branding",
// @taonSkipNextLineCut
codeblock100: "taon refactor",
// @taonSkipNextLineCut
codeblock101: "taon sub add",
// @taonSkipNextLineCut
codeblock102: "taon sub deploy",
// @taonSkipNextLineCut
codeblock103: "taon sub dev",
// @taonSkipNextLineCut
codeblock104: "taon check:port 80 443 8080",
// @taonSkipNextLineCut
codeblock105: "taon copy from-path to-path",
// @taonSkipNextLineCut
codeblock106: "taon ln from-path to-path",
// @taonSkipNextLineCut
codeblock107: "taon refresh",
// @taonSkipNextLineCut
codeblock108: "taon settings:vscode",
// @taonSkipNextLineCut
codeblock109: "taon select:java",
// @taonSkipNextLineCut
codeblock110: "taon select:tomcat",
// @taonSkipNextLineCut
codeblock111: "taon simulateDomain my-test-domain.com",
// @taonSkipNextLineCut
codeblock112: "taon hosts",
// @taonSkipNextLineCut
codeblock113: "taon soft",
// @taonSkipNextLineCut
codeblock114: "git reset --soft HEAD~1",
// @taonSkipNextLineCut
codeblock115: "taon count:commits",
// @taonSkipNextLineCut
codeblock116: "taon remove:submodules",
// @taonSkipNextLineCut
codeblock117: "taon remove:submodule my-not-wanted-git-submodules",
// @taonSkipNextLineCut
codeblock118: "taon remove:tag git-tag-name-optionally",
// @taonSkipNextLineCut
codeblock119: "taon last:tag",
// @taonSkipNextLineCut
codeblock120: "taon clone git-repo-address-to-clone",
// @taonSkipNextLineCut
codeblock121: "taon origin",
// @taonSkipNextLineCut
codeblock122: "taon remote",
// @taonSkipNextLineCut
codeblock123: "taon origin",
// @taonSkipNextLineCut
codeblock124: "taon origins",
// @taonSkipNextLineCut
codeblock125: "taon remotes",
// @taonSkipNextLineCut
codeblock126: "taon origins",
// @taonSkipNextLineCut
codeblock127: "taon rename:origin http://my-new-origin",
// @taonSkipNextLineCut
codeblock128: "taon set:origin http://my-new-origin",
// @taonSkipNextLineCut
codeblock129: "taon set:remote:ssh",
// @taonSkipNextLineCut
codeblock130: "taon set:remote:http",
// @taonSkipNextLineCut
codeblock131: "taon rebase",
// @taonSkipNextLineCut
codeblock132: "taon rebase branch-to-rebase",
// @taonSkipNextLineCut
codeblock133: "taon stash",
// @taonSkipNextLineCut
codeblock134: "taon stashall",
// @taonSkipNextLineCut
codeblock135: "taon branch",
// @taonSkipNextLineCut
codeblock136: "taon reset",
// @taonSkipNextLineCut
codeblock137: "git fetch",
// @taonSkipNextLineCut
codeblock138: "taon branch",
// @taonSkipNextLineCut
codeblock139: "taon reset my-branch",
// @taonSkipNextLineCut
codeblock140: "taon reset",
// @taonSkipNextLineCut
codeblock141: "taon reset",
// @taonSkipNextLineCut
codeblock142: "taon pull",
// @taonSkipNextLineCut
codeblock143: "taon pull:all",
// @taonSkipNextLineCut
codeblock144: "taon pull:deep",
// @taonSkipNextLineCut
codeblock145: "taon pul",
// @taonSkipNextLineCut
codeblock146: "taon pushall",
// @taonSkipNextLineCut
codeblock147: "taon pall",
// @taonSkipNextLineCut
codeblock148: "taon pushall",
// @taonSkipNextLineCut
codeblock149: "taon push",
// @taonSkipNextLineCut
codeblock150: "taon push",
// @taonSkipNextLineCut
codeblock151: "taon push:deep",
// @taonSkipNextLineCut
codeblock152: "taon pushallorigins",
// @taonSkipNextLineCut
codeblock153: "taon push",
// @taonSkipNextLineCut
codeblock154: "taon pfix JIRA-379089 JIRA-380320 proper counter message [my-lib]",
// @taonSkipNextLineCut
codeblock155: "git checkout -b bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message",
// @taonSkipNextLineCut
codeblock156: "git add",
// @taonSkipNextLineCut
codeblock157: "git commit -m \"fix(my-lib): proper counter message JIRA-379089 JIRA-380320\"",
// @taonSkipNextLineCut
codeblock158: "git push origin bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message",
// @taonSkipNextLineCut
codeblock159: "taon pf JIRA-379089 JIRA-380320 admin notification [my-lib]",
// @taonSkipNextLineCut
codeblock160: "git checkout -b feature/JIRA-379089-JIRA-380320--my-lib--admin-notification",
// @taonSkipNextLineCut
codeblock161: "git add",
// @taonSkipNextLineCut
codeblock162: "git commit -m \"feat(my-lib): admin notification JIRA-379089 JIRA-380320\"",
// @taonSkipNextLineCut
codeblock163: "git push origin feature/JIRA-379089-JIRA-380320--my-lib--admin-notification",
// @taonSkipNextLineCut
codeblock164: "taon pc JIRA-379089 update deps",
// @taonSkipNextLineCut
codeblock165: "git checkout -b chore/JIRA-379089-update-deps",
// @taonSkipNextLineCut
codeblock166: "git add",
// @taonSkipNextLineCut
codeblock167: "git commit -m \"chore: update deps JIRA-379089\"",
// @taonSkipNextLineCut
codeblock168: "git push origin  chore/JIRA-379089-update-deps",
// @taonSkipNextLineCut
codeblock169: "taon pd explained installation",
// @taonSkipNextLineCut
codeblock170: "git checkout -b docs/explained-installation",
// @taonSkipNextLineCut
codeblock171: "git add",
// @taonSkipNextLineCut
codeblock172: "git commit -m \"docs:explained installation\"",
// @taonSkipNextLineCut
codeblock173: "git push origin docs/explained-installation",
// @taonSkipNextLineCut
codeblock174: "taon ptest admin permission new use case",
// @taonSkipNextLineCut
codeblock175: "git checkout -b test/admin-permission-new-use-case",
// @taonSkipNextLineCut
codeblock176: "git add",
// @taonSkipNextLineCut
codeblock177: "git commit -m \"test: admin permission new use case\"",
// @taonSkipNextLineCut
codeblock178: "git push origin test/admin-permission-new-use-case",
// @taonSkipNextLineCut
codeblock179: "taon pstyle proper project methods",
// @taonSkipNextLineCut
codeblock180: "git checkout -b style/proper-project-methods",
// @taonSkipNextLineCut
codeblock181: "git add",
// @taonSkipNextLineCut
codeblock182: "git commit -m \"style: proper project methods\"",
// @taonSkipNextLineCut
codeblock183: "git push origin style/proper-project-methods",
// @taonSkipNextLineCut
codeblock184: "taon pref new permission module",
// @taonSkipNextLineCut
codeblock185: "git checkout -b refactor/new-permission-module",
// @taonSkipNextLineCut
codeblock186: "git add",
// @taonSkipNextLineCut
codeblock187: "git commit -m \"refactor: new permission module\"",
// @taonSkipNextLineCut
codeblock188: "git push origin refactor/new-permission-module",
// @taonSkipNextLineCut
codeblock189: "taon prelease",
// @taonSkipNextLineCut
codeblock190: "git checkout -b release/version-v1-2-3",
// @taonSkipNextLineCut
codeblock191: "git add",
// @taonSkipNextLineCut
codeblock192: "git commit -m \"release: version v1.2.3\"",
// @taonSkipNextLineCut
codeblock193: "git push origin release/version-1-2-3"
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
    "id": "local-linking",
    "title": "Local Linking",
    "level": 3
  },
  {
    "id": "global-development-linking",
    "title": "Global Development Linking",
    "level": 3
  },
  {
    "id": "release-branch-linking",
    "title": "Release Branch Linking",
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
  },
  {
    "id": "os",
    "title": "Os",
    "level": 2
  },
  {
    "id": "java-tomcat",
    "title": "java & tomcat",
    "level": 3
  },
  {
    "id": "etc-host",
    "title": "/etc/host",
    "level": 3
  },
  {
    "id": "git",
    "title": "Git",
    "level": 2
  },
  {
    "id": "handy-shortcuts",
    "title": "Handy shortcuts",
    "level": 3
  },
  {
    "id": "remotes",
    "title": "Remotes",
    "level": 3
  },
  {
    "id": "rebase",
    "title": "Rebase",
    "level": 3
  },
  {
    "id": "stash",
    "title": "Stash",
    "level": 3
  },
  {
    "id": "reset-change-branch",
    "title": "Reset + change branch",
    "level": 3
  },
  {
    "id": "pull-pull",
    "title": "Pull & Pull",
    "level": 3
  },
  {
    "id": "smart-conventional-commits-branching",
    "title": "Smart Conventional Commits Branching",
    "level": 3
  }
];

}

    