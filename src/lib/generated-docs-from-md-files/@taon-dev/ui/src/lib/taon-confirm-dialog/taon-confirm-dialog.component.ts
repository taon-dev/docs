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
  selector: 'app-my-docs-page-taon-confirm-dialog-md',
  templateUrl: './taon-confirm-dialog.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonDevUiSrcLibTaonConfirmDialogTaonConfirmDialogMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "dialog = inject(MatDialog);\nconst ref = this.dialog.open(TaonConfirmDialogComponent, {\n  width: '376px',\n  panelClass: 'clean-confirm-dialog',\n  data: {\n    title: this.t.gettext(\n      'Buy [[ parentProductTitle ]] for [[ productPrice ]] ?',\n      {\n        parentProductTitle: product.parentProductTitle,\n        productPrice: product.price,\n      },\n    ),\n    message: this.t.gettext(\"Video '[[ productTitle ]]' included.\", {\n      productTitle: product.productTitle,\n    }),\n    confirmText: this.t.gettext('Buy'),\n    cancelText: this.t.gettext('Cancel'),\n  },\n});\n\nref.afterClosed().subscribe(async confirmed => {\n  if (!confirmed) return;\n\n  const button = this.buyButtons.find(\n    c => c.priceId === product.stripePriceId,\n  );\n\n  await button?.buy();\n});\n\n      ```",
// @taonSkipNextLineCut
codeblock0Html: "dialog = inject(MatDialog);\n<span class=\"hljs-keyword\">const</span> ref = <span class=\"hljs-built_in\">this</span>.dialog.open(TaonConfirmDialogComponent, {\n  <span class=\"hljs-attr\">width</span>: <span class=\"hljs-string\">&#x27;376px&#x27;</span>,\n  <span class=\"hljs-attr\">panelClass</span>: <span class=\"hljs-string\">&#x27;clean-confirm-dialog&#x27;</span>,\n  <span class=\"hljs-attr\">data</span>: {\n    <span class=\"hljs-attr\">title</span>: <span class=\"hljs-built_in\">this</span>.t.gettext(\n      <span class=\"hljs-string\">&#x27;Buy [[ parentProductTitle ]] for [[ productPrice ]] ?&#x27;</span>,\n      {\n        <span class=\"hljs-attr\">parentProductTitle</span>: product.parentProductTitle,\n        <span class=\"hljs-attr\">productPrice</span>: product.price,\n      },\n    ),\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&quot;Video &#x27;[[ productTitle ]]&#x27; included.&quot;</span>, {\n      <span class=\"hljs-attr\">productTitle</span>: product.productTitle,\n    }),\n    <span class=\"hljs-attr\">confirmText</span>: <span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&#x27;Buy&#x27;</span>),\n    <span class=\"hljs-attr\">cancelText</span>: <span class=\"hljs-built_in\">this</span>.t.gettext(<span class=\"hljs-string\">&#x27;Cancel&#x27;</span>),\n  },\n});\n\nref.afterClosed().subscribe(<span class=\"hljs-keyword\">async</span> confirmed =&gt; {\n  <span class=\"hljs-keyword\">if</span> (!confirmed) <span class=\"hljs-keyword\">return</span>;\n\n  <span class=\"hljs-keyword\">const</span> button = <span class=\"hljs-built_in\">this</span>.buyButtons.find(\n    <span class=\"hljs-function\"><span class=\"hljs-params\">c</span> =&gt;</span> c.priceId === product.stripePriceId,\n  );\n\n  <span class=\"hljs-keyword\">await</span> button?.buy();\n});\n\n      <span class=\"hljs-string\">``</span><span class=\"hljs-string\">`</span>"
  };

  headings: DocsHeading[] = [];

}

    