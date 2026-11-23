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
  selector: 'app-my-docs-page-taon-detachable-dialog-content-md',
  templateUrl: './taon-detachable-dialog-content.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevUiSrcLibTaonDetachableDialogContentTaonDetachableDialogContentMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "taon-detachable-dialog-content",
// @taonSkipNextLineCut
codeblock1: "                    TAON ADMIN\n\n ┌──── Users ──────────────┐\n │                         │\n │                         │\n └─────────────────────────┘\n\n          ┌──── Posts ──────────────┐\n          │                         │\n          │                         │\n          └─────────────────────────┘\n\n                 ┌──── Post #123 ─────────┐\n                 │                        │\n                 │                        │\n                 └────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock1Html: "                    TAON ADMIN\n\n ┌──── Users ──────────────┐\n │                         │\n │                         │\n └─────────────────────────┘\n\n          ┌──── Posts ──────────────┐\n          │                         │\n          │                         │\n          └─────────────────────────┘\n\n                 ┌──── Post #123 ─────────┐\n                 │                        │\n                 │                        │\n                 └────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock2: "/users",
// @taonSkipNextLineCut
codeblock3: "/posts",
// @taonSkipNextLineCut
codeblock4: "/cms/posts/123",
// @taonSkipNextLineCut
codeblock5: "@Component({\n  imports: [\n    RouterOutlet,\n    TaonDetachedWindowsHostComponent,\n  ],\n  template: `\n    <router-outlet />\n\n  `,\n})\nexport class TaonAdminComponent {}\n",
// @taonSkipNextLineCut
codeblock5Html: "<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">imports</span>: [\n    RouterOutlet,\n    TaonDetachedWindowsHostComponent,\n  ],\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">`\n    &lt;router-outlet /&gt;\n\n  `</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">TaonAdminComponent</span> </span>{}\n",
// @taonSkipNextLineCut
codeblock6: "taon-detached-windows-host",
// @taonSkipNextLineCut
codeblock7: "@Component({\n  selector: 'app-users',\n  standalone: true,\n  imports: [\n    TaonDetachableDialogContentComponent,\n  ],\n  template: `\n    <taon-detachable-dialog-content\n      title=\"Users\"\n      [component]=\"UsersComponent\">\n\n      <h1>Users</h1>\n\n      <app-users-table />\n\n    </taon-detachable-dialog-content>\n  `,\n})\nexport class UsersComponent {\n  readonly UsersComponent = UsersComponent;\n}\n",
// @taonSkipNextLineCut
codeblock7Html: "<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">selector</span>: <span class=\"hljs-string\">&#x27;app-users&#x27;</span>,\n  <span class=\"hljs-attr\">standalone</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">imports</span>: [\n    TaonDetachableDialogContentComponent,\n  ],\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">`\n    &lt;taon-detachable-dialog-content\n      title=&quot;Users&quot;\n      [component]=&quot;UsersComponent&quot;&gt;\n\n      &lt;h1&gt;Users&lt;/h1&gt;\n\n      &lt;app-users-table /&gt;\n\n    &lt;/taon-detachable-dialog-content&gt;\n  `</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UsersComponent</span> </span>{\n  <span class=\"hljs-keyword\">readonly</span> UsersComponent = UsersComponent;\n}\n",
// @taonSkipNextLineCut
codeblock8: "┌──────────────────────────────────── ↗ ┐\n│ Users                                 │\n│                                       │\n│ ...                                   │\n└───────────────────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock8Html: "┌──────────────────────────────────── ↗ ┐\n│ Users                                 │\n│                                       │\n│ ...                                   │\n└───────────────────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock9: "↗",
// @taonSkipNextLineCut
codeblock10: "UsersComponent",
// @taonSkipNextLineCut
codeblock11: "/users\n   ↓\ndetach\n   ↓\n[ Users detached window ]\n",
// @taonSkipNextLineCut
codeblock11Html: "/users\n   ↓\ndetach\n   ↓\n[ Users detached window ]\n",
// @taonSkipNextLineCut
codeblock12: "/posts\n",
// @taonSkipNextLineCut
codeblock12Html: "/posts\n",
// @taonSkipNextLineCut
codeblock13: "UsersComponent",
// @taonSkipNextLineCut
codeblock14: "UsersComponent",
// @taonSkipNextLineCut
codeblock15: "TaonAdminComponent\n│\n├── RouterOutlet\n│   └── PostsComponent\n│\n└── TaonDetachedWindowsHostComponent\n    └── UsersComponent\n",
// @taonSkipNextLineCut
codeblock15Html: "TaonAdminComponent\n│\n├── RouterOutlet\n│   └── PostsComponent\n│\n└── TaonDetachedWindowsHostComponent\n    └── UsersComponent\n",
// @taonSkipNextLineCut
codeblock16: "@Component({\n  selector: 'app-posts',\n  standalone: true,\n  imports: [\n    TaonDetachableDialogContentComponent,\n  ],\n  template: `\n    <taon-detachable-dialog-content\n      title=\"Posts\"\n      [component]=\"PostsComponent\">\n\n      <app-posts-table />\n\n    </taon-detachable-dialog-content>\n  `,\n})\nexport class PostsComponent {\n  readonly PostsComponent = PostsComponent;\n}\n",
// @taonSkipNextLineCut
codeblock16Html: "<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">selector</span>: <span class=\"hljs-string\">&#x27;app-posts&#x27;</span>,\n  <span class=\"hljs-attr\">standalone</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">imports</span>: [\n    TaonDetachableDialogContentComponent,\n  ],\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">`\n    &lt;taon-detachable-dialog-content\n      title=&quot;Posts&quot;\n      [component]=&quot;PostsComponent&quot;&gt;\n\n      &lt;app-posts-table /&gt;\n\n    &lt;/taon-detachable-dialog-content&gt;\n  `</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">PostsComponent</span> </span>{\n  <span class=\"hljs-keyword\">readonly</span> PostsComponent = PostsComponent;\n}\n",
// @taonSkipNextLineCut
codeblock17: "┌──── Users ──────────────┐\n\n           ┌──── Posts ──────────────┐\n",
// @taonSkipNextLineCut
codeblock17Html: "┌──── Users ──────────────┐\n\n           ┌──── Posts ──────────────┐\n",
// @taonSkipNextLineCut
codeblock18: "/cms/posts/123\n",
// @taonSkipNextLineCut
codeblock18Html: "/cms/posts/123\n",
// @taonSkipNextLineCut
codeblock19: "const id = inject(ActivatedRoute)\n  .snapshot\n  .params['id'];\n",
// @taonSkipNextLineCut
codeblock19Html: "<span class=\"hljs-keyword\">const</span> id = inject(ActivatedRoute)\n  .snapshot\n  .params[<span class=\"hljs-string\">&#x27;id&#x27;</span>];\n",
// @taonSkipNextLineCut
codeblock20: "ActivatedRoute",
// @taonSkipNextLineCut
codeblock21: "params = {\n  id: '123',\n};\n",
// @taonSkipNextLineCut
codeblock21Html: "params = {\n  <span class=\"hljs-attr\">id</span>: <span class=\"hljs-string\">&#x27;123&#x27;</span>,\n};\n",
// @taonSkipNextLineCut
codeblock22: "/cms/posts/456\n",
// @taonSkipNextLineCut
codeblock22Html: "/cms/posts/456\n",
// @taonSkipNextLineCut
codeblock23: "┌──── Post #123 ────────┐\n\n          ┌──── Post #456 ────────┐\n",
// @taonSkipNextLineCut
codeblock23Html: "┌──── Post #123 ────────┐\n\n          ┌──── Post #456 ────────┐\n",
// @taonSkipNextLineCut
codeblock24: "/users?page=5&search=john\n",
// @taonSkipNextLineCut
codeblock24Html: "/users?page=5&amp;search=john\n",
// @taonSkipNextLineCut
codeblock25: "route.snapshot.queryParams\n",
// @taonSkipNextLineCut
codeblock25Html: "route.snapshot.queryParams\n",
// @taonSkipNextLineCut
codeblock26: "{\n  page: '5',\n  search: 'john',\n}\n",
// @taonSkipNextLineCut
codeblock26Html: "{\n  <span class=\"hljs-attr\">page</span>: <span class=\"hljs-string\">&#x27;5&#x27;</span>,\n  <span class=\"hljs-attr\">search</span>: <span class=\"hljs-string\">&#x27;john&#x27;</span>,\n}\n",
// @taonSkipNextLineCut
codeblock27: "await this.usersController\n  .update(user);\n",
// @taonSkipNextLineCut
codeblock27Html: "<span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.usersController\n  .update(user);\n",
// @taonSkipNextLineCut
codeblock28: "this.postsController\n  .getAll();\n",
// @taonSkipNextLineCut
codeblock28Html: "<span class=\"hljs-built_in\">this</span>.postsController\n  .getAll();\n",
// @taonSkipNextLineCut
codeblock29: "Browser route:\n\n/admin/settings\n\n\nDesktop:\n\n┌──── Users ───────────────────┐\n│ John                         │\n│ Kate                         │\n│ Mark                         │\n│                    [delete]  │\n└──────────────────────────────┘\n\n\n       ┌──── Posts ───────────────────┐\n       │ Hello World                 │\n       │ Taon documentation          │\n       │                     [edit]  │\n       └─────────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock29Html: "Browser route:\n\n/admin/settings\n\n\nDesktop:\n\n┌──── Users ───────────────────┐\n│ John                         │\n│ Kate                         │\n│ Mark                         │\n│                    [delete]  │\n└──────────────────────────────┘\n\n\n       ┌──── Posts ───────────────────┐\n       │ Hello World                 │\n       │ Taon documentation          │\n       │                     [edit]  │\n       └─────────────────────────────┘\n",
// @taonSkipNextLineCut
codeblock30: "form.patchValue({\n  title: 'unsaved title',\n});\n",
// @taonSkipNextLineCut
codeblock30Html: "form.patchValue({\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">&#x27;unsaved title&#x27;</span>,\n});\n",
// @taonSkipNextLineCut
codeblock31: "TaonDetachedWindowsService",
// @taonSkipNextLineCut
codeblock32: "readonly windows =\n  signal<TaonDetachedWindow[]>([]);\n",
// @taonSkipNextLineCut
codeblock32Html: "<span class=\"hljs-keyword\">readonly</span> windows =\n  signal&lt;TaonDetachedWindow[]&gt;([]);\n",
// @taonSkipNextLineCut
codeblock33: "Users\nUsers filtered by admin\nPosts\nPost #123\nPost #456\nPermissions\nDatabase\n",
// @taonSkipNextLineCut
codeblock33Html: "Users\nUsers filtered by admin\nPosts\nPost #123\nPost #456\nPermissions\nDatabase\n",
// @taonSkipNextLineCut
codeblock34: "TaonAdminComponent\n│\n├── RouterOutlet\n│\n│   └── current routed page\n│\n│\n└── TaonDetachedWindowsHostComponent\n    │\n    ├── UsersComponent\n    │\n    ├── PostsComponent\n    │\n    ├── PostComponent (id=123)\n    │\n    └── PostComponent (id=456)\n",
// @taonSkipNextLineCut
codeblock34Html: "TaonAdminComponent\n│\n├── RouterOutlet\n│\n│   └── current routed page\n│\n│\n└── TaonDetachedWindowsHostComponent\n    │\n    ├── UsersComponent\n    │\n    ├── PostsComponent\n    │\n    ├── PostComponent (id=123)\n    │\n    └── PostComponent (id=456)\n",
// @taonSkipNextLineCut
codeblock35: "router navigation\n      ↓\ndestroys routed component\n      ↓\ndoes NOT destroy detached windows\n",
// @taonSkipNextLineCut
codeblock35Html: "router navigation\n      ↓\ndestroys routed component\n      ↓\ndoes NOT destroy detached windows\n",
// @taonSkipNextLineCut
codeblock36: "TaonWorkspaceWindow\n",
// @taonSkipNextLineCut
codeblock36Html: "TaonWorkspaceWindow\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-detachable-dialog-content",
    "title": "Taon Detachable Dialog Content",
    "level": 1
  },
  {
    "id": "1-add-the-global-detached-windows-host",
    "title": "1. Add the global detached windows host",
    "level": 2
  },
  {
    "id": "2-make-a-page-detachable",
    "title": "2. Make a page detachable",
    "level": 2
  },
  {
    "id": "3-navigate-somewhere-else",
    "title": "3. Navigate somewhere else",
    "level": 2
  },
  {
    "id": "4-detach-another-page",
    "title": "4. Detach another page",
    "level": 2
  },
  {
    "id": "5-route-parameters-are-copied",
    "title": "5. Route parameters are copied",
    "level": 2
  },
  {
    "id": "6-query-parameters",
    "title": "6. Query parameters",
    "level": 2
  },
  {
    "id": "7-database-operations",
    "title": "7. Database operations",
    "level": 2
  },
  {
    "id": "8-component-state",
    "title": "8. Component state",
    "level": 2
  },
  {
    "id": "9-multiple-instances",
    "title": "9. Multiple instances",
    "level": 2
  },
  {
    "id": "architecture",
    "title": "Architecture",
    "level": 2
  },
  {
    "id": "future-improvements",
    "title": "Future improvements",
    "level": 2
  }
];

}

    