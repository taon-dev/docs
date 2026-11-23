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
  selector: 'app-my-docs-page-angular-md',
  templateUrl: './angular.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiRulesAngularMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@if",
// @taonSkipNextLineCut
codeblock1: "@else",
// @taonSkipNextLineCut
codeblock2: "@for",
// @taonSkipNextLineCut
codeblock3: "@switch",
// @taonSkipNextLineCut
codeblock4: "@defer",
// @taonSkipNextLineCut
codeblock5: "*ngIf",
// @taonSkipNextLineCut
codeblock6: "*ngFor",
// @taonSkipNextLineCut
codeblock7: "signal()",
// @taonSkipNextLineCut
codeblock8: "computed()",
// @taonSkipNextLineCut
codeblock9: "effect()",
// @taonSkipNextLineCut
codeblock10: "BehaviorSubject",
// @taonSkipNextLineCut
codeblock11: "Subject",
// @taonSkipNextLineCut
codeblock12: "api.service.ts",
// @taonSkipNextLineCut
codeblock13: "config.service.ts",
// @taonSkipNextLineCut
codeblock14: "configs.service.ts",
// @taonSkipNextLineCut
codeblock15: ".state.service.ts",
// @taonSkipNextLineCut
codeblock16: "inject()",
// @taonSkipNextLineCut
codeblock17: "private readonly router = inject(Router);\nprivate readonly changeDetectorRef = inject(ChangeDetectorRef);\nprivate readonly apiService = inject(MyApiService);\n",
// @taonSkipNextLineCut
codeblock17Html: "<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> router = inject(Router);\n<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> changeDetectorRef = inject(ChangeDetectorRef);\n<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> apiService = inject(MyApiService);\n",
// @taonSkipNextLineCut
codeblock18: "constructor(\n  private router: Router,\n  private changeDetectorRef: ChangeDetectorRef,\n  private apiService: MyApiService,\n) {}\n",
// @taonSkipNextLineCut
codeblock18Html: "<span class=\"hljs-function\"><span class=\"hljs-title\">constructor</span>(<span class=\"hljs-params\">\n  <span class=\"hljs-keyword\">private</span> router: Router,\n  <span class=\"hljs-keyword\">private</span> changeDetectorRef: ChangeDetectorRef,\n  <span class=\"hljs-keyword\">private</span> apiService: MyApiService,\n</span>)</span> {}\n",
// @taonSkipNextLineCut
codeblock19: "inject()",
// @taonSkipNextLineCut
codeblock20: "private readonly userService = inject(UserService);\nprivate readonly notificationService = inject(NotificationService);\nprivate readonly sessionApiService = inject(TaonSessionApiService);\n",
// @taonSkipNextLineCut
codeblock20Html: "<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> userService = inject(UserService);\n<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> notificationService = inject(NotificationService);\n<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> sessionApiService = inject(TaonSessionApiService);\n",
// @taonSkipNextLineCut
codeblock21: "private readonly cdr = inject(ChangeDetectorRef);\nprivate readonly router = inject(Router);\nprivate readonly route = inject(ActivatedRoute);\n",
// @taonSkipNextLineCut
codeblock21Html: "<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> cdr = inject(ChangeDetectorRef);\n<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> router = inject(Router);\n<span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> route = inject(ActivatedRoute);\n",
// @taonSkipNextLineCut
codeblock22: "../docs/i18n.md",
// @taonSkipNextLineCut
codeblock23: "../docs/i18n.md",
// @taonSkipNextLineCut
codeblock24: "../docs/i18n.md",
// @taonSkipNextLineCut
codeblock25: "../docs/i18n.md",
// @taonSkipNextLineCut
codeblock26: "../docs/i18n.md"
  };

  headings: DocsHeading[] = [
  {
    "id": "angular-syntax-and-state",
    "title": "Angular Syntax and State",
    "level": 2
  },
  {
    "id": "template-syntax",
    "title": "Template syntax",
    "level": 3
  },
  {
    "id": "signals-and-observables",
    "title": "Signals and Observables",
    "level": 3
  },
  {
    "id": "services",
    "title": "Services",
    "level": 2
  },
  {
    "id": "api-services",
    "title": "API services",
    "level": 3
  },
  {
    "id": "configuration-services",
    "title": "Configuration services",
    "level": 3
  },
  {
    "id": "state-services",
    "title": "State services",
    "level": 3
  },
  {
    "id": "dependency-injection",
    "title": "Dependency Injection",
    "level": 3
  },
  {
    "id": "injection-naming",
    "title": "Injection naming",
    "level": 3
  },
  {
    "id": "component-internationalization-i18n",
    "title": "Component Internationalization (i18n)",
    "level": 2
  }
];

}

    