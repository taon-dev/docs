import { ChangeDetectionStrategy, Component, signal, Input, ViewChild } from '@angular/core';
import { Taon, TaonTsDocsApiComponent, TaonTsDocsGraph } from 'taon/src';
import { Translation, TranslateDirective } from '@taon-dev/i18n/src';

const t = Translation.for(Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP);

@Component({
  selector: 'api-docs-taon-dev-session',
  template: `
  @if (graph(); as graph) {
    <taon-ts-docs-api [graph]="graph" [showSearch]="true" [queryParamNavigation]="true" />
  } @else {
    <div class="p-4" translate>Loading API documentation for @taon-dev/session...</div>
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TaonTsDocsApiComponent, TranslateDirective],
})
export class TaonDevSessionComponent {
  t= t.for(this);
  readonly graph = signal<TaonTsDocsGraph | null>(null);

  async ngOnInit(): Promise<void> {
    const pathInAssets = Taon.asset('/src/assets/shared/generated-docs-from-md-files/@taon-dev/session/api-graph.json');

    const response = await fetch(pathInAssets);

    if (!response.ok) {
      throw new Error('Failed to load API documentation');
    }

    this.graph.set(await response.json());
  }
}
        