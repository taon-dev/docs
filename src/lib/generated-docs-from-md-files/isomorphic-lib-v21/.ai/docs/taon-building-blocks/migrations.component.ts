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
  selector: 'app-my-docs-page-migrations-md',
  templateUrl: './migrations.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiDocsTaonBuildingBlocksMigrationsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "                  DATABASE SCHEMA CHANGE\n                            │\n                            ▼\n                    CREATE MIGRATION\n                            │\n                            ▼\n                    IMPLEMENT up()\n                    IMPLEMENT down()\n                            │\n                            ▼\n                     REVIEW & ENABLE\n                            │\n                            ▼\n                     RUN MIGRATIONS\n                            │\n                ┌───────────┴───────────┐\n                │                       │\n                ▼                       ▼\n          NODE.JS BACKEND          WEBSQL BACKEND\n                │                       │\n                ▼                       ▼\n           SQL DATABASE          BROWSER DATABASE\n",
// @taonSkipNextLineCut
codeblock0Html: "                  DATABASE SCHEMA CHANGE\n                            │\n                            ▼\n                    CREATE MIGRATION\n                            │\n                            ▼\n                    IMPLEMENT up()\n                    IMPLEMENT down()\n                            │\n                            ▼\n                     REVIEW &amp; ENABLE\n                            │\n                            ▼\n                     RUN MIGRATIONS\n                            │\n                ┌───────────┴───────────┐\n                │                       │\n                ▼                       ▼\n          NODE.JS BACKEND          WEBSQL BACKEND\n                │                       │\n                ▼                       ▼\n           SQL DATABASE          BROWSER DATABASE\n",
// @taonSkipNextLineCut
codeblock1: "taon migration\n",
// @taonSkipNextLineCut
codeblock1Html: "taon migration\n",
// @taonSkipNextLineCut
codeblock2: "taon m\n",
// @taonSkipNextLineCut
codeblock2Html: "taon m\n",
// @taonSkipNextLineCut
codeblock3: "taon migration:create my-new-migration\n",
// @taonSkipNextLineCut
codeblock3Html: "taon migration:create my-new-migration\n",
// @taonSkipNextLineCut
codeblock4: "taon mc my-new-migration\n",
// @taonSkipNextLineCut
codeblock4Html: "taon mc my-new-migration\n",
// @taonSkipNextLineCut
codeblock5: "src/lib/migrations/\n",
// @taonSkipNextLineCut
codeblock5Html: "src/lib/migrations/\n",
// @taonSkipNextLineCut
codeblock6: "src/\n└── lib/\n    └── migrations/\n        ├── MainContext_1735315075962_firstMigration.ts\n        ├── AdminContext_1735315075962_firstMigration.ts\n        └── ReportingContext_1735315075962_firstMigration.ts\n",
// @taonSkipNextLineCut
codeblock6Html: "src/\n└── lib/\n    └── migrations/\n        ├── MainContext_1735315075962_firstMigration.ts\n        ├── AdminContext_1735315075962_firstMigration.ts\n        └── ReportingContext_1735315075962_firstMigration.ts\n",
// @taonSkipNextLineCut
codeblock7: "isReadyToRun(): boolean {\n  return false;\n}\n",
// @taonSkipNextLineCut
codeblock7Html: "isReadyToRun(): <span class=\"hljs-built_in\">boolean</span> {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>;\n}\n",
// @taonSkipNextLineCut
codeblock8: "isReadyToRun(): boolean {\n  return true;\n}\n",
// @taonSkipNextLineCut
codeblock8Html: "isReadyToRun(): <span class=\"hljs-built_in\">boolean</span> {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n}\n",
// @taonSkipNextLineCut
codeblock9: "TaonBaseMigration",
// @taonSkipNextLineCut
codeblock10: "QueryRunner",
// @taonSkipNextLineCut
codeblock11: "up()",
// @taonSkipNextLineCut
codeblock12: "down()",
// @taonSkipNextLineCut
codeblock13: "QueryRunner",
// @taonSkipNextLineCut
codeblock14: "@TaonMigration({\n  className: 'MainContext_1735315075962_firstMigration',\n})\nexport class MainContext_1735315075962_firstMigration extends TaonBaseMigration {\n  anyTaonRepository = this.inject(AnyTaonRepository);\n\n  isReadyToRun(): boolean {\n    return true;\n  }\n\n  async up(queryRunner: QueryRunner): Promise<void> {\n    await queryRunner.addColumn(\n      'users',\n      new TableColumn({\n        name: 'displayName',\n        type: 'varchar',\n        isNullable: true,\n      }),\n    );\n  }\n\n  async down(queryRunner: QueryRunner): Promise<void> {\n    await queryRunner.dropColumn('users', 'displayName');\n  }\n}\n",
// @taonSkipNextLineCut
codeblock14Html: "<span class=\"hljs-meta\">@TaonMigration</span>({\n  <span class=\"hljs-attr\">className</span>: <span class=\"hljs-string\">&#x27;MainContext_1735315075962_firstMigration&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MainContext_1735315075962_firstMigration</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">TaonBaseMigration</span> </span>{\n  anyTaonRepository = <span class=\"hljs-built_in\">this</span>.inject(AnyTaonRepository);\n\n  isReadyToRun(): <span class=\"hljs-built_in\">boolean</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n  }\n\n  <span class=\"hljs-keyword\">async</span> up(queryRunner: QueryRunner): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; {\n    <span class=\"hljs-keyword\">await</span> queryRunner.addColumn(\n      <span class=\"hljs-string\">&#x27;users&#x27;</span>,\n      <span class=\"hljs-keyword\">new</span> TableColumn({\n        <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;displayName&#x27;</span>,\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#x27;varchar&#x27;</span>,\n        <span class=\"hljs-attr\">isNullable</span>: <span class=\"hljs-literal\">true</span>,\n      }),\n    );\n  }\n\n  <span class=\"hljs-keyword\">async</span> down(queryRunner: QueryRunner): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">void</span>&gt; {\n    <span class=\"hljs-keyword\">await</span> queryRunner.dropColumn(<span class=\"hljs-string\">&#x27;users&#x27;</span>, <span class=\"hljs-string\">&#x27;displayName&#x27;</span>);\n  }\n}\n",
// @taonSkipNextLineCut
codeblock15: "this.inject()",
// @taonSkipNextLineCut
codeblock16: "userRepository = this.inject(UserRepository);\n",
// @taonSkipNextLineCut
codeblock16Html: "userRepository = <span class=\"hljs-built_in\">this</span>.inject(UserRepository);\n",
// @taonSkipNextLineCut
codeblock17: "QueryRunner",
// @taonSkipNextLineCut
codeblock18: "BEGIN TRANSACTION\n        │\n        ▼\n   EXECUTE up()\n        │\n    ┌───┴───┐\n    │       │\n SUCCESS   ERROR\n    │       │\n    ▼       ▼\n COMMIT   ROLLBACK\n",
// @taonSkipNextLineCut
codeblock18Html: "BEGIN TRANSACTION\n        │\n        ▼\n   EXECUTE up()\n        │\n    ┌───┴───┐\n    │       │\n SUCCESS   ERROR\n    │       │\n    ▼       ▼\n COMMIT   ROLLBACK\n",
// @taonSkipNextLineCut
codeblock19: "taon release",
// @taonSkipNextLineCut
codeblock20: "taon migration:run\n",
// @taonSkipNextLineCut
codeblock20Html: "taon migration:run\n",
// @taonSkipNextLineCut
codeblock21: "taon mr\n",
// @taonSkipNextLineCut
codeblock21Html: "taon mr\n",
// @taonSkipNextLineCut
codeblock22: "MainContext_1735315075962_firstMigration\n",
// @taonSkipNextLineCut
codeblock22Html: "MainContext_1735315075962_firstMigration\n",
// @taonSkipNextLineCut
codeblock23: "taon migration:revert 1735315075962\n",
// @taonSkipNextLineCut
codeblock23Html: "taon migration:revert 1735315075962\n",
// @taonSkipNextLineCut
codeblock24: "down()",
// @taonSkipNextLineCut
codeblock25: "DBRecreateMode",
// @taonSkipNextLineCut
codeblock26: "export enum DBRecreateMode {\n  DROP_DB__RUN_MIGRATIONS = 'DROP_DB__RUN_MIGRATIONS',\n  PRESERVE_DATA__RUN_MIGRATIONS = 'PRESERVE_DATA__RUN_MIGRATIONS',\n}\n",
// @taonSkipNextLineCut
codeblock26Html: "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-built_in\">enum</span> DBRecreateMode {\n  DROP_DB__RUN_MIGRATIONS = <span class=\"hljs-string\">&#x27;DROP_DB__RUN_MIGRATIONS&#x27;</span>,\n  PRESERVE_DATA__RUN_MIGRATIONS = <span class=\"hljs-string\">&#x27;PRESERVE_DATA__RUN_MIGRATIONS&#x27;</span>,\n}\n",
// @taonSkipNextLineCut
codeblock27: "taon/src",
// @taonSkipNextLineCut
codeblock28: "DROP_DB__RUN_MIGRATIONS",
// @taonSkipNextLineCut
codeblock29: "PRESERVE_DATA__RUN_MIGRATIONS",
// @taonSkipNextLineCut
codeblock30: "DROP_DB__RUN_MIGRATIONS",
// @taonSkipNextLineCut
codeblock31: "PRESERVE_DATA__RUN_MIGRATIONS",
// @taonSkipNextLineCut
codeblock32: "                  COMPANY CONTAINER\n                         │\n             ┌───────────┴───────────┐\n             │                       │\n             ▼                       ▼\n       AUTH APP-LIB             CUSTOMER APP-LIB\n             │                       │\n       Auth Entities           Customer Entities\n       Auth Repositories       Customer Repositories\n       Auth Migrations         Customer Migrations\n             │                       │\n             └───────────┬───────────┘\n                         │\n                         ▼\n                  MAIN APPLICATION\n                         │\n                         ▼\n                  TAON CONTEXTS\n                         │\n                         ▼\n                    DATABASES\n",
// @taonSkipNextLineCut
codeblock32Html: "                  COMPANY CONTAINER\n                         │\n             ┌───────────┴───────────┐\n             │                       │\n             ▼                       ▼\n       AUTH APP-LIB             CUSTOMER APP-LIB\n             │                       │\n       Auth Entities           Customer Entities\n       Auth Repositories       Customer Repositories\n       Auth Migrations         Customer Migrations\n             │                       │\n             └───────────┬───────────┘\n                         │\n                         ▼\n                  MAIN APPLICATION\n                         │\n                         ▼\n                  TAON CONTEXTS\n                         │\n                         ▼\n                    DATABASES\n",
// @taonSkipNextLineCut
codeblock33: "DROP_DB__RUN_MIGRATIONS",
// @taonSkipNextLineCut
codeblock34: "@taon-dev/sudo",
// @taonSkipNextLineCut
codeblock35: "down()",
// @taonSkipNextLineCut
codeblock36: "                  DEVELOPMENT DATABASE\n                           │\n                           ▼\n                  EXPORT DATA SNAPSHOT\n                           │\n                           ▼\n                    MODIFY ENTITIES\n                           │\n                           ▼\n                  RECREATE DATABASE\n                           │\n                           ▼\n                  RESTORE DATA SNAPSHOT\n                           │\n                           ▼\n                   CONTINUE DEVELOPMENT\n",
// @taonSkipNextLineCut
codeblock36Html: "                  DEVELOPMENT DATABASE\n                           │\n                           ▼\n                  EXPORT DATA SNAPSHOT\n                           │\n                           ▼\n                    MODIFY ENTITIES\n                           │\n                           ▼\n                  RECREATE DATABASE\n                           │\n                           ▼\n                  RESTORE DATA SNAPSHOT\n                           │\n                           ▼\n                   CONTINUE DEVELOPMENT\n",
// @taonSkipNextLineCut
codeblock37: "taon migration",
// @taonSkipNextLineCut
codeblock38: "taon m",
// @taonSkipNextLineCut
codeblock39: "taon migration:create",
// @taonSkipNextLineCut
codeblock40: "taon mc",
// @taonSkipNextLineCut
codeblock41: "taon migration:run",
// @taonSkipNextLineCut
codeblock42: "taon mr",
// @taonSkipNextLineCut
codeblock43: "taon migration:revert <timestamp>",
// @taonSkipNextLineCut
codeblock44: "taon migration:create my-new-migration\ntaon mc my-new-migration\n",
// @taonSkipNextLineCut
codeblock44Html: "taon migration:create my-new-migration\ntaon mc my-new-migration\n",
// @taonSkipNextLineCut
codeblock45: "taon migration:run\ntaon mr\n",
// @taonSkipNextLineCut
codeblock45Html: "taon migration:run\ntaon mr\n",
// @taonSkipNextLineCut
codeblock46: "taon migration:revert 1794523651172\n",
// @taonSkipNextLineCut
codeblock46Html: "taon migration:revert 1794523651172\n",
// @taonSkipNextLineCut
codeblock47: "taon migration\ntaon m\n",
// @taonSkipNextLineCut
codeblock47Html: "taon migration\ntaon m\n",
// @taonSkipNextLineCut
codeblock48: "isReadyToRun()",
// @taonSkipNextLineCut
codeblock49: "false",
// @taonSkipNextLineCut
codeblock50: "up()",
// @taonSkipNextLineCut
codeblock51: "down()",
// @taonSkipNextLineCut
codeblock52: "QueryRunner"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-migrations",
    "title": "Taon Migrations",
    "level": 1
  },
  {
    "id": "1-migration-workflow",
    "title": "1. Migration Workflow",
    "level": 2
  },
  {
    "id": "2-interactive-migration-menu",
    "title": "2. Interactive Migration Menu",
    "level": 2
  },
  {
    "id": "3-creating-migrations",
    "title": "3. Creating Migrations",
    "level": 2
  },
  {
    "id": "example-generated-structure",
    "title": "Example Generated Structure",
    "level": 3
  },
  {
    "id": "migration-safety",
    "title": "Migration Safety",
    "level": 3
  },
  {
    "id": "4-writing-migrations",
    "title": "4. Writing Migrations",
    "level": 2
  },
  {
    "id": "example-migration",
    "title": "Example Migration",
    "level": 3
  },
  {
    "id": "injecting-taon-repositories",
    "title": "Injecting Taon Repositories",
    "level": 3
  },
  {
    "id": "transactions",
    "title": "Transactions",
    "level": 3
  },
  {
    "id": "5-running-migrations",
    "title": "5. Running Migrations",
    "level": 2
  },
  {
    "id": "6-reverting-migrations",
    "title": "6. Reverting Migrations",
    "level": 2
  },
  {
    "id": "7-database-recreation-modes",
    "title": "7. Database Recreation Modes",
    "level": 2
  },
  {
    "id": "available-modes",
    "title": "Available Modes",
    "level": 3
  },
  {
    "id": "behavior-comparison",
    "title": "Behavior Comparison",
    "level": 3
  },
  {
    "id": "development-mode-recreate-database",
    "title": "Development Mode — Recreate Database",
    "level": 3
  },
  {
    "id": "persistent-mode-preserve-data",
    "title": "Persistent Mode — Preserve Data",
    "level": 3
  },
  {
    "id": "8-sharing-migrations-between-projects",
    "title": "8. Sharing Migrations Between Projects",
    "level": 2
  },
  {
    "id": "9-raw-migrations-and-database-snapshots",
    "title": "9. Raw Migrations and Database Snapshots",
    "level": 2
  },
  {
    "id": "schema-migrations-vs-raw-data-snapshots",
    "title": "Schema Migrations vs. Raw Data Snapshots",
    "level": 3
  },
  {
    "id": "example-development-workflow",
    "title": "Example Development Workflow",
    "level": 3
  },
  {
    "id": "10-cli-command-reference",
    "title": "10. CLI Command Reference",
    "level": 2
  },
  {
    "id": "create",
    "title": "Create",
    "level": 3
  },
  {
    "id": "run",
    "title": "Run",
    "level": 3
  },
  {
    "id": "revert",
    "title": "Revert",
    "level": 3
  },
  {
    "id": "interactive-menu",
    "title": "Interactive Menu",
    "level": 3
  },
  {
    "id": "11-recommended-practices",
    "title": "11. Recommended Practices",
    "level": 2
  },
  {
    "id": "summary",
    "title": "Summary",
    "level": 2
  }
];

}

    