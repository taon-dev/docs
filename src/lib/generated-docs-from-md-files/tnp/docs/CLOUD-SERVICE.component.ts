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
  selector: 'app-my-docs-page-cloud-service-md',
  templateUrl: './CLOUD-SERVICE.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpDocsCloudServiceMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "npm install -g taon\n",
// @taonSkipNextLineCut
codeblock0Html: "npm install -g taon\n",
// @taonSkipNextLineCut
codeblock1: "taon cloud:start --detach\n",
// @taonSkipNextLineCut
codeblock1Html: "taon cloud:start --detach\n",
// @taonSkipNextLineCut
codeblock2: "/etc/hosts",
// @taonSkipNextLineCut
codeblock3: "--port",
// @taonSkipNextLineCut
codeblock4: "cloudflare",
// @taonSkipNextLineCut
codeblock5: "taon.jsonc",
// @taonSkipNextLineCut
codeblock6: "taon ar cloudflare\n",
// @taonSkipNextLineCut
codeblock6Html: "taon ar cloudflare\n",
// @taonSkipNextLineCut
codeblock7: "ar",
// @taonSkipNextLineCut
codeblock8: "automatic:release"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-cloud",
    "title": "Taon Cloud",
    "level": 1
  },
  {
    "id": "taon-service",
    "title": "Taon Service",
    "level": 2
  },
  {
    "id": "how-it-works",
    "title": "How it works",
    "level": 3
  },
  {
    "id": "taon-cloud-terminal-ui",
    "title": "Taon Cloud Terminal UI",
    "level": 2
  },
  {
    "id": "taon-cloud-web-ui",
    "title": "Taon Cloud Web UI",
    "level": 2
  },
  {
    "id": "installation",
    "title": "Installation",
    "level": 3
  },
  {
    "id": "features-localhost-vs-cloud",
    "title": "Features — Localhost vs. Cloud",
    "level": 2
  },
  {
    "id": "1-enable-or-disable-cloud-infrastructure",
    "title": "1. Enable or Disable Cloud Infrastructure",
    "level": 3
  },
  {
    "id": "2-project-management",
    "title": "2. Project Management",
    "level": 3
  },
  {
    "id": "3-deployment-management",
    "title": "3. Deployment Management",
    "level": 3
  },
  {
    "id": "4-domain-management",
    "title": "4. Domain Management",
    "level": 3
  },
  {
    "id": "5-automatic-port-management",
    "title": "5. Automatic Port Management",
    "level": 3
  },
  {
    "id": "6-process-management-and-logs",
    "title": "6. Process Management and Logs",
    "level": 3
  },
  {
    "id": "7-taon-instance-management",
    "title": "7. Taon Instance Management",
    "level": 3
  },
  {
    "id": "8-deployment-scheduler",
    "title": "8. Deployment Scheduler",
    "level": 3
  },
  {
    "id": "9-settings-and-security",
    "title": "9. Settings and Security",
    "level": 3
  },
  {
    "id": "cloudflare-deploy-taon-to-production-today",
    "title": "Cloudflare — Deploy Taon to Production Today",
    "level": 2
  },
  {
    "id": "cloudflare-infrastructure",
    "title": "Cloudflare Infrastructure",
    "level": 3
  },
  {
    "id": "deploy-with-one-command",
    "title": "Deploy with One Command",
    "level": 3
  },
  {
    "id": "two-deployment-approaches-one-framework",
    "title": "Two Deployment Approaches, One Framework",
    "level": 2
  }
];

}

    