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
  selector: 'app-my-docs-page-developer-guide-md',
  templateUrl: './DEVELOPER_GUIDE.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpDeveloperGuideMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "tnp",
// @taonSkipNextLineCut
codeblock1: "tnp",
// @taonSkipNextLineCut
codeblock2: "taon",
// @taonSkipNextLineCut
codeblock3: "tnp",
// @taonSkipNextLineCut
codeblock4: "tnp",
// @taonSkipNextLineCut
codeblock5: "taon",
// @taonSkipNextLineCut
codeblock6: "taon-dev",
// @taonSkipNextLineCut
codeblock7: "git clone https://github.com/darekf77/taon-dev.git\n",
// @taonSkipNextLineCut
codeblock7Html: "git <span class=\"hljs-built_in\">clone</span> https://github.com/darekf77/taon-dev.git\n",
// @taonSkipNextLineCut
codeblock8: "taon-dev",
// @taonSkipNextLineCut
codeblock9: "cd taon-dev\ntaon pull:deep\n",
// @taonSkipNextLineCut
codeblock9Html: "<span class=\"hljs-built_in\">cd</span> taon-dev\ntaon pull:deep\n",
// @taonSkipNextLineCut
codeblock10: "tnp",
// @taonSkipNextLineCut
codeblock11: "tnp",
// @taonSkipNextLineCut
codeblock12: "taon-dev",
// @taonSkipNextLineCut
codeblock13: "cd tnp\ntaon link:global\n",
// @taonSkipNextLineCut
codeblock13Html: "<span class=\"hljs-built_in\">cd</span> tnp\ntaon link:global\n",
// @taonSkipNextLineCut
codeblock14: "tnp",
// @taonSkipNextLineCut
codeblock15: "tnp version\n",
// @taonSkipNextLineCut
codeblock15Html: "tnp version\n",
// @taonSkipNextLineCut
codeblock16: "tnp",
// @taonSkipNextLineCut
codeblock17: "taon",
// @taonSkipNextLineCut
codeblock18: "tnp",
// @taonSkipNextLineCut
codeblock19: "tnp bwl\n",
// @taonSkipNextLineCut
codeblock19Html: "tnp bwl\n",
// @taonSkipNextLineCut
codeblock20: "taon-dev",
// @taonSkipNextLineCut
codeblock21: "taon",
// @taonSkipNextLineCut
codeblock22: "tnp",
// @taonSkipNextLineCut
codeblock23: "tnp-core",
// @taonSkipNextLineCut
codeblock24: "taon-typeorm",
// @taonSkipNextLineCut
codeblock25: "tnp",
// @taonSkipNextLineCut
codeblock26: "tnp",
// @taonSkipNextLineCut
codeblock27: "taon",
// @taonSkipNextLineCut
codeblock28: "cd taon-dev/tnp\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock28Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/tnp\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock29: "tnp",
// @taonSkipNextLineCut
codeblock30: "taon",
// @taonSkipNextLineCut
codeblock31: "cd taon-dev/taon\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock31Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/taon\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock32: "tnp-core",
// @taonSkipNextLineCut
codeblock33: "cd taon-dev/tnp-core\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock33Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/tnp-core\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock34: "ng2-rest",
// @taonSkipNextLineCut
codeblock35: "cd taon-dev/ng2-rest\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock35Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/ng2-rest\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock36: "tnp-helpers",
// @taonSkipNextLineCut
codeblock37: "cd taon-dev/tnp-helpers\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock37Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/tnp-helpers\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock38: "taon-typeorm",
// @taonSkipNextLineCut
codeblock39: "cd taon-dev/taon-typeorm\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock39Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/taon-typeorm\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock40: "ui",
// @taonSkipNextLineCut
codeblock41: "taon-ui",
// @taonSkipNextLineCut
codeblock42: "ui",
// @taonSkipNextLineCut
codeblock43: "cd taon-dev/ui\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock43Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/ui\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock44: "session",
// @taonSkipNextLineCut
codeblock45: "cms",
// @taonSkipNextLineCut
codeblock46: "e-commerce",
// @taonSkipNextLineCut
codeblock47: "analytic",
// @taonSkipNextLineCut
codeblock48: "seo",
// @taonSkipNextLineCut
codeblock49: "cd taon-dev/session\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock49Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/session\ntnp bwl\n",
// @taonSkipNextLineCut
codeblock50: "tnp an\n",
// @taonSkipNextLineCut
codeblock50Html: "tnp an\n",
// @taonSkipNextLineCut
codeblock51: "code",
// @taonSkipNextLineCut
codeblock52: "codium",
// @taonSkipNextLineCut
codeblock53: "taon-dev.tnp",
// @taonSkipNextLineCut
codeblock54: "tnp",
// @taonSkipNextLineCut
codeblock55: "cd taon-dev/tnp\ntnp ilvscodeplugin\n",
// @taonSkipNextLineCut
codeblock55Html: "<span class=\"hljs-built_in\">cd</span> taon-dev/tnp\ntnp ilvscodeplugin\n",
// @taonSkipNextLineCut
codeblock56: "taon-dev.taon",
// @taonSkipNextLineCut
codeblock57: "taon-dev.tnp",
// @taonSkipNextLineCut
codeblock58: "taon-dev.tnp",
// @taonSkipNextLineCut
codeblock59: "taon-dev.taon"
  };

  headings: DocsHeading[] = [
  {
    "id": "developer-guide",
    "title": "Developer Guide",
    "level": 1
  },
  {
    "id": "why-do-i-need-tnp-to-develop-taon",
    "title": "Why Do I Need tnp to Develop Taon?",
    "level": 2
  },
  {
    "id": "how-to-set-up-a-development-environment-for-taon",
    "title": "How to Set Up a Development Environment for Taon",
    "level": 2
  },
  {
    "id": "1-install-taon",
    "title": "1. Install Taon",
    "level": 3
  },
  {
    "id": "2-clone-the-taon-dev-repository",
    "title": "2. Clone the taon-dev Repository",
    "level": 3
  },
  {
    "id": "3-pull-all-projects",
    "title": "3. Pull All Projects",
    "level": 3
  },
  {
    "id": "4-link-tnp-globally",
    "title": "4. Link tnp Globally",
    "level": 3
  },
  {
    "id": "5-verify-the-tnp-installation",
    "title": "5. Verify the tnp Installation",
    "level": 3
  },
  {
    "id": "how-to-modify-the-taon-framework-cli-and-cloud",
    "title": "How to Modify the Taon Framework, CLI, and Cloud",
    "level": 2
  },
  {
    "id": "cli-main-repository-tnp",
    "title": "CLI — Main Repository (tnp)",
    "level": 3
  },
  {
    "id": "framework-main-repository-taon",
    "title": "Framework — Main Repository (taon)",
    "level": 3
  },
  {
    "id": "core-helpers-and-utilities-tnp-core",
    "title": "Core Helpers and Utilities (tnp-core)",
    "level": 3
  },
  {
    "id": "http-fetch-wrapper-ng2-rest",
    "title": "HTTP Fetch Wrapper (ng2-rest)",
    "level": 3
  },
  {
    "id": "advanced-helpers-utilities-and-types-tnp-helpers",
    "title": "Advanced Helpers, Utilities, and Types (tnp-helpers)",
    "level": 3
  },
  {
    "id": "typeorm-fork-taon-typeorm",
    "title": "TypeORM Fork (taon-typeorm)",
    "level": 3
  },
  {
    "id": "taon-ui-ui",
    "title": "Taon UI (ui)",
    "level": 3
  },
  {
    "id": "taon-admin-modules-session-cms-e-commerce-analytic-seo",
    "title": "Taon Admin Modules (session, cms, e-commerce, analytic, seo)",
    "level": 3
  },
  {
    "id": "testing-your-changes-in-an-application",
    "title": "Testing Your Changes in an Application",
    "level": 3
  },
  {
    "id": "additional-development-requirements",
    "title": "Additional Development Requirements",
    "level": 2
  },
  {
    "id": "1-visual-studio-code-or-vscodium",
    "title": "1. Visual Studio Code or VSCodium",
    "level": 3
  },
  {
    "id": "2-taon-development-extension",
    "title": "2. Taon Development Extension",
    "level": 3
  },
  {
    "id": "important-avoid-conflicting-extensions",
    "title": "Important: Avoid Conflicting Extensions",
    "level": 3
  }
];

}

    