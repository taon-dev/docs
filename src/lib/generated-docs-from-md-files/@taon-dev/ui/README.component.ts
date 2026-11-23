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
  selector: 'app-my-docs-page-readme-md',
  templateUrl: './README.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevUiReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "menuItem",
// @taonSkipNextLineCut
codeblock1: "Signal<string>",
// @taonSkipNextLineCut
codeblock2: "menuItem: 'Users',\nmenuItem: () => `Users (${userCount()})`,\nmenuItem: usersLabel, // e.g. signal('Users') or computed(() => 'Users')\n",
// @taonSkipNextLineCut
codeblock2Html: "menuItem: <span class=\"hljs-string\">&#x27;Users&#x27;</span>,\n<span class=\"hljs-attr\">menuItem</span>: <span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-string\">`Users (<span class=\"hljs-subst\">${userCount()}</span>)`</span>,\n<span class=\"hljs-attr\">menuItem</span>: usersLabel, <span class=\"hljs-comment\">// e.g. signal(&#x27;Users&#x27;) or computed(() =&gt; &#x27;Users&#x27;)</span>\n",
// @taonSkipNextLineCut
codeblock3: "menuItem",
// @taonSkipNextLineCut
codeblock4: "adminLazyRoute<TContext>()",
// @taonSkipNextLineCut
codeblock5: "interface MyAuthContext {\n  isAuthenticated: boolean;\n  isAdmin: boolean;\n}\n\nadminLazyRoute<MyAuthContext>({\n  path: 'sudo',\n  menuItem: 'Sudo',\n  color: 'red',\n  icon: 'supervisor_account',\n  expandable: false,\n  isDisabled: ({ context }) => !context.isAuthenticated,\n  isDisabledTooltip: ({ context }) =>\n    context.isAuthenticated ? '' : 'You must be authenticated to use Sudo',\n  isVisible: ({ context }) => context.isAdmin,\n  loader: () =>\n    import('@taon-dev/sudo/src').then(m => m.TaonSudoBackofficeRoutes),\n});\n",
// @taonSkipNextLineCut
codeblock5Html: "<span class=\"hljs-keyword\">interface</span> MyAuthContext {\n  <span class=\"hljs-attr\">isAuthenticated</span>: <span class=\"hljs-built_in\">boolean</span>;\n  isAdmin: <span class=\"hljs-built_in\">boolean</span>;\n}\n\nadminLazyRoute&lt;MyAuthContext&gt;({\n  <span class=\"hljs-attr\">path</span>: <span class=\"hljs-string\">&#x27;sudo&#x27;</span>,\n  <span class=\"hljs-attr\">menuItem</span>: <span class=\"hljs-string\">&#x27;Sudo&#x27;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#x27;red&#x27;</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#x27;supervisor_account&#x27;</span>,\n  <span class=\"hljs-attr\">expandable</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">isDisabled</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">{ context }</span>) =&gt;</span> !context.isAuthenticated,\n  <span class=\"hljs-attr\">isDisabledTooltip</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">{ context }</span>) =&gt;</span>\n    context.isAuthenticated ? <span class=\"hljs-string\">&#x27;&#x27;</span> : <span class=\"hljs-string\">&#x27;You must be authenticated to use Sudo&#x27;</span>,\n  <span class=\"hljs-attr\">isVisible</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">{ context }</span>) =&gt;</span> context.isAdmin,\n  <span class=\"hljs-attr\">loader</span>: <span class=\"hljs-function\">() =&gt;</span>\n    <span class=\"hljs-keyword\">import</span>(<span class=\"hljs-string\">&#x27;@taon-dev/sudo/src&#x27;</span>).then(<span class=\"hljs-function\"><span class=\"hljs-params\">m</span> =&gt;</span> m.TaonSudoBackofficeRoutes),\n});\n",
// @taonSkipNextLineCut
codeblock6: "<taon-draggable-button-panel\n  [context]=\"authContext\"\n  outlet=\"admin\"\n  basePath=\"main\">\n  <router-outlet name=\"admin\" />\n</taon-draggable-button-panel>\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-draggable-button-panel</span>\n  [<span class=\"hljs-attr\">context</span>]=<span class=\"hljs-string\">&quot;authContext&quot;</span>\n  <span class=\"hljs-attr\">outlet</span>=<span class=\"hljs-string\">&quot;admin&quot;</span>\n  <span class=\"hljs-attr\">basePath</span>=<span class=\"hljs-string\">&quot;main&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">router-outlet</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">&quot;admin&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">taon-draggable-button-panel</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock7: "authContext",
// @taonSkipNextLineCut
codeblock8: "isVisible",
// @taonSkipNextLineCut
codeblock9: "false",
// @taonSkipNextLineCut
codeblock10: "isDisabled",
// @taonSkipNextLineCut
codeblock11: "true",
// @taonSkipNextLineCut
codeblock12: "isDisabledTooltip",
// @taonSkipNextLineCut
codeblock13: "adminLazyRoute({\n  path: 'users',\n  menuItem: 'Users',\n  search: { label: 'Manage users', keywords: ['accounts', 'people'] },\n  loader: () => import('./users.routes').then(m => m.UsersRoutes),\n});\n",
// @taonSkipNextLineCut
codeblock13Html: "adminLazyRoute({\n  <span class=\"hljs-attr\">path</span>: <span class=\"hljs-string\">&#x27;users&#x27;</span>,\n  <span class=\"hljs-attr\">menuItem</span>: <span class=\"hljs-string\">&#x27;Users&#x27;</span>,\n  <span class=\"hljs-attr\">search</span>: { <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&#x27;Manage users&#x27;</span>, <span class=\"hljs-attr\">keywords</span>: [<span class=\"hljs-string\">&#x27;accounts&#x27;</span>, <span class=\"hljs-string\">&#x27;people&#x27;</span>] },\n  <span class=\"hljs-attr\">loader</span>: <span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-keyword\">import</span>(<span class=\"hljs-string\">&#x27;./users.routes&#x27;</span>).then(<span class=\"hljs-function\"><span class=\"hljs-params\">m</span> =&gt;</span> m.UsersRoutes),\n});\n",
// @taonSkipNextLineCut
codeblock14: "search: true",
// @taonSkipNextLineCut
codeblock15: "menuItem",
// @taonSkipNextLineCut
codeblock16: "children",
// @taonSkipNextLineCut
codeblock17: "loadAdminChildren",
// @taonSkipNextLineCut
codeblock18: "icon",
// @taonSkipNextLineCut
codeblock19: "MatIcon['fontIcon']",
// @taonSkipNextLineCut
codeblock20: "string"
  };

  headings: DocsHeading[] = [
  {
    "id": "ui",
    "title": "ui",
    "level": 1
  },
  {
    "id": "context-aware-admin-navigation",
    "title": "Context-aware admin navigation",
    "level": 2
  },
  {
    "id": "admin-page-search",
    "title": "Admin page search",
    "level": 3
  }
];

}

    