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
  selector: 'app-my-docs-page-file-naming-conventions-md',
  templateUrl: './file-naming-conventions.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21AiRulesFileNamingConventionsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "MyFeatureEntity",
// @taonSkipNextLineCut
codeblock1: "my-feature.entity.ts",
// @taonSkipNextLineCut
codeblock2: "MyFeatureController",
// @taonSkipNextLineCut
codeblock3: "my-feature.controller.ts",
// @taonSkipNextLineCut
codeblock4: "MyFeatureRepository",
// @taonSkipNextLineCut
codeblock5: "my-feature.repository.ts",
// @taonSkipNextLineCut
codeblock6: "MyFeatureApiService",
// @taonSkipNextLineCut
codeblock7: "my-feature.api.service.ts",
// @taonSkipNextLineCut
codeblock8: "MyFeatureConfigService",
// @taonSkipNextLineCut
codeblock9: "my-feature.config.service.ts",
// @taonSkipNextLineCut
codeblock10: "MyFeatureStateService",
// @taonSkipNextLineCut
codeblock11: "my-feature.state.service.ts",
// @taonSkipNextLineCut
codeblock12: "MyFeatureComponent",
// @taonSkipNextLineCut
codeblock13: "my-feature.component.ts",
// @taonSkipNextLineCut
codeblock14: "MyFeatureAbstractContext",
// @taonSkipNextLineCut
codeblock15: "my-feature.abstract.context.ts",
// @taonSkipNextLineCut
codeblock16: "MyFeatureActiveContext",
// @taonSkipNextLineCut
codeblock17: "my-feature.active.context.ts",
// @taonSkipNextLineCut
codeblock18: ".component",
// @taonSkipNextLineCut
codeblock19: "templateUrl",
// @taonSkipNextLineCut
codeblock20: "styleUrl",
// @taonSkipNextLineCut
codeblock21: "styleUrls",
// @taonSkipNextLineCut
codeblock22: "my-feature-backoffice/\n  my-feature-backoffice.component.ts\n  my-feature-backoffice.component.html\n  my-feature-backoffice.component.scss\n  my-feature-backoffice.state.service.ts\n",
// @taonSkipNextLineCut
codeblock22Html: "my-feature-backoffice/\n  my-feature-backoffice.component.ts\n  my-feature-backoffice.component.html\n  my-feature-backoffice.component.scss\n  my-feature-backoffice.state.service.ts\n",
// @taonSkipNextLineCut
codeblock23: "my-feature/\n  my-feature.entity.ts\n  my-feature.controller.ts\n  my-feature.repository.ts\n  my-feature-table/\n    my-feature-table.component.ts\n    my-feature-table.component.html\n    my-feature-table.component.scss\n  my-feature-row/\n    my-feature-row.component.ts\n    my-feature-row.component.html\n    my-feature-row.component.scss\n",
// @taonSkipNextLineCut
codeblock23Html: "my-feature/\n  my-feature.entity.ts\n  my-feature.controller.ts\n  my-feature.repository.ts\n  my-feature-table/\n    my-feature-table.component.ts\n    my-feature-table.component.html\n    my-feature-table.component.scss\n  my-feature-row/\n    my-feature-row.component.ts\n    my-feature-row.component.html\n    my-feature-row.component.scss\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "file-naming-and-layout-conventions",
    "title": "File Naming and Layout Conventions",
    "level": 1
  },
  {
    "id": "typescript-filenames",
    "title": "TypeScript filenames",
    "level": 2
  },
  {
    "id": "angular-component-files",
    "title": "Angular component files",
    "level": 2
  },
  {
    "id": "feature-folder-layout",
    "title": "Feature folder layout",
    "level": 2
  }
];

}

    