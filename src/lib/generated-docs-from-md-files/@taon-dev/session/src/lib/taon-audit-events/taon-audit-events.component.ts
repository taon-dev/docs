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
  selector: 'app-my-docs-page-taon-audit-events-md',
  templateUrl: './taon-audit-events.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevSessionSrcLibTaonAuditEventsTaonAuditEventsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "audit.log({\n  type: 'ROLE_ASSIGNED',\n  actorUserId: admin.id,\n  targetType: 'User',\n  targetId: String(user.id),\n  data: {\n    role: 'project-admin',\n  },\n});\n",
// @taonSkipNextLineCut
codeblock0Html: "audit.log({\n  <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#x27;ROLE_ASSIGNED&#x27;</span>,\n  <span class=\"hljs-attr\">actorUserId</span>: admin.id,\n  <span class=\"hljs-attr\">targetType</span>: <span class=\"hljs-string\">&#x27;User&#x27;</span>,\n  <span class=\"hljs-attr\">targetId</span>: <span class=\"hljs-built_in\">String</span>(user.id),\n  <span class=\"hljs-attr\">data</span>: {\n    <span class=\"hljs-attr\">role</span>: <span class=\"hljs-string\">&#x27;project-admin&#x27;</span>,\n  },\n});\n"
  };

  headings: DocsHeading[] = [];

}

    