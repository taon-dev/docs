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
export class TaonDevECommerceReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "taon-cart-button",
// @taonSkipNextLineCut
codeblock1: "STRIPE_SECRET_KEY",
// @taonSkipNextLineCut
codeblock2: "STRIPE_WEBHOOK_KEY",
// @taonSkipNextLineCut
codeblock3: "checkout.session.completed",
// @taonSkipNextLineCut
codeblock4: "checkout.session.expired",
// @taonSkipNextLineCut
codeblock5: "checkout.session.async_payment_succeeded",
// @taonSkipNextLineCut
codeblock6: "checkout.session.async_payment_failed",
// @taonSkipNextLineCut
codeblock7: "customer.subscription.created",
// @taonSkipNextLineCut
codeblock8: "customer.subscription.updated",
// @taonSkipNextLineCut
codeblock9: "customer.subscription.deleted",
// @taonSkipNextLineCut
codeblock10: "invoice.paid",
// @taonSkipNextLineCut
codeblock11: "invoice.payment_failed",
// @taonSkipNextLineCut
codeblock12: "charge.refunded",
// @taonSkipNextLineCut
codeblock13: "charge.dispute.closed",
// @taonSkipNextLineCut
codeblock14: "invoice.payment_succeeded",
// @taonSkipNextLineCut
codeblock15: "cancel_url",
// @taonSkipNextLineCut
codeblock16: "past_due",
// @taonSkipNextLineCut
codeblock17: "purchaseEligibility: { canAdd, reason }",
// @taonSkipNextLineCut
codeblock18: "node --test src/tests/e-commerce-lifecycle.test.cjs\n",
// @taonSkipNextLineCut
codeblock18Html: "node --<span class=\"hljs-built_in\">test</span> src/tests/e-commerce-lifecycle.test.cjs\n",
// @taonSkipNextLineCut
codeblock19: "TaonCourseComponent",
// @taonSkipNextLineCut
codeblock20: "TaonCourseTabsComponent",
// @taonSkipNextLineCut
codeblock21: "<taon-course-tabs>\n  <taon-course\n    publicCoursePostSlug=\"bachatap1public\"\n    privateCoursePostSlug=\"bachatap1private\"\n    [context]=\"context\" />\n  <taon-course\n    publicCoursePostSlug=\"bachatap2public\"\n    privateCoursePostSlug=\"bachatap2private\"\n    [context]=\"context\" />\n</taon-course-tabs>\n",
// @taonSkipNextLineCut
codeblock21Html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-course-tabs</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-course</span>\n    <span class=\"hljs-attr\">publicCoursePostSlug</span>=<span class=\"hljs-string\">&quot;bachatap1public&quot;</span>\n    <span class=\"hljs-attr\">privateCoursePostSlug</span>=<span class=\"hljs-string\">&quot;bachatap1private&quot;</span>\n    [<span class=\"hljs-attr\">context</span>]=<span class=\"hljs-string\">&quot;context&quot;</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-course</span>\n    <span class=\"hljs-attr\">publicCoursePostSlug</span>=<span class=\"hljs-string\">&quot;bachatap2public&quot;</span>\n    <span class=\"hljs-attr\">privateCoursePostSlug</span>=<span class=\"hljs-string\">&quot;bachatap2private&quot;</span>\n    [<span class=\"hljs-attr\">context</span>]=<span class=\"hljs-string\">&quot;context&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">taon-course-tabs</span>&gt;</span>\n",
// @taonSkipNextLineCut
codeblock22: "taon-course",
// @taonSkipNextLineCut
codeblock23: "context",
// @taonSkipNextLineCut
codeblock24: "refreshContext()",
// @taonSkipNextLineCut
codeblock25: "TaonAuthContextRepository",
// @taonSkipNextLineCut
codeblock26: "TaonCourseController",
// @taonSkipNextLineCut
codeblock27: "TaonECommerceAbstractContext",
// @taonSkipNextLineCut
codeblock28: "preload=\"none\""
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-dev-e-commerce",
    "title": "@taon-dev/e-commerce",
    "level": 1
  },
  {
    "id": "checkout-and-stripe-lifecycle",
    "title": "Checkout and Stripe lifecycle",
    "level": 2
  },
  {
    "id": "product-presentation-and-eligibility",
    "title": "Product presentation and eligibility",
    "level": 2
  },
  {
    "id": "regression-tests",
    "title": "Regression tests",
    "level": 2
  },
  {
    "id": "courses-from-cms-posts",
    "title": "Courses from CMS posts",
    "level": 2
  }
];

}

    