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
  selector: 'app-my-docs-page-apply-translations-md',
  templateUrl: './apply-translations.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsUsefullPromptsApplyTranslationsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "/src",
// @taonSkipNextLineCut
codeblock1: "/src",
// @taonSkipNextLineCut
codeblock2: "/src",
// @taonSkipNextLineCut
codeblock3: "label = 'Save';\ntitle = 'Edit user';\ntooltip = 'Delete this item';\nmessage = 'Operation completed successfully';\n",
// @taonSkipNextLineCut
codeblock3Html: "label = <span class=\"hljs-string\">&#x27;Save&#x27;</span>;\ntitle = <span class=\"hljs-string\">&#x27;Edit user&#x27;</span>;\ntooltip = <span class=\"hljs-string\">&#x27;Delete this item&#x27;</span>;\nmessage = <span class=\"hljs-string\">&#x27;Operation completed successfully&#x27;</span>;\n",
// @taonSkipNextLineCut
codeblock4: "<button>Save</button>\n<h2>Edit user</h2>\n<span>No results found</span>\n",
// @taonSkipNextLineCut
codeblock4Html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span>&gt;</span>Save<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Edit user<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>No results found<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock5: "label = this.t.signal.gettext('Save');\n",
// @taonSkipNextLineCut
codeblock5Html: "label = <span class=\"hljs-built_in\">this</span>.t.signal.gettext(<span class=\"hljs-string\">&#x27;Save&#x27;</span>);\n",
// @taonSkipNextLineCut
codeblock6: "label = this.t.gettext('Save');\n",
// @taonSkipNextLineCut
codeblock6Html: "label = <span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&#x27;Save&#x27;</span>);\n",
// @taonSkipNextLineCut
codeblock7: "label$ = source$.pipe(\n  switchMap(() => this.t.$.gettext('Save')),\n);\n",
// @taonSkipNextLineCut
codeblock7Html: "label$ = source$.pipe(\n  switchMap(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-built_in\">this</span>.t.$.gettext(<span class=\"hljs-string\">&#x27;Save&#x27;</span>)),\n);\n",
// @taonSkipNextLineCut
codeblock8: "<!-- needs TranslateDirective and \"t\" field inside component class -->\n<span translate>No results found</span>\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-comment\">&lt;!-- needs TranslateDirective and &quot;t&quot; field inside component class --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">translate</span>&gt;</span>No results found<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock9: "<!-- PREFERED WAY, needs only \"t\" field inside component class -->\n<span>{{ t.gettext('No results found') }}</span>\n",
// @taonSkipNextLineCut
codeblock9Html: "<span class=\"hljs-comment\">&lt;!-- PREFERED WAY, needs only &quot;t&quot; field inside component class --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ t.gettext(&#x27;No results found&#x27;) }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock10: "this.t.gettext('Hello') + ' ' + username;\n",
// @taonSkipNextLineCut
codeblock10Html: "<span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&#x27;Hello&#x27;</span>) + <span class=\"hljs-string\">&#x27; &#x27;</span> + username;\n",
// @taonSkipNextLineCut
codeblock11: "this.t.gettext('Hello [[ username ]]', {\n  username,\n});\n",
// @taonSkipNextLineCut
codeblock11Html: "<span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&#x27;Hello [[ username ]]&#x27;</span>, {\n  username,\n});\n",
// @taonSkipNextLineCut
codeblock12: "t",
// @taonSkipNextLineCut
codeblock13: "return async (req, res, { t }) => {\n  return t.gettext('Something went wrong');\n};\n",
// @taonSkipNextLineCut
codeblock13Html: "<span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">async</span> (req, res, { t }) =&gt; {\n  <span class=\"hljs-keyword\">return</span> t.gettext(<span class=\"hljs-string\">&#x27;Something went wrong&#x27;</span>);\n};\n",
// @taonSkipNextLineCut
codeblock14: "const t = Translation.for(\n  Taon.__FILE_RELATIVE_PATH,\n  Taon.LANG_IMPORT_MAP,\n);\n",
// @taonSkipNextLineCut
codeblock14Html: "<span class=\"hljs-keyword\">const</span> t = Translation.for(\n  Taon.__FILE_RELATIVE_PATH,\n  Taon.LANG_IMPORT_MAP,\n);\n",
// @taonSkipNextLineCut
codeblock15: "t",
// @taonSkipNextLineCut
codeblock16: "(req, res, { t })\n",
// @taonSkipNextLineCut
codeblock16Html: "(req, res, { t })\n",
// @taonSkipNextLineCut
codeblock17: "t.signal\nt.$\n",
// @taonSkipNextLineCut
codeblock17Html: "t.signal\nt.$\n",
// @taonSkipNextLineCut
codeblock18: "'GET'\n'POST'\n'/api/users'\n'userId'\n'accessToken'\n'profile-picture'\n'WINDOW'\n'admin'\n'localhost'\n",
// @taonSkipNextLineCut
codeblock18Html: "<span class=\"hljs-string\">&#x27;GET&#x27;</span>\n<span class=\"hljs-string\">&#x27;POST&#x27;</span>\n<span class=\"hljs-string\">&#x27;/api/users&#x27;</span>\n<span class=\"hljs-string\">&#x27;userId&#x27;</span>\n<span class=\"hljs-string\">&#x27;accessToken&#x27;</span>\n<span class=\"hljs-string\">&#x27;profile-picture&#x27;</span>\n<span class=\"hljs-string\">&#x27;WINDOW&#x27;</span>\n<span class=\"hljs-string\">&#x27;admin&#x27;</span>\n<span class=\"hljs-string\">&#x27;localhost&#x27;</span>\n",
// @taonSkipNextLineCut
codeblock19: "<mat-icon>delete</mat-icon>\n",
// @taonSkipNextLineCut
codeblock19Html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">mat-icon</span>&gt;</span>delete<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">mat-icon</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock20: "delete",
// @taonSkipNextLineCut
codeblock21: "path: 'users'\n",
// @taonSkipNextLineCut
codeblock21Html: "path: <span class=\"hljs-string\">&#x27;users&#x27;</span>\n",
// @taonSkipNextLineCut
codeblock22: "menuItem: 'Users'\n",
// @taonSkipNextLineCut
codeblock22Html: "menuItem: <span class=\"hljs-string\">&#x27;Users&#x27;</span>\n",
// @taonSkipNextLineCut
codeblock23: "/src",
// @taonSkipNextLineCut
codeblock24: "package.json",
// @taonSkipNextLineCut
codeblock25: "taon.jsonc",
// @taonSkipNextLineCut
codeblock26: "*.spec.ts",
// @taonSkipNextLineCut
codeblock27: "*.test.ts",
// @taonSkipNextLineCut
codeblock28: "const t = Translation.for(...);\n",
// @taonSkipNextLineCut
codeblock28Html: "<span class=\"hljs-keyword\">const</span> t = Translation.for(...);\n",
// @taonSkipNextLineCut
codeblock29: "t = t.for(this);\n",
// @taonSkipNextLineCut
codeblock29Html: "t = t.for(<span class=\"hljs-built_in\">this</span>);\n",
// @taonSkipNextLineCut
codeblock30: "/src",
// @taonSkipNextLineCut
codeblock31: "[[ parameter ]]",
// @taonSkipNextLineCut
codeblock32: "/src"
  };

  headings: DocsHeading[] = [
  {
    "id": "apply-internationalization-to-the-entire-project",
    "title": "Apply Internationalization to the Entire Project",
    "level": 1
  },
  {
    "id": "goal",
    "title": "Goal",
    "level": 2
  },
  {
    "id": "frontend",
    "title": "Frontend",
    "level": 2
  },
  {
    "id": "choose-the-correct-api",
    "title": "Choose the correct API",
    "level": 3
  },
  {
    "id": "translation-parameters",
    "title": "Translation parameters",
    "level": 3
  },
  {
    "id": "backend",
    "title": "Backend",
    "level": 2
  },
  {
    "id": "what-not-to-translate",
    "title": "What NOT to translate",
    "level": 2
  },
  {
    "id": "preserve-behavior",
    "title": "Preserve behavior",
    "level": 2
  },
  {
    "id": "scope-restrictions",
    "title": "Scope restrictions",
    "level": 2
  },
  {
    "id": "existing-translations",
    "title": "Existing translations",
    "level": 2
  },
  {
    "id": "work-systematically",
    "title": "Work systematically",
    "level": 2
  }
];

}

    