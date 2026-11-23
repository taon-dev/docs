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
  selector: 'app-my-docs-page-base-helpers-commands-md',
  templateUrl: './BASE-HELPERS-COMMANDS.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpHelpersBaseHelpersCommandsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "taon check:port 80 443 8080",
// @taonSkipNextLineCut
codeblock1: "taon copy from-path to-path",
// @taonSkipNextLineCut
codeblock2: "taon ln from-path to-path",
// @taonSkipNextLineCut
codeblock3: "taon refresh",
// @taonSkipNextLineCut
codeblock4: "taon settings:vscode",
// @taonSkipNextLineCut
codeblock5: "taon select:java",
// @taonSkipNextLineCut
codeblock6: "taon select:tomcat",
// @taonSkipNextLineCut
codeblock7: "taon simulateDomain my-test-domain.com",
// @taonSkipNextLineCut
codeblock8: "taon hosts",
// @taonSkipNextLineCut
codeblock9: "taon soft",
// @taonSkipNextLineCut
codeblock10: "git reset --soft HEAD~1",
// @taonSkipNextLineCut
codeblock11: "taon count:commits",
// @taonSkipNextLineCut
codeblock12: "taon remove:submodules",
// @taonSkipNextLineCut
codeblock13: "taon remove:submodule my-not-wanted-git-submodules",
// @taonSkipNextLineCut
codeblock14: "taon remove:tag git-tag-name-optionally",
// @taonSkipNextLineCut
codeblock15: "taon last:tag",
// @taonSkipNextLineCut
codeblock16: "taon clone git-repo-address-to-clone",
// @taonSkipNextLineCut
codeblock17: "taon origin",
// @taonSkipNextLineCut
codeblock18: "taon remote",
// @taonSkipNextLineCut
codeblock19: "taon origin",
// @taonSkipNextLineCut
codeblock20: "taon origins",
// @taonSkipNextLineCut
codeblock21: "taon remotes",
// @taonSkipNextLineCut
codeblock22: "taon origins",
// @taonSkipNextLineCut
codeblock23: "taon rename:origin http://my-new-origin",
// @taonSkipNextLineCut
codeblock24: "taon set:origin http://my-new-origin",
// @taonSkipNextLineCut
codeblock25: "taon set:remote:ssh",
// @taonSkipNextLineCut
codeblock26: "taon set:remote:http",
// @taonSkipNextLineCut
codeblock27: "taon rebase",
// @taonSkipNextLineCut
codeblock28: "taon rebase branch-to-rebase",
// @taonSkipNextLineCut
codeblock29: "taon stash",
// @taonSkipNextLineCut
codeblock30: "taon stashall",
// @taonSkipNextLineCut
codeblock31: "taon branch",
// @taonSkipNextLineCut
codeblock32: "taon reset",
// @taonSkipNextLineCut
codeblock33: "git fetch",
// @taonSkipNextLineCut
codeblock34: "taon branch",
// @taonSkipNextLineCut
codeblock35: "taon reset my-branch",
// @taonSkipNextLineCut
codeblock36: "taon reset",
// @taonSkipNextLineCut
codeblock37: "taon reset",
// @taonSkipNextLineCut
codeblock38: "taon pull",
// @taonSkipNextLineCut
codeblock39: "taon pull:all",
// @taonSkipNextLineCut
codeblock40: "taon pull:deep",
// @taonSkipNextLineCut
codeblock41: "taon pul",
// @taonSkipNextLineCut
codeblock42: "taon pushall",
// @taonSkipNextLineCut
codeblock43: "taon pall",
// @taonSkipNextLineCut
codeblock44: "taon pushall",
// @taonSkipNextLineCut
codeblock45: "taon push",
// @taonSkipNextLineCut
codeblock46: "taon push",
// @taonSkipNextLineCut
codeblock47: "taon push:deep",
// @taonSkipNextLineCut
codeblock48: "taon pushallorigins",
// @taonSkipNextLineCut
codeblock49: "taon push",
// @taonSkipNextLineCut
codeblock50: "taon pfix JIRA-379089 JIRA-380320 proper counter message [my-lib]",
// @taonSkipNextLineCut
codeblock51: "git checkout -b bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message",
// @taonSkipNextLineCut
codeblock52: "git add",
// @taonSkipNextLineCut
codeblock53: "git commit -m \"fix(my-lib): proper counter message JIRA-379089 JIRA-380320\"",
// @taonSkipNextLineCut
codeblock54: "git push origin bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message",
// @taonSkipNextLineCut
codeblock55: "taon pf JIRA-379089 JIRA-380320 admin notification [my-lib]",
// @taonSkipNextLineCut
codeblock56: "git checkout -b feature/JIRA-379089-JIRA-380320--my-lib--admin-notification",
// @taonSkipNextLineCut
codeblock57: "git add",
// @taonSkipNextLineCut
codeblock58: "git commit -m \"feat(my-lib): admin notification JIRA-379089 JIRA-380320\"",
// @taonSkipNextLineCut
codeblock59: "git push origin feature/JIRA-379089-JIRA-380320--my-lib--admin-notification",
// @taonSkipNextLineCut
codeblock60: "taon pc JIRA-379089 update deps",
// @taonSkipNextLineCut
codeblock61: "git checkout -b chore/JIRA-379089-update-deps",
// @taonSkipNextLineCut
codeblock62: "git add",
// @taonSkipNextLineCut
codeblock63: "git commit -m \"chore: update deps JIRA-379089\"",
// @taonSkipNextLineCut
codeblock64: "git push origin  chore/JIRA-379089-update-deps",
// @taonSkipNextLineCut
codeblock65: "taon pd explained installation",
// @taonSkipNextLineCut
codeblock66: "git checkout -b docs/explained-installation",
// @taonSkipNextLineCut
codeblock67: "git add",
// @taonSkipNextLineCut
codeblock68: "git commit -m \"docs:explained installation\"",
// @taonSkipNextLineCut
codeblock69: "git push origin docs/explained-installation",
// @taonSkipNextLineCut
codeblock70: "taon ptest admin permission new use case",
// @taonSkipNextLineCut
codeblock71: "git checkout -b test/admin-permission-new-use-case",
// @taonSkipNextLineCut
codeblock72: "git add",
// @taonSkipNextLineCut
codeblock73: "git commit -m \"test: admin permission new use case\"",
// @taonSkipNextLineCut
codeblock74: "git push origin test/admin-permission-new-use-case",
// @taonSkipNextLineCut
codeblock75: "taon pstyle proper project methods",
// @taonSkipNextLineCut
codeblock76: "git checkout -b style/proper-project-methods",
// @taonSkipNextLineCut
codeblock77: "git add",
// @taonSkipNextLineCut
codeblock78: "git commit -m \"style: proper project methods\"",
// @taonSkipNextLineCut
codeblock79: "git push origin style/proper-project-methods",
// @taonSkipNextLineCut
codeblock80: "taon pref new permission module",
// @taonSkipNextLineCut
codeblock81: "git checkout -b refactor/new-permission-module",
// @taonSkipNextLineCut
codeblock82: "git add",
// @taonSkipNextLineCut
codeblock83: "git commit -m \"refactor: new permission module\"",
// @taonSkipNextLineCut
codeblock84: "git push origin refactor/new-permission-module",
// @taonSkipNextLineCut
codeblock85: "taon prelease",
// @taonSkipNextLineCut
codeblock86: "git checkout -b release/version-v1-2-3",
// @taonSkipNextLineCut
codeblock87: "git add",
// @taonSkipNextLineCut
codeblock88: "git commit -m \"release: version v1.2.3\"",
// @taonSkipNextLineCut
codeblock89: "git push origin release/version-1-2-3"
  };

  headings: DocsHeading[] = [
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

    