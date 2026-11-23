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
  selector: 'app-my-docs-page-ci-cd-md',
  templateUrl: './CI-CD.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpDocsCiCdMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "CHANGE SHARED LIBRARY\n        │\n        ▼\n BUILD / TEST LIBRARY\n        │\n        ▼\n  PUBLISH TO NPM\n        │\n        ▼\n UPDATE DEPENDENCY VERSIONS\n        │\n        ▼\n INSTALL NEW PACKAGES\n        │\n        ▼\n BUILD / TEST APPLICATION\n        │\n        ▼\n      DEPLOY\n",
// @taonSkipNextLineCut
codeblock0Html: "CHANGE SHARED LIBRARY\n        │\n        ▼\n BUILD / TEST LIBRARY\n        │\n        ▼\n  PUBLISH TO NPM\n        │\n        ▼\n UPDATE DEPENDENCY VERSIONS\n        │\n        ▼\n INSTALL NEW PACKAGES\n        │\n        ▼\n BUILD / TEST APPLICATION\n        │\n        ▼\n      DEPLOY\n",
// @taonSkipNextLineCut
codeblock1: " SHARED PROJECT SOURCE ────┐\n                           │\n APPLICATION SOURCE ────────┼──► TAON BUILD ──► ARTIFACT\n                           │\n OTHER PROJECT SOURCE ──────┘\n",
// @taonSkipNextLineCut
codeblock1Html: " SHARED PROJECT SOURCE ────┐\n                           │\n APPLICATION SOURCE ────────┼──► TAON BUILD ──► ARTIFACT\n                           │\n OTHER PROJECT SOURCE ──────┘\n",
// @taonSkipNextLineCut
codeblock2: "              BACKEND / FRONTEND COMPOSITION\n\nBackend-heavy application/library\n┌──────────────────────────────────────────────┐\n│ BACKEND 90%                      FRONTEND 10% │\n│ ████████████████████████████████████░░░░     │\n└──────────────────────────────────────────────┘\n\nBalanced full-stack application/library\n┌──────────────────────────────────────────────┐\n│ BACKEND 50%                      FRONTEND 50% │\n│ ████████████████████░░░░░░░░░░░░░░░░░░░░     │\n└──────────────────────────────────────────────┘\n\nFrontend-heavy UI application/library\n┌──────────────────────────────────────────────┐\n│ BACKEND 10%                      FRONTEND 90% │\n│ ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     │\n└──────────────────────────────────────────────┘\n\nLegend:\n████  Backend functionality\n░░░░  Frontend functionality\n",
// @taonSkipNextLineCut
codeblock2Html: "              BACKEND / FRONTEND COMPOSITION\n\nBackend-heavy application/library\n┌──────────────────────────────────────────────┐\n│ BACKEND 90%                      FRONTEND 10% │\n│ ████████████████████████████████████░░░░     │\n└──────────────────────────────────────────────┘\n\nBalanced full-stack application/library\n┌──────────────────────────────────────────────┐\n│ BACKEND 50%                      FRONTEND 50% │\n│ ████████████████████░░░░░░░░░░░░░░░░░░░░     │\n└──────────────────────────────────────────────┘\n\nFrontend-heavy UI application/library\n┌──────────────────────────────────────────────┐\n│ BACKEND 10%                      FRONTEND 90% │\n│ ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     │\n└──────────────────────────────────────────────┘\n\nLegend:\n████  Backend functionality\n░░░░  Frontend functionality\n",
// @taonSkipNextLineCut
codeblock3: "frontend-ui-storybook-like-app-lib/\n│\n├── src/\n│   ├── app/\n│   │   ├── components/\n│   │   ├── examples/\n│   │   └── pages/\n│   │\n│   ├── shared/\n│   │   ├── models/\n│   │   └── utilities/\n│   │\n│   └── backend/\n│       └── controllers/\n│\n└── taon.json\n",
// @taonSkipNextLineCut
codeblock3Html: "frontend-ui-storybook-like-app-lib/\n│\n├── src/\n│   ├── app/\n│   │   ├── components/\n│   │   ├── examples/\n│   │   └── pages/\n│   │\n│   ├── shared/\n│   │   ├── models/\n│   │   └── utilities/\n│   │\n│   └── backend/\n│       └── controllers/\n│\n└── taon.json\n",
// @taonSkipNextLineCut
codeblock4: "my-company/\n│\n├── shared/\n│   ├── core/\n│   ├── authentication/\n│   ├── database/\n│   └── ui-components/\n│\n├── products/\n│   │\n│   ├── customer-portal/\n│   │   ├── frontend/\n│   │   ├── backend/\n│   │   └── documentation/\n│   │\n│   ├── admin-dashboard/\n│   │   ├── frontend/\n│   │   └── backend/\n│   │\n│   └── desktop-app/\n│       ├── application/\n│       └── shared/\n│\n├── internal-tools/\n│   ├── reporting/\n│   └── monitoring/\n│\n└── documentation/\n    ├── developer-guide/\n    └── architecture/\n",
// @taonSkipNextLineCut
codeblock4Html: "my-company/\n│\n├── shared/\n│   ├── core/\n│   ├── authentication/\n│   ├── database/\n│   └── ui-components/\n│\n├── products/\n│   │\n│   ├── customer-portal/\n│   │   ├── frontend/\n│   │   ├── backend/\n│   │   └── documentation/\n│   │\n│   ├── admin-dashboard/\n│   │   ├── frontend/\n│   │   └── backend/\n│   │\n│   └── desktop-app/\n│       ├── application/\n│       └── shared/\n│\n├── internal-tools/\n│   ├── reporting/\n│   └── monitoring/\n│\n└── documentation/\n    ├── developer-guide/\n    └── architecture/\n",
// @taonSkipNextLineCut
codeblock5: "frontend/",
// @taonSkipNextLineCut
codeblock6: "backend/",
// @taonSkipNextLineCut
codeblock7: "                    COMPANY CONTAINER\n                           │\n          ┌────────────────┼────────────────┐\n          │                │                │\n     SHARED CODE        PRODUCTS       INTERNAL TOOLS\n     (container)       (container)       (container)\n          │                │                │\n     ┌────┴────┐      ┌────┴────┐      ┌────┴────┐\n     │         │      │         │      │         │\n    Core      Auth  Customer   Admin  Reports  Monitor\n     │                 │\n     │             ┌───┴───┐\n     │             │       │\n     └──────────> Backend Frontend\n",
// @taonSkipNextLineCut
codeblock7Html: "                    COMPANY CONTAINER\n                           │\n          ┌────────────────┼────────────────┐\n          │                │                │\n     SHARED CODE        PRODUCTS       INTERNAL TOOLS\n     (container)       (container)       (container)\n          │                │                │\n     ┌────┴────┐      ┌────┴────┐      ┌────┴────┐\n     │         │      │         │      │         │\n    Core      Auth  Customer   Admin  Reports  Monitor\n     │                 │\n     │             ┌───┴───┐\n     │             │       │\n     └──────────&gt; Backend Frontend\n",
// @taonSkipNextLineCut
codeblock8: "company-container/                         [Git repository]\n│\n├── backend-api-more-app-lib/              [Git repository]\n│   └── src/\n│       ├── controllers/\n│       ├── repositories/\n│       ├── entities/\n│       ├── shared/\n│       └── frontend/\n│\n├── frontend-ui-storybook-like-app-lib/    [Git repository]\n│   └── src/\n│       ├── components/\n│       ├── pages/\n│       ├── shared/\n│       └── backend/\n│\n├── authentication-app-lib/               [Git repository]\n│   └── src/\n│       ├── controllers/\n│       ├── services/\n│       ├── shared/\n│       └── frontend/\n│\n└── customer-portal-app-lib/              [Git repository]\n    └── src/\n        ├── controllers/\n        ├── repositories/\n        ├── components/\n        └── shared/\n",
// @taonSkipNextLineCut
codeblock8Html: "company-container/                         [Git repository]\n│\n├── backend-api-more-app-lib/              [Git repository]\n│   └── src/\n│       ├── controllers/\n│       ├── repositories/\n│       ├── entities/\n│       ├── shared/\n│       └── frontend/\n│\n├── frontend-ui-storybook-like-app-lib/    [Git repository]\n│   └── src/\n│       ├── components/\n│       ├── pages/\n│       ├── shared/\n│       └── backend/\n│\n├── authentication-app-lib/               [Git repository]\n│   └── src/\n│       ├── controllers/\n│       ├── services/\n│       ├── shared/\n│       └── frontend/\n│\n└── customer-portal-app-lib/              [Git repository]\n    └── src/\n        ├── controllers/\n        ├── repositories/\n        ├── components/\n        └── shared/\n",
// @taonSkipNextLineCut
codeblock9: "monorepo",
// @taonSkipNextLineCut
codeblock10: "taon.json",
// @taonSkipNextLineCut
codeblock11: "monorepo: false",
// @taonSkipNextLineCut
codeblock12: "monorepo: true",
// @taonSkipNextLineCut
codeblock13: "company-container/              [Git repository]\n│\n├── shared-library/             [Git repository]\n│   └── src/\n│\n├── backend-api/                [Git repository]\n│   └── src/\n│\n├── frontend-app/               [Git repository]\n│   └── src/\n│\n└── documentation/              [Git repository]\n    └── docs/\n",
// @taonSkipNextLineCut
codeblock13Html: "company-container/              [Git repository]\n│\n├── shared-library/             [Git repository]\n│   └── src/\n│\n├── backend-api/                [Git repository]\n│   └── src/\n│\n├── frontend-app/               [Git repository]\n│   └── src/\n│\n└── documentation/              [Git repository]\n    └── docs/\n",
// @taonSkipNextLineCut
codeblock14: "backend-api",
// @taonSkipNextLineCut
codeblock15: "frontend-app",
// @taonSkipNextLineCut
codeblock16: "backend-api-more-app-lib",
// @taonSkipNextLineCut
codeblock17: "frontend-ui-storybook-like-app-lib",
// @taonSkipNextLineCut
codeblock18: "company-container/              [Git repository]\n│\n├── shared-library/\n│   └── src/\n│\n├── backend-api/\n│   └── src/\n│\n├── frontend-app/\n│   └── src/\n│\n└── documentation/\n    └── docs/\n",
// @taonSkipNextLineCut
codeblock18Html: "company-container/              [Git repository]\n│\n├── shared-library/\n│   └── src/\n│\n├── backend-api/\n│   └── src/\n│\n├── frontend-app/\n│   └── src/\n│\n└── documentation/\n    └── docs/\n",
// @taonSkipNextLineCut
codeblock19: "company/\n│\n├── shared/                     [Separate repositories]\n│   ├── core/\n│   └── authentication/\n│\n├── product-a/                  [Single repository]\n│   ├── frontend/\n│   └── backend/\n│\n└── product-b/                  [Separate repositories]\n    ├── frontend/\n    └── backend/\n",
// @taonSkipNextLineCut
codeblock19Html: "company/\n│\n├── shared/                     [Separate repositories]\n│   ├── core/\n│   └── authentication/\n│\n├── product-a/                  [Single repository]\n│   ├── frontend/\n│   └── backend/\n│\n└── product-b/                  [Separate repositories]\n    ├── frontend/\n    └── backend/\n",
// @taonSkipNextLineCut
codeblock20: "taon pull:deep\n",
// @taonSkipNextLineCut
codeblock20Html: "taon pull:deep\n",
// @taonSkipNextLineCut
codeblock21: "taon push:deep\n",
// @taonSkipNextLineCut
codeblock21Html: "taon push:deep\n",
// @taonSkipNextLineCut
codeblock22: "master",
// @taonSkipNextLineCut
codeblock23: "                  COMPANY CONTAINER\n                         │\n                  taon pull:deep\n                         │\n          ┌──────────────┼──────────────┐\n          ▼              ▼              ▼\n     REPOSITORY A   REPOSITORY B   REPOSITORY C\n          │              │              │\n       Updated         Updated        Updated\n\n                  taon push:deep\n                         │\n          ┌──────────────┼──────────────┐\n          ▼              ▼              ▼\n     REMOTE REPO A  REMOTE REPO B  REMOTE REPO C\n",
// @taonSkipNextLineCut
codeblock23Html: "                  COMPANY CONTAINER\n                         │\n                  taon pull:deep\n                         │\n          ┌──────────────┼──────────────┐\n          ▼              ▼              ▼\n     REPOSITORY A   REPOSITORY B   REPOSITORY C\n          │              │              │\n       Updated         Updated        Updated\n\n                  taon push:deep\n                         │\n          ┌──────────────┼──────────────┐\n          ▼              ▼              ▼\n     REMOTE REPO A  REMOTE REPO B  REMOTE REPO C\n",
// @taonSkipNextLineCut
codeblock24: "taon build\n",
// @taonSkipNextLineCut
codeblock24Html: "taon build\n",
// @taonSkipNextLineCut
codeblock25: "taon b\n",
// @taonSkipNextLineCut
codeblock25Html: "taon b\n",
// @taonSkipNextLineCut
codeblock26: "taon build:prod\n",
// @taonSkipNextLineCut
codeblock26Html: "taon build:prod\n",
// @taonSkipNextLineCut
codeblock27: "taon bp\n",
// @taonSkipNextLineCut
codeblock27Html: "taon bp\n",
// @taonSkipNextLineCut
codeblock28: "                  TAON CONTAINER\n                         │\n                      taon bp\n                         │\n          ┌──────────────┼──────────────┐\n          ▼              ▼              ▼\n      APP-LIB A      APP-LIB B      APP-LIB C\n          │              │              │\n     PROD BUILD     PROD BUILD     PROD BUILD\n",
// @taonSkipNextLineCut
codeblock28Html: "                  TAON CONTAINER\n                         │\n                      taon bp\n                         │\n          ┌──────────────┼──────────────┐\n          ▼              ▼              ▼\n      APP-LIB A      APP-LIB B      APP-LIB C\n          │              │              │\n     PROD BUILD     PROD BUILD     PROD BUILD\n",
// @taonSkipNextLineCut
codeblock29: "                       TAON PROJECT\n                            │\n                      SOURCE CODE\n                            │\n                       TAON BUILD\n                            │\n                    RELEASE STRATEGY\n                            │\n          ┌─────────────────┼─────────────────┐\n          │                 │                 │\n        MANUAL            LOCAL             CLOUD\n          │                 │                 │\n       Remote           Local Git        Taon Cloud\n     destination       destination       orchestration\n\n\n                ADDITIONAL TARGETS\n                        │\n              ┌─────────┴─────────┐\n              │                   │\n         STATIC PAGES         CLOUDFLARE\n              │                   │\n          GitHub Pages        Wrangler\n          or similar          │\n                          ┌───┼───┐\n                          KV  D1  R2\n",
// @taonSkipNextLineCut
codeblock29Html: "                       TAON PROJECT\n                            │\n                      SOURCE CODE\n                            │\n                       TAON BUILD\n                            │\n                    RELEASE STRATEGY\n                            │\n          ┌─────────────────┼─────────────────┐\n          │                 │                 │\n        MANUAL            LOCAL             CLOUD\n          │                 │                 │\n       Remote           Local Git        Taon Cloud\n     destination       destination       orchestration\n\n\n                ADDITIONAL TARGETS\n                        │\n              ┌─────────┴─────────┐\n              │                   │\n         STATIC PAGES         CLOUDFLARE\n              │                   │\n          GitHub Pages        Wrangler\n          or similar          │\n                          ┌───┼───┐\n                          KV  D1  R2\n",
// @taonSkipNextLineCut
codeblock30: "taon automatic:release cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock30Html: "taon automatic:release cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock31: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock31Html: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock32: "                  TAON APP-LIB PROJECT\n                           │\n                     SHARED SOURCE\n                           │\n       ┌───────────────────┼───────────────────┐\n       │                   │                   │\n    NPM / CLI         ANGULAR / NODE        VS CODE\n       │                   │                EXTENSION\n       │                   │                   │\n       │              ┌────┴────┐              │\n       │              │         │              │\n       │           WEB APP   ELECTRON          │\n       │              │      DESKTOP           │\n       │              │                        │\n       └──────────────┴────────────────────────┘\n                           │\n                    FUTURE TARGET\n                           │\n                    CAPACITOR MOBILE\n",
// @taonSkipNextLineCut
codeblock32Html: "                  TAON APP-LIB PROJECT\n                           │\n                     SHARED SOURCE\n                           │\n       ┌───────────────────┼───────────────────┐\n       │                   │                   │\n    NPM / CLI         ANGULAR / NODE        VS CODE\n       │                   │                EXTENSION\n       │                   │                   │\n       │              ┌────┴────┐              │\n       │              │         │              │\n       │           WEB APP   ELECTRON          │\n       │              │      DESKTOP           │\n       │              │                        │\n       └──────────────┴────────────────────────┘\n                           │\n                    FUTURE TARGET\n                           │\n                    CAPACITOR MOBILE\n",
// @taonSkipNextLineCut
codeblock33: "          BROWSER                         NODE.JS\n   ┌──────────────────┐            ┌──────────────────┐\n   │ Angular frontend │ ── HTTP ─► │ Backend services │\n   └──────────────────┘            │ Database access  │\n                                   └──────────────────┘\n",
// @taonSkipNextLineCut
codeblock33Html: "          BROWSER                         NODE.JS\n   ┌──────────────────┐            ┌──────────────────┐\n   │ Angular frontend │ ── HTTP ─► │ Backend services │\n   └──────────────────┘            │ Database access  │\n                                   └──────────────────┘\n",
// @taonSkipNextLineCut
codeblock34: "                       BROWSER\n       ┌───────────────────────────────────┐\n       │          Angular frontend         │\n       │                 │                 │\n       │       Backend-like logic          │\n       │                 │                 │\n       │       Browser-side storage        │\n       └───────────────────────────────────┘\n\n               No separate Node.js\n               backend required\n",
// @taonSkipNextLineCut
codeblock34Html: "                       BROWSER\n       ┌───────────────────────────────────┐\n       │          Angular frontend         │\n       │                 │                 │\n       │       Backend-like logic          │\n       │                 │                 │\n       │       Browser-side storage        │\n       └───────────────────────────────────┘\n\n               No separate Node.js\n               backend required\n",
// @taonSkipNextLineCut
codeblock35: "taon pull:deep\ntaon bp\ncd my-app-entrypoint-project\ntaon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock35Html: "taon pull:deep\ntaon bp\n<span class=\"hljs-built_in\">cd</span> my-app-entrypoint-project\ntaon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock36: "  DEVELOPERS / AI AGENTS\n           │\n           ▼\n   MULTIPLE GIT REPOS\n           │\n           ▼\n     taon pull:deep\n           │\n           ▼\n        taon bp\n           │\n           ▼\n    TESTS / VALIDATION\n           │\n           ▼\n    FINAL GIT COMMIT\n           │\n           ▼\n  taon ar cloudflare:prod\n           │\n           ▼\n      DEPLOYMENT\n",
// @taonSkipNextLineCut
codeblock36Html: "  DEVELOPERS / AI AGENTS\n           │\n           ▼\n   MULTIPLE GIT REPOS\n           │\n           ▼\n     taon pull:deep\n           │\n           ▼\n        taon bp\n           │\n           ▼\n    TESTS / VALIDATION\n           │\n           ▼\n    FINAL GIT COMMIT\n           │\n           ▼\n  taon ar cloudflare:prod\n           │\n           ▼\n      DEPLOYMENT\n",
// @taonSkipNextLineCut
codeblock37: "npm i -g taon\n",
// @taonSkipNextLineCut
codeblock37Html: "npm i -g taon\n",
// @taonSkipNextLineCut
codeblock38: "taon sync\n",
// @taonSkipNextLineCut
codeblock38Html: "taon sync\n",
// @taonSkipNextLineCut
codeblock39: "taon push",
// @taonSkipNextLineCut
codeblock40: "taon melt",
// @taonSkipNextLineCut
codeblock41: "taon push\n",
// @taonSkipNextLineCut
codeblock41Html: "taon push\n",
// @taonSkipNextLineCut
codeblock42: "$$$ update $$$\n",
// @taonSkipNextLineCut
codeblock42Html: "$$$ update $$$\n",
// @taonSkipNextLineCut
codeblock43: "Git history (newest first)\n\n  ●  $$$ update $$$\n  │\n  ●  $$$ update $$$\n  │\n  ●  $$$ update $$$\n  │\n  ●  feat: implement authentication\n  │\n  ●  initial project setup\n",
// @taonSkipNextLineCut
codeblock43Html: "Git history (newest first)\n\n  ●  $$$ update $$$\n  │\n  ●  $$$ update $$$\n  │\n  ●  $$$ update $$$\n  │\n  ●  feat: implement authentication\n  │\n  ●  initial project setup\n",
// @taonSkipNextLineCut
codeblock44: "taon melt\n",
// @taonSkipNextLineCut
codeblock44Html: "taon melt\n",
// @taonSkipNextLineCut
codeblock45: "BEFORE: taon melt\n\n  HEAD\n   │\n   ▼\n  ●  $$$ update $$$       ← checkpoint 3\n  │\n  ●  $$$ update $$$       ← checkpoint 2\n  │\n  ●  $$$ update $$$       ← checkpoint 1\n  │\n  ●  feat: authentication ← last finalized commit\n  │\n  ●  initial setup\n\n\n             taon melt\n                 │\n                 ▼\n\n\nAFTER: taon melt\n\n  HEAD\n   │\n   ▼\n  ●  feat: authentication\n  │\n  ●  initial setup\n\n\n  Git staging area:\n  ┌────────────────────────────────────┐\n  │  Changes from checkpoint 1         │\n  │  Changes from checkpoint 2         │\n  │  Changes from checkpoint 3         │\n  └────────────────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock45Html: "BEFORE: taon melt\n\n  HEAD\n   │\n   ▼\n  ●  $$$ update $$$       ← checkpoint 3\n  │\n  ●  $$$ update $$$       ← checkpoint 2\n  │\n  ●  $$$ update $$$       ← checkpoint 1\n  │\n  ●  feat: authentication ← last finalized commit\n  │\n  ●  initial setup\n\n\n             taon melt\n                 │\n                 ▼\n\n\nAFTER: taon melt\n\n  HEAD\n   │\n   ▼\n  ●  feat: authentication\n  │\n  ●  initial setup\n\n\n  Git staging area:\n  ┌────────────────────────────────────┐\n  │  Changes from checkpoint 1         │\n  │  Changes from checkpoint 2         │\n  │  Changes from checkpoint 3         │\n  └────────────────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock46: "git diff --cached\ngit commit -m \"feat: complete authentication workflow\"\n",
// @taonSkipNextLineCut
codeblock46Html: "git diff --cached\ngit commit -m <span class=\"hljs-string\">&quot;feat: complete authentication workflow&quot;</span>\n",
// @taonSkipNextLineCut
codeblock47: "FINAL GIT HISTORY\n\n  ●  feat: complete authentication workflow\n  │\n  ●  feat: implement authentication\n  │\n  ●  initial project setup\n",
// @taonSkipNextLineCut
codeblock47Html: "FINAL GIT HISTORY\n\n  ●  feat: complete authentication workflow\n  │\n  ●  feat: implement authentication\n  │\n  ●  initial project setup\n",
// @taonSkipNextLineCut
codeblock48: "taon push\ntaon push\ntaon push\ntaon melt\ngit commit -m \"feat: implement new functionality\"\n",
// @taonSkipNextLineCut
codeblock48Html: "taon push\ntaon push\ntaon push\ntaon melt\ngit commit -m <span class=\"hljs-string\">&quot;feat: implement new functionality&quot;</span>\n",
// @taonSkipNextLineCut
codeblock49: "$$$ update $$$\n",
// @taonSkipNextLineCut
codeblock49Html: "$$$ update $$$\n",
// @taonSkipNextLineCut
codeblock50: "taon melt",
// @taonSkipNextLineCut
codeblock51: "                    COMPANY CONTAINER\n                           │\n              ┌────────────┴────────────┐\n              │                         │\n       AUTHENTICATION               UI COMPONENTS\n          APP-LIB                      APP-LIB\n              │                         │\n       ┌──────┴──────┐           ┌──────┴──────┐\n       │             │           │             │\n    Backend       Frontend    Components    Demo App\n       │             │           │             │\n       └─────────────┴─────┬─────┴─────────────┘\n                           │\n                     CUSTOMER PORTAL\n                         APP-LIB\n                           │\n                     PRODUCTION BUILD\n                           │\n                   DEPLOYMENT TARGET\n",
// @taonSkipNextLineCut
codeblock51Html: "                    COMPANY CONTAINER\n                           │\n              ┌────────────┴────────────┐\n              │                         │\n       AUTHENTICATION               UI COMPONENTS\n          APP-LIB                      APP-LIB\n              │                         │\n       ┌──────┴──────┐           ┌──────┴──────┐\n       │             │           │             │\n    Backend       Frontend    Components    Demo App\n       │             │           │             │\n       └─────────────┴─────┬─────┴─────────────┘\n                           │\n                     CUSTOMER PORTAL\n                         APP-LIB\n                           │\n                     PRODUCTION BUILD\n                           │\n                   DEPLOYMENT TARGET\n",
// @taonSkipNextLineCut
codeblock52: "taon push",
// @taonSkipNextLineCut
codeblock53: "taon melt",
// @taonSkipNextLineCut
codeblock54: "taon pull:deep",
// @taonSkipNextLineCut
codeblock55: "taon bp",
// @taonSkipNextLineCut
codeblock56: "                   TAON PROJECT\n                        │\n                 Shared Source Code\n                        │\n             ┌──────────┼──────────┐\n             │          │          │\n          WEB APP     ELECTRON    DOCS\n             │          │          │\n          Frontend    Desktop    Markdown\n          Backend     Package    Website\n\n\n                  FUTURE TARGETS\n                        │\n                  Native Apps\n                        │\n                 Additional Runtimes\n",
// @taonSkipNextLineCut
codeblock56Html: "                   TAON PROJECT\n                        │\n                 Shared Source Code\n                        │\n             ┌──────────┼──────────┐\n             │          │          │\n          WEB APP     ELECTRON    DOCS\n             │          │          │\n          Frontend    Desktop    Markdown\n          Backend     Package    Website\n\n\n                  FUTURE TARGETS\n                        │\n                  Native Apps\n                        │\n                 Additional Runtimes\n",
// @taonSkipNextLineCut
codeblock57: "product/\n│\n├── domain/\n│   └── business-logic/\n│\n├── shared/\n│   ├── models/\n│   └── utilities/\n│\n├── applications/\n│   ├── web/\n│   ├── desktop/\n│   └── mobile/                 [Future target]\n│\n└── documentation/\n",
// @taonSkipNextLineCut
codeblock57Html: "product/\n│\n├── domain/\n│   └── business-logic/\n│\n├── shared/\n│   ├── models/\n│   └── utilities/\n│\n├── applications/\n│   ├── web/\n│   ├── desktop/\n│   └── mobile/                 [Future target]\n│\n└── documentation/\n",
// @taonSkipNextLineCut
codeblock58: "                  COMPANY PROJECTS\n                         │\n                 TAON CONTAINERS\n                         │\n               STANDALONE PROJECTS\n                         │\n                SOURCE-FIRST BUILDS\n                         │\n                  TAON CLI\n                         │\n                 LOCAL RELEASES\n",
// @taonSkipNextLineCut
codeblock58Html: "                  COMPANY PROJECTS\n                         │\n                 TAON CONTAINERS\n                         │\n               STANDALONE PROJECTS\n                         │\n                SOURCE-FIRST BUILDS\n                         │\n                  TAON CLI\n                         │\n                 LOCAL RELEASES\n",
// @taonSkipNextLineCut
codeblock59: "                  COMPANY PROJECTS\n                         │\n                 TAON CONTAINERS\n                         │\n               STANDALONE PROJECTS\n                         │\n                SOURCE-FIRST BUILDS\n                         │\n                     TAON CLI\n                         │\n                     TAON CLOUD\n                         │\n          ┌──────────────┼──────────────┐\n          │              │              │\n       BUILD          VALIDATE        DEPLOY\n          │              │              │\n       Artifacts      Tests/Checks   Environments\n",
// @taonSkipNextLineCut
codeblock59Html: "                  COMPANY PROJECTS\n                         │\n                 TAON CONTAINERS\n                         │\n               STANDALONE PROJECTS\n                         │\n                SOURCE-FIRST BUILDS\n                         │\n                     TAON CLI\n                         │\n                     TAON CLOUD\n                         │\n          ┌──────────────┼──────────────┐\n          │              │              │\n       BUILD          VALIDATE        DEPLOY\n          │              │              │\n       Artifacts      Tests/Checks   Environments\n",
// @taonSkipNextLineCut
codeblock60: "taon pull:deep",
// @taonSkipNextLineCut
codeblock61: "taon push:deep",
// @taonSkipNextLineCut
codeblock62: "taon build",
// @taonSkipNextLineCut
codeblock63: "taon b",
// @taonSkipNextLineCut
codeblock64: "taon build:prod",
// @taonSkipNextLineCut
codeblock65: "taon bp",
// @taonSkipNextLineCut
codeblock66: "taon automatic:release cloudflare:prod",
// @taonSkipNextLineCut
codeblock67: "taon ar cloudflare:prod",
// @taonSkipNextLineCut
codeblock68: "npm i -g taon",
// @taonSkipNextLineCut
codeblock69: "taon sync",
// @taonSkipNextLineCut
codeblock70: "taon push",
// @taonSkipNextLineCut
codeblock71: "$$$ update $$$",
// @taonSkipNextLineCut
codeblock72: "taon melt",
// @taonSkipNextLineCut
codeblock73: "npm i -g taon\ntaon sync\ntaon pull:deep\ntaon bp \n",
// @taonSkipNextLineCut
codeblock73Html: "npm i -g taon\ntaon sync\ntaon pull:deep\ntaon bp \n",
// @taonSkipNextLineCut
codeblock74: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock74Html: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock75: "taon push\ntaon push\ntaon melt\ngit diff --cached\ngit commit -m \"feat: implement new functionality\"\ntaon push:deep\n",
// @taonSkipNextLineCut
codeblock75Html: "taon push\ntaon push\ntaon melt\ngit diff --cached\ngit commit -m <span class=\"hljs-string\">&quot;feat: implement new functionality&quot;</span>\ntaon push:deep\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "ci-cd-architecture",
    "title": "CI/CD & Architecture",
    "level": 1
  },
  {
    "id": "overview",
    "title": "Overview",
    "level": 2
  },
  {
    "id": "1-source-first-builds-no-intermediate-npm-releases",
    "title": "1. Source-First Builds: No Intermediate NPM Releases",
    "level": 2
  },
  {
    "id": "2-the-core-concept-isomorphic-app-library-projects",
    "title": "2. The Core Concept: Isomorphic App-Library Projects",
    "level": 2
  },
  {
    "id": "backend-and-frontend-are-not-fixed-project-categories",
    "title": "Backend and frontend are not fixed project categories",
    "level": 3
  },
  {
    "id": "one-project-can-be-both-a-library-and-its-demonstration-application",
    "title": "One project can be both a library and its demonstration application",
    "level": 3
  },
  {
    "id": "3-design-an-entire-company-s-software-architecture",
    "title": "3. Design an Entire Company's Software Architecture",
    "level": 2
  },
  {
    "id": "example-company-structure",
    "title": "Example company structure",
    "level": 3
  },
  {
    "id": "containers-as-organizational-boundaries",
    "title": "Containers as organizational boundaries",
    "level": 3
  },
  {
    "id": "a-more-taon-native-isomorphic-company-structure",
    "title": "A more Taon-native, isomorphic company structure",
    "level": 3
  },
  {
    "id": "4-standalone-projects-containers-and-git-repositories",
    "title": "4. Standalone Projects, Containers, and Git Repositories",
    "level": 2
  },
  {
    "id": "multi-repository-container",
    "title": "Multi-repository container",
    "level": 3
  },
  {
    "id": "monorepo-container",
    "title": "Monorepo container",
    "level": 3
  },
  {
    "id": "combining-both-approaches",
    "title": "Combining both approaches",
    "level": 3
  },
  {
    "id": "5-synchronize-multiple-git-repositories",
    "title": "5. Synchronize Multiple Git Repositories",
    "level": 2
  },
  {
    "id": "pull-across-the-container",
    "title": "Pull across the container",
    "level": 3
  },
  {
    "id": "push-across-the-container",
    "title": "Push across the container",
    "level": 3
  },
  {
    "id": "6-build-the-container-directly-from-source",
    "title": "6. Build the Container Directly from Source",
    "level": 2
  },
  {
    "id": "development-build",
    "title": "Development build",
    "level": 3
  },
  {
    "id": "production-build",
    "title": "Production build",
    "level": 3
  },
  {
    "id": "7-release-strategies-five-types",
    "title": "7. Release Strategies: Five Types",
    "level": 2
  },
  {
    "id": "cloudflare-release-example",
    "title": "Cloudflare release example",
    "level": 3
  },
  {
    "id": "8-supported-and-planned-release-artifacts",
    "title": "8. Supported and Planned Release Artifacts",
    "level": 2
  },
  {
    "id": "artifact-composition",
    "title": "Artifact composition",
    "level": 3
  },
  {
    "id": "backend-frontend-execution-depends-on-the-artifact",
    "title": "Backend/frontend execution depends on the artifact",
    "level": 3
  },
  {
    "id": "websql-mode-backend-inside-the-browser",
    "title": "WebSQL mode: backend inside the browser",
    "level": 3
  },
  {
    "id": "9-automated-local-releases-before-taon-cloud",
    "title": "9. Automated Local Releases Before Taon Cloud",
    "level": 2
  },
  {
    "id": "10-keep-taon-s-core-containers-updated",
    "title": "10. Keep Taon's Core Containers Updated",
    "level": 2
  },
  {
    "id": "11-rapid-git-checkpoints-taon-push-and-taon-melt",
    "title": "11. Rapid Git Checkpoints: taon push and taon melt",
    "level": 2
  },
  {
    "id": "step-1-quick-checkpoint-commits",
    "title": "Step 1: Quick checkpoint commits",
    "level": 3
  },
  {
    "id": "step-2-melt-temporary-commits-into-staged-changes",
    "title": "Step 2: Melt temporary commits into staged changes",
    "level": 3
  },
  {
    "id": "step-3-clean-final-history",
    "title": "Step 3: Clean final history",
    "level": 3
  },
  {
    "id": "example-checkpoint-workflow",
    "title": "Example checkpoint workflow",
    "level": 3
  },
  {
    "id": "release-protection",
    "title": "Release protection",
    "level": 3
  },
  {
    "id": "12-why-this-works-well-with-ai-coding-agents",
    "title": "12. Why This Works Well with AI Coding Agents",
    "level": 2
  },
  {
    "id": "13-one-project-architecture-multiple-build-artifacts",
    "title": "13. One Project Architecture, Multiple Build Artifacts",
    "level": 2
  },
  {
    "id": "design-the-architecture-now-even-if-the-target-arrives-later",
    "title": "Design the architecture now, even if the target arrives later",
    "level": 3
  },
  {
    "id": "14-from-local-cli-orchestration-to-taon-cloud",
    "title": "14. From Local CLI Orchestration to Taon Cloud",
    "level": 2
  },
  {
    "id": "15-what-traditional-ci-cd-still-provides",
    "title": "15. What Traditional CI/CD Still Provides",
    "level": 2
  },
  {
    "id": "16-command-reference",
    "title": "16. Command Reference",
    "level": 2
  },
  {
    "id": "typical-local-release-sequence",
    "title": "Typical local release sequence",
    "level": 3
  },
  {
    "id": "typical-rapid-development-sequence",
    "title": "Typical rapid-development sequence",
    "level": 3
  },
  {
    "id": "conclusion",
    "title": "Conclusion",
    "level": 2
  }
];

}

    