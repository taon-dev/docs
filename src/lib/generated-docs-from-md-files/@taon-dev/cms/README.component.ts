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
export class TaonDevCmsReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "TaonCmsContentStorageController.list({})",
// @taonSkipNextLineCut
codeblock1: "taon-datatable",
// @taonSkipNextLineCut
codeblock2: "key",
// @taonSkipNextLineCut
codeblock3: "fileName",
// @taonSkipNextLineCut
codeblock4: "contentType",
// @taonSkipNextLineCut
codeblock5: "getPrivateUrl",
// @taonSkipNextLineCut
codeblock6: "download=true",
// @taonSkipNextLineCut
codeblock7: "toManagePosts",
// @taonSkipNextLineCut
codeblock8: "/cms/categories",
// @taonSkipNextLineCut
codeblock9: "/cms/tags",
// @taonSkipNextLineCut
codeblock10: "taon-datatable",
// @taonSkipNextLineCut
codeblock11: "TaonCmsCategoryController.getAll/saveCategory/deleteCategory",
// @taonSkipNextLineCut
codeblock12: "TaonCmsTagController.getAll/saveTag/deleteTag",
// @taonSkipNextLineCut
codeblock13: "toManagePosts",
// @taonSkipNextLineCut
codeblock14: "categoryId",
// @taonSkipNextLineCut
codeblock15: "tagIds",
// @taonSkipNextLineCut
codeblock16: "TaonCmsContentTagEntity",
// @taonSkipNextLineCut
codeblock17: "listTagIds",
// @taonSkipNextLineCut
codeblock18: "TaonCmsContentStorageController",
// @taonSkipNextLineCut
codeblock19: "thumbnailKey",
// @taonSkipNextLineCut
codeblock20: "File",
// @taonSkipNextLineCut
codeblock21: "file.arrayBuffer()",
// @taonSkipNextLineCut
codeblock22: "cms-placeholder:<post-type>",
// @taonSkipNextLineCut
codeblock23: "CmsContext_1793043000000_postThumbnails",
// @taonSkipNextLineCut
codeblock24: "thumbnailKey",
// @taonSkipNextLineCut
codeblock25: "npx --no-install vitest run src/tests/taon-cms-thumbnail.spec.ts src/tests/taon-cms-taxonomy.spec.ts src/tests/taon-cms-post.spec.ts\n",
// @taonSkipNextLineCut
codeblock25Html: "npx --no-install vitest run src/tests/taon-cms-thumbnail.spec.ts src/tests/taon-cms-taxonomy.spec.ts src/tests/taon-cms-post.spec.ts\n",
// @taonSkipNextLineCut
codeblock26: "/cms/courses",
// @taonSkipNextLineCut
codeblock27: "toManagePosts",
// @taonSkipNextLineCut
codeblock28: "listCourses",
// @taonSkipNextLineCut
codeblock29: "expansionTemplate",
// @taonSkipNextLineCut
codeblock30: "listRelatedPosts",
// @taonSkipNextLineCut
codeblock31: "json-table",
// @taonSkipNextLineCut
codeblock32: "body",
// @taonSkipNextLineCut
codeblock33: "taon-spreadsheet-table",
// @taonSkipNextLineCut
codeblock34: "YYYY-MM-DD",
// @taonSkipNextLineCut
codeblock35: "null",
// @taonSkipNextLineCut
codeblock36: "getJsonTableBySlug",
// @taonSkipNextLineCut
codeblock37: "getPublicJsonTableBySlug",
// @taonSkipNextLineCut
codeblock38: "ngx-editor",
// @taonSkipNextLineCut
codeblock39: "body",
// @taonSkipNextLineCut
codeblock40: "resolveTemplateVariables",
// @taonSkipNextLineCut
codeblock41: "taon-cms-content/taon-cms-template-variables",
// @taonSkipNextLineCut
codeblock42: "{{frontendUrl}}",
// @taonSkipNextLineCut
codeblock43: "{{site.name}}",
// @taonSkipNextLineCut
codeblock44: "{{currentYear}}",
// @taonSkipNextLineCut
codeblock45: "{{post.title}}",
// @taonSkipNextLineCut
codeblock46: "{{post.url}}",
// @taonSkipNextLineCut
codeblock47: "{{post.id}}",
// @taonSkipNextLineCut
codeblock48: "{{post.thumbnailUrl}}",
// @taonSkipNextLineCut
codeblock49: "website.title",
// @taonSkipNextLineCut
codeblock50: "<frontend origin>/posts/<encoded slug>",
// @taonSkipNextLineCut
codeblock51: "TaonCmsPostsBackofficeComponent",
// @taonSkipNextLineCut
codeblock52: "taon-datatable",
// @taonSkipNextLineCut
codeblock53: "/cms/posts/new",
// @taonSkipNextLineCut
codeblock54: "TaonCmsPostComponent",
// @taonSkipNextLineCut
codeblock55: "add",
// @taonSkipNextLineCut
codeblock56: "/cms/posts/:id",
// @taonSkipNextLineCut
codeblock57: "getAll",
// @taonSkipNextLineCut
codeblock58: "duplicateContent",
// @taonSkipNextLineCut
codeblock59: "COPY<n>",
// @taonSkipNextLineCut
codeblock60: "-copy<n>",
// @taonSkipNextLineCut
codeblock61: "<taon-cms-post\n  [post]=\"post\"\n  mode=\"view\"\n  (changed)=\"post = $event\" />\n<taon-cms-post\n  mode=\"add\"\n  (changed)=\"onCreated($event)\" />\n<taon-cms-post\n  [post]=\"post\"\n  mode=\"view-clean\" />\n",
// @taonSkipNextLineCut
codeblock61Html: "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-cms-post</span>\n  [<span class=\"hljs-attr\">post</span>]=<span class=\"hljs-string\">&quot;post&quot;</span>\n  <span class=\"hljs-attr\">mode</span>=<span class=\"hljs-string\">&quot;view&quot;</span>\n  (<span class=\"hljs-attr\">changed</span>)=<span class=\"hljs-string\">&quot;post = $event&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-cms-post</span>\n  <span class=\"hljs-attr\">mode</span>=<span class=\"hljs-string\">&quot;add&quot;</span>\n  (<span class=\"hljs-attr\">changed</span>)=<span class=\"hljs-string\">&quot;onCreated($event)&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">taon-cms-post</span>\n  [<span class=\"hljs-attr\">post</span>]=<span class=\"hljs-string\">&quot;post&quot;</span>\n  <span class=\"hljs-attr\">mode</span>=<span class=\"hljs-string\">&quot;view-clean&quot;</span> /&gt;</span>\n",
// @taonSkipNextLineCut
codeblock62: "view",
// @taonSkipNextLineCut
codeblock63: "edit",
// @taonSkipNextLineCut
codeblock64: "add",
// @taonSkipNextLineCut
codeblock65: "view-clean",
// @taonSkipNextLineCut
codeblock66: "view-clean",
// @taonSkipNextLineCut
codeblock67: "changed",
// @taonSkipNextLineCut
codeblock68: "deleted",
// @taonSkipNextLineCut
codeblock69: "duplicated",
// @taonSkipNextLineCut
codeblock70: "cancelled",
// @taonSkipNextLineCut
codeblock71: "mode",
// @taonSkipNextLineCut
codeblock72: "TaonCmsContentType.Normal",
// @taonSkipNextLineCut
codeblock73: "Video",
// @taonSkipNextLineCut
codeblock74: "Audio",
// @taonSkipNextLineCut
codeblock75: "Attachment",
// @taonSkipNextLineCut
codeblock76: "Normal",
// @taonSkipNextLineCut
codeblock77: "TaonCmsContentStorageController",
// @taonSkipNextLineCut
codeblock78: "videoKey",
// @taonSkipNextLineCut
codeblock79: "audioKey",
// @taonSkipNextLineCut
codeblock80: "attachmentKey",
// @taonSkipNextLineCut
codeblock81: "body",
// @taonSkipNextLineCut
codeblock82: "preload=\"none\"",
// @taonSkipNextLineCut
codeblock83: "status: 'draft'",
// @taonSkipNextLineCut
codeblock84: "TaonCmsContentApiService",
// @taonSkipNextLineCut
codeblock85: "getVideoLinkBySlug",
// @taonSkipNextLineCut
codeblock86: "getPublicVideoLinkBySlug",
// @taonSkipNextLineCut
codeblock87: "getAudioLinkBySlug",
// @taonSkipNextLineCut
codeblock88: "getPublicAudioLinkBySlug",
// @taonSkipNextLineCut
codeblock89: "getAttachmentLinkBySlug",
// @taonSkipNextLineCut
codeblock90: "getPublicAttachmentLinkBySlug",
// @taonSkipNextLineCut
codeblock91: "TaonRelatedPostChooserComponent",
// @taonSkipNextLineCut
codeblock92: "taon-related-post-chooser",
// @taonSkipNextLineCut
codeblock93: "listPermissions(id)",
// @taonSkipNextLineCut
codeblock94: "getPermissionConfiguration(id)",
// @taonSkipNextLineCut
codeblock95: "applyPermissionsToRelatedPosts",
// @taonSkipNextLineCut
codeblock96: "CmsContext_1792579000000_postPermissionInheritance",
// @taonSkipNextLineCut
codeblock97: "TaonCmsRevisionChooserComponent",
// @taonSkipNextLineCut
codeblock98: "TaonCmsContentRevisionApiService.listRevisions",
// @taonSkipNextLineCut
codeblock99: "restoreContent",
// @taonSkipNextLineCut
codeblock100: "node --test src/tests/cms-posts.test.cjs",
// @taonSkipNextLineCut
codeblock101: "TaonCmsContentApiService",
// @taonSkipNextLineCut
codeblock102: "api.createContent({\n  type: TaonCmsContentType.Normal,\n  title: 'Hello',\n  slug: 'hello',\n  body: 'Post content',\n  categoryId: 1,\n  tagIds: [1, 2],\n});\napi.updateContent(id, { title: 'Updated', expectedVersion: post.version });\napi.listRevisions(id);\napi.restoreContent(id, { revisionNumber: 1, expectedVersion: post.version });\napi.deleteContent(id, post.version);\napi.listRelatedPosts(id);\napi.addRelatedPost(id, relatedPostId, post.version);\napi.deleteRelatedPost(id, relatedPostId, post.version);\n",
// @taonSkipNextLineCut
codeblock102Html: "api.createContent({\n  <span class=\"hljs-attr\">type</span>: TaonCmsContentType.Normal,\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">&#x27;Hello&#x27;</span>,\n  <span class=\"hljs-attr\">slug</span>: <span class=\"hljs-string\">&#x27;hello&#x27;</span>,\n  <span class=\"hljs-attr\">body</span>: <span class=\"hljs-string\">&#x27;Post content&#x27;</span>,\n  <span class=\"hljs-attr\">categoryId</span>: <span class=\"hljs-number\">1</span>,\n  <span class=\"hljs-attr\">tagIds</span>: [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>],\n});\napi.updateContent(id, { <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">&#x27;Updated&#x27;</span>, <span class=\"hljs-attr\">expectedVersion</span>: post.version });\napi.listRevisions(id);\napi.restoreContent(id, { <span class=\"hljs-attr\">revisionNumber</span>: <span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">expectedVersion</span>: post.version });\napi.deleteContent(id, post.version);\napi.listRelatedPosts(id);\napi.addRelatedPost(id, relatedPostId, post.version);\napi.deleteRelatedPost(id, relatedPostId, post.version);\n",
// @taonSkipNextLineCut
codeblock103: "version",
// @taonSkipNextLineCut
codeblock104: "expectedVersion",
// @taonSkipNextLineCut
codeblock105: "null",
// @taonSkipNextLineCut
codeblock106: "tagIds: []",
// @taonSkipNextLineCut
codeblock107: "TaonCmsContentType.Normal",
// @taonSkipNextLineCut
codeblock108: "null",
// @taonSkipNextLineCut
codeblock109: "relatedPostIds",
// @taonSkipNextLineCut
codeblock110: "relatedPostIds: []",
// @taonSkipNextLineCut
codeblock111: "relatedPosts",
// @taonSkipNextLineCut
codeblock112: "listRelatedPosts",
// @taonSkipNextLineCut
codeblock113: "getAll",
// @taonSkipNextLineCut
codeblock114: "snapshot",
// @taonSkipNextLineCut
codeblock115: "taon_cms_related_posts",
// @taonSkipNextLineCut
codeblock116: "TaonCmsContentEntity",
// @taonSkipNextLineCut
codeblock117: "videoKey",
// @taonSkipNextLineCut
codeblock118: "audioKey",
// @taonSkipNextLineCut
codeblock119: "attachmentKey",
// @taonSkipNextLineCut
codeblock120: "normal",
// @taonSkipNextLineCut
codeblock121: "article",
// @taonSkipNextLineCut
codeblock122: "normal",
// @taonSkipNextLineCut
codeblock123: "file",
// @taonSkipNextLineCut
codeblock124: "attachment"
  };

  headings: DocsHeading[] = [
  {
    "id": "cms",
    "title": "cms",
    "level": 1
  },
  {
    "id": "assets-ui",
    "title": "Assets UI",
    "level": 2
  },
  {
    "id": "categories-and-tags",
    "title": "Categories and Tags",
    "level": 2
  },
  {
    "id": "post-thumbnails",
    "title": "Post thumbnails",
    "level": 2
  },
  {
    "id": "courses-ui",
    "title": "Courses UI",
    "level": 2
  },
  {
    "id": "posts-ui",
    "title": "Posts UI",
    "level": 2
  },
  {
    "id": "json-table-posts",
    "title": "JSON Table posts",
    "level": 3
  },
  {
    "id": "content-editing-and-template-variables",
    "title": "Content editing and template variables",
    "level": 3
  },
  {
    "id": "content-api",
    "title": "Content API",
    "level": 2
  }
];

}

    