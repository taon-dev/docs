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
export class TaonDevSessionReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/session",
// @taonSkipNextLineCut
codeblock1: "TaonSessionButtonComponent",
// @taonSkipNextLineCut
codeblock2: "TaonSessionComponent",
// @taonSkipNextLineCut
codeblock3: "import { Component } from '@angular/core';\nimport {\n  TaonSessionButtonComponent,\n  type TaonSessionConfig,\n} from '@taon-dev/session/src';\n\n@Component({\n  selector: 'app-sign-in',\n  imports: [TaonSessionButtonComponent],\n  template: `<taon-session-button [config]=\"config\" />`,\n})\nexport class SignInComponent {\n  readonly config: TaonSessionConfig = {\n    login: {\n      linkToDashboard: '/my-dashboard',\n    },\n  };\n}\n",
// @taonSkipNextLineCut
codeblock3Html: "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> {\n  TaonSessionButtonComponent,\n  <span class=\"hljs-keyword\">type</span> TaonSessionConfig,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/session/src&#x27;</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">selector</span>: <span class=\"hljs-string\">&#x27;app-sign-in&#x27;</span>,\n  <span class=\"hljs-attr\">imports</span>: [TaonSessionButtonComponent],\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">`&lt;taon-session-button [config]=&quot;config&quot; /&gt;`</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SignInComponent</span> </span>{\n  <span class=\"hljs-keyword\">readonly</span> config: TaonSessionConfig = {\n    <span class=\"hljs-attr\">login</span>: {\n      <span class=\"hljs-attr\">linkToDashboard</span>: <span class=\"hljs-string\">&#x27;/my-dashboard&#x27;</span>,\n    },\n  };\n}\n",
// @taonSkipNextLineCut
codeblock4: "import { Component } from '@angular/core';\nimport {\n  TaonSessionComponent,\n  type TaonSessionConfig,\n} from '@taon-dev/session/src';\n\n@Component({\n  selector: 'app-sign-in-page',\n  imports: [TaonSessionComponent],\n  template: `<taon-session [config]=\"config\" />`,\n})\nexport class SignInPageComponent {\n  readonly config: TaonSessionConfig = {\n    login: {\n      linkToDashboard: '/my-dashboard',\n    },\n  };\n}\n",
// @taonSkipNextLineCut
codeblock4Html: "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> {\n  TaonSessionComponent,\n  <span class=\"hljs-keyword\">type</span> TaonSessionConfig,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/session/src&#x27;</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">selector</span>: <span class=\"hljs-string\">&#x27;app-sign-in-page&#x27;</span>,\n  <span class=\"hljs-attr\">imports</span>: [TaonSessionComponent],\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">`&lt;taon-session [config]=&quot;config&quot; /&gt;`</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SignInPageComponent</span> </span>{\n  <span class=\"hljs-keyword\">readonly</span> config: TaonSessionConfig = {\n    <span class=\"hljs-attr\">login</span>: {\n      <span class=\"hljs-attr\">linkToDashboard</span>: <span class=\"hljs-string\">&#x27;/my-dashboard&#x27;</span>,\n    },\n  };\n}\n",
// @taonSkipNextLineCut
codeblock5: "login.linkToDashboard",
// @taonSkipNextLineCut
codeblock6: "TaonSessionMiddleware",
// @taonSkipNextLineCut
codeblock7: "import { TaonSessionMiddleware } from '@taon-dev/session/src';\nimport { GET, Taon, TaonBaseController, TaonController } from 'taon/src';\n\n@TaonController({\n  className: 'AccountController',\n})\nexport class AccountController extends TaonBaseController {\n  @GET({\n    middlewares: ({ parentMiddlewares }) => ({\n      TaonSessionMiddleware,\n      ...parentMiddlewares,\n    }),\n  })\n  me(): Taon.Response<string> {\n    //#region @websqlFunc\n    return async req => {\n      return `User ID: ${req.userId}`;\n    };\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock7Html: "<span class=\"hljs-keyword\">import</span> { TaonSessionMiddleware } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/session/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { GET, Taon, TaonBaseController, TaonController } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-meta\">@TaonController</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;AccountController&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AccountController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseController</span> </span>{\n  <span class=\"hljs-meta\">@GET</span>({\n    <span class=\"hljs-attr\">middlewares</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">{ parentMiddlewares }</span>) =&gt;</span> ({\n      TaonSessionMiddleware,\n      ...parentMiddlewares,\n    }),\n  })\n  me(): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> req =&gt; {\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`User ID: <span class=\"hljs-subst\">${req.userId}</span>`</span>;\n    };\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock8: "beforeEachRequest",
// @taonSkipNextLineCut
codeblock9: "beforeEachRequest",
// @taonSkipNextLineCut
codeblock10: "paginationQuery",
// @taonSkipNextLineCut
codeblock11: "paginationQuery",
// @taonSkipNextLineCut
codeblock12: "import { TaonSessionRepository } from '@taon-dev/session/src';\nimport {\n  getStatusCode,\n  HttpStatusEnum,\n  Models,\n  Taon,\n  TaonBaseCrudController,\n  TaonController,\n} from 'taon/src';\n\nimport { AppAuthContextRepository } from './app-auth';\n\n@TaonController({\n  className: 'PostsController',\n})\nexport class PostsController extends TaonBaseCrudController {\n  private readonly session = this.inject(TaonSessionRepository);\n  private readonly auth = this.inject(AppAuthContextRepository);\n\n  override async beforeEachRequest({\n    req,\n    res,\n    methodConfig,\n  }: Models.TaonCtrlBeforeEachRequestParams<PostsController>): Promise<void> {\n    if (methodConfig.methodName !== 'paginationQuery') {\n      return;\n    }\n\n    await this.session.throwIfNotAuthenticated({ req, res });\n\n    const context = await this.auth.getContext(req.userId, req.sessionId);\n\n    if (!context?.hasAccess?.toManagePosts) {\n      Taon.error({\n        status: getStatusCode(HttpStatusEnum.FORBIDDEN),\n        message: 'You do not have permission to manage posts.',\n      });\n    }\n  }\n}\n",
// @taonSkipNextLineCut
codeblock12Html: "<span class=\"hljs-keyword\">import</span> { TaonSessionRepository } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/session/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> {\n  getStatusCode,\n  HttpStatusEnum,\n  Models,\n  Taon,\n  TaonBaseCrudController,\n  TaonController,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">import</span> { AppAuthContextRepository } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;./app-auth&#x27;</span>;\n\n<span class=\"hljs-meta\">@TaonController</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;PostsController&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">PostsController</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseCrudController</span> </span>{\n  <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> session = <span class=\"hljs-built_in\">this</span>.inject(TaonSessionRepository);\n  <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">readonly</span> auth = <span class=\"hljs-built_in\">this</span>.inject(AppAuthContextRepository);\n\n  override <span class=\"hljs-keyword\">async</span> beforeEachRequest({\n    req,\n    res,\n    methodConfig,\n  }: Models.TaonCtrlBeforeEachRequestParams&lt;PostsController&gt;): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; {\n    <span class=\"hljs-keyword\">if</span> (methodConfig.methodName !== <span class=\"hljs-string\">&#x27;paginationQuery&#x27;</span>) {\n      <span class=\"hljs-keyword\">return</span>;\n    }\n\n    <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.session.throwIfNotAuthenticated({ req, res });\n\n    <span class=\"hljs-keyword\">const</span> context = <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.auth.getContext(req.userId, req.sessionId);\n\n    <span class=\"hljs-keyword\">if</span> (!context?.hasAccess?.toManagePosts) {\n      Taon.error({\n        <span class=\"hljs-attr\">status</span>: getStatusCode(HttpStatusEnum.FORBIDDEN),\n        <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#x27;You do not have permission to manage posts.&#x27;</span>,\n      });\n    }\n  }\n}\n",
// @taonSkipNextLineCut
codeblock13: "toManagePosts",
// @taonSkipNextLineCut
codeblock14: "editorial",
// @taonSkipNextLineCut
codeblock15: "posts-manager",
// @taonSkipNextLineCut
codeblock16: "manage-posts",
// @taonSkipNextLineCut
codeblock17: "app-auth.ts",
// @taonSkipNextLineCut
codeblock18: "import {\n  TaonSessionCoreGroupsBase,\n  TaonSessionCoreRolesBase,\n  TaonSessionCorePermissionsBase,\n  type TaonSessionCoreAuthorizationBase,\n} from '@taon-dev/session/src';\n\nexport const AppAuthGroups = {\n  ...TaonSessionCoreGroupsBase,\n  Editorial: 'editorial',\n};\n\nexport const AppAuthRoles = {\n  ...TaonSessionCoreRolesBase,\n  PostsManager: 'posts-manager',\n};\n\nexport const AppAuthPermissions = {\n  ...TaonSessionCorePermissionsBase,\n  ManagePosts: 'manage-posts',\n};\n\nexport interface AppAuthorization extends TaonSessionCoreAuthorizationBase {\n  groups: typeof AppAuthGroups;\n  roles: typeof AppAuthRoles;\n  permissions: typeof AppAuthPermissions;\n}\n",
// @taonSkipNextLineCut
codeblock18Html: "<span class=\"hljs-keyword\">import</span> {\n  TaonSessionCoreGroupsBase,\n  TaonSessionCoreRolesBase,\n  TaonSessionCorePermissionsBase,\n  <span class=\"hljs-keyword\">type</span> TaonSessionCoreAuthorizationBase,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/session/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> AppAuthGroups = {\n  ...TaonSessionCoreGroupsBase,\n  <span class=\"hljs-attr\">Editorial</span>: <span class=\"hljs-string\">&#x27;editorial&#x27;</span>,\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> AppAuthRoles = {\n  ...TaonSessionCoreRolesBase,\n  <span class=\"hljs-attr\">PostsManager</span>: <span class=\"hljs-string\">&#x27;posts-manager&#x27;</span>,\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> AppAuthPermissions = {\n  ...TaonSessionCorePermissionsBase,\n  <span class=\"hljs-attr\">ManagePosts</span>: <span class=\"hljs-string\">&#x27;manage-posts&#x27;</span>,\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> AppAuthorization <span class=\"hljs-keyword\">extends</span> TaonSessionCoreAuthorizationBase {\n  <span class=\"hljs-attr\">groups</span>: <span class=\"hljs-keyword\">typeof</span> AppAuthGroups;\n  roles: <span class=\"hljs-keyword\">typeof</span> AppAuthRoles;\n  permissions: <span class=\"hljs-keyword\">typeof</span> AppAuthPermissions;\n}\n",
// @taonSkipNextLineCut
codeblock19: "toManagePosts",
// @taonSkipNextLineCut
codeblock20: "posts-manager",
// @taonSkipNextLineCut
codeblock21: "editorial",
// @taonSkipNextLineCut
codeblock22: "manage-posts",
// @taonSkipNextLineCut
codeblock23: "import {\n  TaonAuthContextEntityBase,\n  TaonAuthContextHasAccessBase,\n  TaonAuthContextRepositoryBase,\n} from '@taon-dev/session/src';\nimport { TaonEntity, TaonRepository } from 'taon/src';\n\n//#region authorization decorators\n\nexport const TaonSessionCoreGroups = {\n  ...TaonSessionCoreGroupsBase,\n  Manager: 'manager',\n};\n\nexport const TaonSessionCoreRoles = {\n  ...TaonSessionCoreRolesBase,\n  /**\n   * Can manage roles and permissions assigned directly to users.\n   * Does NOT allow changing user groups.\n   */\n  PostsManager: 'posts-manager',\n\n  AccessP1User: 'access-p1-user',\n  AccessP2User: 'access-p2-user',\n  AccessP3User: 'access-p3-user',\n};\n\nexport const TaonSessionCorePermissions = {\n  ...TaonSessionCorePermissionsBase,\n  PermissionToAccessP1: 'permission-to-access-p1',\n  PermissionToAccessP2: 'permission-to-access-p2',\n  PermissionToAccessP3: 'permission-to-access-p3',\n};\n\nexport interface TaonSessionCoreAuthorization extends TaonSessionCoreAuthorizationBase {\n  groups: typeof TaonSessionCoreGroups;\n  roles: typeof TaonSessionCoreRoles;\n  permissions: typeof TaonSessionCorePermissions;\n}\n\n@TaonEntity<TaonAuthContextEntityDecorator>({\n  className: 'TaonAuthContextEntity',\n  createTable: false,\n})\nexport class TaonAuthContextEntityDecorator extends TaonAuthContextEntityBase {\n  declare snapshoot: Partial<TaonAuthContextHasAccess>;\n\n  // @ts-ignore\n  get hasAccess(): TaonAuthContextHasAccess {\n    return this.injectClass<\n      TaonAuthContextHasAccess,\n      [TaonAuthContextEntityDecorator]\n    >(TaonAuthContextHasAccess as any, this) as any;\n  }\n}\n\nexport class TaonAuthContextHasAccess extends TaonAuthContextHasAccessBase {\n  // @ts-ignore\n  declare protected context: TaonAuthContextEntityDecorator;\n\n  get toManagePosts(): boolean {\n    //#region @browserFunc\n    return !!this.context.snapshoot.toManagePosts;\n    //#endregion\n    //#region @websqlFunc\n    return (\n      this.context.isSuperUser ||\n      this.context.isInGroup(TaonSessionCoreGroups.Administrator) ||\n      this.context.hasRole(TaonSessionCoreRoles.PostsManager)\n    );\n    //#endregion\n  }\n}\n\n@TaonRepository({\n  className: 'TaonAuthContextRepository',\n})\nexport class TaonAuthContextRepositoryDecorator extends TaonAuthContextRepositoryBase<\n  TaonSessionCoreAuthorization,\n  // @ts-ignore\n  TaonAuthContextEntityDecorator\n> {\n  // @ts-ignore\n  entityClassResolveFn = () => TaonAuthContextEntityDecorator;\n}\n\n@TaonMigration({\n  className: 'SessionContext_1791132517217_initial_decorator',\n})\nexport class SessionContext_1791132517217_initial_decorator extends SessionContext_1791132517216_initial {\n  protected async persistTree(): Promise<void> {\n    //#region @websqlFunc\n\n    console.info(`Migrating CUSTOM authorization`);\n\n    await this.taonAuthContextRepository.persistTree({\n      authorization: {\n        groups: TaonSessionCoreGroups,\n        roles: TaonSessionCoreRoles,\n        permissions: TaonSessionCorePermissions,\n      },\n\n      tree: {\n        groupAndRoles: {\n          // Administrators receive all core administrative roles.\n          [TaonSessionCoreGroups.Administrator]: '*',\n\n          // Normal customers receive no administrative roles by default.\n          [TaonSessionCoreGroups.Customers]: [],\n          [TaonSessionCoreGroups.Manager]: [TaonSessionCoreRoles.PostsManager],\n        },\n\n        rolesAndPermissions: {\n          [TaonSessionCoreRoles.AuthorizationManager]: [\n            TaonSessionCorePermissions.ViewUsers,\n            TaonSessionCorePermissions.ViewUserAuthorization,\n            TaonSessionCorePermissions.ManageUserRoles,\n            TaonSessionCorePermissions.ManageUserPermissions,\n          ],\n          [TaonSessionCoreRoles.PostsManager]: [],\n          [TaonSessionCoreRoles.AccessP1User]: [\n            TaonSessionCorePermissions.PermissionToAccessP1,\n          ],\n          [TaonSessionCoreRoles.AccessP2User]: [\n            TaonSessionCorePermissions.PermissionToAccessP2,\n          ],\n          [TaonSessionCoreRoles.AccessP3User]: [\n            TaonSessionCorePermissions.PermissionToAccessP2,\n          ],\n          [TaonSessionCoreRoles.UserManager]: [\n            TaonSessionCorePermissions.ViewUsers,\n            TaonSessionCorePermissions.ManageUsers,\n            TaonSessionCorePermissions.ViewSessions,\n            TaonSessionCorePermissions.RevokeSessions,\n          ],\n        },\n      },\n    });\n    //#endregion\n  }\n}\n\n//#endregion\n\n",
// @taonSkipNextLineCut
codeblock23Html: "<span class=\"hljs-keyword\">import</span> {\n  TaonAuthContextEntityBase,\n  TaonAuthContextHasAccessBase,\n  TaonAuthContextRepositoryBase,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/session/src&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TaonEntity, TaonRepository } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-comment\">//#region authorization decorators</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> TaonSessionCoreGroups = {\n  ...TaonSessionCoreGroupsBase,\n  <span class=\"hljs-attr\">Manager</span>: <span class=\"hljs-string\">&#x27;manager&#x27;</span>,\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> TaonSessionCoreRoles = {\n  ...TaonSessionCoreRolesBase,\n  <span class=\"hljs-comment\">/**\n   * Can manage roles and permissions assigned directly to users.\n   * Does NOT allow changing user groups.\n   */</span>\n  <span class=\"hljs-attr\">PostsManager</span>: <span class=\"hljs-string\">&#x27;posts-manager&#x27;</span>,\n\n  <span class=\"hljs-attr\">AccessP1User</span>: <span class=\"hljs-string\">&#x27;access-p1-user&#x27;</span>,\n  <span class=\"hljs-attr\">AccessP2User</span>: <span class=\"hljs-string\">&#x27;access-p2-user&#x27;</span>,\n  <span class=\"hljs-attr\">AccessP3User</span>: <span class=\"hljs-string\">&#x27;access-p3-user&#x27;</span>,\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> TaonSessionCorePermissions = {\n  ...TaonSessionCorePermissionsBase,\n  <span class=\"hljs-attr\">PermissionToAccessP1</span>: <span class=\"hljs-string\">&#x27;permission-to-access-p1&#x27;</span>,\n  <span class=\"hljs-attr\">PermissionToAccessP2</span>: <span class=\"hljs-string\">&#x27;permission-to-access-p2&#x27;</span>,\n  <span class=\"hljs-attr\">PermissionToAccessP3</span>: <span class=\"hljs-string\">&#x27;permission-to-access-p3&#x27;</span>,\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> TaonSessionCoreAuthorization <span class=\"hljs-keyword\">extends</span> TaonSessionCoreAuthorizationBase {\n  <span class=\"hljs-attr\">groups</span>: <span class=\"hljs-keyword\">typeof</span> TaonSessionCoreGroups;\n  roles: <span class=\"hljs-keyword\">typeof</span> TaonSessionCoreRoles;\n  permissions: <span class=\"hljs-keyword\">typeof</span> TaonSessionCorePermissions;\n}\n\n<span class=\"hljs-meta\">@TaonEntity</span>&lt;TaonAuthContextEntityDecorator&gt;({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;TaonAuthContextEntity&#x27;</span>,\n  <span class=\"hljs-attr\">createTable</span>: <span class=\"hljs-literal\">false</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">TaonAuthContextEntityDecorator</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonAuthContextEntityBase</span> </span>{\n  <span class=\"hljs-keyword\">declare</span> snapshoot: Partial&lt;TaonAuthContextHasAccess&gt;;\n\n  <span class=\"hljs-comment\">// @ts-ignore</span>\n  <span class=\"hljs-keyword\">get</span> <span class=\"hljs-title\">hasAccess</span>(): <span class=\"hljs-title\">TaonAuthContextHasAccess</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>.injectClass&lt;\n      TaonAuthContextHasAccess,\n      [TaonAuthContextEntityDecorator]\n    &gt;(TaonAuthContextHasAccess <span class=\"hljs-keyword\">as</span> <span class=\"hljs-built_in\">any</span>, <span class=\"hljs-built_in\">this</span>) <span class=\"hljs-keyword\">as</span> <span class=\"hljs-built_in\">any</span>;\n  }\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">TaonAuthContextHasAccess</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonAuthContextHasAccessBase</span> </span>{\n  <span class=\"hljs-comment\">// @ts-ignore</span>\n  <span class=\"hljs-keyword\">declare</span> <span class=\"hljs-keyword\">protected</span> context: TaonAuthContextEntityDecorator;\n\n  <span class=\"hljs-keyword\">get</span> <span class=\"hljs-title\">toManagePosts</span>(): <span class=\"hljs-title\">boolean</span> {\n    <span class=\"hljs-comment\">//#region @browserFunc</span>\n    <span class=\"hljs-keyword\">return</span> !!<span class=\"hljs-built_in\">this</span>.context.snapshoot.toManagePosts;\n    <span class=\"hljs-comment\">//#endregion</span>\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"hljs-built_in\">this</span>.context.isSuperUser ||\n      <span class=\"hljs-built_in\">this</span>.context.isInGroup(TaonSessionCoreGroups.Administrator) ||\n      <span class=\"hljs-built_in\">this</span>.context.hasRole(TaonSessionCoreRoles.PostsManager)\n    );\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n\n<span class=\"hljs-meta\">@TaonRepository</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;TaonAuthContextRepository&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">TaonAuthContextRepositoryDecorator</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonAuthContextRepositoryBase</span>&lt;\n  <span class=\"hljs-title\">TaonSessionCoreAuthorization</span>,\n  // @<span class=\"hljs-title\">ts</span>-<span class=\"hljs-title\">ignore</span>\n  <span class=\"hljs-title\">TaonAuthContextEntityDecorator</span>\n&gt; </span>{\n  <span class=\"hljs-comment\">// @ts-ignore</span>\n  entityClassResolveFn = <span class=\"hljs-function\">() =&gt;</span> TaonAuthContextEntityDecorator;\n}\n\n<span class=\"hljs-meta\">@TaonMigration</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;SessionContext_1791132517217_initial_decorator&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SessionContext_1791132517217_initial_decorator</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">SessionContext_1791132517216_initial</span> </span>{\n  <span class=\"hljs-keyword\">protected</span> <span class=\"hljs-keyword\">async</span> persistTree(): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n\n    <span class=\"hljs-built_in\">console</span>.info(<span class=\"hljs-string\">`Migrating CUSTOM authorization`</span>);\n\n    <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">this</span>.taonAuthContextRepository.persistTree({\n      <span class=\"hljs-attr\">authorization</span>: {\n        <span class=\"hljs-attr\">groups</span>: TaonSessionCoreGroups,\n        <span class=\"hljs-attr\">roles</span>: TaonSessionCoreRoles,\n        <span class=\"hljs-attr\">permissions</span>: TaonSessionCorePermissions,\n      },\n\n      <span class=\"hljs-attr\">tree</span>: {\n        <span class=\"hljs-attr\">groupAndRoles</span>: {\n          <span class=\"hljs-comment\">// Administrators receive all core administrative roles.</span>\n          [TaonSessionCoreGroups.Administrator]: <span class=\"hljs-string\">&#x27;*&#x27;</span>,\n\n          <span class=\"hljs-comment\">// Normal customers receive no administrative roles by default.</span>\n          [TaonSessionCoreGroups.Customers]: [],\n          [TaonSessionCoreGroups.Manager]: [TaonSessionCoreRoles.PostsManager],\n        },\n\n        <span class=\"hljs-attr\">rolesAndPermissions</span>: {\n          [TaonSessionCoreRoles.AuthorizationManager]: [\n            TaonSessionCorePermissions.ViewUsers,\n            TaonSessionCorePermissions.ViewUserAuthorization,\n            TaonSessionCorePermissions.ManageUserRoles,\n            TaonSessionCorePermissions.ManageUserPermissions,\n          ],\n          [TaonSessionCoreRoles.PostsManager]: [],\n          [TaonSessionCoreRoles.AccessP1User]: [\n            TaonSessionCorePermissions.PermissionToAccessP1,\n          ],\n          [TaonSessionCoreRoles.AccessP2User]: [\n            TaonSessionCorePermissions.PermissionToAccessP2,\n          ],\n          [TaonSessionCoreRoles.AccessP3User]: [\n            TaonSessionCorePermissions.PermissionToAccessP2,\n          ],\n          [TaonSessionCoreRoles.UserManager]: [\n            TaonSessionCorePermissions.ViewUsers,\n            TaonSessionCorePermissions.ManageUsers,\n            TaonSessionCorePermissions.ViewSessions,\n            TaonSessionCorePermissions.RevokeSessions,\n          ],\n        },\n      },\n    });\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n\n<span class=\"hljs-comment\">//#endregion</span>\n\n",
// @taonSkipNextLineCut
codeblock24: "snapshoot",
// @taonSkipNextLineCut
codeblock25: "@browserFunc",
// @taonSkipNextLineCut
codeblock26: "@websqlFunc"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-dev-session",
    "title": "@taon-dev/session",
    "level": 1
  },
  {
    "id": "add-sign-in-to-your-angular-application",
    "title": "Add sign-in to your Angular application",
    "level": 2
  },
  {
    "id": "sign-in-button-and-dialog",
    "title": "Sign-in button and dialog",
    "level": 3
  },
  {
    "id": "dedicated-sign-in-page",
    "title": "Dedicated sign-in page",
    "level": 3
  },
  {
    "id": "protect-an-endpoint-with-session-middleware",
    "title": "Protect an endpoint with session middleware",
    "level": 2
  },
  {
    "id": "protect-controller-methods-with-beforeeachrequest",
    "title": "Protect controller methods with beforeEachRequest",
    "level": 2
  },
  {
    "id": "extend-authorization-for-your-application",
    "title": "Extend authorization for your application",
    "level": 2
  },
  {
    "id": "define-groups-roles-and-permissions",
    "title": "Define groups, roles, and permissions",
    "level": 3
  },
  {
    "id": "add-an-access-rule",
    "title": "Add an access rule",
    "level": 3
  },
  {
    "id": "backoffice",
    "title": "Backoffice",
    "level": 2
  },
  {
    "id": "sessions",
    "title": "Sessions",
    "level": 3
  },
  {
    "id": "users",
    "title": "Users",
    "level": 3
  },
  {
    "id": "authorization",
    "title": "Authorization",
    "level": 3
  }
];

}

    