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
  selector: 'app-my-docs-page-e-commerce-md',
  templateUrl: './e-commerce.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class IsomorphicLibV21DocsTaonAdminECommerceMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "@taon-dev/e-commerce",
// @taonSkipNextLineCut
codeblock1: "TaonECommerceAbstractContext",
// @taonSkipNextLineCut
codeblock2: "TaonECommerceBackofficeRoutes",
// @taonSkipNextLineCut
codeblock3: "TaonCartButtonComponent",
// @taonSkipNextLineCut
codeblock4: "TaonCartConfig",
// @taonSkipNextLineCut
codeblock5: "import { Component } from '@angular/core';\nimport {\n  TaonCartButtonComponent,\n  TaonCartConfig,\n} from '@taon-dev/e-commerce/src';\n\n@Component({\n  imports: [TaonCartButtonComponent],\n  template: '<taon-cart-button [config]=\"cartConfig\" />',\n})\nexport class StoreHeaderComponent {\n  cartConfig: TaonCartConfig = {};\n}\n",
// @taonSkipNextLineCut
codeblock5Html: "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@angular/core&#x27;</span>;\n<span class=\"hljs-keyword\">import</span> {\n  TaonCartButtonComponent,\n  TaonCartConfig,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;@taon-dev/e-commerce/src&#x27;</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  <span class=\"hljs-attr\">imports</span>: [TaonCartButtonComponent],\n  <span class=\"hljs-attr\">template</span>: <span class=\"hljs-string\">&#x27;&lt;taon-cart-button [config]=&quot;cartConfig&quot; /&gt;&#x27;</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">StoreHeaderComponent</span> </span>{\n  <span class=\"hljs-attr\">cartConfig</span>: TaonCartConfig = {};\n}\n",
// @taonSkipNextLineCut
codeblock6: "config",
// @taonSkipNextLineCut
codeblock7: "TaonCartConfig",
// @taonSkipNextLineCut
codeblock8: "TaonECommerceCartProvider",
// @taonSkipNextLineCut
codeblock9: "STRIPE_SECRET_KEY",
// @taonSkipNextLineCut
codeblock10: "STRIPE_WEBHOOK_KEY",
// @taonSkipNextLineCut
codeblock11: "toManagerEcommerce"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-e-commerce",
    "title": "Taon E-commerce",
    "level": 1
  },
  {
    "id": "add-and-configure",
    "title": "Add and configure",
    "level": 2
  },
  {
    "id": "use-products-cart-and-courses",
    "title": "Use products, cart, and courses",
    "level": 2
  },
  {
    "id": "permissions-and-runtime",
    "title": "Permissions and runtime",
    "level": 2
  }
];

}

    