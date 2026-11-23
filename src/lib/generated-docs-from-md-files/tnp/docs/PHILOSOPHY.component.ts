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
  selector: 'app-my-docs-page-philosophy-md',
  templateUrl: './PHILOSOPHY.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpDocsPhilosophyMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "~/.taon/taon/projects/container-*\n",
// @taonSkipNextLineCut
codeblock0Html: "~/.taon/taon/projects/container-*\n",
// @taonSkipNextLineCut
codeblock1: "node_modules",
// @taonSkipNextLineCut
codeblock2: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock2Html: "taon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock3: "src/assets/shared/\n",
// @taonSkipNextLineCut
codeblock3Html: "src/assets/shared/\n",
// @taonSkipNextLineCut
codeblock4: "taon pull:deep\ntaon bp\ncd entrypoint-project\ntaon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock4Html: "taon pull:deep\ntaon bp\n<span class=\"hljs-built_in\">cd</span> entrypoint-project\ntaon ar cloudflare:prod\n",
// @taonSkipNextLineCut
codeblock5: "                  SOFTWARE ARCHITECT\n                         │\n                  TAON CONTAINER\n                         │\n       ┌─────────────────┼─────────────────┐\n       │                 │                 │\n    AI AGENT A        AI AGENT B        AI AGENT C\n       │                 │                 │\n   Backend-heavy     Frontend-heavy    Shared Library\n     App-Lib           App-Lib           App-Lib\n       │                 │                 │\n       └─────────────────┼─────────────────┘\n                         │\n                  SHARED TYPES\n                  SHARED SOURCE\n                         │\n                  TAON BUILD\n                         │\n                  TEST & VALIDATE\n                         │\n                  TAON RELEASE\n                         │\n                  PRODUCTION\n",
// @taonSkipNextLineCut
codeblock5Html: "                  SOFTWARE ARCHITECT\n                         │\n                  TAON CONTAINER\n                         │\n       ┌─────────────────┼─────────────────┐\n       │                 │                 │\n    AI AGENT A        AI AGENT B        AI AGENT C\n       │                 │                 │\n   Backend-heavy     Frontend-heavy    Shared Library\n     App-Lib           App-Lib           App-Lib\n       │                 │                 │\n       └─────────────────┼─────────────────┘\n                         │\n                  SHARED TYPES\n                  SHARED SOURCE\n                         │\n                  TAON BUILD\n                         │\n                  TEST &amp; VALIDATE\n                         │\n                  TAON RELEASE\n                         │\n                  PRODUCTION\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "let-ai-agents-build-your-full-stack-applications",
    "title": "Let AI Agents Build Your Full-Stack Applications",
    "level": 1
  },
  {
    "id": "one-language-one-architecture-unlimited-possibilities",
    "title": "One language. One architecture. Unlimited possibilities.",
    "level": 3
  },
  {
    "id": "1-one-language-for-frontend-backend-and-database",
    "title": "1. One Language for Frontend, Backend, and Database",
    "level": 2
  },
  {
    "id": "2-rock-solid-frameworks-as-the-foundation",
    "title": "2. Rock-Solid Frameworks as the Foundation",
    "level": 2
  },
  {
    "id": "3-never-repeat-code-unnecessarily",
    "title": "3. Never Repeat Code Unnecessarily",
    "level": 2
  },
  {
    "id": "4-strongly-typed-frontend-backend-and-database",
    "title": "4. Strongly Typed Frontend, Backend, and Database",
    "level": 2
  },
  {
    "id": "5-automatically-generated-configuration",
    "title": "5. Automatically Generated Configuration",
    "level": 2
  },
  {
    "id": "6-developer-friendly-visual-studio-code-workflow",
    "title": "6. Developer-Friendly Visual Studio Code Workflow",
    "level": 2
  },
  {
    "id": "7-stable-shared-npm-dependencies",
    "title": "7. Stable, Shared NPM Dependencies",
    "level": 2
  },
  {
    "id": "8-simplified-project-releases",
    "title": "8. Simplified Project Releases",
    "level": 2
  },
  {
    "id": "9-develop-applications-and-libraries-together",
    "title": "9. Develop Applications and Libraries Together",
    "level": 2
  },
  {
    "id": "10-backend-and-angular-libraries-together",
    "title": "10. Backend and Angular Libraries Together",
    "level": 2
  },
  {
    "id": "11-shared-assets-inside-packages",
    "title": "11. Shared Assets Inside Packages",
    "level": 2
  },
  {
    "id": "12-websql-run-backend-functionality-in-the-browser",
    "title": "12. WebSQL — Run Backend Functionality in the Browser",
    "level": 2
  },
  {
    "id": "13-ci-cd-without-unnecessary-infrastructure",
    "title": "13. CI/CD Without Unnecessary Infrastructure",
    "level": 2
  },
  {
    "id": "14-a-development-process-designed-for-humans-and-ai-agents",
    "title": "14. A Development Process Designed for Humans and AI Agents",
    "level": 2
  },
  {
    "id": "15-let-ai-agents-build-let-taon-keep-everything-together",
    "title": "15. Let AI Agents Build — Let Taon Keep Everything Together",
    "level": 2
  },
  {
    "id": "the-philosophy",
    "title": "The Philosophy",
    "level": 3
  }
];

}

    