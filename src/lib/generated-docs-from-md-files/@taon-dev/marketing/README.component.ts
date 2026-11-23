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
export class TaonDevMarketingReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "TaonMarketingAbstractContext",
// @taonSkipNextLineCut
codeblock1: "TaonMarketingBackofficeRoutes",
// @taonSkipNextLineCut
codeblock2: "TaonMarketingPopupEntity",
// @taonSkipNextLineCut
codeblock3: "createTable: true",
// @taonSkipNextLineCut
codeblock4: "MarketingContext_1791659700000_popup_configuration",
// @taonSkipNextLineCut
codeblock5: "getActivePopups",
// @taonSkipNextLineCut
codeblock6: "TaonMarketingPopupsComponent",
// @taonSkipNextLineCut
codeblock7: "@taon-dev/marketing/src",
// @taonSkipNextLineCut
codeblock8: "<taon-marketing-popups\n  [resolveImage]=\"resolveMarketingImage\"\n  (popupEvent)=\"onPopupEvent($event)\"\n  (popupError)=\"onPopupError($event)\">\n</taon-marketing-popups>\n",
// @taonSkipNextLineCut
codeblock8Html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-marketing-popups</span>\n  [<span class=\"hljs-attr\">resolveImage</span>]=<span class=\"hljs-string\">&quot;resolveMarketingImage&quot;</span>\n  (<span class=\"hljs-attr\">popupEvent</span>)=<span class=\"hljs-string\">&quot;onPopupEvent($event)&quot;</span>\n  (<span class=\"hljs-attr\">popupError</span>)=<span class=\"hljs-string\">&quot;onPopupError($event)&quot;</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">taon-marketing-popups</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock9: "*",
// @taonSkipNextLineCut
codeblock10: "/shop/*",
// @taonSkipNextLineCut
codeblock11: "popupEvent",
// @taonSkipNextLineCut
codeblock12: "popup-impression",
// @taonSkipNextLineCut
codeblock13: "popup-click",
// @taonSkipNextLineCut
codeblock14: "popup-close",
// @taonSkipNextLineCut
codeblock15: "marketing"
  };

  headings: DocsHeading[] = [
  {
    "id": "marketing",
    "title": "Marketing",
    "level": 1
  },
  {
    "id": "popup-management",
    "title": "Popup management",
    "level": 2
  },
  {
    "id": "website-rendering",
    "title": "Website rendering",
    "level": 2
  },
  {
    "id": "analytics-extension-point",
    "title": "Analytics extension point",
    "level": 2
  }
];

}

    