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
  selector: 'app-my-docs-page-config-services-md',
  templateUrl: './config-services.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevDocsAiDocsTaonBuildingBlocksConfigServicesMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@Injectable({})\nexport class UserConfigService extends TaonBaseAngularService {\n  userProvider = this.inject(UserProvider);\n\n  get isLoginAvailable(): boolean {\n    return this.userProvider.login.enabled;\n  }\n}\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-meta\">@Injectable</span>({})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserConfigService</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseAngularService</span> </span>{\n  userProvider = <span class=\"hljs-built_in\">this</span>.inject(UserProvider);\n\n  <span class=\"hljs-keyword\">get</span> <span class=\"hljs-title\">isLoginAvailable</span>(): <span class=\"hljs-title\">boolean</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>.userProvider.login.enabled;\n  }\n}\n",
// @taonSkipNextLineCut
codeblock1: "providedIn: 'root'",
// @taonSkipNextLineCut
codeblock2: "this.inject()"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-config-service",
    "title": "Taon Config Service",
    "level": 1
  },
  {
    "id": "example",
    "title": "Example",
    "level": 2
  },
  {
    "id": "important-notes",
    "title": "Important Notes",
    "level": 2
  },
  {
    "id": "context-scoped-dependency-injection",
    "title": "Context-scoped dependency injection",
    "level": 3
  },
  {
    "id": "provider-injection",
    "title": "Provider injection",
    "level": 3
  },
  {
    "id": "recommended-usage",
    "title": "Recommended usage",
    "level": 3
  }
];

}

    