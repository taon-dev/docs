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
  selector: 'app-my-docs-page-environment-variables-md',
  templateUrl: './environment-variables.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiRulesEnvironmentVariablesMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "/env.ts                         # Main root file with environment variables\n/environments/**/env.*.ts      # Environment files for specific build artifacts/environments\n",
// @taonSkipNextLineCut
codeblock0Html: "/env.ts                         <span class=\"hljs-comment\"># Main root file with environment variables</span>\n/environments/**/env.*.ts      <span class=\"hljs-comment\"># Environment files for specific build artifacts/environments</span>\n",
// @taonSkipNextLineCut
codeblock1: "env.*.ts",
// @taonSkipNextLineCut
codeblock2: "import type { EnvOptions } from 'tnp/src';\n\nconst env: Partial<EnvOptions> = {\n  website: {\n    domain: 'example.domain.com',\n    title: 'My Example Website',\n    useDomain: true,\n  },\n  config: {\n    /*\n     * A string wrapped with TAON_ENCRYPTED_START and TAON_ENCRYPTED_END\n     * means that the value is encrypted.\n     *\n     * You can decode it by running `taon env:decode` and providing\n     * the correct master password.\n     */\n    secretApiKey: () =>\n      `$$$TAON_ENCRYPTED_START$$asdasdasdasdasdasdBQ==$$$TAON_ENCRYPTED_END$$$`,\n\n    publicKey: 'ANY_PUBLIC_KEY',\n  },\n};\n\nexport default env;\n",
// @taonSkipNextLineCut
codeblock2Html: "<span class=\"hljs-keyword\">import</span> <span class=\"hljs-keyword\">type</span> { EnvOptions } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;tnp/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">const</span> env: Partial&lt;EnvOptions&gt; = {\n  <span class=\"hljs-attr\">website</span>: {\n    <span class=\"hljs-attr\">domain</span>: <span class=\"hljs-string\">&#x27;example.domain.com&#x27;</span>,\n    <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">&#x27;My Example Website&#x27;</span>,\n    <span class=\"hljs-attr\">useDomain</span>: <span class=\"hljs-literal\">true</span>,\n  },\n  <span class=\"hljs-attr\">config</span>: {\n    <span class=\"hljs-comment\">/*\n     * A string wrapped with TAON_ENCRYPTED_START and TAON_ENCRYPTED_END\n     * means that the value is encrypted.\n     *\n     * You can decode it by running `taon env:decode` and providing\n     * the correct master password.\n     */</span>\n    <span class=\"hljs-attr\">secretApiKey</span>: <span class=\"hljs-function\">() =&gt;</span>\n      <span class=\"hljs-string\">`$$$TAON_ENCRYPTED_START$$asdasdasdasdasdasdBQ==$$$TAON_ENCRYPTED_END$$$`</span>,\n\n    <span class=\"hljs-attr\">publicKey</span>: <span class=\"hljs-string\">&#x27;ANY_PUBLIC_KEY&#x27;</span>,\n  },\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> env;\n",
// @taonSkipNextLineCut
codeblock3: "import type { EnvOptions } from 'tnp/src';\n\nconst env: Partial<EnvOptions> = {\n  website: {\n    domain: 'example.domain.com',\n    title: 'My Example Website',\n    useDomain: true,\n  },\n  config: {\n    /*\n     * Use `taon env:encode` with a master password of your choice\n     * to encrypt this value.\n     *\n     * After encryption, the value will be wrapped with\n     * TAON_ENCRYPTED_START and TAON_ENCRYPTED_END markers.\n     */\n    secretApiKey: () =>\n      `my secret api key that should NOT be committed to the repository in decoded form!`,\n\n    publicKey: 'ANY_PUBLIC_KEY',\n  },\n};\n\nexport default env;\n",
// @taonSkipNextLineCut
codeblock3Html: "<span class=\"hljs-keyword\">import</span> <span class=\"hljs-keyword\">type</span> { EnvOptions } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;tnp/src&#x27;</span>;\n\n<span class=\"hljs-keyword\">const</span> env: Partial&lt;EnvOptions&gt; = {\n  <span class=\"hljs-attr\">website</span>: {\n    <span class=\"hljs-attr\">domain</span>: <span class=\"hljs-string\">&#x27;example.domain.com&#x27;</span>,\n    <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">&#x27;My Example Website&#x27;</span>,\n    <span class=\"hljs-attr\">useDomain</span>: <span class=\"hljs-literal\">true</span>,\n  },\n  <span class=\"hljs-attr\">config</span>: {\n    <span class=\"hljs-comment\">/*\n     * Use `taon env:encode` with a master password of your choice\n     * to encrypt this value.\n     *\n     * After encryption, the value will be wrapped with\n     * TAON_ENCRYPTED_START and TAON_ENCRYPTED_END markers.\n     */</span>\n    <span class=\"hljs-attr\">secretApiKey</span>: <span class=\"hljs-function\">() =&gt;</span>\n      <span class=\"hljs-string\">`my secret api key that should NOT be committed to the repository in decoded form!`</span>,\n\n    <span class=\"hljs-attr\">publicKey</span>: <span class=\"hljs-string\">&#x27;ANY_PUBLIC_KEY&#x27;</span>,\n  },\n};\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> env;\n",
// @taonSkipNextLineCut
codeblock4: "taon env:encode",
// @taonSkipNextLineCut
codeblock5: "/src/lib/env/**\n",
// @taonSkipNextLineCut
codeblock5Html: "/src/lib/env/**\n",
// @taonSkipNextLineCut
codeblock6: "// DO NOT USE THESE VARIABLES ON THE FRONTEND!\nexport const ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY =\n  (): Promise<string> => decodeEnv('MY_SECRET_API_KEY');\n// DO NOT USE THESE VARIABLES ON THE FRONTEND!\n",
// @taonSkipNextLineCut
codeblock6Html: "<span class=\"hljs-comment\">// DO NOT USE THESE VARIABLES ON THE FRONTEND!</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY =\n  (): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">string</span>&gt; =&gt; decodeEnv(<span class=\"hljs-string\">&#x27;MY_SECRET_API_KEY&#x27;</span>);\n<span class=\"hljs-comment\">// DO NOT USE THESE VARIABLES ON THE FRONTEND!</span>\n",
// @taonSkipNextLineCut
codeblock7: "// SAFE TO USE ON BOTH FRONTEND AND BACKEND\nexport const ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY = 'ANY_PUBLIC_KEY';\n",
// @taonSkipNextLineCut
codeblock7Html: "<span class=\"hljs-comment\">// SAFE TO USE ON BOTH FRONTEND AND BACKEND</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY = <span class=\"hljs-string\">&#x27;ANY_PUBLIC_KEY&#x27;</span>;\n",
// @taonSkipNextLineCut
codeblock8: "@TaonProvider({\n  className: 'MyEntityProvider',\n})\nexport class MyEntityProvider extends TaonBaseProvider {\n  declare SECRET_API_KEY: string;\n  declare PUBLIC_KEY: string;\n\n  async _() {\n    // Assign environment variables in one place.\n    this.PUBLIC_KEY = ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY;\n\n    //#region @backend\n    this.SECRET_API_KEY =\n      await ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY();\n    //#endregion\n\n    /*\n     * This method is executed during context initialization,\n     * so it is the preferred place to resolve and assign\n     * environment variables.\n     */\n  }\n}\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-meta\">@TaonProvider</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;MyEntityProvider&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyEntityProvider</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseProvider</span> </span>{\n  <span class=\"hljs-keyword\">declare</span> SECRET_API_KEY: <span class=\"hljs-built_in\">string</span>;\n  <span class=\"hljs-keyword\">declare</span> PUBLIC_KEY: <span class=\"hljs-built_in\">string</span>;\n\n  <span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-title\">_</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-comment\">// Assign environment variables in one place.</span>\n    <span class=\"hljs-built_in\">this</span>.PUBLIC_KEY = ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY;\n\n    <span class=\"hljs-comment\">//#region @backend</span>\n    <span class=\"hljs-built_in\">this</span>.SECRET_API_KEY =\n      <span class=\"hljs-keyword\">await</span> ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY();\n    <span class=\"hljs-comment\">//#endregion</span>\n\n    <span class=\"hljs-comment\">/*\n     * This method is executed during context initialization,\n     * so it is the preferred place to resolve and assign\n     * environment variables.\n     */</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock9: "@TaonProvider({\n  className: 'MyEntityRepository',\n})\nexport class MyEntityRepository extends TaonBaseRepostory {\n  protected myEntityProvider = this.inject(MyEntityProvider);\n\n  @GET()\n  getSecret(): Taon.Response<string> {\n    //#region @websqlFunc\n    return async (req, res) => {\n      return requestToExternalApi({\n        secret: this.myEntityProvider.SECRET_API_KEY,\n      });\n    };\n    //#endregion\n  }\n}\n",
// @taonSkipNextLineCut
codeblock9Html: "<span class=\"hljs-meta\">@TaonProvider</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;MyEntityRepository&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyEntityRepository</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseRepostory</span> </span>{\n  <span class=\"hljs-keyword\">protected</span> myEntityProvider = <span class=\"hljs-built_in\">this</span>.inject(MyEntityProvider);\n\n  <span class=\"hljs-meta\">@GET</span>()\n  getSecret(): Taon.Response&lt;<span class=\"hljs-built_in\">string</span>&gt; {\n    <span class=\"hljs-comment\">//#region @websqlFunc</span>\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> (req, res) =&gt; {\n      <span class=\"hljs-keyword\">return</span> requestToExternalApi({\n        <span class=\"hljs-attr\">secret</span>: <span class=\"hljs-built_in\">this</span>.myEntityProvider.SECRET_API_KEY,\n      });\n    };\n    <span class=\"hljs-comment\">//#endregion</span>\n  }\n}\n",
// @taonSkipNextLineCut
codeblock10: "config.service.ts",
// @taonSkipNextLineCut
codeblock11: "import { inject, Injectable } from '@angular/core';\nimport { TaonBaseAngularService } from 'taon/src';\n\n@Injectable()\nexport class MyEntityConfigService extends TaonBaseAngularService {\n  protected myEntityProvider = this.inject(MyEntityProvider);\n\n  requestWithPublicKey() {\n    fetchSomething({\n      publicKey: this.myEntityProvider.PUBLIC_KEY,\n    });\n  }\n}\n\n@Component({\n  selector: 'my-example-component',\n  // ...\n})\nexport class MyExampleComponent {\n  myEntityConfigService = inject(MyEntityConfigService);\n\n  ngOnInit() {\n    this.myEntityConfigService.requestWithPublicKey();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock11Html: "<span class=\"hljs-keyword\">import</span> { inject, Injectable } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> { TaonBaseAngularService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;taon/src&#x27;</span>;\n\n<span class=\"hljs-meta\">@Injectable</span>()\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyEntityConfigService</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseAngularService</span> </span>{\n  <span class=\"hljs-keyword\">protected</span> myEntityProvider = <span class=\"hljs-built_in\">this</span>.inject(MyEntityProvider);\n\n  <span class=\"hljs-function\"><span class=\"hljs-title\">requestWithPublicKey</span>(<span class=\"hljs-params\"></span>)</span> {\n    fetchSomething({\n      <span class=\"hljs-attr\">publicKey</span>: <span class=\"hljs-built_in\">this</span>.myEntityProvider.PUBLIC_KEY,\n    });\n  }\n}\n\n<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">selector</span>: <span class=\"hljs-string\">&#x27;my-example-component&#x27;</span>,\n  <span class=\"hljs-comment\">// ...</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyExampleComponent</span> </span>{\n  myEntityConfigService = inject(MyEntityConfigService);\n\n  <span class=\"hljs-function\"><span class=\"hljs-title\">ngOnInit</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-built_in\">this</span>.myEntityConfigService.requestWithPublicKey();\n  }\n}\n",
// @taonSkipNextLineCut
codeblock12: "taon env:decode",
// @taonSkipNextLineCut
codeblock13: "taon build:watch:lib\ntaon app\n",
// @taonSkipNextLineCut
codeblock13Html: "taon build:watch:lib\ntaon app\n",
// @taonSkipNextLineCut
codeblock14: "/env.ts\n/environments/**\n",
// @taonSkipNextLineCut
codeblock14Html: "/env.ts\n/environments/**\n",
// @taonSkipNextLineCut
codeblock15: "tmp-env",
// @taonSkipNextLineCut
codeblock16: "taon env:decode",
// @taonSkipNextLineCut
codeblock17: "$$$TAON_ENCRYPTED_START$$...$$$TAON_ENCRYPTED_END$$$\n",
// @taonSkipNextLineCut
codeblock17Html: "$$$TAON_ENCRYPTED_START$$...$$$TAON_ENCRYPTED_END$$$\n",
// @taonSkipNextLineCut
codeblock18: "// UNSAFE — DO NOT COMMIT\nmySecretApiKey: () => `my-secret-api`,\n",
// @taonSkipNextLineCut
codeblock18Html: "<span class=\"hljs-comment\">// UNSAFE — DO NOT COMMIT</span>\n<span class=\"hljs-attr\">mySecretApiKey</span>: <span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-string\">`my-secret-api`</span>,\n",
// @taonSkipNextLineCut
codeblock19: "taon env:encode\n",
// @taonSkipNextLineCut
codeblock19Html: "taon env:encode\n",
// @taonSkipNextLineCut
codeblock20: "/env.ts",
// @taonSkipNextLineCut
codeblock21: "/environments/**",
// @taonSkipNextLineCut
codeblock22: "// SAFE TO COMMIT\nmySecretApiKey: () =>\n  `$$$TAON_ENCRYPTED_START$$euhauidhaisre$$$TAON_ENCRYPTED_END$$$`,\n",
// @taonSkipNextLineCut
codeblock22Html: "<span class=\"hljs-comment\">// SAFE TO COMMIT</span>\n<span class=\"hljs-attr\">mySecretApiKey</span>: <span class=\"hljs-function\">() =&gt;</span>\n  <span class=\"hljs-string\">`$$$TAON_ENCRYPTED_START$$euhauidhaisre$$$TAON_ENCRYPTED_END$$$`</span>,\n",
// @taonSkipNextLineCut
codeblock23: "/src/lib/env/**\n",
// @taonSkipNextLineCut
codeblock23Html: "/src/lib/env/**\n",
// @taonSkipNextLineCut
codeblock24: "taon env:decode\n",
// @taonSkipNextLineCut
codeblock24Html: "taon env:decode\n",
// @taonSkipNextLineCut
codeblock25: "taon env:encode\n",
// @taonSkipNextLineCut
codeblock25Html: "taon env:encode\n",
// @taonSkipNextLineCut
codeblock26: "taon env:gen:pass\n",
// @taonSkipNextLineCut
codeblock26Html: "taon env:gen:pass\n",
// @taonSkipNextLineCut
codeblock27: "taon env\n",
// @taonSkipNextLineCut
codeblock27Html: "taon env\n",
// @taonSkipNextLineCut
codeblock28: "taon env:rm:pass\n",
// @taonSkipNextLineCut
codeblock28Html: "taon env:rm:pass\n",
// @taonSkipNextLineCut
codeblock29: "taon env\n",
// @taonSkipNextLineCut
codeblock29Html: "taon env\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "where-environment-variables-are-stored",
    "title": "Where environment variables are stored",
    "level": 1
  },
  {
    "id": "example-content-of-an-env-ts-file",
    "title": "Example content of an env.*.ts file",
    "level": 2
  },
  {
    "id": "starting-an-environment-configuration-from-scratch",
    "title": "Starting an environment configuration from scratch",
    "level": 1
  },
  {
    "id": "how-to-access-environment-variables",
    "title": "How to access environment variables",
    "level": 1
  },
  {
    "id": "secret-variables",
    "title": "Secret variables",
    "level": 2
  },
  {
    "id": "public-variables",
    "title": "Public variables",
    "level": 2
  },
  {
    "id": "preferred-way-of-using-environment-variables",
    "title": "Preferred way of using environment variables",
    "level": 1
  },
  {
    "id": "1-create-a-provider",
    "title": "1. Create a provider",
    "level": 2
  },
  {
    "id": "2-inject-the-provider-into-controllers-repositories-etc",
    "title": "2. Inject the provider into controllers, repositories, etc.",
    "level": 2
  },
  {
    "id": "3-create-config-service-ts-to-access-public-variables-on-the-frontend",
    "title": "3. Create config.service.ts to access public variables on the frontend",
    "level": 2
  },
  {
    "id": "what-not-to-do",
    "title": "What NOT to do",
    "level": 1
  },
  {
    "id": "additional-rules-for-ai-agents",
    "title": "Additional rules for AI agents",
    "level": 1
  },
  {
    "id": "how-to-generate-a-master-password",
    "title": "How to generate a master password",
    "level": 1
  },
  {
    "id": "how-the-master-password-is-preserved-locally",
    "title": "How the master password is preserved locally",
    "level": 1
  },
  {
    "id": "how-to-remove-the-master-password-from-the-worker",
    "title": "How to remove the master password from the worker",
    "level": 1
  }
];

}

    