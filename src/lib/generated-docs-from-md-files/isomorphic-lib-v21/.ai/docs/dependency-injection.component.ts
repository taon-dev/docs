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
  selector: 'app-my-docs-page-dependency-injection-md',
  templateUrl: './dependency-injection.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsDependencyInjectionMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "class MyExampleComponent {\n  // GOOD - name based on the injected class\n  myApiService = inject(MyApiService);\n\n  // BAD\n  api = inject(MyApiService);\n}\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyExampleComponent</span> </span>{\n  <span class=\"hljs-comment\">// GOOD - name based on the injected class</span>\n  myApiService = inject(MyApiService);\n\n  <span class=\"hljs-comment\">// BAD</span>\n  api = inject(MyApiService);\n}\n",
// @taonSkipNextLineCut
codeblock1: "class MyExampleComponent {\n  cdr = inject(ChangeDetectorRef);\n  route = inject(ActivatedRoute);\n  router = inject(Router);\n  injector = inject(Injector);\n  destroyRef = inject(DestroyRef);\n  location = inject(Location);\n}\n",
// @taonSkipNextLineCut
codeblock1Html: "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyExampleComponent</span> </span>{\n  cdr = inject(ChangeDetectorRef);\n  route = inject(ActivatedRoute);\n  router = inject(Router);\n  injector = inject(Injector);\n  destroyRef = inject(DestroyRef);\n  location = inject(Location);\n}\n",
// @taonSkipNextLineCut
codeblock2: "// NOT REQUIRED\nchangeDetectorRef = inject(ChangeDetectorRef);\nactivatedRoute = inject(ActivatedRoute);\n",
// @taonSkipNextLineCut
codeblock2Html: "<span class=\"hljs-comment\">// NOT REQUIRED</span>\nchangeDetectorRef = inject(ChangeDetectorRef);\nactivatedRoute = inject(ActivatedRoute);\n",
// @taonSkipNextLineCut
codeblock3: "class MyExampleApiService extends TaonBaseAngularService {\n  userController = this.inject(UserController);\n}\n",
// @taonSkipNextLineCut
codeblock3Html: "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyExampleApiService</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseAngularService</span> </span>{\n  userController = <span class=\"hljs-built_in\">this</span>.inject(UserController);\n}\n",
// @taonSkipNextLineCut
codeblock4: "class MyExampleConfigService extends TaonBaseAngularService {\n  myUserProvider = this.inject(MyUserProvider);\n}\n",
// @taonSkipNextLineCut
codeblock4Html: "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyExampleConfigService</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseAngularService</span> </span>{\n  myUserProvider = <span class=\"hljs-built_in\">this</span>.inject(MyUserProvider);\n}\n",
// @taonSkipNextLineCut
codeblock5: "// BAD\ncontroller = this.inject(UserController);\nuserCtrl = this.inject(UserController);\n\nprovider = this.inject(MyUserProvider);\nuserProv = this.inject(MyUserProvider);\n",
// @taonSkipNextLineCut
codeblock5Html: "<span class=\"hljs-comment\">// BAD</span>\ncontroller = <span class=\"hljs-built_in\">this</span>.inject(UserController);\nuserCtrl = <span class=\"hljs-built_in\">this</span>.inject(UserController);\n\nprovider = <span class=\"hljs-built_in\">this</span>.inject(MyUserProvider);\nuserProv = <span class=\"hljs-built_in\">this</span>.inject(MyUserProvider);\n",
// @taonSkipNextLineCut
codeblock6: "class MyExampleController {\n  myUserRepository = this.inject(MyUserRepository);\n\n  myBookProvider = this.inject(MyBookProvider);\n}\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyExampleController</span> </span>{\n  myUserRepository = <span class=\"hljs-built_in\">this</span>.inject(MyUserRepository);\n\n  myBookProvider = <span class=\"hljs-built_in\">this</span>.inject(MyBookProvider);\n}\n",
// @taonSkipNextLineCut
codeblock7: "// BAD\nrepo = this.inject(MyUserRepository);\nuserRepo = this.inject(MyUserRepository);\n\nprovider = this.inject(MyBookProvider);\nbookProv = this.inject(MyBookProvider);\n",
// @taonSkipNextLineCut
codeblock7Html: "<span class=\"hljs-comment\">// BAD</span>\nrepo = <span class=\"hljs-built_in\">this</span>.inject(MyUserRepository);\nuserRepo = <span class=\"hljs-built_in\">this</span>.inject(MyUserRepository);\n\nprovider = <span class=\"hljs-built_in\">this</span>.inject(MyBookProvider);\nbookProv = <span class=\"hljs-built_in\">this</span>.inject(MyBookProvider);\n",
// @taonSkipNextLineCut
codeblock8: "MyApiService       -> myApiService\nUserController     -> userController\nMyUserProvider     -> myUserProvider\nMyUserRepository   -> myUserRepository\n",
// @taonSkipNextLineCut
codeblock8Html: "MyApiService       -&gt; myApiService\nUserController     -&gt; userController\nMyUserProvider     -&gt; myUserProvider\nMyUserRepository   -&gt; myUserRepository\n",
// @taonSkipNextLineCut
codeblock9: "cdr",
// @taonSkipNextLineCut
codeblock10: "route",
// @taonSkipNextLineCut
codeblock11: "router"
  };

  headings: DocsHeading[] = [
  {
    "id": "dependency-injection-naming-conventions",
    "title": "Dependency Injection Naming Conventions",
    "level": 1
  },
  {
    "id": "angular-services",
    "title": "Angular services",
    "level": 2
  },
  {
    "id": "short-names-for-common-angular-dependencies",
    "title": "Short names for common Angular dependencies",
    "level": 3
  },
  {
    "id": "taon-angular-services",
    "title": "Taon Angular services",
    "level": 2
  },
  {
    "id": "taon-framework-di",
    "title": "Taon framework DI",
    "level": 2
  },
  {
    "id": "general-rule",
    "title": "General rule",
    "level": 3
  }
];

}

    